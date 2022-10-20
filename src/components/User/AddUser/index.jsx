import { useState } from "react";

import Button from "../../ui/Button";

import styles from "./AddUser.module.css";

const AddUsers = (props) => {
  const initialState = { username: "", age: "" };

  const [state, setState] = useState(initialState);

  const handleOnChange = (event) =>
    setState((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });

  const handleOnSubmit = (event) => {
    event.preventDefault();
    state.id = "user" + Math.random().toString();
    state.age = parseInt(state.age);
    props.onAdd(state);
    setState(initialState);
  };

  return (
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
  );
};

export default AddUsers;
