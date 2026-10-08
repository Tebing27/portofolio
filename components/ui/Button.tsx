interface ButtonProps {
  label: string;
  href?: string;
  download?: string | boolean;
}

export function Button({ label, href, download }: ButtonProps) {
  const commonClass = "relative border-2 border-btn-black bg-primary text-neutral-950 px-10 py-3 font-semibold cursor-pointer inline-block";

  return (
    <div className="relative inline-flex mt-12 transition delay-150 duration-300 ease-in-out hover:-translate-y-1">
      <div className="absolute left-1.5 top-1.5 h-full w-full bg-btn-black"></div>
      {href ? (
        <a href={href} download={download} className={commonClass}>
          {label}
        </a>
      ) : (
        <button className={commonClass}>
          {label}
        </button>
      )}
    </div>
  );
}
