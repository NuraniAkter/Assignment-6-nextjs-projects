import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-[#22252b] bg-[#090a0c]">
            <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">

                <Link href="/">
                    <Image
                        src="/logo.png"
                        alt="FitLog"
                        width={80}
                        height={28}
                        className="w-[70px] object-contain"
                    />
                </Link>

                <p className="text-center text-[10px] text-[#656870]">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>

            </div>
        </footer>
    );
}