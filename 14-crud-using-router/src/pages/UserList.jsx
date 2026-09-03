import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = () => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  };

  const deleteUser = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmDelete) return;

    const updatedUsers = users.filter((user) => user.id !== id);

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setUsers(updatedUsers);
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>User List</h2>

        <Link to="/users/add" className="btn btn-primary">
          + Add User
        </Link>
      </div>

      {users.length === 0 ? (
        <div className="alert alert-info">
          No users found. Please add a user.
        </div>
      ) : (
        <div className="card shadow-sm">
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-striped table-hover mb-0">
                <thead className="table-dark">
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {users.map((user, index) => (
                    <tr key={user.id}>
                      <td>{index + 1}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>******</td>
                      <td>
                        <Link
                          to={`/users/edit/${user.id}`}
                          className="btn btn-sm btn-warning me-2"
                        >
                          Edit
                        </Link>

                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => deleteUser(user.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserList;