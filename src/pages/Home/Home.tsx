import React, { useState } from 'react';
import styles from './Home.module.css';

import imgMerc1 from '../../assets/HomeImage/Merc.png';
import imgMerc2 from '../../assets/HomeImage/Mer2.png';
import imgMerc3 from '../../assets/HomeImage/Merc3.png';
import imgMerc4 from '../../assets/HomeImage/Merc4.png';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate()
const rent = () => navigate('/SearchAuto')
  const images = [imgMerc3, imgMerc2, imgMerc1, imgMerc4];
  const descriptions = [
    {
      title: "Mercedes AMG GT",
      desc1: "Спортивный автомобиль с мощным двигателем.",
      desc2: "Доступен в аренду по специальной цене.",
    },
    {
      title: "Mercedes G-Class",
      desc1: "Роскошный внедорожник с классическим дизайном.",
      desc2: "Идеален для городских и загородных поездок.",
    },
    {
      title: "Mercedes S-Class",
      desc1: "Автомобиль представительского класса для комфортных поездок.",
      desc2: "Лучший выбор для бизнес-поездок и дальних путешествий.",
    },
    {
      title: "Mercedes EQS",
      desc1: "Электрический седан с футуристическим дизайном.",
      desc2: "Полностью экологичный и экономичный транспорт.",
    },
  ];

  const nextImage = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setTimeout(() => setIsAnimating(false), 1000);
    }
  };

  const prevImage = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setTimeout(() => setIsAnimating(false), 1000);
    }
  };

  return (
    <div className={styles.homeParent}>
      <div className={styles.home}>
        <div className={styles.mainLeft}>
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

          <div className={styles.imageContainer}>
            <div className={styles.imageBlurBackground}></div>
            <img src={images[currentImageIndex]} alt="Mercedes" className={styles.image} />
          </div>

          <div className={styles.textOverlay}>
            <h2>{descriptions[currentImageIndex].title}</h2>
            <p>{descriptions[currentImageIndex].desc1}</p>
            <p>{descriptions[currentImageIndex].desc2}</p>
            <button onClick={() => rent()} className={styles.rentButton}>Взять в аренду</button>
          </div>

          <button className={styles.arrowRight} onClick={nextImage}>
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};