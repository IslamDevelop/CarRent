import { Link } from "react-router-dom";
import styles from "./HeaderNav.module.css";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useEffect, useState } from "react";
export const HeaderNav = () => {
  const [isauth, setAuth] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setAuth(true);
      } else {
        setAuth(false)
      }
    });
    return () => unsubscribe();
  }, []);


  return (
    <div>
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
          <Link to="/Login">
           {!isauth ?  <button>Вход|Регистрация</button> : <button onClick={() => signOut(auth)}>Выход</button>} 
          </Link>
        </div>
      </div>
    </div>
  );
};
