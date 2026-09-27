import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <main className="flex min-h-[75vh] items-center justify-center px-4">
            <div className="text-center">

                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#ccff00]">
                    FITLOG
                </p>

                <h1 className="text-7xl font-black text-white">
                    404
                </h1>

                <h2 className="mt-3 text-xl font-bold uppercase">
                    Workout not found
                </h2>

                <p className="mx-auto mt-3 max-w-md text-sm text-[#777b84]">
                    The page you are looking for does not exist or the
                    workout could not be found.
                </p>

                <Link
                    href="/"
                    className="mt-7 inline-flex items-center gap-2 rounded-md bg-[#ccff00] px-5 py-3 text-xs font-black uppercase text-black transition hover:brightness-90"
                >
                    <ArrowLeft size={15} />
                    Back to workouts
                </Link>

            </div>
        </main>
    );
}