import React from 'react';

const PrescriptionList = ({ prescriptions }) => {
  if (!prescriptions || prescriptions.length === 0) {
    return <p>No prescriptions found.</p>;
  }

  return (
    <ul>
      {prescriptions.map((p, i) => (
        <li key={i}>
          <strong>{p.medicine}</strong> - {p.date} (by {p.doctor})
        </li>
      ))}
    </ul>
  );
};

export default PrescriptionList;
