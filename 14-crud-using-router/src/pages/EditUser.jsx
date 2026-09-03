import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import UserForm from "../components/UserForm";

function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(
      (user) => user.id.toString() === id
    );

    setUser(foundUser);
  }, [id]);

  const updateUser = (formData) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const updatedUsers = users.map((item) => {
      if (item.id.toString() === id) {
        return {
          ...item,
          name: formData.name,
          email: formData.email,
          password: formData.password,
        };
      }

      return item;
    });

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    navigate("/users");
  };

  if (!user) {
    return (
      <div className="alert alert-danger">
        User not found.
        <br />

        <Link to="/users" className="btn btn-secondary mt-3">
          Back to Users
        </Link>
      </div>
    );
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-7 col-lg-6">
        <div className="card shadow-sm">
          <div className="card-header bg-warning">
            <h4 className="mb-0">Edit User</h4>
          </div>

          <div className="card-body">
            <UserForm
              initialData={user}
              onSubmit={updateUser}
              buttonText="Update User"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditUser;