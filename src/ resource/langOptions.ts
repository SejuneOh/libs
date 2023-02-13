export interface LanguageOption {
  code: string;
  name: string;
  localizedName?: string | null;
  order: number;
}

const languageOptions: LanguageOption[] = [
  { code: "en", name: "English", localizedName: null, order: 0 },
  { code: "ko", name: "Korean", localizedName: "한국어", order: 35 },
  { code: "ar", name: "Arabic", localizedName: "عربي", order: 36 },
  // { code: "es", name: "Spanish", localizedName: "Español", order: 0 },
  // { code: "zh", name: "Chinese", localizedName: "中文 – 简体", order: 0 },
  // { code: "th", name: "Thai", localizedName: "ไทย", order: 0 },
  // { code: "fr", name: "French", localizedName: "Français", order: 0 },
  // { code: "pt", name: "Portuguese", localizedName: "Português", order: 0 },
  // { code: "vi", name: "Vietnamese", localizedName: "Tiếng Việt", order: 0 },
  // { code: "ru", name: "Russian", localizedName: "Русский", order: 0 },
  // {
  //   code: "id",
  //   name: "Indonesian",
  //   localizedName: "bahasa Indonesia",
  //   order: 0,
  // },
  // { code: "sl", name: "Slovenian", localizedName: "Slovenščina", order: 9 },
  // { code: "ja", name: "Japanese", localizedName: "日本語", order: 10 },
  // { code: "kk", name: "Kazakh", localizedName: "Қазақша", order: 11 },
  // { code: "tr", name: "Turkish", localizedName: "Türkçe", order: 12 },
  // { code: "ka", name: "Georgian", localizedName: "ქართული", order: 13 },
  // { code: "az", name: "Azerbaijan", localizedName: "Azərbaycan", order: 14 },
  // { code: "bn", name: "Bengali", localizedName: "বাঙ্গালি", order: 15 },
  // { code: "uz", name: "Uzbek", localizedName: "O'zbek tili", order: 16 },
  // { code: "sw", name: "Swahili", localizedName: "Kiswahili", order: 17 },
  // { code: "sv", name: "Swedish", localizedName: "Svenska", order: 18 },
  // { code: "bg", name: "Bulgarian", localizedName: "Български", order: 19 },
  // { code: "de", name: "German", localizedName: "Deutsch", order: 20 },
  // { code: "cs", name: "Czech", localizedName: "Čeština", order: 21 },
  // { code: "uk", name: "Ukrainian", localizedName: "Українська", order: 22 },
  // { code: "hi", name: "Hindi", localizedName: "हिंदी", order: 23 },
  // { code: "lo", name: "Lao", localizedName: "ພາສາລາວ", order: 25 },
  // { code: "hu", name: "Hungarian", localizedName: "Magyar", order: 26 },
  // { code: "it", name: "Italian", localizedName: "Italiano", order: 27 },
  // { code: "ky", name: "Kyrgyz", localizedName: "Кыргызча", order: 28 },
  // { code: "lt", name: "Lithuanian", localizedName: "Lietuvių", order: 29 },
  // { code: "lv", name: "Latvian", localizedName: "Latviešu", order: 30 },
  // { code: "my", name: "Burmese", localizedName: "မြန်မာနိုင်ငံ", order: 31 },
  // { code: "nl", name: "Dutch", localizedName: "Nederlands", order: 32 },
  // { code: "pl", name: "Polish", localizedName: "Polski", order: 33 },
  // { code: "ro", name: "Romanian", localizedName: "Română", order: 34 },
];

export default languageOptions;
