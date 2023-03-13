import valoLogo from "../assets/valoLogo.png";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.wiki}>
        <NavLink to="/">
          <img width="100px" src={valoLogo} alt="ValoLogo" />
        </NavLink>
        <h1>VALORANT WIKI</h1>
      </div>
      <ul className={styles.list}>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => {
              return {
                color: isActive && "#ece8e1",
                backgroundColor: isActive && "#f74554",
              };
            }}
          >
            Agents
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/weapons"
            style={({ isActive }) => {
              return {
                color: isActive && "#ece8e1",
                backgroundColor: isActive && "#f74554",
              };
            }}
          >
            Weapons
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/maps"
            style={({ isActive }) => {
              return {
                color: isActive && "#ece8e1",
                backgroundColor: isActive && "#f74554",
              };
            }}
          >
            Maps
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
