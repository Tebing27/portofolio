"use client";
import { useState } from "react";

interface WordMore {
  id: string;
  text: string;
  amountWords?: number;
  labels: { more: string; less: string };
}

export default function ReadMore({ id, text, amountWords = 110, labels }: WordMore) {
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
              className="text-blue-500 dark:text-primary hover:underline ml-2 tex-sm cursor-pointer"
              role="button"
              tabIndex={0}
              aria-expanded={isOpen}
              aria-controls={id}
              onClick={() => setOpen(!isOpen)}
            >
              {isOpen ? labels.less : labels.more}
            </span>
          </>
        )}
      </p>
    </>
  );
}
