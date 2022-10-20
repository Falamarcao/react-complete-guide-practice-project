import styles from "./UserList.module.css";

const UserList = (props) => {
  return (
    <div className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.username} {user.age} years old
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
