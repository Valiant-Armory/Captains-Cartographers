import React, { useState } from 'react';
import './login.css';
import logoMain from "../assets/Logo_1.png"

function Login(props) {
  const {
    isLoggedIn,
    setIsLoggedIn
  } = props
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    setIsLoggedIn(true)
    console.log(`Username: ${username} Password: ${password}`);
  };

  return (
    <div className="login">
      <img src={logoMain} alt="Logo" className="small-logo" />
        <h1>Login</h1>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={handleUsernameChange} />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        <button className="submit-button" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;