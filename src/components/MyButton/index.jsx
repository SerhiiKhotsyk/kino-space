import styles from './MyButton.module.scss';

const MyButton = ({ children, ...props }) => {
  return <button className={styles.myButton}>{children}</button>;
};

export default MyButton;
