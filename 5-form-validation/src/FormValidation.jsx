import { useState } from "react";

function FormValidation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    hobbies: [],
    city: "",
  });

  const [errors, setErrors] = useState({});

  // Handle Input Change
  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      let updatedHobbies = [...formData.hobbies];

      if (checked) {
        updatedHobbies.push(value);
      } else {
        updatedHobbies = updatedHobbies.filter((hobby) => hobby !== value);
      }

      setFormData({
        ...formData,
        hobbies: updatedHobbies,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  }

  // Validation
  function validate() {
    let newErrors = {};

    // Name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }

    // Password
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    // Gender
    if (!formData.gender) {
      newErrors.gender = "Select gender";
    }

    // Hobby
    if (formData.hobbies.length === 0) {
      newErrors.hobbies = "Select at least one hobby";
    }

    // City
    if (!formData.city) {
      newErrors.city = "Select city";
    }

    return newErrors;
  }

  // Submit
  function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});

      console.log(formData);

      alert("Form Submitted Successfully");

      // Reset
      setFormData({
        name: "",
        email: "",
        password: "",
        gender: "",
        hobbies: [],
        city: "",
      });
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <p>{errors.name}</p>
        </div>

        {/* Email */}
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <p>{errors.email}</p>
        </div>

        {/* Password */}
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <p>{errors.password}</p>
        </div>

        {/* Gender */}
        <div>
          <label>Gender:</label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formData.gender === "Male"}
            onChange={handleChange}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formData.gender === "Female"}
            onChange={handleChange}
          />
          Female
          <p>{errors.gender}</p>
        </div>

       
        <div>
          <label>Hobbies:</label>
          <input type="checkbox" value="Reading" onChange={handleChange} />
          Reading
          <input type="checkbox" value="Sports" onChange={handleChange} />
          Sports
          <input type="checkbox" value="Music" onChange={handleChange} />
          Music
          <p>{errors.hobbies}</p>
        </div>

        
        <div>
          <label>City:</label>

          <select name="city" value={formData.city} onChange={handleChange}>
            <option value="">Select City</option>
            <option value="Surat">Surat</option>
            <option value="Ahmedabad">Ahmedabad</option>
            <option value="Rajkot">Rajkot</option>
          </select>

          <p>{errors.city}</p>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormValidation;
