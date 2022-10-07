import { ChangeEvent, FormEvent, useState } from "react";
import { IUser } from "../../types/user";
import Button from "../UI/Button";
import Card from "../UI/Card";

import styles from "./addUser.module.css";
import UserLists from "./UserLists";

const AddUser = ({ onAddUser }: { onAddUser: any }) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const addUserHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (username.trim().length === 0 || age.trim().length === 0) {
      alert("Invalid Input");
      return;
    }

    if (Number(age) < 1) {
      alert("Age must be bigger then 1");
      return;
    }

    setUsername("");
    setAge("");
    onAddUser(username, Number(age));
  };

  const usernameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.currentTarget.value);
  };

  const ageChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setAge(event.currentTarget.value);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={username} onChange={usernameChangeHandler} />
        <label htmlFor="age">Age (Years)</label>
        <input type="text" id="age" value={age} onChange={ageChangeHandler} />
        <Button type="submit" onClick={() => {}}>
          Add User
        </Button>
      </form>
    </Card>
  );
};

export default AddUser;
