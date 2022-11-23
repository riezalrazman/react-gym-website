import React from "react";
import { Routes, Route } from "react-router-dom";
import Classes from "./routes/Classes";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Home from "./routes/Home";

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/classes" element={<Classes/>} />
    <Route path="/contact" element={<Contact/>} />
    </Routes>
    </>
  );
}

export default App;
