import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Card.module.scss";

const Card = ({ agents }) => {
  console.log(agents);
  const navigate = useNavigate();
  return (
    <>
      {agents?.data?.map((agent) => {
        const { displayName, displayIcon, description, uuid } = agent;
        return (
          <div key={uuid} className={styles.cards}>
            <div className={styles.image}>
              <img src={displayIcon} alt="" />
            </div>
            <div className={styles.desc}>
              <div className={styles.name}>
                <h1>{displayName}</h1>
              </div>
              <p>{description}</p>
              <div className={styles.btn}>
                <button
                  onClick={() => navigate(`details/${uuid}`, { state: agent })}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
