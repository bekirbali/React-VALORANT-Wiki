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
    const { data } = await axios(
      `https://valorant-api.com/v1/weapons/${uuid}?language=tr-TR`
    );
    setWeaponData(data);
  };

  useEffect(() => {
    setLoading(false);
    getWeapon();
    console.log(weapon);
  }, []);

  return (
    <>
      {weapon ? (
        <div className={styles.container}>
          <div className={styles.shop}>
            <img src={weapon?.displayIcon} alt="" />
            {/* SHOP STATS */}
            <ul>
              <li>
                <span>Name:</span> <p>{weapon?.displayName}</p>
              </li>
              <li>
                <span>Cost:</span> <p>{weapon?.shopData?.cost}</p>
              </li>
              <li>
                <span>Category:</span> <p>{weapon?.shopData?.category}</p>
              </li>
              <li>
                <span>Magazine:</span>{" "}
                <p>{weapon?.weaponStats?.magazineSize}</p>
              </li>
              <li>
                <span>Fire Rate:</span> <p>{weapon?.weaponStats?.fireRate}</p>
              </li>
              <li>
                <span>Pellet Count:</span>{" "}
                <p>{weapon?.weaponStats?.shotgunPelletCount}</p>
              </li>
            </ul>
          </div>

          {weapon?.weaponStats?.damageRanges && (
            <div className={styles.rangeTitle}>
              <h2>RANGES</h2>
            </div>
          )}
          <div className={styles.ranges}>
            {weapon?.weaponStats?.damageRanges.map((damage, index) => {
              return (
                <div key={index} className={styles.range}>
                  <h3>
                    <span>Range:</span>{" "}
                    <p>
                      ({damage.rangeStartMeters} - {damage.rangeEndMeters}) m{" "}
                    </p>
                  </h3>
                  <h3>
                    <span>Head Shot:</span>{" "}
                    <p>{damage.headDamage.toFixed(1)}</p>
                  </h3>
                  <h3>
                    <span>Body Shot:</span>{" "}
                    <p>{damage.bodyDamage.toFixed(1)}</p>
                  </h3>
                  <h3>
                    <span>Leg Shot:</span> <p>{damage.legDamage.toFixed(1)}</p>
                  </h3>
                </div>
              );
            })}
          </div>

          {/* SKINS */}
          <div className={styles.skinTitle}>
            <h2>SKINS</h2>
          </div>
          <div className={styles.skins}>
            {weapon?.skins
              ?.filter(
                (skin) => !skin.displayName.includes("Rasgele Favori Kaplama")
              )
              .filter(
                (skin) =>
                  !skin.displayName.toLowerCase().includes("standart", "melee")
              )
              .map((skin) => {
                return (
                  <div className={styles.skin}>
                    <img src={skin?.displayIcon} alt="" />
                    <h3>{skin?.displayName}</h3>
                  </div>
                );
              })}
          </div>
        </div>
      ) : loading ? (
        <div className="text-center mt-4">
          <img src={Spinner} alt="spinner" />
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.shop}>
            <img src={weaponData?.data?.displayIcon} alt="" />
            {/* SHOP STATS */}
            <ul>
              <li>
                <span>Name:</span> <p>{weaponData?.data?.displayName}</p>
              </li>
              <li>
                <span>Cost:</span> <p>{weaponData?.data?.shopData?.cost}</p>
              </li>
              <li>
                <span>Category:</span>{" "}
                <p>{weaponData?.data?.shopData?.category}</p>
              </li>
              <li>
                <span>Magazine:</span>{" "}
                <p>{weaponData?.data?.weaponStats?.magazineSize}</p>
              </li>
              <li>
                <span>Fire Rate:</span>{" "}
                <p>{weaponData?.data?.weaponStats?.fireRate}</p>
              </li>
              <li>
                <span>Pellet Count:</span>{" "}
                <p>{weaponData?.data?.weaponStats?.shotgunPelletCount}</p>
              </li>
            </ul>
          </div>

          {weaponData?.data?.weaponStats?.damageRanges && (
            <div className={styles.rangeTitle}>
              <h2>RANGES</h2>
            </div>
          )}
          <div className={styles.ranges}>
            {weaponData?.data?.weaponStats?.damageRanges.map(
              (damage, index) => {
                return (
                  <div key={index} className={styles.range}>
                    <h3>
                      <span>Range:</span>{" "}
                      <p>
                        ({damage.rangeStartMeters} - {damage.rangeEndMeters}) m{" "}
                      </p>
                    </h3>
                    <h3>
                      <span>Head Shot:</span>{" "}
                      <p>{damage.headDamage.toFixed(1)}</p>
                    </h3>
                    <h3>
                      <span>Body Shot:</span>{" "}
                      <p>{damage.bodyDamage.toFixed(1)}</p>
                    </h3>
                    <h3>
                      <span>Leg Shot:</span>{" "}
                      <p>{damage.legDamage.toFixed(1)}</p>
                    </h3>
                  </div>
                );
              }
            )}
          </div>

          {/* SKINS */}
          <div className={styles.skinTitle}>
            <h2>SKINS</h2>
          </div>
          <div className={styles.skins}>
            {weaponData?.data?.skins
              ?.filter(
                (skin) =>
                  !skin.displayName.includes(
                    "Rasgele Favori Kaplama",
                    "random favorite skin"
                  )
              )
              .filter(
                (skin) =>
                  !skin.displayName
                    .toLowerCase()
                    .includes("standart", "melee", "standard")
              )
              .map((skin) => {
                return (
                  <div className={styles.skin}>
                    <img src={skin?.displayIcon} alt="" />
                    <h3>{skin?.displayName}</h3>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
};

export default WeaponDetail;
