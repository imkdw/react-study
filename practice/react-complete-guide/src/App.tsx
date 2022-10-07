import { useState } from "react";
import Button from "./components/UI/Button";
import AddUser from "./components/Users/AddUser";
import UserLists from "./components/Users/UserLists";
import { IUser } from "./types/user";

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  const addUserHandler = (username: string, age: number) => {
    setUsers([...users, { username, age, id: Math.random().toString() }]);
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserLists users={users} />
    </div>
  );
};

export default App;
