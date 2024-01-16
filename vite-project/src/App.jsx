import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import SchedulePickup from './components/SchedulePickup';
import TrackPickup from './components/TrackPickup';
import Info from './components/Info';
import './App.css';

const App = () => {
  return (
    <Router>
      <header>
        <h1>Waste Pickup App</h1>
      </header>
      <nav>
        <Link to="/">Home</Link>
        <Link to={{ pathname: '/schedule', state: {username:"User"} }}>SchedulePickup</Link>
        <Link to="/track">Track Pickup</Link>
        <Link to="/info">Information</Link>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/schedule" Component={SchedulePickup} />
          <Route path="/track" Component={TrackPickup} />
          <Route path="/info" Component={Info} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
