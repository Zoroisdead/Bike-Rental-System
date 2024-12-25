import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Hardcoded login credentials for manual authentication
  const users = [
    { email: 'admin@gmail', password: 'admin', role: 'admin' },
    { email: 'user@gmail', password: 'user', role: 'user' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Check if the entered credentials match any user
    const matchedUser = users.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );

    if (matchedUser) {
      // Navigate based on the role
      if (matchedUser.role === 'admin') {
        navigate('/layout');
      } else {
        navigate('/');
      }
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div>
      <Navbar />

      <div className="login-container">
        <div className="login-form-container">
          <h1 className="login-heading">Login</h1>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleSubmit} className="login-form">
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

            {/* Password Input */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            {/* Submit Button */}
            <div className="form-group">
              <button type="submit" className="login-button">
                Login
              </button>
            </div>
          </form>

          {/* Additional Links */}
          <div className="login-footer">
            <p>
              Don't have an account? <a href="/register">Sign Up</a>
            </p>
            <p>
              <a href="/forgot-password">Forgot Password?</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
