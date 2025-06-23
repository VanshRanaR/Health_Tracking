import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import BookAppointmentPage from './pages/BookAppointmentPage';
import PrescriptionsPage from './pages/PrescriptionsPage';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<LoginPage setUser={setUser} />} />
        <Route path="/register" element={<RegisterPage setUser={setUser} />} />
        <Route path="/dashboard" element={<DashboardPage user={user} />} />
        <Route path="/appointments" element={<BookAppointmentPage />} />
        <Route path="/prescriptions" element={<PrescriptionsPage />} />
      </Routes>
    </div>
  );
};

export default App;
