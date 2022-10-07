import { IUser } from "../../types/user";
import Card from "../UI/Card";
import styles from "./UserLists.module.css";

const UserLists = ({ users }: { users: IUser[] }) => {
  return (
    <Card className={styles.user}>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} ({user.age} Years Old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserLists;
