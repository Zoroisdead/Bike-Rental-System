import React, { useState } from 'react';
import Navbar from '../../components/Navbar';


const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePasswordVisibilityToggle = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleConfirmPasswordVisibilityToggle = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation logic can go here, or API calls
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
    } else {
      console.log(formData);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="signup-container">
        <div className="signup-form-container">
          <h1 className="signup-heading">Sign Up</h1>
          <form onSubmit={handleSubmit} className="signup-form">
            {/* Name Input */}
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email Input */}
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password Input with Show/Hide Toggle */}
            <div className="form-group password-group">
              <label htmlFor="password">Password</label>
              <div className="password-container">
                <input
                  type={isPasswordVisible ? 'text' : 'password'}
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                {/* <button
                  type="button"
                  className="password-toggle"
                  onClick={handlePasswordVisibilityToggle}
                >
                  {isPasswordVisible ? 'Hide' : 'Show'}
                </button> */}
              </div>
            </div>

{/*             
            <div className="form-group password-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="password-container">
                <input
                  type={isConfirmPasswordVisible ? 'text' : 'password'}
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={handleConfirmPasswordVisibilityToggle}
                >
                  {isConfirmPasswordVisible ? 'Hide' : 'Show'}
                </button>
              </div>
            </div> */}

            {/* Submit Button */}
            <div className="form-group">
              <button type="submit" className="signup-button">
                Sign Up
              </button>
            </div>
          </form>

          {/* Footer Links */}
          <div className="signup-footer">
            <p>
              Already have an account? <a href="/login">Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
