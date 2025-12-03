import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const result = await login(email, password);
    
    if (result.success) {
      const REDIRECT_URL=process.env.REACT_APP_DASHBOARD_URL||  'http://localhost:3001';
        setTimeout(()=>{
window.location.href =  `${REDIRECT_URL}/`;
        },5000);
        setError('');
      
    } else {
      setError(result.message);
    }
    setLoading(false);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome Back</h2>
        <p className="subtitle">Login to your account</p>
        
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <div className="form-container">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="submit-btn"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </div>

        <p className="toggle-text">
          Don't have an account?{' '}
          <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
}