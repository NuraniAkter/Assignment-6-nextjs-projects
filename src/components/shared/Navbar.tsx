"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFitLog } from "@/context/FitLogContext";

export default function Navbar() {
    const pathname = usePathname();

    const { plan, saved } = useFitLog();

    const isWorkoutActive =
        pathname === "/" || pathname.startsWith("/workout");

    const isPlanActive = pathname === "/my-plan";

    return (
        <header className="border-b border-[#22252b] bg-[#0b0c0f]">
            <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-8">

                {/* Logo */}
                <Link href="/" className="shrink-0">
                    <Image
                        src="/logo.png"
                        alt="FitLog"
                        width={90}
                        height={32}
                        priority
                        className="h-auto w-[75px] object-contain sm:w-[85px]"
                    />
                </Link>

                {/* Navigation */}
                <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 sm:flex">
                    <Link
                        href="/"
                        className={`rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-wide transition ${isWorkoutActive
                                ? "bg-[#ccff00] text-black"
                                : "text-[#858991] hover:text-white"
                            }`}
                    >
                        Workout
                    </Link>

                    <Link
                        href="/my-plan"
                        className={`rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-wide transition ${isPlanActive
                                ? "bg-[#ccff00] text-black"
                                : "text-[#858991] hover:text-white"
                            }`}
                    >
                        My Plan
                    </Link>
                </nav>

                {/* Counters */}
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
                        <span className="text-white">{saved.length}</span>
                    </Link>

                </div>
            </div>

            {/* Mobile Navigation */}
            <div className="border-t border-[#1d1f24] px-4 py-2 sm:hidden">
                <nav className="flex justify-center gap-2">

                    <Link
                        href="/"
                        className={`rounded-full px-4 py-1.5 text-[10px] font-bold uppercase ${isWorkoutActive
                                ? "bg-[#ccff00] text-black"
                                : "text-[#858991]"
                            }`}
                    >
                        Workout
                    </Link>

                    <Link
                        href="/my-plan"
                        className={`rounded-full px-4 py-1.5 text-[10px] font-bold uppercase ${isPlanActive
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