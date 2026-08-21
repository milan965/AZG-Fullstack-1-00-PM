import { useEffect, useState } from "react";

function UserForm({ onSubmit, editUser, onCancel }) {
  const initialForm = {
    name: "",
    email: "",
    password: "",
    gender: "",
    hobby: [],
    city: "",
  };

  const [formData, setFormData] = useState(initialForm);

  // Fill form when editing
  useEffect(() => {
    if (editUser) {
      setFormData({
        name: editUser.name,
        email: editUser.email,
        password: editUser.password,
        gender: editUser.gender,
        hobby: editUser.hobby,
        city: editUser.city,
      });
    } else {
      setFormData(initialForm);
    }
  }, [editUser]);

  // Input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Hobby checkbox
  const handleHobbyChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setFormData({
        ...formData,
        hobby: [...formData.hobby, value],
      });
    } else {
      setFormData({
        ...formData,
        hobby: formData.hobby.filter((item) => item !== value),
      });
    }
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.gender ||
      formData.hobby.length === 0 ||
      !formData.city
    ) {
      alert("Please fill all fields");
      return;
    }

    onSubmit(formData);

    if (!editUser) {
      setFormData(initialForm);
    }
  };

  return (
    <div align="center">
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Name</label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
          />
        </div>
        <br />
        <div className="form-group">
          <label>Email</label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </div>
         <br />

        <div className="form-group">
          <label>Password</label>

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
          />
        </div>
         <br />

        <div className="form-group">
          <label>Gender</label>

          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
            />
            Male
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
            />
            Female
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="Other"
              checked={formData.gender === "Other"}
              onChange={handleChange}
            />
            Other
          </label>
        </div>
         <br />

        <div className="form-group">
          <label>Hobby</label>

          <label>
            <input
              type="checkbox"
              value="Cricket"
              checked={formData.hobby.includes("Cricket")}
              onChange={handleHobbyChange}
            />
            Cricket
          </label>

          <label>
            <input
              type="checkbox"
              value="Music"
              checked={formData.hobby.includes("Music")}
              onChange={handleHobbyChange}
            />
            Music
          </label>

          <label>
            <input
              type="checkbox"
              value="Reading"
              checked={formData.hobby.includes("Reading")}
              onChange={handleHobbyChange}
            />
            Reading
          </label>

          <label>
            <input
              type="checkbox"
              value="Travel"
              checked={formData.hobby.includes("Travel")}
              onChange={handleHobbyChange}
            />
            Travel
          </label>
        </div>
         <br />

        <div className="form-group">
          <label>City</label>

          <select name="city" value={formData.city} onChange={handleChange}>
            <option value="">-- Select City --</option>
            <option value="Surat">Surat</option>
            <option value="Ahmedabad">Ahmedabad</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Pune">Pune</option>
          </select>
        </div>
         <br />

        <button type="submit">{editUser ? "Update User" : "Add User"}</button>

        {editUser && (
          <button type="button" onClick={onCancel} className="cancel-btn">
            Cancel
          </button>
        )}
      </form>
    </div>
  );
}

export default UserForm;
