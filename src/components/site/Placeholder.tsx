import { useState } from "react";
import { ImageIcon, PlayCircle, Monitor, Camera, User, Building2 } from "lucide-react";

type Kind = "image" | "video" | "screenshot" | "photo" | "founder" | "logo";

const ICONS: Record<Kind, React.ComponentType<{ className?: string }>> = {
  image: ImageIcon,
  video: PlayCircle,
  screenshot: Monitor,
  photo: Camera,
  founder: User,
  logo: Building2,
};

const LABELS: Record<Kind, string> = {
  image: "Image Placeholder",
  video: "Video Placeholder",
  screenshot: "Screenshot Placeholder",
  photo: "Photo Placeholder",
  founder: "Founder Photo Placeholder",
  logo: "Client Logo",
};

export function Placeholder({
  kind = "image",
  label,
  hint,
  ratio = "16/9",
  className = "",
  src,
}: {
  kind?: Kind;
  label?: string;
  hint?: string;
  ratio?: string;
  className?: string;
  src?: string;
}) {
  const [imgError, setImgError] = useState(false);
  const Icon = ICONS[kind];

  if (src && !imgError) {
    return (
      <div
        className={`relative w-full overflow-hidden rounded-2xl border border-border/40 shadow-card ${className}`}
        style={{ aspectRatio: ratio }}
      >
        <img
          src={src}
          alt={label ?? LABELS[kind]}
          className="w-full h-full object-cover object-top"
          onError={() => setImgError(true)}
        />
      </div>
    );
  }

  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl border border-dashed border-border bg-surface/40 ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-success/5" />
      <div className="relative h-full w-full flex flex-col items-center justify-center text-center px-4">
        <div className="grid place-items-center h-12 w-12 rounded-xl bg-surface-elevated/80 border border-border text-primary mb-3">
          <Icon className="h-5 w-5" />
        </div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">
          {label ?? LABELS[kind]}
        </div>
        {hint && (
          <div className="mt-1 text-[11px] text-muted-foreground/70 max-w-[80%]">
            {hint}
          </div>
        )}
      </div>
      <div className="absolute top-2 right-2 text-[10px] uppercase tracking-wider text-muted-foreground/60 bg-background/60 backdrop-blur px-2 py-0.5 rounded-full border border-border">
        Akan diunggah
      </div>
    </div>
  );
}
