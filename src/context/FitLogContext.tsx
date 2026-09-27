"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from "react";

import { IWorkout } from "@/types/workout.type";

interface FitLogContextType {
    plan: IWorkout[];
    saved: IWorkout[];
    done: number[];

    addToPlan: (workout: IWorkout) => void;
    removeFromPlan: (id: number) => void;

    saveWorkout: (workout: IWorkout) => void;
    removeFromSaved: (id: number) => void;

    markAsDone: (id: number) => void;

    isInPlan: (id: number) => boolean;
    isSaved: (id: number) => boolean;
    isDone: (id: number) => boolean;
}

const FitLogContext = createContext<
    FitLogContextType | undefined
>(undefined);

export const FitLogProvider = ({
    children,
}: {
    children: ReactNode;
}) => {
    const [plan, setPlan] = useState<IWorkout[]>([]);
    const [saved, setSaved] = useState<IWorkout[]>([]);
    const [done, setDone] = useState<number[]>([]);

    useEffect(() => {
        const storedPlan = localStorage.getItem("fitlog-plan");
        const storedSaved = localStorage.getItem("fitlog-saved");
        const storedDone = localStorage.getItem("fitlog-done");

        if (storedPlan) {
            setPlan(JSON.parse(storedPlan));
        }

        if (storedSaved) {
            setSaved(JSON.parse(storedSaved));
        }

        if (storedDone) {
            setDone(JSON.parse(storedDone));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("fitlog-plan", JSON.stringify(plan));
    }, [plan]);

    useEffect(() => {
        localStorage.setItem("fitlog-saved", JSON.stringify(saved));
    }, [saved]);

    useEffect(() => {
        localStorage.setItem("fitlog-done", JSON.stringify(done));
    }, [done]);

    const addToPlan = (workout: IWorkout) => {
        if (plan.length >= 5) {
            return;
        }

        const alreadyAdded = plan.some(
            (item) => item.id === workout.id
        );

        if (alreadyAdded) {
            return;
        }

        setPlan((prev) => [...prev, workout]);
    };

    const removeFromPlan = (id: number) => {
        setPlan((prev) =>
            prev.filter((item) => item.id !== id)
        );

        setDone((prev) =>
            prev.filter((itemId) => itemId !== id)
        );
    };

    const saveWorkout = (workout: IWorkout) => {
        const alreadySaved = saved.some(
            (item) => item.id === workout.id
        );

        if (alreadySaved) {
            return;
        }

        setSaved((prev) => [...prev, workout]);
    };

    const removeFromSaved = (id: number) => {
        setSaved((prev) =>
            prev.filter((item) => item.id !== id)
        );
    };

    const markAsDone = (id: number) => {
        setDone((prev) => {
            if (prev.includes(id)) {
                return prev;
            }

            return [...prev, id];
        });
    };

    const isInPlan = (id: number) => {
        return plan.some((item) => item.id === id);
    };

    const isSaved = (id: number) => {
        return saved.some((item) => item.id === id);
    };

    const isDone = (id: number) => {
        return done.includes(id);
    };

    return (
        <FitLogContext.Provider
            value={{
                plan,
                saved,
                done,
                addToPlan,
                removeFromPlan,
                saveWorkout,
                removeFromSaved,
                markAsDone,
                isInPlan,
                isSaved,
                isDone,
            }}
        >
            {children}
        </FitLogContext.Provider>
    );
};

export const useFitLog = () => {
    const context = useContext(FitLogContext);

    if (!context) {
        throw new Error(
            "useFitLog must be used inside FitLogProvider"
        );
    }

    return context;
};