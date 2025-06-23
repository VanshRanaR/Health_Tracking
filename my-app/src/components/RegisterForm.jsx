import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterForm = ({ setUser }) => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    if (name.trim()) {
      setUser({ name });
      navigate('/dashboard');
    } else {
      alert('Please enter your name.');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={inputStyle}
      />
      <br /><br />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

const inputStyle = {
  padding: '8px',
  borderRadius: '5px',
  width: '100%',
  maxWidth: '300px',
};

export default RegisterForm;
