import { useState } from "react";
import { AudioLines, Flower2 } from "lucide-react";
import { INTENTIONS, bnDigits, duaById, moodById, type IntentionId } from "@/data/catalog";
import { composeVersion, type SessionVersion } from "@/lib/compose-version";
import { reflectForPuspita } from "@/lib/bot.functions";
import { cn } from "@/lib/cn";
import { usePuspit } from "@/store/puspit";
import { usePurifier } from "@/components/puspit/provider";

function cacheKey(version: SessionVersion) {
  return `puspit-note:${version.intentionId}:${version.duaId}:${version.recipient}`;
}

export function BotPanel() {
  const [intentionId, setIntentionId] = useState<IntentionId>("for-her");
  const [recipient, setRecipient] = useState("পুষ্পিতা");
  const [note, setNote] = useState<string | null>(null);
  const [noteError, setNoteError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const versions = usePuspit((state) => state.versions);
  const rememberVersion = usePuspit((state) => state.rememberVersion);
  const bumpSpin = usePuspit((state) => state.bumpSpin);
  const setDuaId = usePuspit((state) => state.setDuaId);
  const setMoodId = usePuspit((state) => state.setMoodId);
  const setPurity = usePuspit((state) => state.setPurity);
  const setTab = usePuspit((state) => state.setTab);
  const { playWith } = usePurifier();

  const current = versions[0] ?? null;

  const compose = () => {
    const spin = bumpSpin();
    const version = composeVersion({
      intentionId,
      recipient,
      spin,
    });
    const stamped: SessionVersion = { ...version, id: `${version.intentionId}-${Date.now()}` };
    rememberVersion(stamped);
    setNote(null);
    setNoteError(null);
    const cached = localStorage.getItem(cacheKey(version));
    if (cached) setNote(cached);
  };

  const playVersion = (version: SessionVersion) => {
    const mood = moodById(version.moodId);
    setDuaId(version.duaId);
    setMoodId(version.moodId);
    setPurity(version.purity);
    setTab("purify");
    void playWith(mood.root, version.purity / 100);
  };

  const ask = async () => {
    if (!current || pending) return;
    const key = cacheKey(current);
    const cached = localStorage.getItem(key);
    if (cached) {
      setNote(cached);
      setNoteError(null);
      return;
    }
    const dua = duaById(current.duaId);
    const intention = INTENTIONS.find((item) => item.id === current.intentionId);
    setPending(true);
    setNoteError(null);
    try {
      const result = await reflectForPuspita({
        data: {
          duaTitle: dua.titleBn,
          meaningBn: dua.meaningBn,
          intentionBn: intention?.bn ?? current.intentionId,
          recipient: current.recipient,
        },
      });
      if (!result.ok) {
        setNoteError(result.error);
        return;
      }
      localStorage.setItem(key, result.text);
      setNote(result.text);
    } catch {
      setNoteError("এখন বার্তা আনা যায়নি। দোয়া ও সুর আগের মতোই আছে।");
    } finally {
      setPending(false);
    }
  };

  const shown = current;
  const dua = shown ? duaById(shown.duaId) : null;
  const mood = shown ? moodById(shown.moodId) : null;

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-2xl text-ivory">দোয়া সংস্করণ বট</h1>
        <p className="mt-1 text-sm leading-relaxed text-mist">
          বট নতুন আরবি বানায় না। সে একটা আসর সাজায় — দোয়া, বার, সুর। নরম কথা চাইলে তখনই xAI ডাকে, আগে নয়।
        </p>
      </div>

      <label className="block text-sm text-mist">
        কার জন্য
        <input
          className="mt-1"
          type="text"
          value={recipient}
          maxLength={40}
          aria-label="কার জন্য"
          onChange={(event) => setRecipient(event.target.value)}
        />
      </label>

      <div className="flex flex-wrap gap-2">
        {INTENTIONS.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={intentionId === item.id}
            onClick={() => setIntentionId(item.id)}
            className={cn(
              "min-h-11 rounded-full border px-3 text-sm",
              intentionId === item.id ? "border-gold bg-gold text-ink" : "border-line bg-panel text-ivory",
            )}
          >
            {item.bn}
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={compose}
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gold px-5 font-medium text-ink"
      >
        <Flower2 className="size-4" aria-hidden />
        সংস্করণ সাজান
      </button>

      {shown && dua && mood ? (
        <article className="rounded-card border border-gold/40 bg-panel px-4 py-4">
          <p className="text-xs text-gold">সংস্করণ {bnDigits(versions.length)}</p>
          <h2 className="mt-1 text-xl text-ivory">{shown.titleBn}</h2>
          <p className="mt-2 text-sm leading-relaxed text-mist">{shown.dedicationBn}</p>
          <p className="mt-3 text-sm text-ivory">
            {dua.titleBn} · {bnDigits(shown.repeats)} বার · {mood.bn} · বিশুদ্ধতা {bnDigits(shown.purity)}
          </p>
          <p lang="ar" dir="rtl" className="arabic mt-3 text-ivory">
            {dua.arabic}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ivory">{shown.paceBn}</p>
          <p className="mt-2 text-sm leading-relaxed text-mist">{shown.adabBn}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => playVersion(shown)}
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-gold px-4 text-sm font-medium text-ink"
            >
              <AudioLines className="size-4" aria-hidden />
              এই সংস্করণ শুনুন
            </button>
            <button
              type="button"
              disabled={pending}
              onClick={() => void ask()}
              className="inline-flex min-h-11 items-center rounded-full border border-line px-4 text-sm text-ivory disabled:opacity-50"
            >
              {pending ? "আসছে…" : "xAI-এর নরম কথা"}
            </button>
          </div>
          {note ? <p className="mt-4 border-t border-line pt-3 leading-relaxed text-ivory">{note}</p> : null}
          {noteError ? <p className="mt-3 text-sm text-gold">{noteError}</p> : null}
        </article>
      ) : (
        <p className="rounded-card border border-line bg-panel px-4 py-5 text-sm text-mist">
          একটা অনুভূতি বেছে সংস্করণ সাজাও। পুষ্পিতার জন্য আগে থেকেই বসানো আছে।
        </p>
      )}

      {versions.length > 1 ? (
        <section>
          <h2 className="text-sm text-mist">আগের আসর</h2>
          <ul className="mt-2 flex flex-col gap-2">
            {versions.slice(1).map((version) => (
              <li key={version.id}>
                <button
                  type="button"
                  onClick={() => playVersion(version)}
                  className="flex min-h-11 w-full items-center justify-between rounded-2xl border border-line bg-panel px-3 text-left text-sm text-ivory"
                >
                  <span>{version.titleBn}</span>
                  <span className="text-mist">{moodById(version.moodId).bn}</span>
                </button>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
