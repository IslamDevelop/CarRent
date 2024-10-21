import React, { useState, useEffect, useRef } from 'react';
import styles from './Home.module.css';

import huracanLight from '../../assets/HomeImage/Huracan Light.jpg';
import aventador from '../../assets/HomeImage/Aventador.jpg';
import mclaren from '../../assets/HomeImage/McLaren.jpg';
import labmorghini from '../../assets/HomeImage/Merc4.jpg';
import GT from '../../assets/HomeImage/GT S.jpg';

export const Home = () => {

  const [itemActive, setItemActive] = useState(0);
  const items = [
    { src: labmorghini, title: 'The Perfect Road Trip', text: 'A sleek convertible roars to life as the driver hits the gas, ready for adventure. The open road stretches ahead, lined with scenic views and endless possibilities.' },
    { src: aventador, title: 'Choosing the Right Rental Car', text: 'Customers browse through a variety of cars, from compact sedans to spacious SUVs, at the rental desk. Friendly staff provide recommendations based on budget and travel needs.' },
    { src: GT, title: 'Exploring the City', text: 'A stylish hatchback glides through bustling city streets, navigating traffic with ease. The driver stops at popular landmarks, capturing moments with quick photos. ' },
    { src: mclaren, title: 'Driving Through Nature', text: 'An all-terrain vehicle tackles rugged trails, showcasing its power and versatility in the wild. Passengers enjoy breathtaking views of mountains and forests as they cruise along winding paths.' },
    { src: huracanLight, title: 'Returning the Rental Car', text: 'As the sun sets, the driver pulls into the rental agency, the day’s adventures fresh in their mind. They fill out the return paperwork while the staff inspects the vehicle for any damages.' },
  ];

  const thumbnails = items; 
  const countItem = items.length;

  const sliderInterval = useRef(null); 


  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(sliderInterval.current);
  }, []);

  const startAutoSlide = () => {
    sliderInterval.current = setInterval(() => {
      handleNext();
    }, 6000); 
  };


  const handleNext = () => {
    setItemActive((prevItem) => (prevItem + 1) % countItem);
  };


  const handlePrev = () => {
    setItemActive((prevItem) => (prevItem - 1 + countItem) % countItem);
  };


  const showSlider = (index) => {
    setItemActive(index);
    clearInterval(sliderInterval.current); 
    startAutoSlide(); 
  };


  const handleThumbnailClick = (index) => {
    showSlider(index);
  };

  return (
    <div className={styles.homeParent}>
      <div className={styles.slider}>

        <div className={styles.list}>
          {items.map((item, index) => (
            <div key={index} className={`${styles.item} ${index === itemActive ? styles.active : ''}`}>
              <img src={item.src} alt={item.title} />
              <div className={styles.content}>
                <p>design</p>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.arrows}>
          <button id="prev" onClick={handlePrev}>&lt;</button>
          <button id="next" onClick={handleNext}>&gt;</button>
        </div>

        <div className={styles.thumbnail}>
          {thumbnails.map((thumbnail, index) => (
            <div
              key={index}
              className={`${styles.item} ${index === itemActive ? styles.active : ''}`}
              onClick={() => handleThumbnailClick(index)}
            >
              <img src={thumbnail.src} alt={`Thumbnail ${index + 1}`} />
              <div className={styles.content}>Name Slider</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  
};