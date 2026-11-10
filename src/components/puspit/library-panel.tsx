import { useMemo, useState } from "react";
import { Heart, AudioLines } from "lucide-react";
import { CATEGORIES, DUAS, bnDigits, categoryLabel, moodById, type CategoryId } from "@/data/catalog";
import { cn } from "@/lib/cn";
import { usePuspit } from "@/store/puspit";
import { usePurifier } from "@/components/puspit/provider";

export function LibraryPanel() {
  const [category, setCategory] = useState<CategoryId>("all");
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>("for-her");
  const [lovedOnly, setLovedOnly] = useState(false);
  const favorites = usePuspit((state) => state.favorites);
  const toggleFavorite = usePuspit((state) => state.toggleFavorite);
  const setDuaId = usePuspit((state) => state.setDuaId);
  const setMoodId = usePuspit((state) => state.setMoodId);
  const setPurity = usePuspit((state) => state.setPurity);
  const setTab = usePuspit((state) => state.setTab);
  const { playWith } = usePurifier();

  const list = useMemo(() => {
    const q = query.trim();
    return DUAS.filter((dua) => {
      if (lovedOnly && !favorites.includes(dua.id)) return false;
      if (category !== "all" && dua.category !== category) return false;
      if (!q) return true;
      return `${dua.titleBn} ${dua.meaningBn} ${dua.arabic}`.includes(q);
    });
  }, [category, favorites, lovedOnly, query]);

  const purify = (duaId: string) => {
    const dua = DUAS.find((item) => item.id === duaId);
    if (!dua) return;
    const mood = moodById(dua.moodId);
    setDuaId(dua.id);
    setMoodId(mood.id);
    setPurity(dua.purity);
    setTab("purify");
    void playWith(mood.root, dua.purity / 100);
  };

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-2xl text-ivory">দোয়াঘর</h1>
        <p className="mt-1 text-sm text-mist">আরবি স্থির। অর্থ পাশে। পছন্দ হলে হৃদয় চিহ্ন।</p>
      </div>

      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="দোয়া খুঁজুন"
        aria-label="দোয়া খুঁজুন"
      />

      <div className="flex gap-2 overflow-x-auto pb-1">
        <button
          type="button"
          aria-pressed={lovedOnly}
          onClick={() => setLovedOnly((value) => !value)}
          className={cn(
            "inline-flex min-h-11 shrink-0 items-center gap-1 rounded-full border px-3 text-sm",
            lovedOnly ? "border-gold bg-gold text-ink" : "border-line bg-panel text-ivory",
          )}
        >
          <Heart className="size-4" aria-hidden />
          পছন্দ
        </button>
        {CATEGORIES.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={category === item.id}
            onClick={() => setCategory(item.id)}
            className={cn(
              "min-h-11 shrink-0 rounded-full border px-3 text-sm",
              category === item.id ? "border-gold bg-gold text-ink" : "border-line bg-panel text-ivory",
            )}
          >
            {item.bn}
          </button>
        ))}
      </div>

      {list.length === 0 ? (
        <p className="rounded-card border border-line bg-panel px-4 py-6 text-center text-mist">
          এই ছাঁকনিতে কোনো দোয়া নেই।
        </p>
      ) : (
        <ul className="flex flex-col gap-3">
          {list.map((dua) => {
            const open = openId === dua.id;
            const loved = favorites.includes(dua.id);
            return (
              <li key={dua.id} className="rounded-card border border-line bg-panel px-4 py-4">
                <button type="button" onClick={() => setOpenId(open ? null : dua.id)} className="w-full text-left">
                  <span className="text-xs tracking-wide text-gold">{categoryLabel(dua.category)}</span>
                  <span className="mt-1 block text-lg text-ivory">{dua.titleBn}</span>
                  {!open ? <span className="mt-1 block text-sm text-mist">{dua.meaningBn}</span> : null}
                </button>
                <p lang="ar" dir="rtl" className={cn("arabic mt-3 text-ivory", !open && "line-clamp-2")}>
                  {dua.arabic}
                </p>
                {open ? (
                  <div className="mt-4 space-y-3">
                    <p className="text-sm leading-relaxed text-mist">{dua.transliteration}</p>
                    <p className="leading-relaxed text-ivory">{dua.meaningBn}</p>
                    <p className="text-sm text-mist">
                      {dua.source} · {bnDigits(dua.repeats)} বার · {dua.repeatNoteBn}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => purify(dua.id)}
                        className="inline-flex min-h-11 items-center gap-2 rounded-full bg-gold px-4 text-sm font-medium text-ink"
                      >
                        <AudioLines className="size-4" aria-hidden />
                        এই দোয়ায় শুদ্ধ করুন
                      </button>
                      <button
                        type="button"
                        aria-pressed={loved}
                        onClick={() => toggleFavorite(dua.id)}
                        className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-4 text-sm text-ivory"
                      >
                        <Heart className={cn("size-4", loved && "text-gold")} fill={loved ? "currentColor" : "none"} aria-hidden />
                        {loved ? "পছন্দে আছে" : "পছন্দ"}
                      </button>
                    </div>
                  </div>
                ) : null}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
