import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ user }) => (
  <nav style={{ backgroundColor: '#1e88e5', padding: '10px', color: '#fff' }}>
    <Link to="/" style={linkStyle}>Login</Link>
    <Link to="/register" style={linkStyle}>Register</Link>
    {user && (
      <>
        <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
        <Link to="/appointments" style={linkStyle}>Book</Link>
        <Link to="/prescriptions" style={linkStyle}>Prescriptions</Link>
      </>
    )}
    {user && <span style={{ marginLeft: '20px' }}>Hi, {user.name} 👋</span>}
  </nav>
);

const linkStyle = {
  marginRight: '12px',
  color: '#fff',
  textDecoration: 'none',
  fontWeight: 'bold',
};

export default Navbar;
