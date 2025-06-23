import React from 'react';
import RegisterForm from '../components/RegisterForm';

const RegisterPage = ({ setUser }) => (
  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
    <RegisterForm setUser={setUser} />
  </div>
);

export default RegisterPage;
