import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Auth/Login";
import SignUp from "./Components/Auth/SignUp";
import Navbar from "./Components/Navbar/Navbar";
import ComposeMail from "./pages/ComposeMail/ComposeMail";
import Mail from './pages/Mail'
import Home from "./pages/Home/Home";
import SentMail from "./pages/SentMail";
import Inbox from "./pages/Inbox";
import UpdateUser from "./Components/Auth/UpdateUser";
import "./App.css";
import HomeNav from "./Components/Navbar/HomeNav";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomeNav />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/SignUp" element={<SignUp />} />
        <Route exact path="/Home/UpdateUser" element={<UpdateUser />} />
        <Route exact path="/Mail" element={<Mail />} />
        <Route exact path="/SentMail" element={<SentMail />} />
        <Route exact path="/Inbox" element={<Inbox />} />
        <Route exact path="/ComposeMail" element={<ComposeMail />} />
      </Routes>
    </div>
  );
}

export default App;
