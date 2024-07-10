// src/components/SignUpForm.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";

function SignUpForm() {
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, password, contactNo } = event.target.elements;

    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        name: name.value,
        email: email.value,
        password: password.value,
        contactNo: contactNo.value,
      });
      alert("Account Created Successfully");
    } catch (error) {
      setError(error.response.data.message || "An error occurred");
    }
  };

  return (
    <form className="sign-up-form" onSubmit={handleSubmit}>
      <h2 className="title">Sign up</h2>
      {error && <p className="error">{error}</p>}
      <div className="input-field">
        <i className="fas fa-user"></i>
        <input type="text" placeholder="Name" name="name" required />
      </div>
      <div className="input-field">
        <i className="fas fa-envelope"></i>
        <input type="email" placeholder="Email" name="email" required />
      </div>
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
        />
      </div>
      <div className="input-field">
        <i className="fas fa-phone"></i>
        <input
          type="text"
          placeholder="Phone Number"
          name="contactNo"
          required
        />
      </div>
      <input type="submit" className="btn" value="Sign up" />
      <p className="social-text">Or Sign up with social platforms</p>
      <div className="social-media">
        <a href="#" className="social-icon">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-google"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </form>
  );
}

export default SignUpForm;
