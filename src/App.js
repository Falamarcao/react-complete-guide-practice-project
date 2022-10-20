import { useState } from "react";

import Card from "./components/ui/Card";
import AddUser from "./components/User/AddUser";
import UsersList from "./components/User/UsersList";

import { USERS } from "./core/services/initialData";

function App() {
  const [users, setUsers] = useState(USERS);
  const [error, setError] = useState(null);

  const handleAdd = (user) => setUsers((prevState) => [...prevState, user]);

  return (
    <center>
      <Card>
        <AddUser onAdd={handleAdd} />
      </Card>
      <Card align="center">
        <UsersList users={users} />
      </Card>
    </center>
  );
}

export default App;
