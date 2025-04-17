import React, { useState } from 'react';
import { TextField } from '@mui/material';
import RobotIcon from '@mui/icons-material/Android'; // Example robot icon from Material-UI

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [userInput, setUserInput] = useState('');

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      width: isOpen ? '210.6px' : '35.1px', // Increased width by 17%
      height: isOpen ? '280.8px' : '35.1px', // Increased height by 17%
      backgroundColor: 'rgba(255, 255, 255, 0.1)', // Transparent background
      backdropFilter: 'blur(10px)', // Glassy effect
      borderRadius: '10px',
      boxShadow: '0 0 15px 5px rgba(255, 255, 255, 0.5)', // Spotlight effect
      transition: 'width 0.3s, height 0.3s',
      overflow: 'hidden',
    }}>
      <button onClick={toggleChatbot} style={{
        width: '100%',
        height: isOpen ? '50px' : '100%', // Adjust height when open
        backgroundColor: 'transparent',
        border: 'none',
        color: 'white', // Changed text color for contrast
        fontSize: '16px',
        cursor: 'pointer',
      }}>
        {isOpen ? 'Close Chat' : <RobotIcon />}
      </button>
      {isOpen && (
        <div style={{
          padding: '10px',
          color: 'white', // Changed text color for contrast
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center', // Center content
          height: 'calc(100% - 50px)', // Adjust height to accommodate button
        }}>
          <p>Welcome to AI Help Assistant!</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <RobotIcon style={{ color: 'white', fontSize: '24px' }} /> {/* Android doodle */}
            <TextField
              value={userInput}
              onChange={handleInputChange}
              placeholder="Type your message..."
              variant="outlined"
              fullWidth
              sx={{
                backgroundColor: 'white', // Set text box color to white
                borderRadius: '5px',
                marginTop: '10px',
                '& .MuiInputBase-input': {
                  color: 'black', // Set text color to black for visibility
                },
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;