
import { useState } from "react";

function App() {

  const [users, setUsers] = useState(
    localStorage.getItem("crud") ? JSON.parse(localStorage.getItem("crud")) : []
  );

  const [formdata, setFormData] = useState({
    name: "",
    phone: ""
  });

  // Store edit user id
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formdata,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // UPDATE
    if (editId !== null) {
      const updatedUsers = users.map((item) => {
        if (item.id === editId) {
          return {
            ...item,
            name: formdata.name,
            phone: formdata.phone
          };
        }
        return item;
      });

      localStorage.setItem("crud", JSON.stringify(updatedUsers));
      setUsers(updatedUsers);
      setEditId(null);
      alert("User Updated");
    } 
    // ADD
    else {
      const newRecord = {
        id: Date.now(),
        ...formdata
      };

      const allusers = [...users, newRecord];

      localStorage.setItem("crud", JSON.stringify(allusers));
      setUsers(allusers);

      alert("User Added");
    }

    setFormData({
      name: "",
      phone: ""
    });
  };

  // DELETE
  const handleDelete = (id) => {
    const deleteRecord = users.filter((item) => item.id !== id);

    localStorage.setItem("crud", JSON.stringify(deleteRecord));
    setUsers(deleteRecord);

    alert("Record Deleted");
  };

  // EDIT
  const handleEdit = (item) => {
    setFormData({
      name: item.name,
      phone: item.phone
    });

    setEditId(item.id);
  };

  // CANCEL UPDATE
  const handleCancel = () => {
    setFormData({
      name: "",
      phone: ""
    });
    setEditId(null);
  };

  return (
    <>
      <div align="center">
        <h1>{editId !== null ? "Update User" : "Add User"}</h1>

        <form onSubmit={handleSubmit}>
          <table border="1" width="500">
            <tbody>
              <tr>
                <td>Name :-</td>
                <td>
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={formdata.name}
                    placeholder="Enter name"
                  />
                </td>
              </tr>

              <tr>
                <td>Phone :-</td>
                <td>
                  <input
                    type="text"
                    name="phone"
                    onChange={handleChange}
                    value={formdata.phone}
                    placeholder="Enter phone"
                  />
                </td>
              </tr>

              <tr>
                <td></td>
                <td>
                  <input
                    type="submit"
                    value={editId === null ? "Add" : "Edit"}
                  />

                  {editId !== null && (
                    <button type="button" onClick={handleCancel}>
                      Cancel
                    </button>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </form>

        <hr />

        <h1>View Users</h1>

        <table width="500" border="1">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>
                  <button onClick={() => handleEdit(item)}>
                    Edit
                  </button>

                  <button onClick={() => handleDelete(item.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;