import { useState } from "react";

function UserForm({ initialData, onSubmit, buttonText }) {
  const [formData, setFormData] = useState({
    name: initialData?.name || "",
    email: initialData?.email || "",
    password: initialData?.password || "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Name */}
      <div className="mb-3">
        <label className="form-label">Name</label>

        <input
          type="text"
          name="name"
          className={`form-control ${errors.name ? "is-invalid" : ""}`}
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter name"
        />

        {errors.name && (
          <div className="invalid-feedback">{errors.name}</div>
        )}
      </div>

      {/* Email */}
      <div className="mb-3">
        <label className="form-label">Email</label>

        <input
          type="email"
          name="email"
          className={`form-control ${errors.email ? "is-invalid" : ""}`}
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
        />

        {errors.email && (
          <div className="invalid-feedback">{errors.email}</div>
        )}
      </div>

      {/* Password */}
      <div className="mb-3">
        <label className="form-label">Password</label>

        <input
          type="password"
          name="password"
          className={`form-control ${errors.password ? "is-invalid" : ""}`}
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter password"
        />

        {errors.password && (
          <div className="invalid-feedback">{errors.password}</div>
        )}
      </div>

      <button type="submit" className="btn btn-primary">
        {buttonText}
      </button>
    </form>
  );
}

export default UserForm;