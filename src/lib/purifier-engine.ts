const PARTIALS = [0.5, 1, 1.0028, 1.5, 1.5035];
const PARTIAL_GAIN = [0.22, 0.55, 0.34, 0.3, 0.16];

function brownBuffer(ctx: AudioContext, seconds = 2) {
  const length = Math.floor(ctx.sampleRate * seconds);
  const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  let last = 0;
  for (let i = 0; i < length; i += 1) {
    const white = Math.random() * 2 - 1;
    last = (last + 0.02 * white) / 1.02;
    data[i] = last * 3.2;
  }
  return buffer;
}

function hallBuffer(ctx: AudioContext) {
  const length = Math.floor(ctx.sampleRate * 1.8);
  const buffer = ctx.createBuffer(2, length, ctx.sampleRate);
  for (let channel = 0; channel < 2; channel += 1) {
    const data = buffer.getChannelData(channel);
    for (let i = 0; i < length; i += 1) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / length) ** 2.4;
    }
  }
  return buffer;
}

/**
 * Turns a bed of noise into a quiet just-intonation drone.
 * It is an ambience for before or after recitation, never a melody of the dua.
 */
export class SoundPurifier {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private noiseGain: GainNode | null = null;
  private harmGain: GainNode | null = null;
  private lowpass: BiquadFilterNode | null = null;
  private oscs: OscillatorNode[] = [];
  private pluckTimer = 0;
  analyser: AnalyserNode | null = null;
  private alive = true;
  private playing = false;
  private root = 146.83;
  private purity = 0.8;
  private volume = 0.72;
  private raw = false;

  private ensure() {
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
      gain.gain.value = PARTIAL_GAIN[index] ?? 0.2;
      osc.connect(gain);
      gain.connect(harmGain);
      osc.start();
      return osc;
    });

    const dry = ctx.createGain();
    dry.gain.value = 0.86;
    const wet = ctx.createGain();
    wet.gain.value = 0.28;
    const convolver = ctx.createConvolver();
    convolver.buffer = hallBuffer(ctx);

    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -18;
    comp.knee.value = 18;
    comp.ratio.value = 2;
    comp.attack.value = 0.02;
    comp.release.value = 0.28;

    const master = ctx.createGain();
    master.gain.value = 0.0001;
    const analyser = ctx.createAnalyser();
    analyser.fftSize = 256;
    analyser.smoothingTimeConstant = 0.82;

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

  private applyTone(ramp = 0.08) {
    const ctx = this.ctx;
    const noiseGain = this.noiseGain;
    const harmGain = this.harmGain;
    const lowpass = this.lowpass;
    if (!ctx || !noiseGain || !harmGain || !lowpass) return;
    const now = ctx.currentTime;
    const purity = this.raw ? 0.06 : this.purity;
    const noise = 0.14 * (1 - purity) ** 1.35;
    const harm = 0.012 + purity * 0.09;
    const freq = 420 + (1 - purity) ** 0.85 * 7200;
    const q = 0.5 + purity * 6;
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

  private applyVolume(ramp = 0.05) {
    if (!this.ctx || !this.master) return;
    const level = this.playing ? this.volume : 0.0001;
    const now = this.ctx.currentTime;
    if (ramp <= 0) {
      this.master.gain.setValueAtTime(level, now);
      return;
    }
    this.master.gain.setTargetAtTime(level, now, ramp);
  }

  private retune() {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    this.oscs.forEach((osc, index) => {
      osc.frequency.setTargetAtTime(this.root * (PARTIALS[index] ?? 1), now, 0.18);
    });
  }

  setRoot(root: number) {
    this.root = root;
    this.retune();
  }

  setPurity(purity: number) {
    this.purity = Math.min(1, Math.max(0, purity));
    this.applyTone();
  }

  setVolume(volume: number) {
    this.volume = Math.min(1, Math.max(0, volume));
    this.applyVolume();
  }

  setRaw(raw: boolean) {
    this.raw = raw;
    this.applyTone(0.05);
  }

  async play() {
    if (!this.alive) return;
    this.ensure();
    if (!this.ctx) throw new Error("Audio unavailable");
    if (this.ctx.state === "suspended") await this.ctx.resume();
    this.playing = true;
    this.applyVolume(0.06);
    this.applyTone(0.12);
    if (!this.pluckTimer) {
      this.pluckTimer = window.setInterval(() => this.pluck(), 4200);
    }
  }

  pause() {
    this.playing = false;
    this.applyVolume(0.08);
    if (this.pluckTimer) {
      window.clearInterval(this.pluckTimer);
      this.pluckTimer = 0;
    }
  }

  private pluck() {
    const ctx = this.ctx;
    if (!this.playing || !ctx || !this.master || this.purity < 0.45 || this.raw) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "triangle";
    osc.frequency.value = this.root * 1.5;
    const now = ctx.currentTime;
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.03 * this.purity, now + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.35);
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
      } catch {
        /* already stopped */
      }
    });
    void this.ctx?.close();
    this.ctx = null;
  }
}
