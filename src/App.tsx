import { useEffect, useState } from "react";
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

  console.log(users);

  return (
    <div className="App">
      <div className="main">
        <h2>React Search App</h2>
        <input type="text" />
        <div className="content">
          <div className="box">
            <h3>UserName</h3>
            <hr />
            <p>MailAddress</p>
          </div>
          <div className="box">
            <h3>UserName</h3>
            <hr />
            <p>MailAddress</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
