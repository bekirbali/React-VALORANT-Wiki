import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styles from "./AgentsDetails.module.scss";

const AgentsDetails = () => {
  const [agentData, setAgentData] = useState();
  const { state: agent } = useLocation();

  const { uuid } = useParams();
  const getAgent = async () => {
    const { data } = await axios(
      `https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=tr-TR/${uuid}`
    );
    setAgentData(data);
    console.log(agentData?.data);
  };
  useEffect(() => {
    getAgent();
  }, []);
  return (
    <>
      {agent ? (
        <div className={styles.details}>
          <div className={styles.char}>
            <h1>{agent.displayName}</h1>
            <img src={agent.bustPortrait} alt="" />
            <p>{agent.description}</p>
          </div>
          <div className={styles.abilities}>
            {agent?.abilities?.map((ability, index) => {
              return (
                <div key={index} className={styles.ability}>
                  <h2>{ability.displayName}</h2>
                  <p>{ability.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className={styles.details}>
          <div className={styles.char}>
            <h1>{agentData?.data.displayName}</h1>
            <img src={agentData?.data.bustPortrait} alt="" />
            <p>{agentData?.data.description}</p>
          </div>
          <div className={styles.abilities}>
            {agentData?.data.abilities?.map((ability, index) => {
              return (
                <div key={index} className={styles.ability}>
                  <h2>{ability.displayName}</h2>
                  <p>{ability.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default AgentsDetails;
