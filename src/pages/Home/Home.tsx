import React, { useState, useEffect, useRef } from 'react';
import styles from './Home.module.css';

import huracanLight from '../../assets/HomeImage/Huracan Light.jpg';
import aventador from '../../assets/HomeImage/Aventador.jpg';
import mclaren from '../../assets/HomeImage/McLaren.jpg';
import labmorghini from '../../assets/HomeImage/Merc4.jpg';

export const Home = () => {
  // Состояния
  const [itemActive, setItemActive] = useState(0);
  const items = [
    { src: labmorghini, title: 'Slider 12', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.' },
    { src: aventador, title: 'Slider 20', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.' },
    { src: huracanLight, title: 'Slider 23', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.' },
    { src: mclaren, title: 'Slider 54', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.' },
    { src: huracanLight, title: 'Slider 045', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.' },
  ];

  const thumbnails = items; // То же количество элементов, что и в items
  const countItem = items.length;

  const sliderInterval = useRef(null); // Для сохранения интервала

  // Автопрокрутка слайдера
  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(sliderInterval.current);
  }, []);

  const startAutoSlide = () => {
    sliderInterval.current = setInterval(() => {
      handleNext();
    }, 6000); // 6 секунд для автопрокрутки
  };

  // Следующий слайд
  const handleNext = () => {
    setItemActive((prevItem) => (prevItem + 1) % countItem);
  };

  // Предыдущий слайд
  const handlePrev = () => {
    setItemActive((prevItem) => (prevItem - 1 + countItem) % countItem);
  };

  // Переключение слайдера вручную и сброс интервала автопрокрутки
  const showSlider = (index) => {
    setItemActive(index);
    clearInterval(sliderInterval.current); // Остановка автопрокрутки
    startAutoSlide(); // Перезапуск автопрокрутки
  };

  // Обработчик клика по миниатюре
  const handleThumbnailClick = (index) => {
    showSlider(index);
  };

  return (
    <div className={styles.homeParent}>
      <div className={styles.slider}>
        {/* list Items */}
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
        // <button className={styles.arrowRight} onClick={nextImage}>
        //     &gt;
        //   </button>