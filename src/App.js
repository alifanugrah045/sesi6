import logo from "./logo.svg";
import "./App.css";
import HomePages from "./pages/HomePages";
import { Route, Routes } from "react-router-dom";
import AddPages from "./pages/AddPages";
import EditPage from "./pages/EditPage";
import { useEffect, useState } from "react";
import Heading from "./components/Heading";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    const getUsers = localStorage.getItem("users");
    
      setUsers(JSON.parse(getUsers));
    
  }, []);

  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Heading />} />
        <Route path="/AddPages" element={<AddPages setUsers={setUsers} users={users} />} />
        <Route path="/EditPages/:id" element={<EditPage users={users} setUsers={setUsers} />} />
      </Routes>
      <UserList users={users} setUsers={setUsers} />
    </div>
  );
}

export default App;
