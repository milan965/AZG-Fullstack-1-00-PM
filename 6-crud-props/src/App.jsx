import { useEffect, useState } from "react";
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";

function App() {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);

  // Load data from localStorage
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users"));

    if (storedUsers) {
      setUsers(storedUsers);
    }
  }, []);

  // Save data to localStorage
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // CREATE / UPDATE
  const handleSubmit = (formData) => {
    if (editUser) {
      const updatedUsers = users.map((user) =>
        user.id === editUser.id ? { ...formData, id: editUser.id } : user,
      );

      setUsers(updatedUsers);
      setEditUser(null);
    } else {
      const newUser = {
        ...formData,
        id: Date.now(),
      };

      setUsers([...users, newUser]);
    }
  };

  // DELETE
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?",
    );

    if (confirmDelete) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  // EDIT
  const handleEdit = (user) => {
    setEditUser(user);
  };

  // CANCEL EDIT
  const handleCancel = () => {
    setEditUser(null);
  };

  return (
    <div className="container">
      <h1 align="center"></h1>

      <UserForm
        onSubmit={handleSubmit}
        editUser={editUser}
        onCancel={handleCancel}
      />

      <UserTable users={users} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default App;
