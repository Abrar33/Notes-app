import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";
const Users = (props) => {
  const [enteredUserName, setEnteredName] = useState("");
  const [enrteredUserage, setEnteredAge] = useState("");
  const [error, setError] = useState();
  const usernameHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const userageHandler = (e) => {
    setEnteredAge(e.target.value);
  };
  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredUserName.trim().length === 0 ||
      enrteredUserage.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (none empty value) ",
      });
      return;
    }
    if (enteredUserName < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (age<1)",
      });
      return;
    }
    props.items(enteredUserName, enrteredUserage);
    setEnteredName("");
    setEnteredAge("");
  };
  const errorhandler = () => {
    setError(null);
  };
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorhandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">username</label>
          <input
            id="username"
            type="text"
            value={enteredUserName}
            onChange={usernameHandler}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            value={enrteredUserage}
            onChange={userageHandler}
          />
          <Button type="Submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};
export default Users;
