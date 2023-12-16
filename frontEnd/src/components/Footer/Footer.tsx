import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import styles from '../../styles/footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
      
      <div className={styles.area1}>
      <nav className={styles.navigation}>
        <a href="/">My Account</a>
          <a href="/produtos">Home</a>
          <a href="/cart">Cart</a>
      </nav>
      <div className={styles.slogan}>
        <img className={styles.logo} src="/logo.png" alt="Logo da Loja" />
        <h2>Compre Aqui !!! Web Store fazendo a diferença</h2>
      </div>
      </div>
      <h2 className={styles.headding}>Contatos</h2>
      <div className={styles.area2}>
        
        <div className={styles.contactInfo}><><strong>Endereço:</strong> Rua Joaquim Pereira Doarte 538, Campinas-São Paulo</><><strong>Telefone:</strong> (19) 9953-2267   </><><strong>Email:</strong> webstore1@hotmail.com</>
        </div>
        <div className={styles.socialInfo}>
          <a href="https://facebook.com" target="_blank"><FaFacebook /> Web Store</a>
          <a href="https://twitter.com" target="_blank" ><FaTwitter /></a>Web Store
          <a href="https://instagram.com" target="_blank" ><FaInstagram />Web_Store</a>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;