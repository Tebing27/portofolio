import Link from "next/link";
import { ArrowIcon, InstagramIcon, LinkedInIcon } from "@/components/svg/Icon";

const contactData = [
  {
    id: 1,
    platform: "Instagram",
    username: "@tebingtsaaa",
    href: "https://www.instagram.com/tebingtsaaa/",
    icon: <InstagramIcon size={40} />,
  },
  {
    id: 2,
    platform: "LinkedIn",
    username: "Tebing",
    href: "https://www.linkedin.com/in/tebing-rizky-7ab6391ba/",
    icon: <LinkedInIcon size={40} />,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="px-4 sm:px-6 md:px-12 py-24 mb-12">
      <div className="mx-auto max-w-5xl w-full">
        <div className="text-center mb-12">
          <h1 className="font-extrabold text-3xl md:text-4xl text-center">
            CONTACT
          </h1>
          <p className="text-muted-foreground mt-4 text-lg">
            Let&apos;s connect and collaborate!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {contactData.map((contact) => (
            <Link
              key={contact.id}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between bg-card border border-border rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="transition-transform duration-300 group-hover:scale-110">
                  {contact.icon}
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-foreground text-xl mb-1">
                    {contact.platform}
                  </span>
                  <span className="text-muted-foreground text-sm font-medium">
                    {contact.username}
                  </span>
                </div>
              </div>
              <div className="bg-muted p-4 rounded-full group-hover:bg-primary transition-all duration-300">
                <ArrowIcon size={20} className="transition-transform duration-300 group-hover:rotate-45" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
