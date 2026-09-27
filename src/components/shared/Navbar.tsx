"use client";

// Next.js Image component
import Image from "next/image";

// Next.js Link component
import Link from "next/link";

// Current route পাওয়ার জন্য
import { usePathname } from "next/navigation";

// Plan এবং Saved data পাওয়ার জন্য
import { useFitLog } from "@/context/FitLogContext";

export default function Navbar() {
  const pathname = usePathname();

  const { plan, saved } = useFitLog();

  // Workout page active কিনা
  const isWorkoutActive =
    pathname === "/" || pathname.startsWith("/workout");

  // My Plan page active কিনা
  const isPlanActive = pathname === "/my-plan";

  return (
    <header className="border-b border-[#22252b] bg-[#0b0c0f]">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
        >
          <Image
            src="/logo.png"
            alt="FitLog Logo"
            width={32}
            height={32}
            priority
            className="h-8 w-8 object-contain"
          />

          {/* FITLOG text */}
          <span className="text-sm font-black tracking-[0.16em] text-white">
            FITLOG
          </span>
        </Link>

        {/* Navigation */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 sm:flex">

          {/* Workout */}
          <Link
            href="/"
            className={`rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-wide transition ${
              isWorkoutActive
                ? "bg-[#ccff00] text-black"
                : "text-[#858991] hover:text-white"
            }`}
          >
            Workout
          </Link>

          {/* My Plan */}
          <Link
            href="/my-plan"
            className={`rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-wide transition ${
              isPlanActive
                ? "bg-[#ccff00] text-black"
                : "text-[#858991] hover:text-white"
            }`}
          >
            My Plan
          </Link>

        </nav>

        {/* Plan and Saved counters */}
        <div className="flex items-center gap-2">

          {/* Plan */}
          <Link
            href="/my-plan"
            className="flex items-center gap-1.5 rounded-full bg-[#ccff00] px-3 py-1.5 text-[9px] font-black uppercase text-black"
          >
            <span>Plan</span>
            <span>{plan.length}</span>
          </Link>

          {/* Saved */}
          <Link
            href="/my-plan"
            className="flex items-center gap-1.5 rounded-full border border-[#383b42] px-3 py-1.5 text-[9px] font-bold uppercase text-[#999ca4]"
          >
            <span>Saved</span>
            <span className="text-white">
              {saved.length}
            </span>
          </Link>

        </div>
      </div>

      {/* Mobile navigation */}
      <div className="border-t border-[#1d1f24] px-4 py-2 sm:hidden">
        <nav className="flex justify-center gap-2">

          <Link
            href="/"
            className={`rounded-full px-4 py-1.5 text-[10px] font-bold uppercase ${
              isWorkoutActive
                ? "bg-[#ccff00] text-black"
                : "text-[#858991]"
            }`}
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className={`rounded-full px-4 py-1.5 text-[10px] font-bold uppercase ${
              isPlanActive
                ? "bg-[#ccff00] text-black"
                : "text-[#858991]"
            }`}
          >
            My Plan
          </Link>

        </nav>
      </div>
    </header>
  );
}