import React from 'react'
import lamba from '../../assets/AboutImage/Dodge.jpg'
import styles from './AboutUs.module.css'


export const AboutUs = () => {
  return (
    <div className={styles.div}>

    <div className={styles.aboutTitle}>
      <h1>About Us</h1>
    </div>
    <div className={styles.aboutMain}>

      <div className={styles.aboutMainLeft}>
        <img src={lamba} alt="" />
      </div>
      
      <div className={styles.aboutMainRight}>
        <p>
          We are a specialized team committed to providing reliable car rental services.
          One of the advantages of renting a car from us is offering competitive and transparent prices.
          By providing services such as comprehensive insurance. 
        </p>
        <p>
          Our Company was build by trust and reputation. 
          We`s know how to make our customers love us by oue high products with affordable prices. 
          Our company was build.
        </p>
        <p>
          We also offer flexible pricing options, including hourly rates, project fees and retainer agreements,
          so you can choose the option that best suits your budget and goals.
        </p>
        <h2>Read More...</h2>
      </div>

    </div>

    </div>
    
  )
}
