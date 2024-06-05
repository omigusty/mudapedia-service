import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "@/pages/";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
