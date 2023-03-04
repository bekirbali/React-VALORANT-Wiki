import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./MapCard.module.scss";

const MapCard = ({ maps }) => {
  console.log(maps);
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      {maps?.data?.map((map) => {
        const { displayName, uuid, coordinates, splash } = map;
        return (
          <div key={uuid} className={styles.cards}>
            <div className={styles.info}>
              <h1>{displayName}</h1>
              <h3>{coordinates}</h3>
              <div className={styles.image}>
                <img
                  src={splash}
                  alt={displayName}
                  onClick={() => navigate(`${uuid}`, { state: map })}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MapCard;
