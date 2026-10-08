import { Button } from "../../ui/Button";
import { dict, type Lang } from "@/lib/i18n";
import {
  DockerIcon,
  MongoIcon,
  NextJs,
  NodeJs,
  PostgreeSQL,
  PostMan,
  ReactIcon,
  Supabase,
  TailwindCss,
  TypeScript,
} from "../../svg/Icon";

export default function Hero({ lang }: { lang: Lang }) {
  const t = dict[lang];
  const techIcons = [
    <ReactIcon key="react1" />,
    <MongoIcon key="mongo" />,
    <Supabase key="supabase" />,
    <NextJs key="nextjs" />,
    <DockerIcon key="docker" />,
    <NodeJs key="nodejs" />,
    <PostgreeSQL key="postgres" />,
    <PostMan key="postman" />,
    <TypeScript key="typescript" />,
    <TailwindCss key="tailwind" />,
  ];

  const Icons = [...techIcons, ...techIcons];

  return (
    <>
      <section className="px-4 sm:px-6 md:px-12 flex flex-col py-8 md:py-8">
        <div className="mx-auto max-w-5xl w-full flex flex-col">
          <div className="py-14 text-center lg:py-20">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-4 h-10 mb-10 text-sm font-semibold text-foreground">
              {t.hello}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-6">
              Full Stack Engineer
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.tagline}
            </p>

            <Button
              label="CV Download"
              href="/CV_TebingRizkyTsaniansyah.pdf"
              download="CV_TebingRizkyTsaniansyah.pdf"
            />
          </div>
          <div className="px-4 sm:px-6 md:px-12 py-4 mb-14">
            <div className="mx-auto max-w-5xl">
              <div className="w-full inline-flex flex-nowrap overflow-hidden py-8 lg:py-8 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_svg]:h-10 [&_svg]:w-10 animate-[scroll-left_30s_linear_infinite]">
                  {Icons.map((icons, index) => (
                    <li key={index}>{icons}</li>
                  ))}
                </ul>

                <ul
                  className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_svg]:h-10 [&_svg]:w-10 animate-[scroll-left_30s_linear_infinite]"
                  aria-hidden="true"
                >
                  {Icons.map((icons, index) => (
                    <li key={index}>{icons}</li>
                  ))}
                </ul>

                {/* <Link href="#about" className="animate-bounce text-muted-foreground">
            <ScrollDown />
            </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
