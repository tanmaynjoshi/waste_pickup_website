import React, { useState } from 'react';


import { Link, Route , useNavigate} from 'react-router-dom';


const Home = () => {
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass user information to SchedulePickup component as props
    // You can add more validation or processing logic here before sending the props
    // For simplicity, we're passing the entire userInfo object
    
    navigate('/schedule', { state: userInfo});


    
   
  };

  return (  
    <div>
      <h2>Welcome to Waste Pickup App</h2>
      <p>Choose an option from the navigation menu.</p>

      {/* User Info Form */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={userInfo.username}
          onChange={handleInputChange}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={userInfo.password}
          onChange={handleInputChange}
        />
        {/*<SchedulePickup info = {userInfo} />
        {/*<button type="submit">Submit</button>*/}
       

      </form>

      {/* Link to SchedulePickup Component */}
      
        <button onClick={handleSubmit}> Schedule Now</button>
            
    </div>
  );
};




// Inline styles for demonstration purposes (consider using external styles in a real application)
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

const userFormStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  border: '1px solid #ccc',
  padding: '10px',
  borderRadius: '5px',
};

export default Home;
