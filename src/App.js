import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Header from "./components/Header";
import Info from "./page/Info";
import Potion from "./page/Potion";
import Hunt from "./page/Hunt";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/MapleStroy-info" element={<Home />} />
        <Route exact path="/MapleStroy-info/Info" element={<Info />} />
        <Route exact path="/MapleStroy-info/Potion" element={<Potion />} />
        <Route exact path="/MapleStroy-info/Hunt" element={<Hunt />} />
      </Routes>
    </div>
  );
}

export default App;
