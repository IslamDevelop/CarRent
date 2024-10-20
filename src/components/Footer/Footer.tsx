import React from 'react';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.section}>
        <h3>About Us</h3>
        <p>We are a company dedicated to providing the best services and products for our customers.</p>
      </div>
      <div className={styles.section}>
        <h3>Follow Us</h3>
        <ul className={styles.socials}>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Twitter</a></li>
        </ul>
      </div>
      <div className={styles.section}>
        <h3>Contact</h3>
        <p>Email: info@example.com</p>
        <p>Phone: +123 456 7890</p>
      </div>
      <div className={styles.section}>
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
      </div>
    </footer>
  );
};