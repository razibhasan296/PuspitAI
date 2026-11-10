import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { SoundPurifier } from "@/lib/purifier-engine";

type PurifierApi = {
  playing: boolean;
  audioError: string | null;
  playWith: (root: number, purity: number) => Promise<void>;
  pause: () => void;
  setRoot: (root: number) => void;
  setPurity: (purity: number) => void;
  setVolume: (volume: number) => void;
  setRaw: (raw: boolean) => void;
  getAnalyser: () => AnalyserNode | null;
};

const PurifierContext = createContext<PurifierApi | null>(null);

export function PurifierProvider({ children }: { children: ReactNode }) {
  const engineRef = useRef<SoundPurifier | null>(null);
  const [playing, setPlaying] = useState(false);
  const [audioError, setAudioError] = useState<string | null>(null);

  useEffect(() => {
    const engine = new SoundPurifier();
    engineRef.current = engine;
    return () => {
      engine.dispose();
      engineRef.current = null;
    };
  }, []);

  const getAnalyser = useCallback(() => engineRef.current?.analyser ?? null, []);

  const setRoot = useCallback((root: number) => {
    engineRef.current?.setRoot(root);
  }, []);

  const setPurity = useCallback((purity: number) => {
    engineRef.current?.setPurity(purity);
  }, []);

  const setVolume = useCallback((volume: number) => {
    engineRef.current?.setVolume(volume);
  }, []);

  const setRaw = useCallback((raw: boolean) => {
    engineRef.current?.setRaw(raw);
  }, []);

  const pause = useCallback(() => {
    engineRef.current?.pause();
    setPlaying(false);
  }, []);

  const playWith = useCallback(async (root: number, purity: number) => {
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

  const api = useMemo(
    () => ({ playing, audioError, playWith, pause, setRoot, setPurity, setVolume, setRaw, getAnalyser }),
    [playing, audioError, playWith, pause, setRoot, setPurity, setVolume, setRaw, getAnalyser],
  );

  return <PurifierContext.Provider value={api}>{children}</PurifierContext.Provider>;
}

export function usePurifier() {
  const api = useContext(PurifierContext);
  if (!api) throw new Error("Purifier missing");
  return api;
}
