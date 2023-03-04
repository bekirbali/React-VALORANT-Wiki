import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AgentsDetails from "../components/agents/AgentsDetails";
import Navbar from "../components/Navbar";
import Agents from "./Agents";
import Maps from "./Maps";
import Weapons from "./Weapons";
import MapsDetail from "../components/maps/MapsDetail";

const Home = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Agents />} />
        <Route path="/details/:uuid" element={<AgentsDetails />} />
        <Route path="/weapons" element={<Weapons />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/maps/:uuid" element={<MapsDetail />} />
      </Routes>
    </Router>
  );
};

export default Home;
