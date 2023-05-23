import { useContext } from "react";
import BulletinContext from "../data/BulletinContext";

export function useBulletin() {
  return useContext(BulletinContext);
}
