import { useState } from "react";

import ErrorModal from "../../ui/ErrorModal";
import Button from "../../ui/Button";

import styles from "./AddUser.module.css";

const AddUsers = (props) => {
  const initialState = { username: "", age: "" };

  const [state, setState] = useState(initialState);
  const [errorMessages, setErrorMessages] = useState([]);

  const handleOnClickErrorModal = () => setErrorMessages([]);

  const handleOnChange = (event) =>
    setState((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });

  const validateForm = (value) => {
    const messages = [];

    if (value.username === "") {
      messages.push("Username is required!");
    }
    if (!/^[a-zA-Z]+$/.test(value.username)) {
      messages.push("Username must have only letters.");
    }
    if (value.age === null || value.age === "") {
      messages.push("Age is required!");
    }
    if (value.age < 1) {
      messages.push("Age must be greater than 0.");
    }

    return messages;
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    const messages = validateForm(state);
    if (messages.length === 0) {
      state.id = "user" + Math.random().toString();
      state.age = parseInt(state.age);
      props.onAdd(state);
      setState(initialState);
    } else {
      setErrorMessages(messages);
    }
  };

  return (
    <div>
      {errorMessages.length > 0 && (
        <ErrorModal message={errorMessages} onClick={handleOnClickErrorModal} />
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
