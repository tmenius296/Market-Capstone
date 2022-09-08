import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/pages/Home";
import TopNav from "./components/TopNav";
import About from "./components/pages/About";
import { Route, Routes } from "react-router-dom";
import User from "./components/pages/User";

function App() {
  const [savedPlans, setSavedPlans] = useState(undefined);

  return (
    <>
      <TopNav></TopNav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home setSavedPlans={setSavedPlans} />} />
          <Route path="/user" element={<User />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
