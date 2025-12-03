// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
// import './Signup.css';

// export default function Signup() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [username, setUsername] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const { signup } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     const result = await signup(email, password, username);
    
//     if (result.success) {
//       navigate('/dashboard');
//     } else {
//       setError(result.message);
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="signup-container">
//       <div className="signup-box">
//         <h2>Create Account</h2>
//         <p className="subtitle">Sign up to get started</p>
        
//         {error && (
//           <div className="error-message">
//             {error}
//           </div>
//         )}

//         <div className="form-container">
//           <div className="form-group">
//             <label>Username</label>
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               placeholder="johndoe"
//             />
//           </div>

//           <div className="form-group">
//             <label>Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="you@example.com"
//             />
//           </div>

//           <div className="form-group">
//             <label>Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="••••••••"
//             />
//           </div>

//           <button
//             onClick={handleSubmit}
//             disabled={loading}
//             className="submit-btn"
//           >
//             {loading ? 'Creating Account...' : 'Sign Up'}
//           </button>
//         </div>

//         <p className="toggle-text">
//           Already have an account?{' '}
//           <a href="/login">Login</a>
//         </p>
//       </div>
//     </div>
//   );
// }