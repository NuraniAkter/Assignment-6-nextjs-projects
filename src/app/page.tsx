// Next.js Link component
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-[#0b0c0f]">

      {/* Hero Section */}
      <section className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">

          {/* Hero Text */}
          <div>
            {/* Small heading */}
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#ccff00]">
              Workout Library
            </p>

            {/* Main heading */}
            <h1 className="max-w-xl text-5xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Train with intent.
              <br />
              Log every set.
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-lg text-sm leading-6 text-[#858991] sm:text-base">
              Twelve lifts covering every major muscle group.
              Choose your workout, track your progress, and
              train with purpose.
            </p>

            {/* Browse button */}
            <Link
              href="#library"
              className="mt-8 inline-flex items-center gap-3 rounded-md bg-[#ccff00] px-6 py-3 text-xs font-black uppercase tracking-wide text-black transition hover:brightness-90"
            >
              Browse Workouts

              {/* Arrow */}
              <span className="text-lg">→</span>
            </Link>
          </div>

          {/* Hero Image */}
          <div className="overflow-hidden rounded-xl border border-[#272a31] bg-[#15171c]">
            <img
              src="/banner.png"
              alt="Workout banner"
              className="h-auto max-h-[440px] w-full object-contain"
            />
          </div>

        </div>
      </section>

      {/* Library Section */}
      <section
        id="library"
        className="mx-auto max-w-[1400px] px-4 pb-16 sm:px-6 lg:px-8"
      >
        <div className="border-t border-[#272a31] pt-10">

          {/* Library heading */}
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ccff00]">
            The Library
          </p>

          <h2 className="mt-2 text-3xl font-black uppercase text-white sm:text-4xl">
            Workout Library
          </h2>

          <p className="mt-3 text-sm text-[#858991]">
            Twelve lifts covering every major muscle group.
          </p>

        </div>
      </section>

    </main>
  );
}