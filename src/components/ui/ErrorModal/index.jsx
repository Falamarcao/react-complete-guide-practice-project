import { createPortal } from "react-dom";

import Card from "../Card";
import Button from "../Button";

import styles from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClick} />;
};

const ModalOverlay = (props) => {
  return (
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
  );
};

const ErrorModal = (props) => {
  return (
    <>
      {createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById("backdrop-root")
      )}
      {createPortal(
        <ModalOverlay message={props.message} onClick={props.onClick} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ErrorModal;
