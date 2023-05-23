import { createContext } from "react";
import CardItem from "../models/CardItem";
import ActionBase from "../models/ActionBase";

interface ShoppingCardContextType {
  items: CardItem[];
  dispatch: React.Dispatch<ActionBase<CardItem>>;
}

const ShoppingCardContext = createContext<ShoppingCardContextType>({
  items: [],
  dispatch: () => null,
});

export function shoppingCardReducer(
  items: CardItem[],
  action: ActionBase<any>
) {
  switch (action.type) {
    case "added": {
      const item = items.find((i) => i.NID === action.payload.NID);
      if (item) {
        if (JSON.stringify(item) === JSON.stringify(action.payload)) {
          return items.filter((t) => t.NID !== action.payload.NID);
        }
        return items.map((t) => {
          if (t.NID === action.payload.NID) {
            return action.payload;
          } else {
            return t;
          }
        });
      }
      return [...items, action.payload];
    }
    case "deleted": {
      return items.filter((t) => t.NID !== action.payload.NID);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export default ShoppingCardContext;
