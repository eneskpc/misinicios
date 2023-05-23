import { createContext } from "react";
import Competition from "../models/Competition";
import ActionBase from "../models/ActionBase";

interface BulletinContextType {
  competitions: Competition[];
  dispatch: React.Dispatch<ActionBase<Competition>>;
}

const BulletinContext = createContext<BulletinContextType>({
  competitions: [],
  dispatch: () => null,
});

export function bulletinReducer(
  competitions: Competition[],
  action: ActionBase<any>
) {
  switch (action.type) {
    case "stored": {
      return action.payload;
    }
    case "added": {
      return [...competitions, action.payload];
    }
    case "changed": {
      return competitions.map((t) => {
        if (t.NID === action.payload.NID) {
          return action.payload;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return competitions.filter((t) => t.NID !== action.payload.NID);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export default BulletinContext;
