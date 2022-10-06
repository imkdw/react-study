import styles from "./card.module.css";

const Card = ({ children, className }: { children: React.ReactNode; className: string }) => {
  return <div className={`${styles.card} ${className}`}>{children}</div>;
};

export default Card;
