import { IWorkout } from "@/types/workout.type";

const API_URL = "https://api.api-store.workers.dev/api/fitlog";

export const getAllWorkouts = async (): Promise<IWorkout[]> => {
    const res = await fetch(API_URL);

    if (!res.ok) {
        throw new Error("Failed to fetch workouts");
    }

    return res.json();
};

export const getWorkoutById = async (
    id: string
): Promise<IWorkout> => {
    const res = await fetch(`${API_URL}/${id}`);

    if (!res.ok) {
        throw new Error("Workout not found");
    }

    return res.json();
};