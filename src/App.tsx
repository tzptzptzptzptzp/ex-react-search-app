import { useEffect, useRef, useState } from "react";
import { UserType } from "./type/user.type";

import "./App.css";

const API_URL = "https://jsonplaceholder.typicode.com/users";

function App() {
  const ref = useRef<HTMLInputElement>(null);

  const [users, setUsers] = useState([]);
  const [seacthQuery, setSearchQuery] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSearchQuery(data);
        setUsers(data);
      });
  }, []);

  const handleSearch = () => {
    const searchTerm = ref.current?.value || "";
    setSearchQuery(
      users.filter((user: UserType) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  return (
    <div className="text-center box-border">
      <div className="">
        <div className="mt-16 mb-8 text-5xl">
          <h2>React Search App</h2>
          <input
            className="h-6 px-1 py-3 border text-lg"
            onChange={() => handleSearch()}
            ref={ref}
            type="text"
          />
        </div>
        <div className="grid grid-cols-5 gap-x-4 gap-y-12 w-[1200px] mx-auto">
          {seacthQuery.map((user: UserType, i: number) => (
            <div
              className="w-full min-h-[12rem] p-4 rounded-lg shadow-lg"
              key={i}
            >
              <div className="flex items-center justify-center h-20">
                <h3 className="text-[1.5rem]">{user.name}</h3>
              </div>
              <hr className="mb-4" />
              <p>{user.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
