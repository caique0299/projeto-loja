import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import styles from '../../styles/footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.slogan}>
        <img src="web-store/frontEnd/public/favicon.ico" alt="Logo da Loja" />
        <h2>Compre Aqui !!! Web Store</h2>
      </div>
      <div className={styles.collum}>
      <nav className={styles.navigation}>
        <ul>
          <li><a href="/">My Account</a></li>
          <li><a href="/produtos">Home</a></li>
          <li><a href="/contato">Contato</a></li>
        </ul>
      </nav>
      </div>
      <div className={styles.collum}>
        <h2 className={styles.headding}>Contatos</h2>
        <ul className={styles.contactInfo}>
          <li>
            <strong>Endereço:</strong> Rua Abigail Zeni Nader 738, Campinas-São Paulo
          </li>
          <li>
            <strong>Telefone:</strong> (19) 99753-2267
          </li>
          <li>
            <strong>Email:</strong> webstore1@hotmail.com
          </li>
        </ul>
        <ul className={styles.socialInfo}>
          <li><a href="https://facebook.com" target="_blank"><FaFacebook /> Web Store</a></li>
          <li><a href="https://twitter.com" target="_blank" ><FaTwitter /></a>Web_Store</li>
          <li><a href="https://instagram.com" target="_blank" ><FaInstagram />Web Store</a></li>
        </ul>
      </div>
      
    </footer>
  );
};

export default Footer;
