import { Link } from "react-router-dom";
import styles from "./HeaderNav.module.css";
export const HeaderNav = () => {
  return (
    <div className={styles.headerRight}>
      <ul className={styles.ulNav}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Profile">Profile</Link>
        </li>
        <li>
          <Link to="/SearchAuto">Find</Link>
        </li>
        <li>
          <Link to="/MyCars">Cars</Link>
        </li>
        <li>
          <Link to="/MyOrders">Orders</Link>
        </li>
        <li>
          <Link to="/AboutUs">About</Link>
        </li>
      </ul>
      <div>
        <Link to="/">
          <button>Login | Sign up</button>
        </Link>
      </div>
    </div>
  );
};
