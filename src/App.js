import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Detail from "./components/Details";
import Dashboard from "./components/Dashboard";
import Add from "./components/Add";
import Update from "./components/Update";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="detail/:id" element={<Detail />} />
        <Route path="/add" element={<Add />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
