import "./App.css";
import Homepage from "./Pages/Homepage";
import { Outlet, Route, Router, Routes } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";
import React from "react";


function App() {
 
  return (
    <div className="App"> 
        <Routes>
        <Route path="/" element={<Homepage />} exact />
        <Route path="/chats" element={<Chatpage />} />
        </Routes> 
    </div>
  );
}

export default App;
