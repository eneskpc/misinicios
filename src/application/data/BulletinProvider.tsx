import { useReducer } from "react";
import Competition from "../models/Competition";
import BulletinContext, { bulletinReducer } from "./BulletinContext";

const initialCompetitions: Competition[] = [];

export function BulletinProvider({ children }: { children: React.ReactNode }) {
    const [competitions, dispatch] = useReducer(bulletinReducer, initialCompetitions);

    return (
        <BulletinContext.Provider value={{ competitions, dispatch }}>
            {children}
        </BulletinContext.Provider>
    );
}