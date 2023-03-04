import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./WeaponCard.module.scss";
const WeaponCard = ({ weapons }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      {weapons?.data?.map((weapon) => {
        const { displayName, displayIcon, uuid } = weapon;
        return (
          <div
            key={uuid}
            className={styles.cards}
            onClick={() => navigate(`${uuid}`, { state: weapon })}
          >
            <img src={displayIcon} alt="" />
            <h2>{displayName}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default WeaponCard;
