import { create } from "zustand";
import type { SessionVersion } from "@/lib/compose-version";

const KEY = "puspitai-v1";

export type TabId = "gift" | "duas" | "purify" | "bot";

type Persisted = {
  opened: boolean;
  favorites: string[];
  counts: Record<string, number>;
  duaId: string;
  moodId: string;
  purity: number;
  volume: number;
  versions: SessionVersion[];
  spin: number;
};

type PuspitState = Persisted & {
  hydrated: boolean;
  tab: TabId;
  setTab: (tab: TabId) => void;
  openGift: () => void;
  setDuaId: (duaId: string) => void;
  setMoodId: (moodId: string) => void;
  setPurity: (purity: number) => void;
  setVolume: (volume: number) => void;
  toggleFavorite: (duaId: string) => void;
  increment: (duaId: string) => void;
  resetCount: (duaId: string) => void;
  rememberVersion: (version: SessionVersion) => void;
  bumpSpin: () => number;
  hydrate: () => void;
};

const initial: Persisted = {
  opened: false,
  favorites: [],
  counts: {},
  duaId: "for-her",
  moodId: "rahma",
  purity: 85,
  volume: 72,
  versions: [],
  spin: 0,
};

export const usePuspit = create<PuspitState>((set, get) => ({
  ...initial,
  hydrated: false,
  tab: "gift",
  setTab: (tab) => set({ tab }),
  openGift: () => set({ opened: true }),
  setDuaId: (duaId) => set({ duaId }),
  setMoodId: (moodId) => set({ moodId }),
  setPurity: (purity) => set({ purity }),
  setVolume: (volume) => set({ volume }),
  toggleFavorite: (duaId) =>
    set((state) => ({
      favorites: state.favorites.includes(duaId)
        ? state.favorites.filter((id) => id !== duaId)
        : [...state.favorites, duaId],
    })),
  increment: (duaId) =>
    set((state) => ({
      counts: { ...state.counts, [duaId]: (state.counts[duaId] ?? 0) + 1 },
    })),
  resetCount: (duaId) =>
    set((state) => ({
      counts: { ...state.counts, [duaId]: 0 },
    })),
  rememberVersion: (version) =>
    set((state) => ({
      versions: [version, ...state.versions.filter((item) => item.id !== version.id)].slice(0, 6),
    })),
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
      const saved = JSON.parse(raw) as Partial<Persisted>;
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
        hydrated: true,
      });
    } catch {
      set({ hydrated: true });
    }
  },
}));

export function persistPuspit() {
  const state = usePuspit.getState();
  if (!state.hydrated) return;
  const payload: Persisted = {
    opened: state.opened,
    favorites: state.favorites,
    counts: state.counts,
    duaId: state.duaId,
    moodId: state.moodId,
    purity: state.purity,
    volume: state.volume,
    versions: state.versions,
    spin: state.spin,
  };
  localStorage.setItem(KEY, JSON.stringify(payload));
}
