import { NAME, type Lang } from "@/lib/i18n";

export default function Footer({ lang }: { lang: Lang }) {
  return (
    <footer className="flex justify-center m-8">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} {NAME}
      </p>
    </footer>
  );
}
