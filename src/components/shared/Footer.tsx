// Next.js Link component
import Link from "next/link";

// Next.js Image component
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#24262d] bg-[#090a0c]">
      <div className="mx-auto flex min-h-[100px] max-w-[1400px] items-center justify-between px-4 py-7 sm:px-6 lg:px-8">

        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          {/* FITLOG logo */}
          <Image
            src="/logo.png"
            alt="FITLOG logo"
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
          />

          {/* FITLOG text */}
          <span className="text-base font-black tracking-[0.18em] text-white">
            FITLOG
          </span>
        </Link>

        {/* Copyright */}
        <p className="text-right text-[10px] text-[#777b84]">
          © 2026 FitLog — Workout Library.
          <br className="sm:hidden" />
          Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}