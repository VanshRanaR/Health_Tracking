import React, { useEffect, useState } from 'react';
import PrescriptionList from '../components/PrescriptionList';
import data from '../data/prescriptions.json';

const PrescriptionsPage = () => {
  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    setPrescriptions(data);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Prescriptions</h2>
      <PrescriptionList prescriptions={prescriptions} />
    </div>
  );
};

export default PrescriptionsPage;
