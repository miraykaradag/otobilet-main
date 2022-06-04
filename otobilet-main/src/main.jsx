import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import {Context, ContextProvider} from "./context/Context";

import "./index.css";
import Contact from "./views/Contact";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import Tickets from "./views/Tickets";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <AppHeader />
        <div className="container">
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="biletlerim" element={<Tickets />} />
            <Route path="girisyap" element={<Login />} />
            <Route path="kayitol" element={<Register />} />
            <Route path="iletisim" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>

  
);
