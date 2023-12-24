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
    <div className="text-center box-border">
      <div className="">
        <div className="mt-16 mb-8 text-5xl">
          <h2>React Search App</h2>
          <input className="h-6 px-1 py-3 border text-lg" type="text" />
        </div>
        <div className="flex flex-wrap gap-4 w-[1200px] mx-auto">
          {users.map((user: UserType) => (
            <div className="w-1/5 rounded-lg shadow-md">
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
