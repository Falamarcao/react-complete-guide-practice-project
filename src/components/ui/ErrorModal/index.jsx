import Button from "../Button";

import styles from "ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.header}</h2>
      </header>
      <div className={styles.content}>{props.content}</div>
      <div className={styles.actions}>
        <Button onClick={props.onClick}></Button>
      </div>
    </div>
  );
};

export default ErrorModal;
