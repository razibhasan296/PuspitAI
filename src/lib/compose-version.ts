import { duaById, INTENTIONS, moodById, type IntentionId, type MoodId } from "@/data/catalog";

export type SessionVersion = {
  id: string;
  titleBn: string;
  dedicationBn: string;
  duaId: string;
  moodId: MoodId;
  purity: number;
  repeats: number;
  paceBn: string;
  adabBn: string;
  intentionId: IntentionId;
  recipient: string;
};

const ADAB: Record<IntentionId, string[]> = {
  "for-her": [
    "নাম মুখে না নিয়ে বুকে রাখো। আরবি যেমন আছে তেমনই পড়ো।",
    "সুর আগে শোনা। পড়ার সময় থামিয়ে দাও, যেন দোয়া গান না হয়ে যায়।",
  ],
  morning: [
    "উঠে একটু পানি, তারপর এই এক লাইন। দিনের বাকিটা পরে।",
    "সকালের সুর হালকা রাখো। জানালা খোলা থাকলেও চলে।",
  ],
  evening: [
    "সন্ধ্যায় আলো কমিয়ে এই দোয়া। তাড়া নেই।",
    "দিনের কোলাহল সুরশুদ্ধিতে নামিয়ে, তারপর পড়ো।",
  ],
  peace: [
    "বুক ভরা লাগলে আগে তিন শ্বাস। তারপর দোয়া, ধীরে।",
    "এই সংস্করণ ছোট। শেষ হলে চুপ করে বসে থাকো এক মিনিট।",
  ],
  worry: [
    "দুশ্চিন্তার নাম ধরে ধরে পড়ো না। দোয়ার শব্দেই জায়গা আছে।",
    "পড়ার পর ফোন উল্টে রাখো। সুর আর একবার, নিচু করে।",
  ],
  shield: [
    "আয়াতুল কুরসি একবারই যথেষ্ট এই আসরে। তাড়াতাড়ি শেষ করার দরকার নেই।",
    "সুর স্থির রাখো। মাঝখানে না থামিয়ে পুরো আয়াত।",
  ],
  thanks: [
    "কৃতজ্ঞতা জোরে বলতে হয় না। এই দোয়া নিচু গলায় সুন্দর।",
    "কাউকে শোনানোর জন্য নয়। নিজের ঘরেই যথেষ্ট।",
  ],
  family: [
    "মা-বাবার মুখ মনে এলে থামো না। দোয়া শেষ করে তারপর দোয়া।",
    "তিনবার, একই সুরে। মাঝে নতুন কথা জুড়ে দিও না।",
  ],
  sleep: [
    "ঘুমের দোয়া ছোট। পড়ার পর সুরও বন্ধ। অন্ধকারে রেখে দাও।",
    "বালিশের আগে একবার। বার বার ঘুরিয়ে পড়ার দরকার নেই।",
  ],
  heal: [
    "আরোগ্যের দোয়া সাতবার। মাঝে সুর না বাজিয়ে শুধু শব্দ।",
    "যার জন্য পড়ছ তার নাম বুকের ভেতরে। আরবি অদলবদল কোরো না।",
  ],
};

export function composeVersion(input: {
  intentionId: IntentionId;
  recipient: string;
  spin: number;
}): SessionVersion {
  const intention = INTENTIONS.find((item) => item.id === input.intentionId) ?? INTENTIONS[0];
  const dua = duaById(intention.duaId);
  const mood = moodById(dua.moodId);
  const name = input.recipient.trim() || "পুষ্পিতা";
  const spin = Math.max(0, input.spin);
  const notes = ADAB[intention.id];
  const purity = Math.min(94, Math.max(62, dua.purity + (spin % 3) * 3 - 3));
  const long = dua.arabic.length > 160;

  return {
    id: `${intention.id}-${spin}-${dua.id}`,
    titleBn: `${name}-এর ${intention.bn}`,
    dedicationBn: `এই আসর ${name}-এর জন্য। আরবি অপরিবর্তিত। সুর আলাদা — পড়ার আগে বা পরে।`,
    duaId: dua.id,
    moodId: mood.id,
    purity,
    repeats: dua.repeats,
    paceBn: long ? "ধীরে, থেমে থেমে। এক নিশ্বাসে শেষ করতে হবে না।" : "নরম গলায়, তাড়াহুড়ো ছাড়া।",
    adabBn: notes[spin % notes.length] ?? notes[0],
    intentionId: intention.id,
    recipient: name,
  };
}
