import React, { useState } from "react";
import HomePage from "../componenets/homepage/HomePage";

import { homepage } from "./homePage";
export const HomepageContext = ({ children }) => {
  const [menu, setMenu] = useState(false);
  const [hero, setHero] = useState(false);
  return (
    <homepage.Provider value={{ menu, setMenu, hero, setHero }}>
      {children}
    </homepage.Provider>
  );
};
