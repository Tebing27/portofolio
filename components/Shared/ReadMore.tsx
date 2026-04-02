"use client";
import { useState } from "react";

interface WordMore {
  id: string;
  text: string;
  amountWords?: number;
}

export default function ReadMore({ id, text, amountWords = 23 }: WordMore) {
  const [isOpen, setOpen] = useState(false);
  const splittedText = text.split("");
  const itCanOverflow = splittedText.length > amountWords;
  const beginText = itCanOverflow
    ? splittedText.slice(0, amountWords - 1).join("")
    : text;
  const endText = splittedText.slice(amountWords - 1).join("");

  return (
    <>
      <p key={id}>
        {beginText}
        {itCanOverflow && (
          <>
            {!isOpen && <span>...</span>}
            <span className={`${!isOpen && "hidden"}`} aria-hidden={!isOpen}>
              {endText}
            </span>
            <span
              className="text-blue-400 ml-2 tex-sm cursor-pointer"
              role="button"
              tabIndex={0}
              aria-expanded={isOpen}
              aria-controls={id}
              onClick={() => setOpen(!isOpen)}
            >
              {isOpen ? "lebih sedikit" : "selengkapnya"}
            </span>
          </>
        )}
      </p>
    </>
  );
}
