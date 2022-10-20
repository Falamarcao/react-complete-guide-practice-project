import Card from "../Card";
import Button from "../Button";

import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <>
      <div className={styles.backdrop} onClick={props.onClick} />
      <div className={styles.modal}>
        <header className={styles.header}>
          <h2>Invalid Input</h2>
        </header>
        <div className={styles.content}>
          {props.message.map((line, index) => (
            <p key={`error-${index}`}>{line}</p>
          ))}
        </div>
        <div className={styles.actions}>
          <Button onClick={props.onClick}></Button>
        </div>
      </div>
    </>
  );
};

export default ErrorModal;
