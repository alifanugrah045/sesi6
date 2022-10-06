import React from "react";
import { Link } from "react-router-dom";
const UserList = ({ users, setUsers }) => {
  console.log(users);

  const handleDelete = (id) => {
    const updatedUsers = users.filter((user) => {
      return user.id !== id;
    });
    setUsers(updatedUsers);
    console.log('id usere',id)
  };
  
  return (
    <div className="mt-5">
      {users?.map((user) => (
        <div className="container w-50 bg-secondary d-flex p-3 rounded-2 mt-2 text-white" key={user.username}>
          <h4>{user.username}</h4>
          <div className="btnku ms-auto">
            <Link  to={`/EditPages/${user.id}`} className="btn btn-warning">
              Edit
            </Link>
            <Link to="/" onClick={() => handleDelete(user.id)} className="btn btn-danger ms-2">Hapus</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
