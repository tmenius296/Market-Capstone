import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/pages/Home";
import TopNav from "./components/TopNav";
import About from "./components/pages/About";
import { Route, Routes } from "react-router-dom";
import User from "./components/pages/User";

function App() {
  const [backendData, setBackendData] = useState([{}]);
  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);
  return (
    <>
      <TopNav></TopNav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <div className="server-response">
        {typeof backendData.users === "undefined" ? (
          <p>loading...</p>
        ) : (
          backendData.users.map((user, i) => <p key={i}>{user}</p>)
        )}
      </div>
    </>
  );
}

export default App;
