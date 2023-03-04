import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styles from "./WeaponDetail.module.scss";
import Spinner from "../../assets/Spinner-2.gif";
const WeaponDetail = () => {
  const [weaponData, setWeaponData] = useState();
  const [loading, setLoading] = useState(true);
  const { uuid } = useParams();
  const { state: weapon } = useLocation();

  const getWeapon = async () => {
    const { data } = await axios(`https://valorant-api.com/v1/weapons/${uuid}`);
    setWeaponData(data);
  };

  useEffect(() => {
    setLoading(false);
    getWeapon();
    console.log(weapon);
  }, []);

  return (
    <div>
      <img src={weapon?.displayIcon} alt="" />
      <ul>
        <li>Name: {weapon?.displayName}</li>
        <li>Cost: {weapon?.shopData?.cost}</li>
        <li>Category: {weapon?.shopData?.category}</li>
      </ul>
      <h2>SKINS</h2>
      {weapon?.skins?.map((skin) => {
        return (
          <>
            <img src={skin?.displayIcon} alt="" />
            <h3>{skin?.displayName}</h3>
          </>
        );
      })}
    </div>
  );
};

export default WeaponDetail;
