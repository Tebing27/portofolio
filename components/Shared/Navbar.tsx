"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "../svg/Icon";
import { useTheme } from "./ThemeIcon";
import { basePath, dict, type Lang } from "@/lib/i18n";

export default function Navbar({ lang }: { lang: Lang }) {
  const home = basePath(lang);
  const t = dict[lang].nav;
  const publicLinks = [
    { href: home, label: t.home },
    { href: `${home === "/" ? "" : home}/#work`, label: t.work },
    { href: `${home === "/" ? "" : home}/#contact`, label: t.contact },
  ];

  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();
  const [isActive, setActive] = useState("");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    if (pathname === home) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              //Layar pertama kali mengambil ID
              setActive(entry.target.id);
            }
          });
        },
        { rootMargin: "-30% 0px -70% 0px" }
      );

      //Logika agar aktif saat halaman paling atas
      const handleScroll = () => {
        if (window.scrollY === 0) {
          setActive("");
        }
      };

      window.addEventListener("scroll", handleScroll);

      //Membaca layar ID
      publicLinks.forEach((link) => {
        if (link.href.includes("#")) {
          const sectionId = link.href.split("#")[1];
          const section = document.getElementById(sectionId);
          if (section) {
            observer.observe(section);
          }
        }
      });
      //Membersihkan useEffect
      return () => {
        observer.disconnect();
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [pathname, home]); // eslint-disable-line react-hooks/exhaustive-deps

  const isActiveHref = (href: string) => {
    //Untuk hash halaman biasa
    if (href === home) {
      return pathname === home && isActive === "";
    }

    //Untuk hash halaman #
    if (href.includes("#")) {
      const sectionId = href.split("#")[1];
      return pathname === home && isActive === sectionId;
    }
    return pathname === href;
  };

  return (
    <>
      <header className="sticky top-4 z-50 mt-4 px-4 sm:px-6 md:px-12">
        <div className="mx-auto max-w-5xl">
          <nav className="relative flex w-full flex-wrap items-center justify-between rounded-xl p-4 backdrop-blur-md md:flex-nowrap md:rounded-2xl bg-[var(--glass-bg)] border border-border shadow-glass">
            <div className="flex">
              <Link href={home} className="inline-flex items-center">
                <h1 className="text-xl">Bing</h1>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              {publicLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium text-foreground transition-all duration-200 relative group ${isActiveHref(link.href)
                    ? "text-foreground border-b-2 border-primary"
                    : "text-foreground"
                    }`}
                  style={{
                    transition:
                      "border-color var(--transition-smooth), border-width var(--transition-smooth)",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            {/* Kanan */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center rounded-full border border-border p-0.5 text-xs font-semibold" aria-label="Language">
                {(["id", "en"] as const).map((l) => (
                  <Link
                    key={l}
                    href={basePath(l)}
                    hrefLang={l}
                    aria-current={l === lang ? "true" : undefined}
                    className={`rounded-full px-2.5 py-1 uppercase transition-colors ${l === lang ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    {l}
                  </Link>
                ))}
              </div>
              <button onClick={toggleTheme} className="cursor-pointer">
                {theme === "light" ? <SunIcon /> : <MoonIcon />}
              </button>

              {/* Tombol Hamburger hanya tampil di mobile */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setOpen(!isOpen)}
                  className="inline-flex p-2 rounded-md text-muted-foreground hover:text-muted"
                  aria-label="Menu"
                >
                  {isOpen ? <CloseIcon /> : <HamburgerIcon />}
                </button>
              </div>
            </div>

            {/* Menu Mobile */}
            {isOpen && (
              <div
                className={`md:hidden absolute top-full left-0  w-full transition-all duration-300 ease-[var(--transition-smooth] ${isOpen
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
                  }`}
              >
                <div className="px-2 pt-2 pb-3 space-y-1 bg-card/95 backdrop-blur-md border border-border rounded-xl  sm:px-3 text-left">
                  {publicLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-muted ${isActiveHref(link.href)
                        ? ""
                        : "text-foreground hover:text-green"
                        }`}
                    >
                      {isActiveHref(link.href) ? (
                        <span className="border-primary border-b-2 text-foreground">
                          {link.label}{" "}
                        </span>
                      ) : (
                        link.label
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </nav>
        </div>
      </header>
    </>
  );
}
