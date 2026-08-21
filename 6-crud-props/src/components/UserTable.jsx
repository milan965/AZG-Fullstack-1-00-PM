function UserTable({ users, onEdit, onDelete }) {
  return (
    <div align="center" className="table-container">
      <h2>User List</h2>

      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <table border={1} width="90%">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Gender</th>
              <th>Hobby</th>
              <th>City</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.gender}</td>

                <td>
                  {user.hobby.join(", ")}
                </td>

                <td>{user.city}</td>

                <td>
                  <button
                    onClick={() => onEdit(user)}
                    className="edit-btn"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => onDelete(user.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default UserTable;