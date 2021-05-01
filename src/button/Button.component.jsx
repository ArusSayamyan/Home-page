import styles from "./button.module.scss";

const Button = (props) => {
  const {children} = props;
  return (
    <button className={styles.button}>
     {children}
    </button>
  );
};

export default Button;
