import { useState } from "react";

// import { Burger } from './Burger'
import styles from "./Header.module.css";
import { HeaderNav } from "./HeaderNav";
export const Header = () => {
  const [burger, setBurger] = useState(true);
  const burgerClick = () => {
    setBurger(!burger);
  };
  // const [burger,setBurger] = useState(false)
  // function burgerClick () {
  //     setBurger(!burger)
  // }
  return (
    <div className="container">
      <div className={styles.Header}>
        <div>
          <h2>CARENT</h2>
        </div>
        <div>
          <HeaderNav />
        </div>
      </div>
    </div>
  );
};
