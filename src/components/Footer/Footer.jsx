import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>
        <span>Kino space</span> - Найбільший сайт для перегляду фільмів!
      </p>
      <p>
        All rights protected - © 2023 <span>Kino space</span>
      </p>
      <p>Created by Serhii Khotsyk</p>
    </div>
  );
};

export default Footer;
