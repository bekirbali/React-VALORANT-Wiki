import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styles from "./MapsDetail.module.scss";
import Spinner from "../../assets/Spinner-2.gif";

const MapsDetail = () => {
  const [mapData, setMapData] = useState("");
  const [loading, setLoading] = useState(true);
  const { state: map } = useLocation();
  const { uuid } = useParams();

  const getMap = async () => {
    const { data } = await axios(`https://valorant-api.com/v1/maps/${uuid}`);
    setMapData(data);
  };

  useEffect(() => {
    setLoading(false);
    getMap();
  }, []);

  return (
    <div>
      {map ? (
        <div
          className={styles.details}
          style={{
            backgroundImage: `url(${map?.splash})`,
            minHeight: "calc(100vh - 84px)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className={styles.map}>
            <h1>{map?.displayName}</h1>
          </div>
          <div className={styles.infos}>
            <img src={map.displayIcon} alt="" />
          </div>
        </div>
      ) : loading ? (
        <div className="text-center mt-4">
          <img src={Spinner} alt="spinner" />
        </div>
      ) : (
        <div
          className={styles.details}
          style={{
            backgroundImage: `url(${mapData?.data?.splash})`,
            minHeight: "calc(100vh - 84px)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className={styles.map}>
            <h1>{mapData?.data?.displayName}</h1>
          </div>
          <div className={styles.infos}>
            <img src={mapData?.data?.displayIcon} alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default MapsDetail;
