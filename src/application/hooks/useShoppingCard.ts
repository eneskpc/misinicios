import { useContext } from "react";
import ShoppingCardContext from "../data/ShoppingCardContext";

export function useShoppingCard() {
  return useContext(ShoppingCardContext);
}