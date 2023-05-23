import { useReducer } from "react";
import CardItem from "../models/CardItem";
import ShoppingCardContext, { shoppingCardReducer } from "./ShoppingCardContext";

const initialCompetitions: CardItem[] = [];

export function ShoppingProvider({ children }: { children: React.ReactNode }) {
    const [items, dispatch] = useReducer(shoppingCardReducer, initialCompetitions);

    return (
        <ShoppingCardContext.Provider value={{ items, dispatch }}>
            {children}
        </ShoppingCardContext.Provider>
    );
}