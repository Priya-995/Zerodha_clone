import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Signup.css';

function Signup() {
    const [formData, setFormData] = useState({
        mobile: '',
        email: '',
        username: '',
        password: ''
    });
    const [step, setStep] = useState(1);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { signup } = useAuth();
    const navigate = useNavigate();

    const handleMobileSubmit = (e) => {
        e.preventDefault();
        if (formData.mobile.length === 10) {
            setStep(2);
            setError('');
        } else {
            setError('Please enter a valid 10-digit mobile number');
        }
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        // Validate all fields
        if (!formData.username || !formData.email || !formData.password) {
            setError('All fields are required');
            setLoading(false);
            return;
        }

        if (formData.password.length < 6) {
            setError('Password must be at least 6 characters long');
            setLoading(false);
            return;
        }

        // Call signup from AuthContext (which connects to backend)
        const result = await signup(formData.email, formData.password, formData.username);
        
        if (result.success) {
             const REDIRECT_URL=process.env.REACT_APP_DASHBOARD_URL||  'http://localhost:3001';
            // Success - navigate to dashboard
            setTimeout(()=>{
window.location.href =  `${REDIRECT_URL}/`;
            },3000)
            setError('');
            
            // navigate('/dashboard');
        } else {
            // Show error from backend
            setError(result.message || 'Signup failed. Please try again.');
        }
        setLoading(false);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="signup-page">
            <div className="signup-container">
                <div className="signup-content">
                    <div className="row align-items-center">
                        {/* Left Side - Image and Text */}
                        <div className="col-left">
                            <img 
                                src="media/images/signup-graphic.png" 
                                alt="Signup" 
                                className="signup-image"
                                onError={(e) => {
                                    e.target.src = 'https://zerodha.com/static/images/landing.png';
                                }}
                            />
                            <h1 className="main-heading">
                                Open a free demat and trading account online
                            </h1>
                            <div className="features-list">
                                <div className="feature-item">
                                    <span className="check-icon">✓</span>
                                    <span>₹0 account opening charges</span>
                                </div>
                                <div className="feature-item">
                                    <span className="check-icon">✓</span>
                                    <span>₹0 equity delivery trades</span>
                                </div>
                                <div className="feature-item">
                                    <span className="check-icon">✓</span>
                                    <span>₹20 per order for intraday and F&O</span>
                                </div>
                                <div className="feature-item">
                                    <span className="check-icon">✓</span>
                                    <span>Join 1.6+ Cr investors & traders</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Form */}
                        <div className="col-right">
                            <div className="signup-form-box">
                                <h2 className="form-title">Signup now</h2>
                                <p className="form-subtitle">
                                    Or track your existing application 
                                    <a href="/track" className="track-link"> Track Application</a>
                                </p>

                                {error && (
                                    <div className="error-alert">
                                        {error}
                                    </div>
                                )}

                                {step === 1 ? (
                                    // Step 1: Mobile Number
                                    <div className="form-step">
                                        <div className="input-group">
                                            <label>Mobile Number</label>
                                            <div className="mobile-input-wrapper">
                                                <span className="country-code">+91</span>
                                                <input
                                                    type="tel"
                                                    name="mobile"
                                                    value={formData.mobile}
                                                    onChange={handleChange}
                                                    placeholder="Enter mobile number"
                                                    maxLength="10"
                                                    className="mobile-input"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <p className="terms-text">
                                            You will receive an OTP on your number
                                        </p>

                                        <button 
                                            onClick={handleMobileSubmit}
                                            className="continue-btn"
                                        >
                                            Continue
                                        </button>

                                        <p className="login-text">
                                            Already have an account? 
                                            <Link to="/login">
                                            <p> Login</p>
                                            </Link>
                                        </p>
                                    </div>
                                ) : (
                                    // Step 2: Full Registration Form
                                    <div className="form-step">
                                        <button 
                                            onClick={() => setStep(1)}
                                            className="back-btn"
                                        >
                                            ← Back
                                        </button>

                                        <div className="input-group">
                                            <label>Username</label>
                                            <input
                                                type="text"
                                                name="username"
                                                value={formData.username}
                                                onChange={handleChange}
                                                placeholder="Choose a username"
                                                required
                                            />
                                        </div>

                                        <div className="input-group">
                                            <label>Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Enter your email"
                                                required
                                            />
                                        </div>

                                        <div className="input-group">
                                            <label>Password</label>
                                            <input
                                                type="password"
                                                name="password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                placeholder="Create a strong password (min 6 characters)"
                                                required
                                            />
                                        </div>

                                        <p className="terms-text">
                                            By continuing, you agree to our{' '}
                                            <a href="/terms">Terms & Conditions</a> and{' '}
                                            <a href="/privacy">Privacy Policy</a>
                                        </p>

                                        <button 
                                            onClick={handleSignup}
                                            disabled={loading}
                                            className="continue-btn"
                                        >
                                            {loading ? 'Creating Account...' : 'Create Account'}
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Trust Indicators */}
                            <div className="trust-indicators">
                                <div className="trust-item">
                                    <span className="trust-icon">🔒</span>
                                    <span>100% secure</span>
                                </div>
                                <div className="trust-item">
                                    <span className="trust-icon">⚡</span>
                                    <span>Open in 5 minutes</span>
                                </div>
                                <div className="trust-item">
                                    <span className="trust-icon">✓</span>
                                    <span>SEBI Registered</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;