import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "../Layout";
const Approutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Approutes;
