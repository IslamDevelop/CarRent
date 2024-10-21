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
          
            {isauth ? <li><Link to="/Profile">Profile</Link></li> : false}
           
         
          <li>
            <Link to="/SearchAuto">Cars</Link>
          </li>
       
          {isauth ? <li><Link to="/MyCars">Add</Link></li> : false}
          
          {isauth ? <li><Link to="/MyOrders">Order</Link></li> : false}
          <li>
            <Link to="/AboutUs">About us</Link>
          </li>
        </ul>
        <div>
         <ul>

          <Link to="/Login">
           {!isauth ?  <button>Login | Sign up</button> : <button onClick={() => signOut(auth)}>Sign out</button>} 
          </Link>
         </ul>
        </div>
      </div>
    </div>
  );
};
