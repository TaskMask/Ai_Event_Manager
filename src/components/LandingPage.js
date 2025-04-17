import React from 'react';
import { Button, Container, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Placeholder image URLs for various events
const eventImages = [
  'https://via.placeholder.com/150?text=Birthday+Party',
  'https://via.placeholder.com/150?text=Marriage',
  'https://via.placeholder.com/150?text=Anniversary',
  'https://via.placeholder.com/150?text=Business',
];

// Text content for floating text boxes
const floatingTexts = [
  'Plan your perfect event with AI recommendations.',
  'Create memorable experiences effortlessly.',
  'Get personalized event planning tips.',
  'Discover new ideas for your events.',
  'Connect with top event planners.'
];

function LandingPage() {
  const navigate = useNavigate();

  const handleStartPlanning = () => {
    navigate('/events'); // Navigate to the Events tab
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom>
        Welcome to AI Event Planner
      </Typography>
      <Typography variant="body1" gutterBottom>
        Plan your events with ease using AI recommendations.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2, mt: 4 }}>
        {eventImages.map((src, index) => (
          <img 
            key={index} 
            src={src} 
            alt={`Event ${index}`} 
            style={{ 
              width: '150px', 
              height: '150px', 
              borderRadius: '10px', 
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            }} 
          />
        ))}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2, mt: 4 }}>
        {floatingTexts.map((text, index) => (
          <Box 
            key={index} 
            sx={{ 
              backgroundColor: 'rgba(15, 23, 42, 0.9)', // Match with background color
              padding: '10px', // Reduced padding for compact size
              borderRadius: '10px', // Reduced border radius for compact corners
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Adjusted shadow for compact depth
              color: 'white', // Ensure text is visible
              border: '1px solid rgba(255, 255, 255, 0.2)', // Added border for definition
              textAlign: 'center', // Centered text
              fontSize: '0.9rem', // Reduced font size for compact readability
            }}
          >
            {text}
          </Box>
        ))}
      </Box>
      <Button 
        variant="contained" 
        color="primary" 
        size="large"
        onClick={handleStartPlanning} // Add onClick handler
        sx={{ mt: 4 }}
      >
        Start Planning
      </Button>
    </Container>
  );
}

export default LandingPage;