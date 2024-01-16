import React from 'react';
import { useLocation } from 'react-router-dom';

const TrackPickup = () => {
  const location = useLocation();
  const { state } = location;

  // Check if state is available and contains necessary data
  if (!state || !state.scheduledPickup) {
    return <div>No scheduled pickup data available</div>;
  }

  const { selectedDateTime, selectedWasteType } = state.scheduledPickup;

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Track Pickup</h2>
      <div style={detailsStyle}>
        <p>Date and Time: {selectedDateTime.toString()}</p>
        <p>Waste Type: {selectedWasteType}</p>
        <p>Status: In Progress</p>
        {/* You can add more details or tracking information here */}
      </div>
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

const detailsStyle = {
  border: '1px solid #ccc',
  padding: '20px',
  borderRadius: '5px',
};

export default TrackPickup;
