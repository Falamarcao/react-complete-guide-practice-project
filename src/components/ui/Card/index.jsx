import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.card} style={{ "--align": props.align || "left" }}>
      {props.children}
    </div>
  );
};

export default Card;
