import { useState } from "react";

import ErrorModal from "../../ui/ErrorModal";
import Button from "../../ui/Button";

import styles from "./AddUser.module.css";

const AddUsers = (props) => {
  const initialState = { username: "", age: "" };

  const [state, setState] = useState(initialState);
  const [errorMessage, setErrorMessage] = useState([]);
  const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);

  const handleOnClickErrorModal = () => {
    setIsErrorModalVisible(false);
    setErrorMessage([]);
  };

  const handleOnChange = (event) =>
    setState((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });

  const validateForm = (value) => {
    let message = [];

    if (value.username === "") {
      message.push("Username is required!");
    }
    if (!/^[a-zA-Z]+$/.test(value.username)) {
      message.push("Username must have only letters.");
    }
    if (value.age === null || value.age === "") {
      message.push("Age is required!");
    }
    if (value.age < 1) {
      message.push("Age must be grater than 0.");
    }

    return message;
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    const message = validateForm(state);
    if (message.length == 0) {
      state.id = "user" + Math.random().toString();
      state.age = parseInt(state.age);
      props.onAdd(state);
      setState(initialState);
    } else {
      setErrorMessage(message);
      setIsErrorModalVisible(true);
    }
  };

  return (
    <div>
      {isErrorModalVisible && (
        <ErrorModal message={errorMessage} onClick={handleOnClickErrorModal} />
      )}
      <form className={styles.input}>
        <label htmlFor="AddUser_username">Username</label>
        <input
          id="AddUser_username"
          name="username"
          type="text"
          value={state.username}
          onChange={handleOnChange}
        />
        <label htmlFor="AddUser_age">Age (Years)</label>
        <input
          id="AddUser_age"
          name="age"
          type="number"
          min="1"
          step="1"
          value={state.age}
          onChange={handleOnChange}
        />
        <Button type="submit" onClick={handleOnSubmit}></Button>
      </form>
    </div>
  );
};

export default AddUsers;
