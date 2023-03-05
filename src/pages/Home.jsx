import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AgentsDetails from "../components/agents/AgentsDetails";
import Navbar from "../components/Navbar";
import Agents from "./Agents";
import Maps from "./Maps";
import Weapons from "./Weapons";
import MapsDetail from "../components/maps/MapsDetail";
import WeaponDetail from "../components/weapons/WeaponDetail";
import NotFound from "./NotFound";

const Home = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Agents />} />
        <Route path="/:uuid" element={<AgentsDetails />} />
        <Route path="/weapons" element={<Weapons />} />
        <Route path="/weapons/:uuid" element={<WeaponDetail />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/maps/:uuid" element={<MapsDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default Home;
