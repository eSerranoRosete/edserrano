"use client";

import { useAppState } from "@/hooks/useAppState";

export const InfiniteTextBanner = () => {
  const { colors } = useAppState((s) => ({ ...s }));

  return (
    <div
      style={{
        backgroundColor: colors.background,
      }}
      className="w-full h-32 absolute bottom-20 shadow-xl shadow-zinc-300/5 flex items-center text-4xl font-light uppercase line-clamp-1 truncate "
    >
      <div className="invert inline-flex items-center justify-between w-full">
        {words.map((w) => (
          <>
            <div>{w}</div>-
          </>
        ))}
      </div>
    </div>
  );
};

const words = [
  "NextJS",
  "TailwindCSS",
  "React",
  "Vercel",
  "Shadcn",
  "Firebase",
];
