import React from 'react';

const DashboardPage = ({ user }) => (
  <div style={{ padding: '20px' }}>
    <h2>Welcome, {user?.name || 'Guest'}!</h2>
    <p>Your upcoming appointments will appear here.</p>
  </div>
);

export default DashboardPage;
