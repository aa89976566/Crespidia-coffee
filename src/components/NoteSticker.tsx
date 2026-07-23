type StickerKind = "coffee" | "brunch" | "cake" | "heart" | "star";

export function NoteSticker({
  kind,
  className = "",
}: {
  kind: StickerKind;
  className?: string;
}) {
  return (
    <span
      className={`note-sticker inline-flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-ink bg-yellow shadow-[2px_2px_0_#1d2a2e] ${className}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {kind === "coffee" && (
          <>
            <path d="M6 9h11v6a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4V9z" />
            <path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17" />
            <path d="M9 5c.6.7.6 1.7 0 2.4M12 5c.6.7.6 1.7 0 2.4" />
          </>
        )}
        {kind === "brunch" && (
          <>
            <path d="M4 14c0 4 3.6 7 8 7s8-3 8-7H4z" />
            <path d="M6 11h12l-1.2-5H7.2L6 11z" />
            <path d="M9 4h6" />
          </>
        )}
        {kind === "cake" && (
          <>
            <path d="M4 14h16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4z" />
            <path d="M5 10h14v4H5z" />
            <path d="M12 5c1.4 0 2.4 1.1 2.4 2.4S13.4 9.8 12 9.8 9.6 8.7 9.6 7.4 10.6 5 12 5z" />
          </>
        )}
        {kind === "heart" && (
          <path d="M12 20s-7-4.4-7-9.2C5 8 7 6 9.2 6c1.3 0 2.4.7 2.8 1.7C12.4 6.7 13.5 6 14.8 6 17 6 19 8 19 10.8 19 15.6 12 20 12 20z" />
        )}
        {kind === "star" && (
          <path d="M12 3l2.4 5.4L20 9.3l-4 4.2.9 5.8L12 16.5 7.1 19.3l.9-5.8-4-4.2 5.6-.9L12 3z" />
        )}
      </svg>
    </span>
  );
}
