import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../componenets/homepage/HomePage";
import { HomepageContext } from "../contexts/HomepageContext";
const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomepageContext>
              <HomePage />
            </HomepageContext>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
