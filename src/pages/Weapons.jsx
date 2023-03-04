import axios from "axios";
import React, { useEffect, useState } from "react";
import WeaponCard from "../components/weapons/WeaponCard";

const Weapons = () => {
  const [weapons, setWeapons] = useState([]);
  const getWeapons = async () => {
    const { data } = await axios(
      "https://valorant-api.com/v1/weapons?language=tr-TR"
    );
    setWeapons(data);
  };
  useEffect(() => {
    getWeapons();
  }, []);
  return (
    <div>
      <WeaponCard weapons={weapons} />
    </div>
  );
};

export default Weapons;
