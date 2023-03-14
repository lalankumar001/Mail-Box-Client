import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Auth/Login";
import SignUp from "./Components/Auth/SignUp";
import UpdateUser from "./Components/Auth/UpdateUser";
import Navbar from "./Components/Navbar/Navbar";
import About from "./pages/About/About";
import ContactUs from "./pages/Contact/ContactUs";
import Expense from "./pages/Expense";
import Home from "./pages/Home/Home";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/SignUp" element={<SignUp />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/Expenses" element={<Expense />} />
        <Route exact path="/Home/UpdateUser" element={<UpdateUser />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
