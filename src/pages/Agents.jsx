import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/agents/Card";

const Agents = () => {
  const [agents, setAgents] = useState([]);
  const getAgents = async () => {
    const { data } = await axios(
      "https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=tr-TR"
    );
    setAgents(data);
  };
  useEffect(() => {
    getAgents();
  }, []);
  return (
    <>
      <Card agents={agents} />
    </>
  );
};

export default Agents;
