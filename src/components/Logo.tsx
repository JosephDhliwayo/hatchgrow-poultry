import Image from "next/image";
import logoIcon from "../../public/logo-icon.png";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export default function Logo({ variant = "light", className = "" }: LogoProps) {
  const textPrimary = variant === "dark" ? "text-white" : "text-brand-green";
  const textSecondary = variant === "dark" ? "text-brand-gold" : "text-brand-gold-dark";
  const subText = variant === "dark" ? "text-white/70" : "text-brand-green/70";

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <Image
        src={logoIcon}
        alt=""
        width={44}
        height={38}
        className="h-8 w-auto shrink-0 sm:h-10"
        priority
      />
      <div className="min-w-0 leading-tight">
        <p className="whitespace-nowrap font-extrabold tracking-tight text-base sm:text-xl">
          <span className={textPrimary}>Hatch</span>
          <span className={textSecondary}>Grow</span>
        </p>
        <p
          className={`hidden text-[10px] font-semibold tracking-[0.2em] uppercase min-[380px]:block sm:text-xs ${subText}`}
        >
          Poultry
        </p>
      </div>
    </div>
  );
}
