import { createContext } from "react";

export const homepage = createContext({
  menu: false,
  setMenu: () => {},
  hero: false,
  setHero: () => {},
});
