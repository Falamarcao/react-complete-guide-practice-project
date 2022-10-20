import { useState, useRef } from "react";

import Wrapper from "../../helpers/Wrapper";
import ErrorModal from "../../ui/ErrorModal";
import Card from "../../ui/Card";
import Button from "../../ui/Button";

import styles from "./AddUser.module.css";

const AddUsers = (props) => {
  const usernameInputRef = useRef();
  const ageInputRef = useRef();

  const [errorMessages, setErrorMessages] = useState([]);

  const handleOnClickErrorModal = () => setErrorMessages([]);

  const validateForm = (value) => {
    const messages = [];

    if (value.username === "") {
      messages.push("Username is required!");
    }
    if (!/^[a-zA-Z]+$/.test(value.username)) {
      messages.push("Username must have only letters.");
    }
    if (isNaN(value.age)) {
      messages.push("Age is required!");
    }
    if (value.age < 1) {
      messages.push("Age must be greater than 0.");
    }

    return messages;
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    const user = {
      username: usernameInputRef.current.value,
      age: parseInt(ageInputRef.current.value),
    };

    const messages = validateForm(user);
    if (messages.length === 0) {
      user.id = "user" + Math.random().toString();
      props.onAdd(user);

      // clear form
      usernameInputRef.current.value = "";
      ageInputRef.current.value = "";
    } else {
      setErrorMessages(messages);
    }
  };

  return (
    <Wrapper>
      {errorMessages.length > 0 && (
        <ErrorModal message={errorMessages} onClick={handleOnClickErrorModal} />
      )}
      <Card>
        <form className={styles.input}>
          <label htmlFor="AddUser_username">Username</label>
          <input
            id="AddUser_username"
            name="username"
            type="text"
            ref={usernameInputRef}
          />
          <label htmlFor="AddUser_age">Age (Years)</label>
          <input
            id="AddUser_age"
            name="age"
            type="number"
            min="1"
            step="1"
            ref={ageInputRef}
          />
          <Button type="submit" onClick={handleOnSubmit}></Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUsers;
