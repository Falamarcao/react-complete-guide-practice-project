import Card from "../../ui/Card";

import styles from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card align="center">
      <div className={styles.users}>
        <ul>
          {props.users.map((user) => (
            <li key={user.id}>
              {user.username} {user.age} years old
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default UserList;
