import React, { useState } from 'react';
import styles from './Home.module.css';

import imgMerc1 from '../../assets/HomeImage/Merc.jpg';
import imgMerc2 from '../../assets/HomeImage/Mer2.jpg';
import imgMerc3 from '../../assets/HomeImage/Merc3.jpg';
import imgMerc4 from '../../assets/HomeImage/Merc4.jpg';

import imgFacebook from '../../assets/HomeImage/FaceBook.svg';
import imgInstagram from '../../assets/HomeImage/Instagram.svg';
import imgTwitter from '../../assets/HomeImage/Twitter.svg';
import imgWhatsapp from '../../assets/HomeImage/WhatsApp.svg';
import imgTelegram from '../../assets/HomeImage/Telegram.svg';

import { getAuth } from 'firebase/auth';

export const Home = () => {
  const auth = getAuth();
  console.log(auth);

  // State для управления сменой изображений
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Массив изображений
  const images = [imgMerc3, imgMerc2, imgMerc1, imgMerc4];

  // Функции для переключения изображений влево и вправо
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.homeParent}>
      <div className={styles.home}>
        <div className={styles.mainLeft}>
          <div className={styles.mainLeftIcons}>
            <ul>
              <li>
                <a href="https://www.facebook.com/">
                  <img src={imgFacebook} alt="FaceBook" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <img src={imgInstagram} alt="Instagram" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/?lang=en">
                  <img src={imgTwitter} alt="Twitter" />
                </a>
              </li>
              <li>
                <a href="https://www.whatsapp.com/">
                  <img src={imgWhatsapp} alt="WhatsApp" />
                </a>
              </li>
              <li>
                <a href="https://web.telegram.org/">
                  <img src={imgTelegram} alt="Telegram" />
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.mainLeftSection}>
            <h1>Enjoy your life with our comfortable cars.</h1>
            <p>Carent, is ready to serve the best experience in car rental.</p>
            <button>Explore Now</button>
          </div>
        </div>

        <div className={styles.mainRight}>

          <button className={styles.arrowLeft} onClick={prevImage}>
            &lt;
          </button>

          <img src={images[currentImageIndex]} alt="Mercedes" />

          <button className={styles.arrowRight} onClick={nextImage}>
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};