"use client";

import { useRef, useState } from "react";
import { ChickIcon } from "./icons";

let sharedAudioCtx: AudioContext | null = null;

function playChirp() {
  type WindowWithWebkitAudio = typeof window & {
    webkitAudioContext?: typeof AudioContext;
  };
  const w = window as WindowWithWebkitAudio;
  const AudioCtx = window.AudioContext ?? w.webkitAudioContext;
  if (!AudioCtx) return;

  sharedAudioCtx ??= new AudioCtx();
  const ctx = sharedAudioCtx;
  const now = ctx.currentTime;

  const chirp = (start: number, freqStart: number, freqEnd: number, duration: number) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(freqStart, now + start);
    osc.frequency.exponentialRampToValueAtTime(freqEnd, now + start + duration);

    gain.gain.setValueAtTime(0.0001, now + start);
    gain.gain.exponentialRampToValueAtTime(0.22, now + start + duration * 0.25);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + start + duration);

    osc.connect(gain).connect(ctx.destination);
    osc.start(now + start);
    osc.stop(now + start + duration + 0.02);
  };

  chirp(0, 1900, 2900, 0.11);
  chirp(0.15, 2100, 3100, 0.1);
  chirp(0.32, 1800, 2700, 0.13);
}

export default function ChickSoundButton({ className = "" }: { className?: string }) {
  const [bounce, setBounce] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleClick = () => {
    playChirp();
    setBounce(false);
    requestAnimationFrame(() => setBounce(true));
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setBounce(false), 500);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`inline-flex items-center gap-2 rounded-full border border-brand-green/15 bg-white px-4 py-2 text-sm font-semibold text-brand-green shadow-sm transition-colors hover:border-brand-green/30 ${className}`}
    >
      <ChickIcon className={bounce ? "animate-wiggle h-4 w-4" : "h-4 w-4"} />
      Hear a chick
    </button>
  );
}
