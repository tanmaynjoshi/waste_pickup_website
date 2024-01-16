import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link, Route , useNavigate} from 'react-router-dom';


const SchedulePickup = () => {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [selectedWasteType, setSelectedWasteType] = useState('recyclables');
  const [pickupScheduled, setPickupScheduled] = useState(false);

  const location = useLocation();
  const dataFromLink = location.state ? location.state : { username: 'User' };

  const navigate = useNavigate();


  const handleDateTimeChange = (date) => {
    setSelectedDateTime(date);
  };

  const handleWasteTypeChange = (e) => {
    setSelectedWasteType(e.target.value);
  };

  const handleSchedulePickup = () => {
    // Simulate scheduling logic
    setPickupScheduled(true);
  };

  const handleSubmit = (e) => {
   
    
    navigate('/track', { state: selectedDateTime});


    
   
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Welcome {dataFromLink.username.toString()}</h2>
      <h2 style={headerStyle}>Schedule Pickup</h2>

      {pickupScheduled ? (
        <div style={confirmationStyle}>
          <p>Waste pickup scheduled successfully!</p>
          <p>Date and Time: {selectedDateTime.toString()}</p>
          <p>Waste Type: {selectedWasteType}</p>
        </div>
      ) : (
        <div style={formStyle}>
          <label style={labelStyle}>Select Date and Time:</label>
          <input
            type="datetime-local"
            value={selectedDateTime.toISOString().slice(0, -8)}
            onChange={(e) => handleDateTimeChange(new Date(e.target.value))}
            style={inputStyle}
          />

          <label style={labelStyle}>Select Waste Type:</label>
          <select value={selectedWasteType} onChange={handleWasteTypeChange} style={selectStyle}>
            <option value="recyclables">Recyclables</option>
            <option value="organic">Organic</option>
            <option value="hazardous">Hazardous</option>
          </select>

          <button onClick={handleSchedulePickup} style={buttonStyle}>
            Schedule Pickup
          </button>
          
        </div>
      )}
       <button onClick={handleSubmit}> Track Pickup</button>
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
};

const headerStyle = {
  textAlign: 'center',
  marginBottom: '20px',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  border: '1px solid #ccc',
  padding: '10px',
  borderRadius: '5px',
};

const labelStyle = {
  marginBottom: '8px',
};

const inputStyle = {
  marginBottom: '16px',
};

const selectStyle = {
  marginBottom: '16px',
  padding: '8px',
};

const buttonStyle = {
  padding: '10px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const confirmationStyle = {
  textAlign: 'center',
  border: '1px solid #ccc',
  padding: '20px',
  borderRadius: '5px',
};

export default SchedulePickup;
