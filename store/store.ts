import { create } from "zustand";
import { Subscription } from "@/types/Subscription";

export type LanguagesSupported =
  | "en"
  | "de"
  | "es"
  | "fr"
  | "hi"
  | "pt"
  | "ru"
  | "zh"
  | "ja"
  | "la"
  | "ar"
  | "pl";

export const LanguagesSupportedMap: Record<LanguagesSupported, string> = {
  en: "English",
  de: "German",
  es: "Spanish",
  fr: "French",
  hi: "Hindi",
  pt: "Portuguese",
  ru: "Russian",
  zh: "Chinese",
  ja: "Japanese",
  la: "Latin",
  ar: "Arabic",
  pl: "Polish",
};

interface LanguageState {
  language: LanguagesSupported;
  setLanguage: (language: LanguagesSupported) => void;
  getLanguages: (isPro: boolean) => LanguagesSupported[];
  getNotSupportedLanguages: (isPro: boolean) => LanguagesSupported[];
}

interface SubscriptionState {
  subscription: Subscription | null | undefined;
  setSubscription: (subscription: Subscription | null) => void;
}

export const useSubscriptionStore = create<SubscriptionState>((set) => ({
  subscription: undefined,
  setSubscription: (subscription: Subscription | null) => set({ subscription }),
}));

export const useLanguageStore = create<LanguageState>((set) => ({
  language: "en",
  setLanguage: (language: LanguagesSupported) => set({ language }),
  getLanguages: (isPro: boolean) => {
    if (isPro)
      return Object.keys(LanguagesSupportedMap) as LanguagesSupported[];
    return Object.keys(LanguagesSupportedMap).slice(
      0,
      8
    ) as LanguagesSupported[];
  },
  getNotSupportedLanguages: (isPro: boolean) => {
    if (isPro) return [];
    return Object.keys(LanguagesSupportedMap).slice(8) as LanguagesSupported[];
  },
}));
