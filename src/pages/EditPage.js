import React, { useState } from "react";
import { Link } from "react-router-dom";

const EditPage = ({ users, setUsers }) => {
  

  //   const [user, setUser] = useState("");
  //   const [editId, setEditId] = useState(0);
  const handleUpdate = (id) => {
    const editUser = users.find((i) => i.id === id);
    setUsers(editUser);
    // // setEditId(id);
  };
  return (
    <div className="container w-50">
      <h2>Edit Pages</h2>
      <div className="mt-2 text-start">
        <label htmlFor="password" className="form-label">
          Edit Users
        </label>
        <input type="text" id="password" className="form-control" value={users.name}  ></input>

        <Link to="/" onClick={() => handleUpdate(users.id)} className="btn btn-primary mt-2">
          Update
        </Link>
        <Link to="/" className="btn btn-danger mt-2 ms-2">
          Cancel
        </Link>
      </div>
    </div>
  );
};

export default EditPage;
