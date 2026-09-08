import logoAsset from "@/assets/logo-lpweb.jpg.asset.json";

export function Logo({ className }: { className?: string }) {
  return (
    <div className="relative inline-flex shrink-0">
      <div
        aria-hidden
        className="absolute -inset-2 rounded-2xl bg-primary/50 blur-2xl"
      />
      <img
        src={logoAsset.url}
        alt="LPweb.dev"
        className={`relative rounded-xl bg-surface-elevated/80 p-1 ring-2 ring-primary/30 shadow-glow ${className}`}
        width={160}
        height={160}
      />
    </div>
  );
}
