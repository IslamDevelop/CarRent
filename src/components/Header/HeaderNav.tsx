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
            <Link to="/">Домой</Link>
          </li>
          <li>
            <Link to="/Profile">Профиль</Link>
          </li>
          <li>
            <Link to="/SearchAuto">Все автомобили</Link>
          </li>
          <li>
            <Link to="/MyCars">Мои авто</Link>
          </li>
          <li>
            <Link to="/MyOrders">Аренда</Link>
          </li>
          <li>
            <Link to="/AboutUs">О нас</Link>
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
