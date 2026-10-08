"use client";

import Image from "next/image";
import {
  LoveAwal,
  LoveIcon,
  MusicIcon,
  SaveIcon,
  VerifiedBadge,
  SaveAwal,
  GithubIcon,
  FigmaIcon,
} from "@/components/svg/Icon";
import ReadMore from "@/components/Shared/ReadMore";
import ShareMenu from "@/components/Shared/ShareMenu";
import { useState } from "react";

// Interface untuk type safety
interface ProjectCard {
  id: number;
  title: string;
  logo: string;
  image: string;
  buttonText: string;
  text: string;
  href?: string;
  button?: string;
  technologies?: string[];
  liveUrl?: string;
}

const cards: ProjectCard[] = [
  {
    id: 1,
    title: "Rise Bar Indonesia – Landing Page Inovasi Pangan Lokal",
    logo: "/logo.svg",
    image: "/project_1.webp",
    buttonText: "Lihat Detail",
    text: "Web Developer & UI Designer untuk landing page Rise Bar, inovasi pangan lokal penerima pendanaan PKM-K Kemdikbudristek. Dibangun dengan Next.js, TypeScript, dan Tailwind CSS.",
    href: "https://github.com/Tebing27/rise-bar-final",
    button: "Github",
    technologies: ["TypeScript", "Tailwind CSS", "Next.js"],
    liveUrl: "https://www.risebar.id/",
  },
  {
    id: 4,
    title: `UMKM Kreator – Top 10 Finalist: Alibaba Cloud "AI × Creativity" Competition`,
    logo: "/logo.svg",
    image: "/project_4.webp",
    text: "Top 10 Finalis dari 100+ tim di kompetisi Alibaba Cloud \"AI × Creativity\". Platform yang memadukan desain dan AI agar UMKM lokal naik kelas lewat digitalisasi yang cerdas dan efisien.",
    buttonText: "Lihat Detail",
    href: "https://github.com/Tebing27/umkm-kreator",
    button: "Github",
    technologies: ["React.js", "Tailwind CSS"],
    liveUrl: "https://umkmkreator.vercel.app/",
  },
  {
    id: 7,
    title: "UI/UX Design - Website Resmi Masjid Ar-Raudhah",
    logo: "/logo.svg",
    image: "/project_7.webp",
    text: "UI/UX website resmi Masjid Ar-Raudhah yang sudah dipakai publik: jadwal sholat, kajian, artikel, dan donasi online. Desain modern, responsif, dan mudah diakses.",
    buttonText: "Lihat Detail",
    technologies: ["UI/UX", "Figma", "Design System"],
    liveUrl: "https://masjidarraudhah.or.id/",
  },
  {
    id: 3,
    title: "Winner Project: 2nd Place Cloud Computing Club Competition (C4) DKI Jakarta",
    logo: "/logo.svg",
    image: "/project_3.webp",
    text: "Juara 2 Cloud Computing Club Competition (C4) tingkat DKI Jakarta. Website dibuat dengan HTML, CSS, dan JavaScript.",
    buttonText: "Lihat Detail",
    href: "https://github.com/Tebing27/lombaC4",
    button: "Github",
    technologies: ["HTML", "Javascript", "CSS"],
    liveUrl: "https://tebing27.github.io/lombaC4",
  },
  {
    id: 2,
    logo: "/logo.svg",
    title: "ITechno 49 – Membangun Komunitas IT Sekolah Melalui Platform Digital",
    image: "/project_2.webp",
    buttonText: "Lihat Detail",
    text: "Platform informasi, galeri karya, dan kolaborasi untuk ekskul ITechno SMAN 49 Jakarta. Proyek pertama saya sebagai web developer.",
    href: "https://github.com/Tebing27/ITechno49",
    button: "Github",
    technologies: ["HTML", "Javascript", "CSS"],
    liveUrl: "https://i-techno49.vercel.app/",
  },

  {
    id: 5,
    title: "Website Design - Lomba Multimedia (UPNVJ) in Action 2025",
    logo: "/logo.svg",
    image: "/project_5.webp",
    text: "Website responsif untuk lomba Multimedia (UPNVJ) in Action 2025, dengan performa cepat dan pengalaman pengguna yang intuitif.",
    buttonText: "Lihat Detail",
    href: "https://github.com/Tebing27/wia-mamung",
    button: "Github",
    technologies: ["React.js", "Tailwind CSS"],
    liveUrl: "https://wia-mamung-nine.vercel.app/",
  },
  {
    id: 6,
    title: "UI/UX Design - Lomba Multimedia (UPNVJ) in Action 2025",
    logo: "/logo.svg",
    image: "/project_6.webp",
    text: "LinkSub: konsep aplikasi sub-wallet kolaboratif untuk Multimedia (UPNVJ) in Action 2025, dengan voting transaksi, notifikasi real-time, dan transparansi aktivitas.",
    buttonText: "Lihat Detail",
    href: "https://www.figma.com/proto/KWCL0IYCsEo8uaabmxpcjr/Lomba-MIA2025?page-id=0%3A1&node-id=344-4236&p=f&viewport=263%2C343%2C0.02&t=se0h1y1ADyIoIitK-9&scaling=scale-down&content-scaling=fixed&starting-point-node-id=344%3A4236&show-proto-sidebar=1",
    button: "Figma",
    technologies: ["UI/UX", "Figma", "Design System"],
  },

];

export default function PortfolioSection() {
  const [likedProjects, setLikedProjects] = useState<Set<number>>(new Set());
  const [savedProjects, setSavedProjects] = useState<Set<number>>(new Set());

  const toggleLike = (id: number) => {
    setLikedProjects((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const toggleSave = (id: number) => {
    setSavedProjects((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const handleGithubClick = (href: string) => {
    window.open(href, "_blank", "noopener,noreferrer");
  };

  const handleLiveDemo = (url?: string) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="work" className="px-4 sm:px-6 md:px-12 py-8 mt-12 min-h-screen">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="font-extrabold text-3xl md:text-4xl text-center">
            PORTFOLIO
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 items-start">
          {cards.map((card) => (
            <article
              key={card.id}
              className="bg-card text-card-foreground rounded-2xl shadow-lg hover:shadow-xl dark:shadow-none dark:hover:shadow-primary dark:hover:border-primary/30 transition-all duration-300 overflow-hidden border border-border flex flex-col"
            >
              {/* Header */}
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-muted w-12 h-12 flex items-center justify-center">
                      <Image
                        src={card.logo}
                        alt={`${card.title} logo`}
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1">
                        <h2 className="font-semibold text-foreground">
                          Tebing
                        </h2>
                        <VerifiedBadge />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Jagakarsa
                      </p>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MusicIcon />
                        <span>Taylor</span>
                      </div>
                    </div>
                  </div>
                  <ShareMenu title={card.title} url={card.liveUrl ?? card.href} />
                </div>

                {/* Project Image */}
                <div className="relative h-48 w-full mb-4 bg-muted rounded-lg overflow-hidden shrink-0">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMTU1IDEwMDAiPjxwYXRoIGQ9Im01NzcuMyAwIDU3Ny40IDEwMDBIMHoiIGZpbGw9IiNmZmYiLz48L3N2Zz4="
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between items-center mb-3">
                  <button
                    onClick={() => toggleLike(card.id)}
                    className="p-2 hover:bg-accent rounded-full transition-all duration-200 hover:scale-110"
                    aria-label={
                      likedProjects.has(card.id)
                        ? "Unlike project"
                        : "Like project"
                    }
                  >
                    {likedProjects.has(card.id) ? (
                      <LoveIcon className="text-red-500" />
                    ) : (
                      <LoveAwal className="text-muted-foreground" />
                    )}
                  </button>

                  <button
                    onClick={() => toggleSave(card.id)}
                    className="p-2 hover:bg-accent rounded-full transition-all duration-200 hover:scale-110"
                    aria-label={
                      savedProjects.has(card.id)
                        ? "Unsave project"
                        : "Save project"
                    }
                  >
                    {savedProjects.has(card.id) ? (
                      <SaveAwal className="text-blue-500" />
                    ) : (
                      <SaveIcon className="text-muted-foreground" />
                    )}
                  </button>
                </div>

                {/* Project Info */}
                <div className="space-y-3 flex flex-col flex-grow">
                  <div>
                    <h3 className="font-bold text-xl text-foreground mb-2">
                      {card.title}
                    </h3>
                    <div className="text-muted-foreground">
                      <ReadMore id={`read-more-${card.id}`} text={card.text} />
                    </div>
                  </div>

                  {/* Technologies */}
                  {card.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {card.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-muted text-foreground border border-border text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2 mt-auto">
                    {card.href && card.button && (
                      <button
                        onClick={() => handleGithubClick(card.href!)}
                        className="flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-lg hover:opacity-90 transition-colors font-medium"
                      >
                        {card.button === "Figma" ? (
                          <FigmaIcon className="w-4 h-4" />
                        ) : (
                          <GithubIcon className="w-4 h-4" />
                        )}
                        {card.button}
                      </button>
                    )}

                    {card.liveUrl && (
                      <button
                        onClick={() => handleLiveDemo(card.liveUrl)}
                        className="flex items-center gap-2 px-4 py-2 border border-border text-foreground rounded-lg hover:bg-accent transition-colors font-medium"
                      >
                        🚀 Demo
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
