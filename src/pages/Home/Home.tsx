import styles from './Home.module.css'
import imgMerc from '../../assets/HomeImage/Merc.jpg'

import imgFacebook from '../../assets/HomeImage/FaceBook.svg'
import imgInstagram from '../../assets/HomeImage/Instagram.svg'
import imgTwitter from '../../assets/HomeImage/Twitter.svg'
import imgWhatsapp from '../../assets/HomeImage/WhatsApp.svg'
import imgTelegram from '../../assets/HomeImage/Telegram.svg'
import { getAuth } from 'firebase/auth'


export const Home = () => {
  const auth = getAuth()
  console.log(auth)
  return (
    <div className={styles.homeParent}>
    <div className={styles.home}>

        <div className={styles.mainLeft}> 
        <div className={styles.mainLeftIcons}>
          <ul>
            <li><a href="https://www.facebook.com/"><img src = {imgFacebook} alt="FaceBook" /></a></li>
            <li><a href="https://www.instagram.com/"><img src = {imgInstagram} alt="Instagram" /></a></li>
            <li><a href="https://twitter.com/?lang=en"><img src = {imgTwitter} alt="Twitter" /></a></li>
            <li><a href="https://www.whatsapp.com/"><img src = {imgWhatsapp} alt="WhatsApp" /></a></li>
            <li><a href="https://web.telegram.org/"><img src = {imgTelegram} alt="Telegram" /></a></li>
          </ul>
        </div>
        <div className={styles.mainLeftSection}>
          <h1>Enjoy your life with our comfortable cars.</h1>
          <p>Carent, is ready to serve the best experience in car rental.</p>
          <button>Explore Now</button>
        </div>
        </div>

        <div className={styles.mainRight}>
          <img src = {imgMerc} alt="Mercedes" />
        </div>

    </div>
  </div>
  )
}
