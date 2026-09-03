import { useNavigate } from "react-router-dom";
import UserForm from "../components/UserForm";

function AddUser() {
  const navigate = useNavigate();

  const addUser = (formData) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const newUser = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    navigate("/users");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-7 col-lg-6">
        <div className="card shadow-sm">
          <div className="card-header bg-primary text-white">
            <h4 className="mb-0">Add User</h4>
          </div>

          <div className="card-body">
            <UserForm
              onSubmit={addUser}
              buttonText="Save User"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddUser;