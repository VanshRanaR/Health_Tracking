import React, { useState } from 'react';

const AppointmentForm = () => {
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = () => {
    if (doctor && date && time) {
      alert(`Appointment booked with ${doctor} on ${date} at ${time}`);
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div>
      <h2>Book Appointment</h2>
      <select value={doctor} onChange={(e) => setDoctor(e.target.value)} style={inputStyle}>
        <option value="">Select Doctor</option>
        <option value="Dr. Smith">Dr. Smith</option>
        <option value="Dr. Lee">Dr. Lee</option>
      </select>
      <br /><br />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} style={inputStyle} />
      <br /><br />
      <input type="time" value={time} onChange={(e) => setTime(e.target.value)} style={inputStyle} />
      <br /><br />
      <button onClick={handleSubmit}>Book</button>
    </div>
  );
};

const inputStyle = {
  padding: '8px',
  borderRadius: '5px',
  width: '100%',
  maxWidth: '300px',
};

export default AppointmentForm;
