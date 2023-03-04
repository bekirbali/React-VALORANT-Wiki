import valoLogo from "../assets/valoLogo.png";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.wiki}>
        <Link to="/">
          <img width="100px" src={valoLogo} alt="" />
        </Link>
        <h1>VALORANT WIKI</h1>
      </div>
      <ul className={styles.list}>
        <li>
          <Link to="/">Agents</Link>
        </li>
        <li>
          <Link to="/weapons">Weapons</Link>
        </li>
        <li>
          <Link to="/maps">Maps</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
