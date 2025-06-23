import React from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage = ({ setUser }) => (
  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
    <LoginForm setUser={setUser} />
  </div>
);

export default LoginPage;
