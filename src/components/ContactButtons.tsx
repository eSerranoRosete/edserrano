"use client";

import { useAppState } from "@/hooks/useAppState";
import Link from "next/link";

export const ContactButtons = () => {
  const colors = useAppState((s) => s.colors);

  return (
    <div className="w-full grid grid-cols-2 gap-2 text-center mt-5">
      <Link
        target="_blank"
        href="https://drive.google.com/file/d/1m9DP9oyasmHVyFbgqONGNGukHNhOisDx/view"
        className="px-6 py-2 rounded-xl border border-black inline-block hover:scale-105 transition-all"
      >
        View Resume
      </Link>
      <Link
        style={{ background: colors.background, color: colors.foreground }}
        target="_blank"
        href="https://www.moduly.app/card/TV83HJZZ0gQ4givRoXkR"
        className="px-6 py-2 rounded-xl border border-black inline-block hover:scale-105 transition-all text-white"
      >
        Get in touch
      </Link>
    </div>
  );
};
