export const MOODS = [
  { id: "sakina", bn: "সাকিনা", en: "Stillness", hint: "ধীর, স্থির", root: 146.83 },
  { id: "rahma", bn: "রহমত", en: "Mercy", hint: "উষ্ণ, নিচু", root: 110 },
  { id: "noor", bn: "নূর", en: "Light", hint: "হালকা আলো", root: 196 },
  { id: "fajr", bn: "ফজর", en: "Dawn", hint: "খোলা সকাল", root: 164.81 },
  { id: "layl", bn: "লাইল", en: "Night", hint: "গভীর রাত", root: 92.5 },
] as const;

export type MoodId = (typeof MOODS)[number]["id"];

export const CATEGORIES = [
  { id: "all", bn: "সব" },
  { id: "morning", bn: "সকাল" },
  { id: "evening", bn: "সন্ধ্যা" },
  { id: "peace", bn: "শান্তি" },
  { id: "protection", bn: "সুরক্ষা" },
  { id: "gratitude", bn: "কৃতজ্ঞতা" },
  { id: "family", bn: "পরিবার" },
  { id: "sleep", bn: "ঘুম" },
  { id: "healing", bn: "আরোগ্য" },
  { id: "gift", bn: "পুষ্পিতা" },
] as const;

export type CategoryId = (typeof CATEGORIES)[number]["id"];

export type Dua = {
  id: string;
  titleBn: string;
  titleEn: string;
  category: Exclude<CategoryId, "all">;
  arabic: string;
  transliteration: string;
  meaningBn: string;
  source: string;
  repeats: number;
  repeatNoteBn: string;
  moodId: MoodId;
  purity: number;
};

export const DUAS: Dua[] = [
  {
    id: "bismillah",
    titleBn: "বিসমিল্লাহ",
    titleEn: "Bismillah",
    category: "gift",
    arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    transliteration: "Bismillāhir-raḥmānir-raḥīm",
    meaningBn: "পরম করুণাময়, অসীম দয়ালু আল্লাহর নামে।",
    source: "কোরআনের সূরাগুলোর শুরু",
    repeats: 1,
    repeatNoteBn: "কোনো ভালো কাজের আগে একবার।",
    moodId: "noor",
    purity: 72,
  },
  {
    id: "kursi",
    titleBn: "আয়াতুল কুরসি",
    titleEn: "Ayat al-Kursi",
    category: "protection",
    arabic:
      "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ",
    transliteration: "Allāhu lā ilāha illā huwal-ḥayyul-qayyūm…",
    meaningBn:
      "আল্লাহ ছাড়া কোনো ইলাহ নেই। তিনি চিরঞ্জীব, সর্বসত্তার ধারক। তাঁকে তন্দ্রা স্পর্শ করে না, নিদ্রাও নয়। আকাশ ও পৃথিবীতে যা আছে সব তাঁর। তাঁর অনুমতি ছাড়া কেউ সুপারিশ করতে পারে না। তিনি জানেন যা সামনে আছে আর যা পেছনে আছে। তাঁর কুরসি আকাশ ও পৃথিবীকে ঘিরে আছে, আর এ দুটিকে ধরে রাখা তাঁকে ক্লান্ত করে না। তিনিই সর্বোচ্চ, মহামহিম।",
    source: "সূরা বাকারা ২:২৫৫",
    repeats: 1,
    repeatNoteBn: "সকালে ও সন্ধ্যায় একবার পড়ার আমল পরিচিত।",
    moodId: "sakina",
    purity: 84,
  },
  {
    id: "morning",
    titleBn: "সকালের দোয়া",
    titleEn: "Morning",
    category: "morning",
    arabic:
      "اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ",
    transliteration:
      "Allāhumma bika aṣbaḥnā wa bika amsaynā wa bika naḥyā wa bika namūtu wa ilaykan-nushūr",
    meaningBn:
      "হে আল্লাহ, তোমারই মাধ্যমে আমরা সকালে পৌঁছেছি, তোমারই মাধ্যমে সন্ধ্যায়, তোমারই মাধ্যমে বাঁচি, তোমারই মাধ্যমে মরি, আর তোমারই দিকে পুনরুত্থান।",
    source: "মাসনুন সকালের দোয়া",
    repeats: 1,
    repeatNoteBn: "ঘুম থেকে উঠে একবার।",
    moodId: "fajr",
    purity: 74,
  },
  {
    id: "evening",
    titleBn: "সন্ধ্যার দোয়া",
    titleEn: "Evening",
    category: "evening",
    arabic:
      "اللَّهُمَّ بِكَ أَمْسَيْنَا وَبِكَ أَصْبَحْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ الْمَصِيرُ",
    transliteration:
      "Allāhumma bika amsaynā wa bika aṣbaḥnā wa bika naḥyā wa bika namūtu wa ilaykal-maṣīr",
    meaningBn:
      "হে আল্লাহ, তোমারই মাধ্যমে আমরা সন্ধ্যায় পৌঁছেছি, তোমারই মাধ্যমে সকালে, তোমারই মাধ্যমে বাঁচি, তোমারই মাধ্যমে মরি, আর তোমারই দিকে ফেরা।",
    source: "মাসনুন সন্ধ্যার দোয়া",
    repeats: 1,
    repeatNoteBn: "সন্ধ্যায় একবার।",
    moodId: "layl",
    purity: 78,
  },
  {
    id: "chest",
    titleBn: "বুক প্রশস্ত করো",
    titleEn: "Open my chest",
    category: "peace",
    arabic:
      "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِنْ لِسَانِي يَفْقَهُوا قَوْلِي",
    transliteration:
      "Rabbi-shraḥ lī ṣadrī, wa yassir lī amrī, waḥlul ʿuqdatan min lisānī, yafqahū qawlī",
    meaningBn:
      "হে আমার রব, আমার বুক প্রশস্ত করে দাও, আমার কাজ সহজ করে দাও, আমার জিহ্বার জড়তা খুলে দাও, যেন মানুষ আমার কথা বোঝে।",
    source: "সূরা ত্বোয়া-হা ২০:২৫–২৮",
    repeats: 3,
    repeatNoteBn: "তাড়াহুড়ো ছাড়া তিনবার।",
    moodId: "noor",
    purity: 76,
  },
  {
    id: "anxiety",
    titleBn: "দুশ্চিন্তা থেকে",
    titleEn: "From worry",
    category: "peace",
    arabic:
      "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنَ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ وَقَهْرِ الرِّجَالِ",
    transliteration:
      "Allāhumma innī aʿūdhu bika minal-hammi wal-ḥazan, wa aʿūdhu bika minal-ʿajzi wal-kasal, wa aʿūdhu bika minal-jubni wal-bukhl, wa aʿūdhu bika min ghalabatid-dayni wa qahrir-rijāl",
    meaningBn:
      "হে আল্লাহ, দুশ্চিন্তা ও দুঃখ থেকে, অক্ষমতা ও অলসতা থেকে, ভীরুতা ও কৃপণতা থেকে, আর ঋণের চাপ ও মানুষের পীড়ন থেকে তোমার আশ্রয় চাই।",
    source: "সহীহ বুখারি — মাসনুন দোয়া",
    repeats: 1,
    repeatNoteBn: "মন ভার হলে একবার, ধীরে।",
    moodId: "rahma",
    purity: 86,
  },
  {
    id: "istighfar",
    titleBn: "সাইয়িদুল ইস্তিগফার",
    titleEn: "Best forgiveness",
    category: "peace",
    arabic:
      "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَىٰ عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
    transliteration: "Allāhumma anta rabbī, lā ilāha illā ant… faghfir lī",
    meaningBn:
      "হে আল্লাহ, তুমি আমার রব, তুমি ছাড়া কোনো ইলাহ নেই। তুমি আমাকে সৃষ্টি করেছ, আমি তোমার বান্দা। সাধ্যমতো তোমার অঙ্গীকারে আছি। যা করেছি তার অনিষ্ট থেকে তোমার আশ্রয় চাই। তোমার নেয়ামত স্বীকার করি, নিজের গুনাহও স্বীকার করি — আমাকে ক্ষমা করো। গুনাহ তুমি ছাড়া কেউ ক্ষমা করে না।",
    source: "সহীহ বুখারি — সাইয়িদুল ইস্তিগফার",
    repeats: 1,
    repeatNoteBn: "সকালে একবার পড়লে দিনের জন্য একটি বড় আশ্রয়।",
    moodId: "rahma",
    purity: 80,
  },
  {
    id: "shield",
    titleBn: "পরিপূর্ণ কালেমা",
    titleEn: "Perfect words",
    category: "protection",
    arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
    transliteration: "Aʿūdhu bi-kalimātillāhit-tāmmāti min sharri mā khalaq",
    meaningBn: "আল্লাহর পরিপূর্ণ কালেমার আশ্রয় চাই, তাঁর সৃষ্টির অনিষ্ট থেকে।",
    source: "সহীহ মুসলিম — মাসনুন দোয়া",
    repeats: 3,
    repeatNoteBn: "সন্ধ্যায় তিনবার পড়ার কথা হাদিসে আছে।",
    moodId: "sakina",
    purity: 82,
  },
  {
    id: "hasbuna",
    titleBn: "হাসবুনাল্লাহ",
    titleEn: "Allah is enough",
    category: "protection",
    arabic: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ",
    transliteration: "Ḥasbunallāhu wa niʿmal-wakīl",
    meaningBn: "আমাদের জন্য আল্লাহই যথেষ্ট, আর তিনি কতই না উত্তম কর্মবিধায়ক।",
    source: "সূরা আলে ইমরান ৩:১৭৩-এর অংশ",
    repeats: 7,
    repeatNoteBn: "সাতবার একটি পরিচিত আমল। সংখ্যাটি অনুস্মারক, বাড়াবাড়ি নয়।",
    moodId: "fajr",
    purity: 70,
  },
  {
    id: "hasanah",
    titleBn: "দুনিয়া ও আখিরাত",
    titleEn: "Good in both",
    category: "gratitude",
    arabic:
      "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    transliteration:
      "Rabbanā ātinā fid-dunyā ḥasanatan wa fil-ākhirati ḥasanatan wa qinā ʿadhāban-nār",
    meaningBn:
      "হে আমাদের রব, আমাদের দুনিয়াতে কল্যাণ দাও, আখিরাতেও কল্যাণ দাও, আর আগুনের শাস্তি থেকে রক্ষা করো।",
    source: "সূরা বাকারা ২:২০১",
    repeats: 1,
    repeatNoteBn: "নামাজের শেষ বৈঠকেও এই দোয়া পড়া হয়।",
    moodId: "noor",
    purity: 75,
  },
  {
    id: "tawhid",
    titleBn: "তাওহিদের কালেমা",
    titleEn: "Words of tawhid",
    category: "gratitude",
    arabic:
      "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
    transliteration:
      "Lā ilāha illallāhu waḥdahu lā sharīka lah, lahul-mulku wa lahul-ḥamdu, wa huwa ʿalā kulli shayʾin qadīr",
    meaningBn:
      "আল্লাহ ছাড়া কোনো ইলাহ নেই, তিনি এক, তাঁর কোনো শরিক নেই। রাজত্ব তাঁর, প্রশংসা তাঁর, তিনি সবকিছুর উপর ক্ষমতাবান।",
    source: "সহীহ বুখারি",
    repeats: 10,
    repeatNoteBn: "পূর্ণ আমলে একশবার। এই আসর দশবারের নরম সংস্করণ।",
    moodId: "noor",
    purity: 77,
  },
  {
    id: "salawat",
    titleBn: "দুরুদে ইবরাহিম",
    titleEn: "Salawat",
    category: "gratitude",
    arabic:
      "اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ، اللَّهُمَّ بَارِكْ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ",
    transliteration: "Allāhumma ṣalli ʿalā Muḥammad wa ʿalā āli Muḥammad…",
    meaningBn:
      "হে আল্লাহ, মুহাম্মাদ ও তাঁর পরিবারের উপর রহমত ও বরকত পাঠাও, যেমন ইবরাহিম ও তাঁর পরিবারের উপর পাঠিয়েছ। তুমি প্রশংসিত, মহিমান্বিত।",
    source: "সহীহ বুখারি — দুরুদ",
    repeats: 10,
    repeatNoteBn: "দশবার। নাম নরম গলায়, সুরে গেয়ে নয়।",
    moodId: "noor",
    purity: 73,
  },
  {
    id: "parents",
    titleBn: "মা-বাবার জন্য",
    titleEn: "For parents",
    category: "family",
    arabic: "رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",
    transliteration: "Rabbir-ḥamhumā kamā rabbayānī ṣaghīrā",
    meaningBn:
      "হে আমার রব, তাদের প্রতি রহম করো, যেমন তাঁরা আমাকে ছোটবেলায় মানুষ করেছেন।",
    source: "সূরা ইসরা ১৭:২৪",
    repeats: 3,
    repeatNoteBn: "নাম মনে রেখে তিনবার।",
    moodId: "rahma",
    purity: 79,
  },
  {
    id: "sleep",
    titleBn: "ঘুমের দোয়া",
    titleEn: "Before sleep",
    category: "sleep",
    arabic: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
    transliteration: "Bismika Allāhumma amūtu wa aḥyā",
    meaningBn: "হে আল্লাহ, তোমার নামে আমি মরি ও বাঁচি।",
    source: "সহীহ বুখারি — ঘুমের দোয়া",
    repeats: 1,
    repeatNoteBn: "বালিশে মাথা রাখার আগে একবার।",
    moodId: "layl",
    purity: 90,
  },
  {
    id: "healing",
    titleBn: "আরোগ্যের দোয়া",
    titleEn: "Healing",
    category: "healing",
    arabic:
      "أَذْهِبِ الْبَأْسَ رَبَّ النَّاسِ، اشْفِ وَأَنْتَ الشَّافِي، لَا شِفَاءَ إِلَّا شِفَاؤُكَ، شِفَاءً لَا يُغَادِرُ سَقَمًا",
    transliteration:
      "Adhhibil-baʾsa rabban-nās, ishfi wa antash-shāfī, lā shifāʾa illā shifāʾuk, shifāʾan lā yughādiru saqamā",
    meaningBn:
      "হে মানুষের রব, কষ্ট দূর করো। আরোগ্য দাও — তুমিই আরোগ্যদানকারী। তোমার আরোগ্য ছাড়া আরোগ্য নেই, এমন আরোগ্য যা রোগ অবশিষ্ট রাখে না।",
    source: "সহীহ বুখারি — রুকিয়া",
    repeats: 7,
    repeatNoteBn: "অসুস্থের জন্য সাতবার। হাত নেড়ে নয় — শব্দ স্থির রেখে।",
    moodId: "rahma",
    purity: 88,
  },
  {
    id: "for-her",
    titleBn: "তার জন্য রহমত",
    titleEn: "Mercy for her",
    category: "gift",
    arabic: "اللَّهُمَّ اغْفِرْ لَهَا وَارْحَمْهَا وَعَافِهَا وَاعْفُ عَنْهَا",
    transliteration: "Allāhumma-ghfir lahā warḥamhā wa ʿāfihā waʿfu ʿanhā",
    meaningBn:
      "হে আল্লাহ, তাকে ক্ষমা করো, তার প্রতি রহম করো, তাকে সুস্থ ও নিরাপদ রাখো, আর তাকে মাফ করে দাও।",
    source: "জীবিতের জন্য নাম মনে রেখে পড়ার দোয়া",
    repeats: 3,
    repeatNoteBn: "পুষ্পিতার নাম বুকের ভেতরে রেখে পড়ো। আরবিতে নাম বসানো হয়নি।",
    moodId: "rahma",
    purity: 85,
  },
];

export const INTENTIONS = [
  { id: "for-her", bn: "পুষ্পিতার জন্য", duaId: "for-her" },
  { id: "morning", bn: "সকাল শুরু", duaId: "morning" },
  { id: "evening", bn: "সন্ধ্যা", duaId: "evening" },
  { id: "peace", bn: "মনে শান্তি", duaId: "chest" },
  { id: "worry", bn: "দুশ্চিন্তা", duaId: "anxiety" },
  { id: "shield", bn: "সুরক্ষা", duaId: "kursi" },
  { id: "thanks", bn: "কৃতজ্ঞতা", duaId: "hasanah" },
  { id: "family", bn: "মা-বাবা", duaId: "parents" },
  { id: "sleep", bn: "ঘুমের আগে", duaId: "sleep" },
  { id: "heal", bn: "আরোগ্য", duaId: "healing" },
] as const;

export type IntentionId = (typeof INTENTIONS)[number]["id"];

export function moodById(id: string) {
  return MOODS.find((mood) => mood.id === id) ?? MOODS[0];
}

export function duaById(id: string) {
  return DUAS.find((dua) => dua.id === id) ?? DUAS[0];
}

export function categoryLabel(id: string) {
  return CATEGORIES.find((item) => item.id === id)?.bn ?? id;
}

export function bnDigits(value: number) {
  return String(value).replace(/\d/g, (digit) => "০১২৩৪৫৬৭৮৯"[Number(digit)] ?? digit);
}

export function duaForToday(date = new Date()) {
  const key = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  let hash = 0;
  for (let i = 0; i < key.length; i += 1) hash = (hash * 33 + key.charCodeAt(i)) >>> 0;
  return DUAS[hash % DUAS.length] ?? DUAS[0];
}
