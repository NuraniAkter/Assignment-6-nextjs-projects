// Next.js Link component
import Link from "next/link";

// 404 Not Found page
export default function NotFound() {
  return (
    <main className="flex min-h-[75vh] items-center justify-center px-4">
      <div className="text-center">

        {/* Brand */}
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#ccff00]">
          FITLOG
        </p>

        {/* 404 number */}
        <h1 className="text-7xl font-black text-white">
          404
        </h1>

        {/* Error title */}
        <h2 className="mt-3 text-xl font-bold uppercase text-white">
          Workout not found
        </h2>

        {/* Description */}
        <p className="mx-auto mt-3 max-w-md text-sm text-[#777b84]">
          The page you are looking for does not exist or the
          workout could not be found.
        </p>

        {/* Back button */}
        <Link
          href="/"
          className="mt-7 inline-flex items-center gap-2 rounded-md bg-[#ccff00] px-5 py-3 text-xs font-black uppercase text-black transition hover:brightness-90"
        >
          <span className="text-base">←</span>
          Back to workouts
        </Link>

      </div>
    </main>
  );
}