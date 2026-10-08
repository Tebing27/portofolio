"use client";
import { useEffect, useRef, useState } from "react";
import { KebabMenu } from "@/components/svg/Icon";

type Labels = { share: string; copy: string; copied: string };

export default function ShareMenu({ title, url, labels }: { title: string; url?: string; labels: Labels }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [open]);

  const link = url ?? (typeof window !== "undefined" ? window.location.href : "");
  const u = encodeURIComponent(link);
  const t = encodeURIComponent(title);
  const targets = [
    { name: "WhatsApp", href: `https://wa.me/?text=${t}%20${u}` },
    { name: "X (Twitter)", href: `https://twitter.com/intent/tweet?text=${t}&url=${u}` },
    { name: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${u}` },
    { name: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}` },
    { name: "Telegram", href: `https://t.me/share/url?url=${u}&text=${t}` },
  ];

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  const item = "block w-full text-left px-3 py-2 text-sm hover:bg-accent";

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        aria-label={labels.share}
        aria-expanded={open}
        className="p-1 hover:bg-accent rounded-full transition-colors text-foreground"
      >
        <KebabMenu />
      </button>
      {open && (
        <div className="absolute right-0 z-10 mt-1 w-44 overflow-hidden rounded-lg border border-border bg-popover text-popover-foreground shadow-lg">
          {targets.map((s) => (
            <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className={item}>
              {s.name}
            </a>
          ))}
          <button onClick={copy} className={item}>
            {copied ? labels.copied : labels.copy}
          </button>
        </div>
      )}
    </div>
  );
}
