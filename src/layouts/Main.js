import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../componenets/homepage/HomePage";
const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
