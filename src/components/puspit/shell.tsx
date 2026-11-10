import { useEffect } from "react";
import { AudioLines, BookOpen, Bot, Flower2, Pause } from "lucide-react";
import { cn } from "@/lib/cn";
import { moodById } from "@/data/catalog";
import { persistPuspit, usePuspit, type TabId } from "@/store/puspit";
import { PurifierProvider, usePurifier } from "@/components/puspit/provider";
import { GiftPanel } from "@/components/puspit/gift-panel";
import { LibraryPanel } from "@/components/puspit/library-panel";
import { PurifierPanel } from "@/components/puspit/purifier-panel";
import { BotPanel } from "@/components/puspit/bot-panel";

const TABS: { id: TabId; label: string; icon: typeof Flower2 }[] = [
  { id: "gift", label: "উপহার", icon: Flower2 },
  { id: "duas", label: "দোয়া", icon: BookOpen },
  { id: "purify", label: "সুর", icon: AudioLines },
  { id: "bot", label: "বট", icon: Bot },
];

function Frame() {
  const tab = usePuspit((state) => state.tab);
  const setTab = usePuspit((state) => state.setTab);
  const hydrate = usePuspit((state) => state.hydrate);
  const moodId = usePuspit((state) => state.moodId);
  const { playing, pause } = usePurifier();

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  useEffect(() => {
    return usePuspit.subscribe((state) => {
      if (state.hydrated) persistPuspit();
    });
  }, []);

  return (
    <div className="relative mx-auto min-h-dvh w-full max-w-lg">
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full border border-gold/25"
      />
      <header className="sticky top-0 z-10 bg-ink/90 px-4 pt-4 pb-3 backdrop-blur-md">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="font-display text-3xl leading-none text-ivory">PuspitAI</p>
            <p className="mt-1 text-sm text-mist">পুষ্পিতার ইসলামিক উপহার</p>
          </div>
          <Flower2 className="size-7 text-gold" aria-hidden />
        </div>
        <p className="mt-2 text-xs text-mist">RabiulKarimRaZib · xAI</p>
      </header>

      <main className="px-4 pt-2 pb-36">
        {tab === "gift" ? <GiftPanel /> : null}
        {tab === "duas" ? <LibraryPanel /> : null}
        {tab === "purify" ? <PurifierPanel /> : null}
        {tab === "bot" ? <BotPanel /> : null}
      </main>

      <div className="fixed inset-x-0 bottom-0 z-20 mx-auto w-full max-w-lg">
        {playing && tab !== "purify" ? (
          <div className="mx-3 mb-2 flex items-center justify-between gap-3 rounded-full border border-line bg-panel px-3 py-2">
            <button type="button" onClick={() => setTab("purify")} className="min-h-11 text-left text-sm text-ivory">
              {moodById(moodId).bn} চলছে
              <span className="mt-0.5 block text-xs text-mist">সুরে ফিরে যাও</span>
            </button>
            <button
              type="button"
              onClick={pause}
              aria-label="সুর থামাও"
              className="inline-flex size-11 items-center justify-center rounded-full bg-gold text-ink"
            >
              <Pause className="size-4" />
            </button>
          </div>
        ) : null}
        <nav
          aria-label="প্রধান"
          className="grid grid-cols-4 border-t border-line bg-ink/95 pb-[max(0.4rem,env(safe-area-inset-bottom))] backdrop-blur-md"
        >
          {TABS.map((item) => {
            const Icon = item.icon;
            const active = tab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                aria-current={active ? "page" : undefined}
                onClick={() => setTab(item.id)}
                className={cn(
                  "flex min-h-14 flex-col items-center justify-center gap-1 text-xs",
                  active ? "text-gold" : "text-mist",
                )}
              >
                <Icon className="size-5" aria-hidden />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

export function PuspitApp() {
  return (
    <PurifierProvider>
      <Frame />
    </PurifierProvider>
  );
}
