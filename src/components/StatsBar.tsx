"use client";

import { useEffect, useRef, useState } from "react";

type Stat =
  | { kind: "count"; value: number; prefix?: string; suffix?: string; label: string }
  | { kind: "text"; value: string; label: string };

const stats: Stat[] = [
  { kind: "count", value: 21, suffix: " Days", label: "Approximate incubation period" },
  { kind: "text", value: "07:00–17:00", label: "Working hours" },
  { kind: "text", value: "Chiredzi", label: "West Road hatchery location" },
  { kind: "count", value: 2, suffix: " Services", label: "Chick sales & custom hatching" },
];

function CountUp({ target, active }: { target: number; active: boolean }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1100;
    const start = performance.now();

    let frame: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target]);

  return <>{value}</>;
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="border-y border-brand-green/10 bg-brand-green">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 sm:px-6 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center lg:text-left">
            <p className="text-2xl font-extrabold text-brand-gold sm:text-3xl">
              {stat.kind === "count" ? (
                <>
                  {stat.prefix}
                  <CountUp target={stat.value} active={active} />
                  {stat.suffix}
                </>
              ) : (
                stat.value
              )}
            </p>
            <p className="mt-1 text-xs font-medium text-white/70 sm:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
