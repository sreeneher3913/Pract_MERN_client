import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);
  const [bid, setBid] = useState(null);
  const [bname, setBname] = useState(null);

  useEffect(() => {
    const book = {
      BookID: "123",
      BookName: "abc",
    };
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        setData(data.message);
        setBid(data.bookID);
        setBname(data.bookName);
      });
    fetch("/create", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(book),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading data..." : data}</p>
        <p>{!bid ? "Loading bid..." : bid}</p>
        <p>{!bname ? "Loading bname..." : bname}</p>
      </header>
    </div>
  );
}

export default App;
