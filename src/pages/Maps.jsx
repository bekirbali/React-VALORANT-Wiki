import axios from "axios";
import React, { useEffect, useState } from "react";
import MapCard from "../components/maps/MapCard";

const Maps = () => {
  const [maps, setMaps] = useState([]);
  const getMaps = async () => {
    const { data } = await axios(
      "https://valorant-api.com/v1/maps?language=tr-TR"
    );
    setMaps(data);
  };
  useEffect(() => {
    getMaps();
  }, []);
  return (
    <>
      <MapCard maps={maps} />
    </>
  );
};

export default Maps;
