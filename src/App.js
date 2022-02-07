import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Header from "./components/Header";
import Info from "./page/Info";
import Potion from "./page/Potion";
import Hunt from "./page/Hunt";
import LinkAndUnion from "./page/LinkAndUnion";
import Symbol from "./page/Symbol";
import Boss from "./page/Boss";
import Video from "./page/Video";
import Jobs from "./page/Jobs";
import Weapon from "./page/Weapon";
import Timer from "./page/Timer";
import Murng from "./page/Murng";
import Skills from "./page/Skills";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/MapleStroy-info" element={<Home />} />
        <Route exact path="/MapleStroy-info/Info" element={<Info />} />
        <Route exact path="/MapleStroy-info/Potion" element={<Potion />} />
        <Route exact path="/MapleStroy-info/Hunt" element={<Hunt />} />
        <Route exact path="/MapleStroy-info/Boss" element={<Boss />} />
        <Route exact path="/MapleStroy-info/Video" element={<Video />} />
        <Route exact path="/MapleStroy-info/Jobs" element={<Jobs />} />
        <Route exact path="/MapleStroy-info/Weapon" element={<Weapon />} />
        <Route exact path="/MapleStroy-info/Timer" element={<Timer />} />
        <Route exact path="/MapleStroy-info/Murng" element={<Murng />} />
        <Route exact path="/MapleStroy-info/Skills" element={<Skills />} />
        <Route
          exact
          path="/MapleStroy-info/LinkAndUnion"
          element={<LinkAndUnion />}
        />
        <Route exact path="/MapleStroy-info/Symbol" element={<Symbol />} />
      </Routes>
    </div>
  );
}

export default App;
