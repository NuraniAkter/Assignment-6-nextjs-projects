"use client";

// Next.js Link component
import Link from "next/link";

// Workout type
import { IWorkout } from "@/types/workout.type";

// Workout card component
export default function WorkoutCard({
  workout,
}: {
  workout: IWorkout;
}) {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="group block overflow-hidden rounded-xl border border-[#272a31] bg-[#15171c] transition hover:-translate-y-1 hover:border-[#ccff00]"
    >
      {/* Workout Image */}
      <div className="h-52 overflow-hidden bg-[#0f1013]">
        <img
          src={workout.image}
          alt={workout.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      {/* Card Content */}
      <div className="p-5">

        {/* Muscle Groups */}
        <div className="mb-3 flex flex-wrap gap-2">
          {workout.muscleGroups.slice(0, 2).map((muscle) => (
            <span
              key={muscle}
              className="rounded-full border border-[#383b42] px-2.5 py-1 text-[9px] font-bold uppercase text-[#999ca4]"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Workout Name */}
        <h3 className="text-lg font-black uppercase leading-tight text-white">
          {workout.name}
        </h3>

        {/* Equipment */}
        <p className="mt-2 text-xs text-[#777b84]">
          {workout.equipment}
        </p>

        {/* Stats */}
        <div className="mt-5 grid grid-cols-3 border-t border-[#272a31] pt-4">

          {/* Duration */}
          <div>
            <p className="text-[9px] uppercase text-[#777b84]">
              Duration
            </p>

            <p className="mt-1 text-xs font-bold text-white">
              {workout.duration} min
            </p>
          </div>

          {/* Calories */}
          <div>
            <p className="text-[9px] uppercase text-[#777b84]">
              Calories
            </p>

            <p className="mt-1 text-xs font-bold text-white">
              {workout.caloriesBurned}
            </p>
          </div>

          {/* Rating */}
          <div>
            <p className="text-[9px] uppercase text-[#777b84]">
              Rating
            </p>

            <p className="mt-1 text-xs font-bold text-[#ccff00]">
              ★ {workout.rating}
            </p>
          </div>

        </div>
      </div>
    </Link>
  );
}