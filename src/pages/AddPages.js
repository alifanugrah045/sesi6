import React, { useState } from "react";
import { Link } from "react-router-dom";
import makeid from "../components/MakeId";
const AddPages = ({ setUsers, users }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleAdd = () => {
    setUsers([...users, {id: makeid(5), username: value }]);
  };
  return (
    <div className="container w-50">
      <h2>Add Pages</h2>
      <div className="mt-2 text-start">
        <label htmlFor="password" className="form-label">
          Add Users
        </label>
        <input type="text" id="password" className="form-control" onChange={handleChange}></input>
        <Link to="/" onClick={handleAdd} className="btn btn-primary mt-2">
          Save
        </Link>
        <Link to="/" className="btn btn-danger mt-2 ms-2">
          Cancel
        </Link>
      </div>
    </div>
  );
};

export default AddPages;
