import "./App.css";
import Form from "./components/CAPForm/Form";
import Home from "./components/pages/Home";
import TopNav from "./components/TopNav";
import User from "./components/pages/User";
import About from "./components/pages/About";
import { Route, Routes } from "react-router-dom";

function App() {
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
    </>
  );
}

export default App;
