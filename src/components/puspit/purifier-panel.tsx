import { useEffect, useRef } from "react";
import { Pause, Play, RotateCcw } from "lucide-react";
import { MOODS, bnDigits, duaById, moodById } from "@/data/catalog";
import { cn } from "@/lib/cn";
import { usePuspit } from "@/store/puspit";
import { usePurifier } from "@/components/puspit/provider";

function readToken(name: string, fallback: string) {
  if (typeof document === "undefined") return fallback;
  const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return value || fallback;
}

export function PurifierPanel() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
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
  const { playing, audioError, playWith, pause, setRoot, setPurity: pushPurity, setVolume: pushVolume, setRaw, getAnalyser } =
    usePurifier();

  const dua = duaById(duaId);
  const mood = moodById(moodId);
  const count = counts[dua.id] ?? 0;

  useEffect(() => {
    setRoot(mood.root);
  }, [mood.root, setRoot]);

  useEffect(() => {
    pushPurity(purity / 100);
  }, [purity, pushPurity]);

  useEffect(() => {
    pushVolume(volume / 100);
  }, [volume, pushVolume]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const freq = new Uint8Array(96);
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
      const radius = Math.min(width, height) * 0.34;

      context.beginPath();
      context.arc(cx, cy, radius, 0, Math.PI * 2);
      context.strokeStyle = mist;
      context.globalAlpha = 0.45;
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
        const amount = playing ? (freq[i] ?? 0) / 255 : 0.08 + (i % 5) * 0.02;
        const angle = (i / bins) * Math.PI * 2 - Math.PI / 2;
        const inner = radius * 0.28;
        const outer = inner + 10 + amount * radius * 0.62;
        context.beginPath();
        context.moveTo(cx + Math.cos(angle) * inner, cy + Math.sin(angle) * inner);
        context.lineTo(cx + Math.cos(angle) * outer, cy + Math.sin(angle) * outer);
        context.strokeStyle = ivory;
        context.globalAlpha = 0.28 + amount * 0.72;
        context.lineWidth = 2;
        context.stroke();
      }
      context.globalAlpha = 1;

      if (!reduced && playing) frame = window.requestAnimationFrame(draw);
    };

    draw();
    return () => window.cancelAnimationFrame(frame);
  }, [getAnalyser, playing, purity]);

  const toggle = () => {
    if (playing) pause();
    else void playWith(mood.root, purity / 100);
  };

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-2xl text-ivory">সুরশুদ্ধি</h1>
        <p className="mt-1 text-sm leading-relaxed text-mist">
          কোলাহলকে ছেঁকে স্থির স্বর। এটি দোয়ার সুর নয় — পড়ার আগে বা পরে শুনবে, পড়ার সময় থামিয়ে দিও।
        </p>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1">
        {MOODS.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={moodId === item.id}
            onClick={() => {
              setMoodId(item.id);
              setRoot(item.root);
            }}
            className={cn(
              "min-h-11 shrink-0 rounded-full border px-3 text-left text-sm",
              moodId === item.id ? "border-gold bg-gold text-ink" : "border-line bg-panel text-ivory",
            )}
          >
            <span className="block font-medium">{item.bn}</span>
            <span className={cn("block text-xs", moodId === item.id ? "text-ink/80" : "text-mist")}>{item.hint}</span>
          </button>
        ))}
      </div>

      <div className="relative overflow-hidden rounded-card border border-line bg-panel">
        <canvas ref={canvasRef} className="h-64 w-full" aria-hidden />
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
          <p className="text-sm text-gold">{mood.bn}</p>
          <p className="font-display text-4xl leading-none text-ivory">{bnDigits(purity)}</p>
          <p className="mt-1 text-xs text-mist">বিশুদ্ধতা</p>
        </div>
      </div>
      <button
        type="button"
        onClick={toggle}
        className="relative z-10 -mt-7 inline-flex size-14 self-center items-center justify-center rounded-full bg-gold text-ink"
        aria-label={playing ? "সুর থামাও" : "সুর চালু করো"}
      >
          {playing ? <Pause className="size-6" /> : <Play className="size-6" />}
      </button>

      {audioError ? <p className="text-sm text-gold">{audioError}</p> : null}

      <label className="block rounded-card border border-line bg-panel px-4 py-3">
        <span className="flex items-center justify-between text-sm">
          <span className="text-mist">অশুদ্ধ</span>
          <span className="text-ivory">শুদ্ধ</span>
        </span>
        <input
          type="range"
          min={0}
          max={100}
          value={purity}
          aria-label="বিশুদ্ধতা"
          onChange={(event) => setPurity(Number(event.target.value))}
        />
      </label>

      <button
        type="button"
        className="min-h-11 rounded-full border border-line bg-panel text-sm text-ivory"
        onPointerDown={() => setRaw(true)}
        onPointerUp={() => setRaw(false)}
        onPointerLeave={() => setRaw(false)}
        onPointerCancel={() => setRaw(false)}
      >
        চেপে ধরো — আগের কোলাহল
      </button>

      <label className="block text-sm text-mist">
        আওয়াজ
        <input
          className="mt-1"
          type="range"
          min={0}
          max={100}
          value={volume}
          aria-label="আওয়াজ"
          onChange={(event) => setVolume(Number(event.target.value))}
        />
      </label>

      <section className="rounded-card border border-line bg-panel px-4 py-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs text-gold">এই আসরের দোয়া</p>
            <h2 className="text-lg text-ivory">{dua.titleBn}</h2>
          </div>
          <button type="button" onClick={() => setTab("duas")} className="min-h-11 shrink-0 text-sm text-gold">
            বদলাও
          </button>
        </div>
        <p lang="ar" dir="rtl" className="arabic mt-3 text-ivory">
          {dua.arabic}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-mist">{dua.meaningBn}</p>
        <p className="mt-2 text-xs text-mist">{dua.source}</p>
        <div className="mt-4 flex items-center gap-2">
          <button
            type="button"
            onClick={() => increment(dua.id)}
            className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full bg-gold px-4 font-medium text-ink"
          >
            পড়েছি +১ · {bnDigits(count)}/{bnDigits(dua.repeats)}
          </button>
          <button
            type="button"
            aria-label="গণনা শূন্য করো"
            onClick={() => resetCount(dua.id)}
            className="inline-flex size-12 items-center justify-center rounded-full border border-line text-ivory"
          >
            <RotateCcw className="size-4" />
          </button>
        </div>
      </section>

      <ol className="grid gap-2 text-sm text-mist">
        <li>১. সুর চালু করে একটু স্থির হও।</li>
        <li>২. থামিয়ে দোয়া পড়ো, তারপর +১।</li>
        <li>৩. শেষ হলে সুর বন্ধ। ঘুমের দোয়ায় সুর রেখে দিও না।</li>
      </ol>
    </div>
  );
}
