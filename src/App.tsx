import { useEffect, useState } from "react";
import { UserType } from "./type/user.type";

import "./App.css";

const API_URL = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <div className="App">
      <div className="main">
        <h2>React Search App</h2>
        <input type="text" />
        <div className="content">
          {users.map((user: UserType) => (
            <div className="box">
              <h3>{user.name}</h3>
              <hr />
              <p>{user.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
