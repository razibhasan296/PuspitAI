import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, q as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { a as Heart, c as BookOpen, i as Pause, l as AudioLines, n as RotateCcw, o as Flower2, r as Play, s as Bot } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DxBaImkp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var MOODS = [
	{
		id: "sakina",
		bn: "সাকিনা",
		en: "Stillness",
		hint: "ধীর, স্থির",
		root: 146.83
	},
	{
		id: "rahma",
		bn: "রহমত",
		en: "Mercy",
		hint: "উষ্ণ, নিচু",
		root: 110
	},
	{
		id: "noor",
		bn: "নূর",
		en: "Light",
		hint: "হালকা আলো",
		root: 196
	},
	{
		id: "fajr",
		bn: "ফজর",
		en: "Dawn",
		hint: "খোলা সকাল",
		root: 164.81
	},
	{
		id: "layl",
		bn: "লাইল",
		en: "Night",
		hint: "গভীর রাত",
		root: 92.5
	}
];
var CATEGORIES = [
	{
		id: "all",
		bn: "সব"
	},
	{
		id: "morning",
		bn: "সকাল"
	},
	{
		id: "evening",
		bn: "সন্ধ্যা"
	},
	{
		id: "peace",
		bn: "শান্তি"
	},
	{
		id: "protection",
		bn: "সুরক্ষা"
	},
	{
		id: "gratitude",
		bn: "কৃতজ্ঞতা"
	},
	{
		id: "family",
		bn: "পরিবার"
	},
	{
		id: "sleep",
		bn: "ঘুম"
	},
	{
		id: "healing",
		bn: "আরোগ্য"
	},
	{
		id: "gift",
		bn: "পুষ্পিতা"
	}
];
var DUAS = [
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
		purity: 72
	},
	{
		id: "kursi",
		titleBn: "আয়াতুল কুরসি",
		titleEn: "Ayat al-Kursi",
		category: "protection",
		arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ",
		transliteration: "Allāhu lā ilāha illā huwal-ḥayyul-qayyūm…",
		meaningBn: "আল্লাহ ছাড়া কোনো ইলাহ নেই। তিনি চিরঞ্জীব, সর্বসত্তার ধারক। তাঁকে তন্দ্রা স্পর্শ করে না, নিদ্রাও নয়। আকাশ ও পৃথিবীতে যা আছে সব তাঁর। তাঁর অনুমতি ছাড়া কেউ সুপারিশ করতে পারে না। তিনি জানেন যা সামনে আছে আর যা পেছনে আছে। তাঁর কুরসি আকাশ ও পৃথিবীকে ঘিরে আছে, আর এ দুটিকে ধরে রাখা তাঁকে ক্লান্ত করে না। তিনিই সর্বোচ্চ, মহামহিম।",
		source: "সূরা বাকারা ২:২৫৫",
		repeats: 1,
		repeatNoteBn: "সকালে ও সন্ধ্যায় একবার পড়ার আমল পরিচিত।",
		moodId: "sakina",
		purity: 84
	},
	{
		id: "morning",
		titleBn: "সকালের দোয়া",
		titleEn: "Morning",
		category: "morning",
		arabic: "اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ",
		transliteration: "Allāhumma bika aṣbaḥnā wa bika amsaynā wa bika naḥyā wa bika namūtu wa ilaykan-nushūr",
		meaningBn: "হে আল্লাহ, তোমারই মাধ্যমে আমরা সকালে পৌঁছেছি, তোমারই মাধ্যমে সন্ধ্যায়, তোমারই মাধ্যমে বাঁচি, তোমারই মাধ্যমে মরি, আর তোমারই দিকে পুনরুত্থান।",
		source: "মাসনুন সকালের দোয়া",
		repeats: 1,
		repeatNoteBn: "ঘুম থেকে উঠে একবার।",
		moodId: "fajr",
		purity: 74
	},
	{
		id: "evening",
		titleBn: "সন্ধ্যার দোয়া",
		titleEn: "Evening",
		category: "evening",
		arabic: "اللَّهُمَّ بِكَ أَمْسَيْنَا وَبِكَ أَصْبَحْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ الْمَصِيرُ",
		transliteration: "Allāhumma bika amsaynā wa bika aṣbaḥnā wa bika naḥyā wa bika namūtu wa ilaykal-maṣīr",
		meaningBn: "হে আল্লাহ, তোমারই মাধ্যমে আমরা সন্ধ্যায় পৌঁছেছি, তোমারই মাধ্যমে সকালে, তোমারই মাধ্যমে বাঁচি, তোমারই মাধ্যমে মরি, আর তোমারই দিকে ফেরা।",
		source: "মাসনুন সন্ধ্যার দোয়া",
		repeats: 1,
		repeatNoteBn: "সন্ধ্যায় একবার।",
		moodId: "layl",
		purity: 78
	},
	{
		id: "chest",
		titleBn: "বুক প্রশস্ত করো",
		titleEn: "Open my chest",
		category: "peace",
		arabic: "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِنْ لِسَانِي يَفْقَهُوا قَوْلِي",
		transliteration: "Rabbi-shraḥ lī ṣadrī, wa yassir lī amrī, waḥlul ʿuqdatan min lisānī, yafqahū qawlī",
		meaningBn: "হে আমার রব, আমার বুক প্রশস্ত করে দাও, আমার কাজ সহজ করে দাও, আমার জিহ্বার জড়তা খুলে দাও, যেন মানুষ আমার কথা বোঝে।",
		source: "সূরা ত্বোয়া-হা ২০:২৫–২৮",
		repeats: 3,
		repeatNoteBn: "তাড়াহুড়ো ছাড়া তিনবার।",
		moodId: "noor",
		purity: 76
	},
	{
		id: "anxiety",
		titleBn: "দুশ্চিন্তা থেকে",
		titleEn: "From worry",
		category: "peace",
		arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنَ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ وَقَهْرِ الرِّجَالِ",
		transliteration: "Allāhumma innī aʿūdhu bika minal-hammi wal-ḥazan, wa aʿūdhu bika minal-ʿajzi wal-kasal, wa aʿūdhu bika minal-jubni wal-bukhl, wa aʿūdhu bika min ghalabatid-dayni wa qahrir-rijāl",
		meaningBn: "হে আল্লাহ, দুশ্চিন্তা ও দুঃখ থেকে, অক্ষমতা ও অলসতা থেকে, ভীরুতা ও কৃপণতা থেকে, আর ঋণের চাপ ও মানুষের পীড়ন থেকে তোমার আশ্রয় চাই।",
		source: "সহীহ বুখারি — মাসনুন দোয়া",
		repeats: 1,
		repeatNoteBn: "মন ভার হলে একবার, ধীরে।",
		moodId: "rahma",
		purity: 86
	},
	{
		id: "istighfar",
		titleBn: "সাইয়িদুল ইস্তিগফার",
		titleEn: "Best forgiveness",
		category: "peace",
		arabic: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَىٰ عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ",
		transliteration: "Allāhumma anta rabbī, lā ilāha illā ant… faghfir lī",
		meaningBn: "হে আল্লাহ, তুমি আমার রব, তুমি ছাড়া কোনো ইলাহ নেই। তুমি আমাকে সৃষ্টি করেছ, আমি তোমার বান্দা। সাধ্যমতো তোমার অঙ্গীকারে আছি। যা করেছি তার অনিষ্ট থেকে তোমার আশ্রয় চাই। তোমার নেয়ামত স্বীকার করি, নিজের গুনাহও স্বীকার করি — আমাকে ক্ষমা করো। গুনাহ তুমি ছাড়া কেউ ক্ষমা করে না।",
		source: "সহীহ বুখারি — সাইয়িদুল ইস্তিগফার",
		repeats: 1,
		repeatNoteBn: "সকালে একবার পড়লে দিনের জন্য একটি বড় আশ্রয়।",
		moodId: "rahma",
		purity: 80
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
		purity: 82
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
		purity: 70
	},
	{
		id: "hasanah",
		titleBn: "দুনিয়া ও আখিরাত",
		titleEn: "Good in both",
		category: "gratitude",
		arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
		transliteration: "Rabbanā ātinā fid-dunyā ḥasanatan wa fil-ākhirati ḥasanatan wa qinā ʿadhāban-nār",
		meaningBn: "হে আমাদের রব, আমাদের দুনিয়াতে কল্যাণ দাও, আখিরাতেও কল্যাণ দাও, আর আগুনের শাস্তি থেকে রক্ষা করো।",
		source: "সূরা বাকারা ২:২০১",
		repeats: 1,
		repeatNoteBn: "নামাজের শেষ বৈঠকেও এই দোয়া পড়া হয়।",
		moodId: "noor",
		purity: 75
	},
	{
		id: "tawhid",
		titleBn: "তাওহিদের কালেমা",
		titleEn: "Words of tawhid",
		category: "gratitude",
		arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
		transliteration: "Lā ilāha illallāhu waḥdahu lā sharīka lah, lahul-mulku wa lahul-ḥamdu, wa huwa ʿalā kulli shayʾin qadīr",
		meaningBn: "আল্লাহ ছাড়া কোনো ইলাহ নেই, তিনি এক, তাঁর কোনো শরিক নেই। রাজত্ব তাঁর, প্রশংসা তাঁর, তিনি সবকিছুর উপর ক্ষমতাবান।",
		source: "সহীহ বুখারি",
		repeats: 10,
		repeatNoteBn: "পূর্ণ আমলে একশবার। এই আসর দশবারের নরম সংস্করণ।",
		moodId: "noor",
		purity: 77
	},
	{
		id: "salawat",
		titleBn: "দুরুদে ইবরাহিম",
		titleEn: "Salawat",
		category: "gratitude",
		arabic: "اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ، اللَّهُمَّ بَارِكْ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ",
		transliteration: "Allāhumma ṣalli ʿalā Muḥammad wa ʿalā āli Muḥammad…",
		meaningBn: "হে আল্লাহ, মুহাম্মাদ ও তাঁর পরিবারের উপর রহমত ও বরকত পাঠাও, যেমন ইবরাহিম ও তাঁর পরিবারের উপর পাঠিয়েছ। তুমি প্রশংসিত, মহিমান্বিত।",
		source: "সহীহ বুখারি — দুরুদ",
		repeats: 10,
		repeatNoteBn: "দশবার। নাম নরম গলায়, সুরে গেয়ে নয়।",
		moodId: "noor",
		purity: 73
	},
	{
		id: "parents",
		titleBn: "মা-বাবার জন্য",
		titleEn: "For parents",
		category: "family",
		arabic: "رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",
		transliteration: "Rabbir-ḥamhumā kamā rabbayānī ṣaghīrā",
		meaningBn: "হে আমার রব, তাদের প্রতি রহম করো, যেমন তাঁরা আমাকে ছোটবেলায় মানুষ করেছেন।",
		source: "সূরা ইসরা ১৭:২৪",
		repeats: 3,
		repeatNoteBn: "নাম মনে রেখে তিনবার।",
		moodId: "rahma",
		purity: 79
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
		purity: 90
	},
	{
		id: "healing",
		titleBn: "আরোগ্যের দোয়া",
		titleEn: "Healing",
		category: "healing",
		arabic: "أَذْهِبِ الْبَأْسَ رَبَّ النَّاسِ، اشْفِ وَأَنْتَ الشَّافِي، لَا شِفَاءَ إِلَّا شِفَاؤُكَ، شِفَاءً لَا يُغَادِرُ سَقَمًا",
		transliteration: "Adhhibil-baʾsa rabban-nās, ishfi wa antash-shāfī, lā shifāʾa illā shifāʾuk, shifāʾan lā yughādiru saqamā",
		meaningBn: "হে মানুষের রব, কষ্ট দূর করো। আরোগ্য দাও — তুমিই আরোগ্যদানকারী। তোমার আরোগ্য ছাড়া আরোগ্য নেই, এমন আরোগ্য যা রোগ অবশিষ্ট রাখে না।",
		source: "সহীহ বুখারি — রুকিয়া",
		repeats: 7,
		repeatNoteBn: "অসুস্থের জন্য সাতবার। হাত নেড়ে নয় — শব্দ স্থির রেখে।",
		moodId: "rahma",
		purity: 88
	},
	{
		id: "for-her",
		titleBn: "তার জন্য রহমত",
		titleEn: "Mercy for her",
		category: "gift",
		arabic: "اللَّهُمَّ اغْفِرْ لَهَا وَارْحَمْهَا وَعَافِهَا وَاعْفُ عَنْهَا",
		transliteration: "Allāhumma-ghfir lahā warḥamhā wa ʿāfihā waʿfu ʿanhā",
		meaningBn: "হে আল্লাহ, তাকে ক্ষমা করো, তার প্রতি রহম করো, তাকে সুস্থ ও নিরাপদ রাখো, আর তাকে মাফ করে দাও।",
		source: "জীবিতের জন্য নাম মনে রেখে পড়ার দোয়া",
		repeats: 3,
		repeatNoteBn: "পুষ্পিতার নাম বুকের ভেতরে রেখে পড়ো। আরবিতে নাম বসানো হয়নি।",
		moodId: "rahma",
		purity: 85
	}
];
var INTENTIONS = [
	{
		id: "for-her",
		bn: "পুষ্পিতার জন্য",
		duaId: "for-her"
	},
	{
		id: "morning",
		bn: "সকাল শুরু",
		duaId: "morning"
	},
	{
		id: "evening",
		bn: "সন্ধ্যা",
		duaId: "evening"
	},
	{
		id: "peace",
		bn: "মনে শান্তি",
		duaId: "chest"
	},
	{
		id: "worry",
		bn: "দুশ্চিন্তা",
		duaId: "anxiety"
	},
	{
		id: "shield",
		bn: "সুরক্ষা",
		duaId: "kursi"
	},
	{
		id: "thanks",
		bn: "কৃতজ্ঞতা",
		duaId: "hasanah"
	},
	{
		id: "family",
		bn: "মা-বাবা",
		duaId: "parents"
	},
	{
		id: "sleep",
		bn: "ঘুমের আগে",
		duaId: "sleep"
	},
	{
		id: "heal",
		bn: "আরোগ্য",
		duaId: "healing"
	}
];
function moodById(id) {
	return MOODS.find((mood) => mood.id === id) ?? MOODS[0];
}
function duaById(id) {
	return DUAS.find((dua) => dua.id === id) ?? DUAS[0];
}
function categoryLabel(id) {
	return CATEGORIES.find((item) => item.id === id)?.bn ?? id;
}
function bnDigits(value) {
	return String(value).replace(/\d/g, (digit) => "০১২৩৪৫৬৭৮৯"[Number(digit)] ?? digit);
}
function duaForToday(date = /* @__PURE__ */ new Date()) {
	const key = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
	let hash = 0;
	for (let i = 0; i < key.length; i += 1) hash = hash * 33 + key.charCodeAt(i) >>> 0;
	return DUAS[hash % DUAS.length] ?? DUAS[0];
}
var KEY = "puspitai-v1";
var initial = {
	opened: false,
	favorites: [],
	counts: {},
	duaId: "for-her",
	moodId: "rahma",
	purity: 85,
	volume: 72,
	versions: [],
	spin: 0
};
var usePuspit = create((set, get) => ({
	...initial,
	hydrated: false,
	tab: "gift",
	setTab: (tab) => set({ tab }),
	openGift: () => set({ opened: true }),
	setDuaId: (duaId) => set({ duaId }),
	setMoodId: (moodId) => set({ moodId }),
	setPurity: (purity) => set({ purity }),
	setVolume: (volume) => set({ volume }),
	toggleFavorite: (duaId) => set((state) => ({ favorites: state.favorites.includes(duaId) ? state.favorites.filter((id) => id !== duaId) : [...state.favorites, duaId] })),
	increment: (duaId) => set((state) => ({ counts: {
		...state.counts,
		[duaId]: (state.counts[duaId] ?? 0) + 1
	} })),
	resetCount: (duaId) => set((state) => ({ counts: {
		...state.counts,
		[duaId]: 0
	} })),
	rememberVersion: (version) => set((state) => ({ versions: [version, ...state.versions.filter((item) => item.id !== version.id)].slice(0, 6) })),
	bumpSpin: () => {
		const next = get().spin + 1;
		set({ spin: next });
		return next;
	},
	hydrate: () => {
		if (get().hydrated || typeof localStorage === "undefined") {
			set({ hydrated: true });
			return;
		}
		try {
			const raw = localStorage.getItem(KEY);
			if (!raw) {
				set({ hydrated: true });
				return;
			}
			const saved = JSON.parse(raw);
			set({
				opened: Boolean(saved.opened),
				favorites: Array.isArray(saved.favorites) ? saved.favorites.filter((id) => typeof id === "string") : [],
				counts: saved.counts && typeof saved.counts === "object" ? saved.counts : {},
				duaId: typeof saved.duaId === "string" ? saved.duaId : initial.duaId,
				moodId: typeof saved.moodId === "string" ? saved.moodId : initial.moodId,
				purity: typeof saved.purity === "number" ? saved.purity : initial.purity,
				volume: typeof saved.volume === "number" ? saved.volume : initial.volume,
				versions: Array.isArray(saved.versions) ? saved.versions.slice(0, 6) : [],
				spin: typeof saved.spin === "number" ? saved.spin : 0,
				hydrated: true
			});
		} catch {
			set({ hydrated: true });
		}
	}
}));
function persistPuspit() {
	const state = usePuspit.getState();
	if (!state.hydrated) return;
	const payload = {
		opened: state.opened,
		favorites: state.favorites,
		counts: state.counts,
		duaId: state.duaId,
		moodId: state.moodId,
		purity: state.purity,
		volume: state.volume,
		versions: state.versions,
		spin: state.spin
	};
	localStorage.setItem(KEY, JSON.stringify(payload));
}
var PARTIALS = [
	.5,
	1,
	1.0028,
	1.5,
	1.5035
];
var PARTIAL_GAIN = [
	.22,
	.55,
	.34,
	.3,
	.16
];
function brownBuffer(ctx, seconds = 2) {
	const length = Math.floor(ctx.sampleRate * seconds);
	const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
	const data = buffer.getChannelData(0);
	let last = 0;
	for (let i = 0; i < length; i += 1) {
		const white = Math.random() * 2 - 1;
		last = (last + .02 * white) / 1.02;
		data[i] = last * 3.2;
	}
	return buffer;
}
function hallBuffer(ctx) {
	const length = Math.floor(ctx.sampleRate * 1.8);
	const buffer = ctx.createBuffer(2, length, ctx.sampleRate);
	for (let channel = 0; channel < 2; channel += 1) {
		const data = buffer.getChannelData(channel);
		for (let i = 0; i < length; i += 1) data[i] = (Math.random() * 2 - 1) * (1 - i / length) ** 2.4;
	}
	return buffer;
}
/**
* Turns a bed of noise into a quiet just-intonation drone.
* It is an ambience for before or after recitation, never a melody of the dua.
*/
var SoundPurifier = class {
	ctx = null;
	master = null;
	noiseGain = null;
	harmGain = null;
	lowpass = null;
	oscs = [];
	pluckTimer = 0;
	analyser = null;
	alive = true;
	playing = false;
	root = 146.83;
	purity = .8;
	volume = .72;
	raw = false;
	ensure() {
		if (!this.alive || this.ctx) return;
		const ctx = new AudioContext();
		this.ctx = ctx;
		const noiseGain = ctx.createGain();
		const harmGain = ctx.createGain();
		const lowpass = ctx.createBiquadFilter();
		lowpass.type = "lowpass";
		const highpass = ctx.createBiquadFilter();
		highpass.type = "highpass";
		highpass.frequency.value = 90;
		const noise = ctx.createBufferSource();
		noise.buffer = brownBuffer(ctx);
		noise.loop = true;
		noise.connect(highpass);
		highpass.connect(lowpass);
		lowpass.connect(noiseGain);
		const oscs = PARTIALS.map((ratio, index) => {
			const osc = ctx.createOscillator();
			const gain = ctx.createGain();
			osc.type = index === 0 ? "sine" : "sine";
			osc.frequency.value = this.root * ratio;
			gain.gain.value = PARTIAL_GAIN[index] ?? .2;
			osc.connect(gain);
			gain.connect(harmGain);
			osc.start();
			return osc;
		});
		const dry = ctx.createGain();
		dry.gain.value = .86;
		const wet = ctx.createGain();
		wet.gain.value = .28;
		const convolver = ctx.createConvolver();
		convolver.buffer = hallBuffer(ctx);
		const comp = ctx.createDynamicsCompressor();
		comp.threshold.value = -18;
		comp.knee.value = 18;
		comp.ratio.value = 2;
		comp.attack.value = .02;
		comp.release.value = .28;
		const master = ctx.createGain();
		master.gain.value = 1e-4;
		const analyser = ctx.createAnalyser();
		analyser.fftSize = 256;
		analyser.smoothingTimeConstant = .82;
		noiseGain.connect(dry);
		harmGain.connect(dry);
		noiseGain.connect(convolver);
		harmGain.connect(convolver);
		convolver.connect(wet);
		dry.connect(comp);
		wet.connect(comp);
		comp.connect(master);
		master.connect(analyser);
		analyser.connect(ctx.destination);
		noise.start();
		this.noiseGain = noiseGain;
		this.harmGain = harmGain;
		this.lowpass = lowpass;
		this.master = master;
		this.oscs = oscs;
		this.analyser = analyser;
		this.applyTone(0);
		this.applyVolume(0);
	}
	applyTone(ramp = .08) {
		const ctx = this.ctx;
		const noiseGain = this.noiseGain;
		const harmGain = this.harmGain;
		const lowpass = this.lowpass;
		if (!ctx || !noiseGain || !harmGain || !lowpass) return;
		const now = ctx.currentTime;
		const purity = this.raw ? .06 : this.purity;
		const noise = .14 * (1 - purity) ** 1.35;
		const harm = .012 + purity * .09;
		const freq = 420 + (1 - purity) ** .85 * 7200;
		const q = .5 + purity * 6;
		if (ramp <= 0) {
			noiseGain.gain.setValueAtTime(noise, now);
			harmGain.gain.setValueAtTime(harm, now);
			lowpass.frequency.setValueAtTime(freq, now);
			lowpass.Q.setValueAtTime(q, now);
			return;
		}
		noiseGain.gain.setTargetAtTime(noise, now, ramp);
		harmGain.gain.setTargetAtTime(harm, now, ramp);
		lowpass.frequency.setTargetAtTime(freq, now, ramp);
		lowpass.Q.setTargetAtTime(q, now, ramp);
	}
	applyVolume(ramp = .05) {
		if (!this.ctx || !this.master) return;
		const level = this.playing ? this.volume : 1e-4;
		const now = this.ctx.currentTime;
		if (ramp <= 0) {
			this.master.gain.setValueAtTime(level, now);
			return;
		}
		this.master.gain.setTargetAtTime(level, now, ramp);
	}
	retune() {
		if (!this.ctx) return;
		const now = this.ctx.currentTime;
		this.oscs.forEach((osc, index) => {
			osc.frequency.setTargetAtTime(this.root * (PARTIALS[index] ?? 1), now, .18);
		});
	}
	setRoot(root) {
		this.root = root;
		this.retune();
	}
	setPurity(purity) {
		this.purity = Math.min(1, Math.max(0, purity));
		this.applyTone();
	}
	setVolume(volume) {
		this.volume = Math.min(1, Math.max(0, volume));
		this.applyVolume();
	}
	setRaw(raw) {
		this.raw = raw;
		this.applyTone(.05);
	}
	async play() {
		if (!this.alive) return;
		this.ensure();
		if (!this.ctx) throw new Error("Audio unavailable");
		if (this.ctx.state === "suspended") await this.ctx.resume();
		this.playing = true;
		this.applyVolume(.06);
		this.applyTone(.12);
		if (!this.pluckTimer) this.pluckTimer = window.setInterval(() => this.pluck(), 4200);
	}
	pause() {
		this.playing = false;
		this.applyVolume(.08);
		if (this.pluckTimer) {
			window.clearInterval(this.pluckTimer);
			this.pluckTimer = 0;
		}
	}
	pluck() {
		const ctx = this.ctx;
		if (!this.playing || !ctx || !this.master || this.purity < .45 || this.raw) return;
		const osc = ctx.createOscillator();
		const gain = ctx.createGain();
		osc.type = "triangle";
		osc.frequency.value = this.root * 1.5;
		const now = ctx.currentTime;
		gain.gain.setValueAtTime(1e-4, now);
		gain.gain.exponentialRampToValueAtTime(.03 * this.purity, now + .03);
		gain.gain.exponentialRampToValueAtTime(1e-4, now + 1.35);
		osc.connect(gain);
		gain.connect(this.master);
		osc.start(now);
		osc.stop(now + 1.45);
	}
	dispose() {
		this.alive = false;
		this.pause();
		this.oscs.forEach((osc) => {
			try {
				osc.stop();
			} catch {}
		});
		this.ctx?.close();
		this.ctx = null;
	}
};
var PurifierContext = (0, import_react.createContext)(null);
function PurifierProvider({ children }) {
	const engineRef = (0, import_react.useRef)(null);
	const [playing, setPlaying] = (0, import_react.useState)(false);
	const [audioError, setAudioError] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const engine = new SoundPurifier();
		engineRef.current = engine;
		return () => {
			engine.dispose();
			engineRef.current = null;
		};
	}, []);
	const getAnalyser = (0, import_react.useCallback)(() => engineRef.current?.analyser ?? null, []);
	const setRoot = (0, import_react.useCallback)((root) => {
		engineRef.current?.setRoot(root);
	}, []);
	const setPurity = (0, import_react.useCallback)((purity) => {
		engineRef.current?.setPurity(purity);
	}, []);
	const setVolume = (0, import_react.useCallback)((volume) => {
		engineRef.current?.setVolume(volume);
	}, []);
	const setRaw = (0, import_react.useCallback)((raw) => {
		engineRef.current?.setRaw(raw);
	}, []);
	const pause = (0, import_react.useCallback)(() => {
		engineRef.current?.pause();
		setPlaying(false);
	}, []);
	const playWith = (0, import_react.useCallback)(async (root, purity) => {
		const engine = engineRef.current;
		if (!engine) return;
		setAudioError(null);
		engine.setRoot(root);
		engine.setPurity(purity);
		try {
			await engine.play();
			setPlaying(true);
		} catch {
			setPlaying(false);
			setAudioError("এই ব্রাউজারে শব্দ চালু হয়নি। দোয়া পড়া যাবেই।");
		}
	}, []);
	const api = (0, import_react.useMemo)(() => ({
		playing,
		audioError,
		playWith,
		pause,
		setRoot,
		setPurity,
		setVolume,
		setRaw,
		getAnalyser
	}), [
		playing,
		audioError,
		playWith,
		pause,
		setRoot,
		setPurity,
		setVolume,
		setRaw,
		getAnalyser
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PurifierContext.Provider, {
		value: api,
		children
	});
}
function usePurifier() {
	const api = (0, import_react.useContext)(PurifierContext);
	if (!api) throw new Error("Purifier missing");
	return api;
}
var STEPS = [
	{
		icon: BookOpen,
		title: "দোয়াঘর",
		text: "আরবি অপরিবর্তিত। বাংলা অর্থ পাশে।"
	},
	{
		icon: AudioLines,
		title: "সুরশুদ্ধি",
		text: "কোলাহল ছেঁকে স্থির স্বর। গান নয়।"
	},
	{
		icon: Bot,
		title: "সংস্করণ বট",
		text: "কোন দোয়া, কতবার, কোন সুর — একটা আসর।"
	}
];
function GiftPanel() {
	const opened = usePuspit((state) => state.opened);
	const openGift = usePuspit((state) => state.openGift);
	const setTab = usePuspit((state) => state.setTab);
	const setDuaId = usePuspit((state) => state.setDuaId);
	const setMoodId = usePuspit((state) => state.setMoodId);
	const setPurity = usePuspit((state) => state.setPurity);
	const { playWith } = usePurifier();
	const [today, setToday] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (opened) setToday(duaForToday());
	}, [opened]);
	const beginToday = () => {
		if (!today) return;
		const mood = moodById(today.moodId);
		setDuaId(today.id);
		setMoodId(mood.id);
		setPurity(today.purity);
		setTab("purify");
		playWith(mood.root, today.purity / 100);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-card border border-line bg-panel px-5 py-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-gold",
						children: "ইসলামিক উপহার"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display mt-2 text-5xl leading-none text-ivory",
						children: "PuspitAI"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-lg text-ivory",
						children: "পুষ্পিতা,"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 space-y-3 text-base leading-relaxed text-ivory",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "এই ঘরটা তোমার নামে। RabiulKarimRaZib বানিয়েছে, xAI-এর সাথে।" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "দোয়ার আরবি এখানে পাল্টানো হয় না। সুর আলাদা — পড়ার আগে মন স্থির করার জন্য, তিলাওয়াতের সুর নয়।" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "একটা বট প্রতিবার একটা আসর সাজিয়ে দেয়। কোন দোয়া, কতবার, কোন সুর।" })
						]
					}),
					!opened ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: openGift,
						className: "mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-gold px-5 font-medium text-ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flower2, {
							className: "size-4",
							"aria-hidden": true
						}), "উপহার খুলুন"]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-sm text-leaf",
						children: "উপহার খোলা আছে। যখন খুশি ফিরে এসো।"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-3",
				children: STEPS.map((step) => {
					const Icon = step.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-3 rounded-card border border-line bg-panel px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "mt-0.5 size-5 shrink-0 text-gold",
							"aria-hidden": true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-medium text-ivory",
							children: step.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-mist",
							children: step.text
						})] })]
					}, step.title);
				})
			}),
			opened && today ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-card border border-gold/40 bg-panel px-5 py-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-gold",
						children: "আজকের আসর"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 text-xl text-ivory",
						children: today.titleBn
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-mist",
						children: [
							moodById(today.moodId).bn,
							" · বিশুদ্ধতা ",
							bnDigits(today.purity),
							" · ",
							bnDigits(today.repeats),
							" বার"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						lang: "ar",
						dir: "rtl",
						className: "arabic mt-4 text-ivory",
						children: today.arabic
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: beginToday,
						className: "mt-5 inline-flex min-h-11 items-center rounded-full bg-gold px-5 font-medium text-ink",
						children: "এই আসর শুনুন"
					})
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed text-mist",
				children: "উচ্চারণ শেখার ভরসা একজন উস্তাদ। এখানকার বাংলা অর্থ সংক্ষিপ্ত। সঙ্গীত কোরআনের সুর নয়।"
			})
		]
	});
}
function LibraryPanel() {
	const [category, setCategory] = (0, import_react.useState)("all");
	const [query, setQuery] = (0, import_react.useState)("");
	const [openId, setOpenId] = (0, import_react.useState)("for-her");
	const [lovedOnly, setLovedOnly] = (0, import_react.useState)(false);
	const favorites = usePuspit((state) => state.favorites);
	const toggleFavorite = usePuspit((state) => state.toggleFavorite);
	const setDuaId = usePuspit((state) => state.setDuaId);
	const setMoodId = usePuspit((state) => state.setMoodId);
	const setPurity = usePuspit((state) => state.setPurity);
	const setTab = usePuspit((state) => state.setTab);
	const { playWith } = usePurifier();
	const list = (0, import_react.useMemo)(() => {
		const q = query.trim();
		return DUAS.filter((dua) => {
			if (lovedOnly && !favorites.includes(dua.id)) return false;
			if (category !== "all" && dua.category !== category) return false;
			if (!q) return true;
			return `${dua.titleBn} ${dua.meaningBn} ${dua.arabic}`.includes(q);
		});
	}, [
		category,
		favorites,
		lovedOnly,
		query
	]);
	const purify = (duaId) => {
		const dua = DUAS.find((item) => item.id === duaId);
		if (!dua) return;
		const mood = moodById(dua.moodId);
		setDuaId(dua.id);
		setMoodId(mood.id);
		setPurity(dua.purity);
		setTab("purify");
		playWith(mood.root, dua.purity / 100);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl text-ivory",
				children: "দোয়াঘর"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-mist",
				children: "আরবি স্থির। অর্থ পাশে। পছন্দ হলে হৃদয় চিহ্ন।"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "text",
				value: query,
				onChange: (event) => setQuery(event.target.value),
				placeholder: "দোয়া খুঁজুন",
				"aria-label": "দোয়া খুঁজুন"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2 overflow-x-auto pb-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					"aria-pressed": lovedOnly,
					onClick: () => setLovedOnly((value) => !value),
					className: cn("inline-flex min-h-11 shrink-0 items-center gap-1 rounded-full border px-3 text-sm", lovedOnly ? "border-gold bg-gold text-ink" : "border-line bg-panel text-ivory"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
						className: "size-4",
						"aria-hidden": true
					}), "পছন্দ"]
				}), CATEGORIES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-pressed": category === item.id,
					onClick: () => setCategory(item.id),
					className: cn("min-h-11 shrink-0 rounded-full border px-3 text-sm", category === item.id ? "border-gold bg-gold text-ink" : "border-line bg-panel text-ivory"),
					children: item.bn
				}, item.id))]
			}),
			list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-card border border-line bg-panel px-4 py-6 text-center text-mist",
				children: "এই ছাঁকনিতে কোনো দোয়া নেই।"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-col gap-3",
				children: list.map((dua) => {
					const open = openId === dua.id;
					const loved = favorites.includes(dua.id);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-card border border-line bg-panel px-4 py-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setOpenId(open ? null : dua.id),
								className: "w-full text-left",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs tracking-wide text-gold",
										children: categoryLabel(dua.category)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block text-lg text-ivory",
										children: dua.titleBn
									}),
									!open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block text-sm text-mist",
										children: dua.meaningBn
									}) : null
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								lang: "ar",
								dir: "rtl",
								className: cn("arabic mt-3 text-ivory", !open && "line-clamp-2"),
								children: dua.arabic
							}),
							open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 space-y-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm leading-relaxed text-mist",
										children: dua.transliteration
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "leading-relaxed text-ivory",
										children: dua.meaningBn
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-sm text-mist",
										children: [
											dua.source,
											" · ",
											bnDigits(dua.repeats),
											" বার · ",
											dua.repeatNoteBn
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => purify(dua.id),
											className: "inline-flex min-h-11 items-center gap-2 rounded-full bg-gold px-4 text-sm font-medium text-ink",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AudioLines, {
												className: "size-4",
												"aria-hidden": true
											}), "এই দোয়ায় শুদ্ধ করুন"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											"aria-pressed": loved,
											onClick: () => toggleFavorite(dua.id),
											className: "inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-4 text-sm text-ivory",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
												className: cn("size-4", loved && "text-gold"),
												fill: loved ? "currentColor" : "none",
												"aria-hidden": true
											}), loved ? "পছন্দে আছে" : "পছন্দ"]
										})]
									})
								]
							}) : null
						]
					}, dua.id);
				})
			})
		]
	});
}
function readToken(name, fallback) {
	if (typeof document === "undefined") return fallback;
	return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback;
}
function PurifierPanel() {
	const canvasRef = (0, import_react.useRef)(null);
	const duaId = usePuspit((state) => state.duaId);
	const moodId = usePuspit((state) => state.moodId);
	const purity = usePuspit((state) => state.purity);
	const volume = usePuspit((state) => state.volume);
	const counts = usePuspit((state) => state.counts);
	const setMoodId = usePuspit((state) => state.setMoodId);
	const setPurity = usePuspit((state) => state.setPurity);
	const setVolume = usePuspit((state) => state.setVolume);
	const setTab = usePuspit((state) => state.setTab);
	const increment = usePuspit((state) => state.increment);
	const resetCount = usePuspit((state) => state.resetCount);
	const { playing, audioError, playWith, pause, setRoot, setPurity: pushPurity, setVolume: pushVolume, setRaw, getAnalyser } = usePurifier();
	const dua = duaById(duaId);
	const mood = moodById(moodId);
	const count = counts[dua.id] ?? 0;
	(0, import_react.useEffect)(() => {
		setRoot(mood.root);
	}, [mood.root, setRoot]);
	(0, import_react.useEffect)(() => {
		pushPurity(purity / 100);
	}, [purity, pushPurity]);
	(0, import_react.useEffect)(() => {
		pushVolume(volume / 100);
	}, [volume, pushVolume]);
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const context = canvas.getContext("2d");
		if (!context) return;
		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const freq = /* @__PURE__ */ new Uint8Array(96);
		let frame = 0;
		const draw = () => {
			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			const width = canvas.clientWidth;
			const height = canvas.clientHeight;
			const nextW = Math.floor(width * dpr);
			const nextH = Math.floor(height * dpr);
			if (canvas.width !== nextW || canvas.height !== nextH) {
				canvas.width = nextW;
				canvas.height = nextH;
			}
			context.setTransform(dpr, 0, 0, dpr, 0, 0);
			context.clearRect(0, 0, width, height);
			const gold = readToken("--color-gold", "CanvasText");
			const ivory = readToken("--color-ivory", "CanvasText");
			const mist = readToken("--color-mist", "GrayText");
			const analyser = getAnalyser();
			if (analyser && playing) analyser.getByteFrequencyData(freq);
			const cx = width / 2;
			const cy = height / 2;
			const radius = Math.min(width, height) * .34;
			context.beginPath();
			context.arc(cx, cy, radius, 0, Math.PI * 2);
			context.strokeStyle = mist;
			context.globalAlpha = .45;
			context.lineWidth = 1;
			context.stroke();
			context.globalAlpha = 1;
			context.beginPath();
			context.strokeStyle = gold;
			context.lineWidth = 3;
			context.arc(cx, cy, radius + 12, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * (purity / 100));
			context.stroke();
			const bins = 40;
			for (let i = 0; i < bins; i += 1) {
				const amount = playing ? (freq[i] ?? 0) / 255 : .08 + i % 5 * .02;
				const angle = i / bins * Math.PI * 2 - Math.PI / 2;
				const inner = radius * .28;
				const outer = inner + 10 + amount * radius * .62;
				context.beginPath();
				context.moveTo(cx + Math.cos(angle) * inner, cy + Math.sin(angle) * inner);
				context.lineTo(cx + Math.cos(angle) * outer, cy + Math.sin(angle) * outer);
				context.strokeStyle = ivory;
				context.globalAlpha = .28 + amount * .72;
				context.lineWidth = 2;
				context.stroke();
			}
			context.globalAlpha = 1;
			if (!reduced && playing) frame = window.requestAnimationFrame(draw);
		};
		draw();
		return () => window.cancelAnimationFrame(frame);
	}, [
		getAnalyser,
		playing,
		purity
	]);
	const toggle = () => {
		if (playing) pause();
		else playWith(mood.root, purity / 100);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl text-ivory",
				children: "সুরশুদ্ধি"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm leading-relaxed text-mist",
				children: "কোলাহলকে ছেঁকে স্থির স্বর। এটি দোয়ার সুর নয় — পড়ার আগে বা পরে শুনবে, পড়ার সময় থামিয়ে দিও।"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-2 overflow-x-auto pb-1",
				children: MOODS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					"aria-pressed": moodId === item.id,
					onClick: () => {
						setMoodId(item.id);
						setRoot(item.root);
					},
					className: cn("min-h-11 shrink-0 rounded-full border px-3 text-left text-sm", moodId === item.id ? "border-gold bg-gold text-ink" : "border-line bg-panel text-ivory"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-medium",
						children: item.bn
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("block text-xs", moodId === item.id ? "text-ink/80" : "text-mist"),
						children: item.hint
					})]
				}, item.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-card border border-line bg-panel",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
					ref: canvasRef,
					className: "h-64 w-full",
					"aria-hidden": true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-8 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-gold",
							children: mood.bn
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-4xl leading-none text-ivory",
							children: bnDigits(purity)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-mist",
							children: "বিশুদ্ধতা"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: toggle,
				className: "relative z-10 -mt-7 inline-flex size-14 self-center items-center justify-center rounded-full bg-gold text-ink",
				"aria-label": playing ? "সুর থামাও" : "সুর চালু করো",
				children: playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-6" })
			}),
			audioError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-gold",
				children: audioError
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "block rounded-card border border-line bg-panel px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center justify-between text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-mist",
						children: "অশুদ্ধ"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-ivory",
						children: "শুদ্ধ"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "range",
					min: 0,
					max: 100,
					value: purity,
					"aria-label": "বিশুদ্ধতা",
					onChange: (event) => setPurity(Number(event.target.value))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "min-h-11 rounded-full border border-line bg-panel text-sm text-ivory",
				onPointerDown: () => setRaw(true),
				onPointerUp: () => setRaw(false),
				onPointerLeave: () => setRaw(false),
				onPointerCancel: () => setRaw(false),
				children: "চেপে ধরো — আগের কোলাহল"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "block text-sm text-mist",
				children: ["আওয়াজ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "mt-1",
					type: "range",
					min: 0,
					max: 100,
					value: volume,
					"aria-label": "আওয়াজ",
					onChange: (event) => setVolume(Number(event.target.value))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-card border border-line bg-panel px-4 py-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-gold",
							children: "এই আসরের দোয়া"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-lg text-ivory",
							children: dua.titleBn
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setTab("duas"),
							className: "min-h-11 shrink-0 text-sm text-gold",
							children: "বদলাও"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						lang: "ar",
						dir: "rtl",
						className: "arabic mt-3 text-ivory",
						children: dua.arabic
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-mist",
						children: dua.meaningBn
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs text-mist",
						children: dua.source
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => increment(dua.id),
							className: "inline-flex min-h-12 flex-1 items-center justify-center rounded-full bg-gold px-4 font-medium text-ink",
							children: [
								"পড়েছি +১ · ",
								bnDigits(count),
								"/",
								bnDigits(dua.repeats)
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "গণনা শূন্য করো",
							onClick: () => resetCount(dua.id),
							className: "inline-flex size-12 items-center justify-center rounded-full border border-line text-ivory",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" })
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
				className: "grid gap-2 text-sm text-mist",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "১. সুর চালু করে একটু স্থির হও।" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "২. থামিয়ে দোয়া পড়ো, তারপর +১।" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "৩. শেষ হলে সুর বন্ধ। ঘুমের দোয়ায় সুর রেখে দিও না।" })
				]
			})
		]
	});
}
var ADAB = {
	"for-her": ["নাম মুখে না নিয়ে বুকে রাখো। আরবি যেমন আছে তেমনই পড়ো।", "সুর আগে শোনা। পড়ার সময় থামিয়ে দাও, যেন দোয়া গান না হয়ে যায়।"],
	morning: ["উঠে একটু পানি, তারপর এই এক লাইন। দিনের বাকিটা পরে।", "সকালের সুর হালকা রাখো। জানালা খোলা থাকলেও চলে।"],
	evening: ["সন্ধ্যায় আলো কমিয়ে এই দোয়া। তাড়া নেই।", "দিনের কোলাহল সুরশুদ্ধিতে নামিয়ে, তারপর পড়ো।"],
	peace: ["বুক ভরা লাগলে আগে তিন শ্বাস। তারপর দোয়া, ধীরে।", "এই সংস্করণ ছোট। শেষ হলে চুপ করে বসে থাকো এক মিনিট।"],
	worry: ["দুশ্চিন্তার নাম ধরে ধরে পড়ো না। দোয়ার শব্দেই জায়গা আছে।", "পড়ার পর ফোন উল্টে রাখো। সুর আর একবার, নিচু করে।"],
	shield: ["আয়াতুল কুরসি একবারই যথেষ্ট এই আসরে। তাড়াতাড়ি শেষ করার দরকার নেই।", "সুর স্থির রাখো। মাঝখানে না থামিয়ে পুরো আয়াত।"],
	thanks: ["কৃতজ্ঞতা জোরে বলতে হয় না। এই দোয়া নিচু গলায় সুন্দর।", "কাউকে শোনানোর জন্য নয়। নিজের ঘরেই যথেষ্ট।"],
	family: ["মা-বাবার মুখ মনে এলে থামো না। দোয়া শেষ করে তারপর দোয়া।", "তিনবার, একই সুরে। মাঝে নতুন কথা জুড়ে দিও না।"],
	sleep: ["ঘুমের দোয়া ছোট। পড়ার পর সুরও বন্ধ। অন্ধকারে রেখে দাও।", "বালিশের আগে একবার। বার বার ঘুরিয়ে পড়ার দরকার নেই।"],
	heal: ["আরোগ্যের দোয়া সাতবার। মাঝে সুর না বাজিয়ে শুধু শব্দ।", "যার জন্য পড়ছ তার নাম বুকের ভেতরে। আরবি অদলবদল কোরো না।"]
};
function composeVersion(input) {
	const intention = INTENTIONS.find((item) => item.id === input.intentionId) ?? INTENTIONS[0];
	const dua = duaById(intention.duaId);
	const mood = moodById(dua.moodId);
	const name = input.recipient.trim() || "পুষ্পিতা";
	const spin = Math.max(0, input.spin);
	const notes = ADAB[intention.id];
	const purity = Math.min(94, Math.max(62, dua.purity + spin % 3 * 3 - 3));
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
		recipient: name
	};
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
function clip(value, max) {
	return String(value ?? "").replace(/\s+/g, " ").trim().slice(0, max);
}
var reflectForPuspita = createServerFn({ method: "POST" }).validator((input) => {
	const recipient = clip(input?.recipient, 40);
	const duaTitle = clip(input?.duaTitle, 80);
	const meaningBn = clip(input?.meaningBn, 320);
	const intentionBn = clip(input?.intentionBn, 80);
	if (!recipient || !duaTitle) throw new Error("নাম বা দোয়া বাকি আছে");
	return {
		recipient,
		duaTitle,
		meaningBn,
		intentionBn
	};
}).handler(createSsrRpc("71a9715b56905735c06c388e7e426e9b6da62f3a8f99dc47cb81c6169b09ae19"));
function cacheKey(version) {
	return `puspit-note:${version.intentionId}:${version.duaId}:${version.recipient}`;
}
function BotPanel() {
	const [intentionId, setIntentionId] = (0, import_react.useState)("for-her");
	const [recipient, setRecipient] = (0, import_react.useState)("পুষ্পিতা");
	const [note, setNote] = (0, import_react.useState)(null);
	const [noteError, setNoteError] = (0, import_react.useState)(null);
	const [pending, setPending] = (0, import_react.useState)(false);
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
			spin
		});
		const stamped = {
			...version,
			id: `${version.intentionId}-${Date.now()}`
		};
		rememberVersion(stamped);
		setNote(null);
		setNoteError(null);
		const cached = localStorage.getItem(cacheKey(version));
		if (cached) setNote(cached);
	};
	const playVersion = (version) => {
		const mood = moodById(version.moodId);
		setDuaId(version.duaId);
		setMoodId(version.moodId);
		setPurity(version.purity);
		setTab("purify");
		playWith(mood.root, version.purity / 100);
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
			const result = await reflectForPuspita({ data: {
				duaTitle: dua.titleBn,
				meaningBn: dua.meaningBn,
				intentionBn: intention?.bn ?? current.intentionId,
				recipient: current.recipient
			} });
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl text-ivory",
				children: "দোয়া সংস্করণ বট"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm leading-relaxed text-mist",
				children: "বট নতুন আরবি বানায় না। সে একটা আসর সাজায় — দোয়া, বার, সুর। নরম কথা চাইলে তখনই xAI ডাকে, আগে নয়।"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "block text-sm text-mist",
				children: ["কার জন্য", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "mt-1",
					type: "text",
					value: recipient,
					maxLength: 40,
					"aria-label": "কার জন্য",
					onChange: (event) => setRecipient(event.target.value)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: INTENTIONS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-pressed": intentionId === item.id,
					onClick: () => setIntentionId(item.id),
					className: cn("min-h-11 rounded-full border px-3 text-sm", intentionId === item.id ? "border-gold bg-gold text-ink" : "border-line bg-panel text-ivory"),
					children: item.bn
				}, item.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: compose,
				className: "inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gold px-5 font-medium text-ink",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flower2, {
					className: "size-4",
					"aria-hidden": true
				}), "সংস্করণ সাজান"]
			}),
			shown && dua && mood ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-card border border-gold/40 bg-panel px-4 py-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-gold",
						children: ["সংস্করণ ", bnDigits(versions.length)]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 text-xl text-ivory",
						children: shown.titleBn
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-mist",
						children: shown.dedicationBn
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm text-ivory",
						children: [
							dua.titleBn,
							" · ",
							bnDigits(shown.repeats),
							" বার · ",
							mood.bn,
							" · বিশুদ্ধতা ",
							bnDigits(shown.purity)
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						lang: "ar",
						dir: "rtl",
						className: "arabic mt-3 text-ivory",
						children: dua.arabic
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-ivory",
						children: shown.paceBn
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-mist",
						children: shown.adabBn
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => playVersion(shown),
							className: "inline-flex min-h-11 items-center gap-2 rounded-full bg-gold px-4 text-sm font-medium text-ink",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AudioLines, {
								className: "size-4",
								"aria-hidden": true
							}), "এই সংস্করণ শুনুন"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							disabled: pending,
							onClick: () => void ask(),
							className: "inline-flex min-h-11 items-center rounded-full border border-line px-4 text-sm text-ivory disabled:opacity-50",
							children: pending ? "আসছে…" : "xAI-এর নরম কথা"
						})]
					}),
					note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 border-t border-line pt-3 leading-relaxed text-ivory",
						children: note
					}) : null,
					noteError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-gold",
						children: noteError
					}) : null
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-card border border-line bg-panel px-4 py-5 text-sm text-mist",
				children: "একটা অনুভূতি বেছে সংস্করণ সাজাও। পুষ্পিতার জন্য আগে থেকেই বসানো আছে।"
			}),
			versions.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-sm text-mist",
				children: "আগের আসর"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-2 flex flex-col gap-2",
				children: versions.slice(1).map((version) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => playVersion(version),
					className: "flex min-h-11 w-full items-center justify-between rounded-2xl border border-line bg-panel px-3 text-left text-sm text-ivory",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: version.titleBn }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-mist",
						children: moodById(version.moodId).bn
					})]
				}) }, version.id))
			})] }) : null
		]
	});
}
var TABS = [
	{
		id: "gift",
		label: "উপহার",
		icon: Flower2
	},
	{
		id: "duas",
		label: "দোয়া",
		icon: BookOpen
	},
	{
		id: "purify",
		label: "সুর",
		icon: AudioLines
	},
	{
		id: "bot",
		label: "বট",
		icon: Bot
	}
];
function Frame() {
	const tab = usePuspit((state) => state.tab);
	const setTab = usePuspit((state) => state.setTab);
	const hydrate = usePuspit((state) => state.hydrate);
	const moodId = usePuspit((state) => state.moodId);
	const { playing, pause } = usePurifier();
	(0, import_react.useEffect)(() => {
		hydrate();
	}, [hydrate]);
	(0, import_react.useEffect)(() => {
		return usePuspit.subscribe((state) => {
			if (state.hydrated) persistPuspit();
		});
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto min-h-dvh w-full max-w-lg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute top-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full border border-gold/25"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-10 bg-ink/90 px-4 pt-4 pb-3 backdrop-blur-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-3xl leading-none text-ivory",
						children: "PuspitAI"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-mist",
						children: "পুষ্পিতার ইসলামিক উপহার"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flower2, {
						className: "size-7 text-gold",
						"aria-hidden": true
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs text-mist",
					children: "RabiulKarimRaZib · xAI"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "px-4 pt-2 pb-36",
				children: [
					tab === "gift" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GiftPanel, {}) : null,
					tab === "duas" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LibraryPanel, {}) : null,
					tab === "purify" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PurifierPanel, {}) : null,
					tab === "bot" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BotPanel, {}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-x-0 bottom-0 z-20 mx-auto w-full max-w-lg",
				children: [playing && tab !== "purify" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-3 mb-2 flex items-center justify-between gap-3 rounded-full border border-line bg-panel px-3 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setTab("purify"),
						className: "min-h-11 text-left text-sm text-ivory",
						children: [
							moodById(moodId).bn,
							" চলছে",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 block text-xs text-mist",
								children: "সুরে ফিরে যাও"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: pause,
						"aria-label": "সুর থামাও",
						className: "inline-flex size-11 items-center justify-center rounded-full bg-gold text-ink",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-4" })
					})]
				}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "প্রধান",
					className: "grid grid-cols-4 border-t border-line bg-ink/95 pb-[max(0.4rem,env(safe-area-inset-bottom))] backdrop-blur-md",
					children: TABS.map((item) => {
						const Icon = item.icon;
						const active = tab === item.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							"aria-current": active ? "page" : void 0,
							onClick: () => setTab(item.id),
							className: cn("flex min-h-14 flex-col items-center justify-center gap-1 text-xs", active ? "text-gold" : "text-mist"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "size-5",
								"aria-hidden": true
							}), item.label]
						}, item.id);
					})
				})]
			})
		]
	});
}
function PuspitApp() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PurifierProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {}) });
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PuspitApp, {});
}
//#endregion
export { Home as component };
