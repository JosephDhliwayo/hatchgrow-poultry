type IconProps = {
  className?: string;
};

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function EggIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3C8.5 7.8 5.5 12.2 5.5 15.8a6.5 6.5 0 0 0 13 0c0-3.6-3-8-6.5-12.8Z" />
    </svg>
  );
}

export function ChickIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <circle cx="10" cy="14.5" r="6" />
      <circle cx="15.5" cy="9" r="4" />
      <path d="M19 8.3 21.8 7.4 20 10.2Z" />
    </svg>
  );
}

export function PinIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 21s7-7.2 7-12a7 7 0 1 0-14 0c0 4.8 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

export function PhoneIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5.5 4h3l1.7 4.2-2.2 1.6a11.3 11.3 0 0 0 5.2 5.2l1.6-2.2 4.2 1.7v3a2 2 0 0 1-2.1 2A15.8 15.8 0 0 1 3.5 6.1 2 2 0 0 1 5.5 4Z" />
    </svg>
  );
}

export function ClockIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="8.25" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function ChatIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M20.5 11.5a8.25 8.25 0 0 1-12 7.35L4 20l1.2-3.9a8.25 8.25 0 1 1 15.3-4.6Z" />
    </svg>
  );
}

export function WarningIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 4 2.5 20.5h19L12 4Z" />
      <path d="M12 10.2v3.8" />
      <circle cx="12" cy="17.2" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function CheckIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 12.5 9.5 17 19 7" />
    </svg>
  );
}
