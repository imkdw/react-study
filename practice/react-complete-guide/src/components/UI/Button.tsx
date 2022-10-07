import styles from "./Button.module.css";

const Button = ({
  type,
  onClick,
  children,
}: {
  type: any;
  onClick: any;
  children: React.ReactNode;
}) => {
  return (
    <button className={styles.button} onClick={onClick} type={type || "button"}>
      Button
    </button>
  );
};

export default Button;
