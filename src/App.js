import { useState, Fragment } from "react";


import AddUser from "./components/User/AddUser";
import UsersList from "./components/User/UsersList";

import { USERS } from "./core/services/initialData";

function App() {
  const [users, setUsers] = useState(USERS);

  const handleAdd = (user) => setUsers((prevState) => [...prevState, user]);

  /*
   While the <Fragment key=""></Fragment> tag allows us to use the key attribute when needed,
   e.g. a list, the empty <> </> tag is a short alternative.
   
   note: Only an example no need for both here.
  */
  return (
    <>
      <Fragment>
        <AddUser onAdd={handleAdd} />
        <UsersList users={users} />
      </Fragment>
    </>
  );
}

export default App;
