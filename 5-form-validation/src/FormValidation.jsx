import { useState } from "react";

function FormValidation() {
  // Store all form values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    hobbies: [],
    city: "",
  });

  // Store validation error messages
  const [errors, setErrors] = useState({});

  // Handle all input changes
  function handleChange(e) {
    // Get values from the input element
    const { name, value, type, checked } = e.target;

    // Check if the input is a checkbox
    if (type === "checkbox") {
      // Create a copy of the hobbies array
      let updatedHobbies = [...formData.hobbies];

      // If checkbox is selected
      if (checked) {
        // Add hobby to the array
        updatedHobbies.push(value);
      } else {
        // Remove hobby from the array
        updatedHobbies = updatedHobbies.filter((hobby) => hobby !== value);
      }

      // Update hobbies in form data
      setFormData({
        ...formData,
        hobbies: updatedHobbies,
      });
    } else {
      // Update other input values
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  }

  // Validate the form
  function validate() {
    // Create an empty object for errors
    let newErrors = {};

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Validate email
    if (!formData.email) {
      // Check if email is empty
      newErrors.email = "Email is required";
    } else if (
      // Check if email format is invalid
      !/\S+@\S+\.\S+/.test(formData.email)
    ) {
      newErrors.email = "Invalid email";
    }

    // Validate password
    if (!formData.password) {
      // Check if password is empty
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      // Check password length
      newErrors.password = "Password must be at least 6 characters";
    }

    // Validate gender
    if (!formData.gender) {
      newErrors.gender = "Select gender";
    }

    // Validate hobbies
    if (formData.hobbies.length === 0) {
      newErrors.hobbies = "Select at least one hobby";
    }

    // Validate city
    if (!formData.city) {
      newErrors.city = "Select city";
    }

    // Return all errors
    return newErrors;
  }

  // Handle form submission
  function handleSubmit(e) {
    // Prevent page refresh
    e.preventDefault();

    // Run validation
    const validationErrors = validate();

    // Check if there are any errors
    if (Object.keys(validationErrors).length > 0) {
      // Store errors in state
      setErrors(validationErrors);
    } else {
      // Clear previous errors
      setErrors({});

      // Display form data in console
      console.log(formData);

      // Show success message
      alert("Form Submitted Successfully");

      // Reset the form
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
    // Call handleSubmit when the form is submitted
    <form onSubmit={handleSubmit}>
      {/* Name field */}

      <div>
        <label>Name:</label>

        <input
          type="text"
          // Connect input with the name property
          name="name"
          // Set the current input value
          value={formData.name}
          // Handle input changes
          onChange={handleChange}
        />

        {/* Display name error */}
        <p>{errors.name}</p>
      </div>

      {/* Email field */}

      <div>
        <label>Email:</label>

        <input
          type="email"
          // Connect input with the email property
          name="email"
          // Set the current input value
          value={formData.email}
          // Handle input changes
          onChange={handleChange}
        />

        {/* Display email error */}
        <p>{errors.email}</p>
      </div>

      {/* Password field */}

      <div>
        <label>Password:</label>

        <input
          type="password"
          // Connect input with the password property
          name="password"
          // Set the current input value
          value={formData.password}
          // Handle input changes
          onChange={handleChange}
        />

        {/* Display password error */}
        <p>{errors.password}</p>
      </div>

      {/* Gender field */}

      <div>
        <label>Gender:</label>
        {/* Male option */}
        <input
          type="radio"
          name="gender"
          value="Male"
          // Select Male when gender is Male
          checked={formData.gender === "Male"}
          // Handle radio button change
          onChange={handleChange}
        />
        Male
        {/* Female option */}
        <input
          type="radio"
          name="gender"
          value="Female"
          // Select Female when gender is Female
          checked={formData.gender === "Female"}
          // Handle radio button change
          onChange={handleChange}
        />
        Female
        {/* Display gender error */}
        <p>{errors.gender}</p>
      </div>

      {/* Hobby field */}

      <div>
        <label>Hobbies:</label>
        {/* Reading checkbox */}
        <input
          type="checkbox"
          value="Reading"
          // Handle checkbox change
          onChange={handleChange}
        />
        Reading
        {/* Sports checkbox */}
        <input
          type="checkbox"
          value="Sports"
          // Handle checkbox change
          onChange={handleChange}
        />
        Sports
        {/* Music checkbox */}
        <input
          type="checkbox"
          value="Music"
          // Handle checkbox change
          onChange={handleChange}
        />
        Music
        {/* Display hobby error */}
        <p>{errors.hobbies}</p>
      </div>

      {/* City field */}

      <div>
        <label>City:</label>

        <select
          name="city"
          // Set the selected city
          value={formData.city}
          // Handle city change
          onChange={handleChange}
        >
          {/* Default option */}

          <option value="">Select City</option>

          {/* City options */}

          <option value="Surat">Surat</option>

          <option value="Ahmedabad">Ahmedabad</option>

          <option value="Rajkot">Rajkot</option>
        </select>

        {/* Display city error */}
        <p>{errors.city}</p>
      </div>

      {/* Submit button */}

      <button type="submit">Submit</button>
    </form>
  );
}

// Export the component
export default FormValidation;
