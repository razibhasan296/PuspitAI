import { useEffect, useState } from "react";
import { Flower2, AudioLines, BookOpen, Bot } from "lucide-react";
import { bnDigits, duaForToday, moodById, type Dua } from "@/data/catalog";
import { usePuspit } from "@/store/puspit";
import { usePurifier } from "@/components/puspit/provider";

const STEPS = [
  { icon: BookOpen, title: "দোয়াঘর", text: "আরবি অপরিবর্তিত। বাংলা অর্থ পাশে।" },
  { icon: AudioLines, title: "সুরশুদ্ধি", text: "কোলাহল ছেঁকে স্থির স্বর। গান নয়।" },
  { icon: Bot, title: "সংস্করণ বট", text: "কোন দোয়া, কতবার, কোন সুর — একটা আসর।" },
];

export function GiftPanel() {
  const opened = usePuspit((state) => state.opened);
  const openGift = usePuspit((state) => state.openGift);
  const setTab = usePuspit((state) => state.setTab);
  const setDuaId = usePuspit((state) => state.setDuaId);
  const setMoodId = usePuspit((state) => state.setMoodId);
  const setPurity = usePuspit((state) => state.setPurity);
  const { playWith } = usePurifier();
  const [today, setToday] = useState<Dua | null>(null);

  useEffect(() => {
    if (opened) setToday(duaForToday());
  }, [opened]);

  const beginToday = () => {
    if (!today) return;
    const mood = moodById(today.moodId);
    setDuaId(today.id);
    setMoodId(mood.id);
    setPurity(today.purity);
    setTab("purify");
    void playWith(mood.root, today.purity / 100);
  };

  return (
    <div className="flex flex-col gap-5">
      <section className="rounded-card border border-line bg-panel px-5 py-6">
        <p className="text-sm text-gold">ইসলামিক উপহার</p>
        <h1 className="font-display mt-2 text-5xl leading-none text-ivory">PuspitAI</h1>
        <p className="mt-3 text-lg text-ivory">পুষ্পিতা,</p>
        <div className="mt-3 space-y-3 text-base leading-relaxed text-ivory">
          <p>এই ঘরটা তোমার নামে। RabiulKarimRaZib বানিয়েছে, xAI-এর সাথে।</p>
          <p>দোয়ার আরবি এখানে পাল্টানো হয় না। সুর আলাদা — পড়ার আগে মন স্থির করার জন্য, তিলাওয়াতের সুর নয়।</p>
          <p>একটা বট প্রতিবার একটা আসর সাজিয়ে দেয়। কোন দোয়া, কতবার, কোন সুর।</p>
        </div>
        {!opened ? (
          <button
            type="button"
            onClick={openGift}
            className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-gold px-5 font-medium text-ink"
          >
            <Flower2 className="size-4" aria-hidden />
            উপহার খুলুন
          </button>
        ) : (
          <p className="mt-6 text-sm text-leaf">উপহার খোলা আছে। যখন খুশি ফিরে এসো।</p>
        )}
      </section>

      <ul className="grid gap-3">
        {STEPS.map((step) => {
          const Icon = step.icon;
          return (
            <li key={step.title} className="flex items-start gap-3 rounded-card border border-line bg-panel px-4 py-3">
              <Icon className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden />
              <span>
                <span className="block font-medium text-ivory">{step.title}</span>
                <span className="text-sm text-mist">{step.text}</span>
              </span>
            </li>
          );
        })}
      </ul>

      {opened && today ? (
        <section className="rounded-card border border-gold/40 bg-panel px-5 py-5">
          <p className="text-sm text-gold">আজকের আসর</p>
          <h2 className="mt-1 text-xl text-ivory">{today.titleBn}</h2>
          <p className="mt-2 text-sm text-mist">
            {moodById(today.moodId).bn} · বিশুদ্ধতা {bnDigits(today.purity)} · {bnDigits(today.repeats)} বার
          </p>
          <p lang="ar" dir="rtl" className="arabic mt-4 text-ivory">
            {today.arabic}
          </p>
          <button
            type="button"
            onClick={beginToday}
            className="mt-5 inline-flex min-h-11 items-center rounded-full bg-gold px-5 font-medium text-ink"
          >
            এই আসর শুনুন
          </button>
        </section>
      ) : null}

      <p className="text-sm leading-relaxed text-mist">
        উচ্চারণ শেখার ভরসা একজন উস্তাদ। এখানকার বাংলা অর্থ সংক্ষিপ্ত। সঙ্গীত কোরআনের সুর নয়।
      </p>
    </div>
  );
}
