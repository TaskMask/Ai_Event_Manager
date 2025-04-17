import React from 'react';
import { 
  Container, 
  Grid, 
  Typography, 
  Button, 
  Box,
  Card,
  CardContent,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import GroupsIcon from '@mui/icons-material/Groups';

function LandingPage() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <SearchIcon sx={{ fontSize: 40 }} />,
      title: 'Smart Venue Finder',
      description: 'AI-powered venue recommendations based on your preferences and budget'
    },
    {
      icon: <AccessTimeIcon sx={{ fontSize: 40 }} />,
      title: 'Task Scheduler',
      description: 'Automated timeline and task management for seamless event planning'
    },
    {
      icon: <AutoGraphIcon sx={{ fontSize: 40 }} />,
      title: 'Learns Your Style',
      description: 'Personalized suggestions that improve with every event you plan'
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 40 }} />,
      title: 'Guest List Wizard',
      description: 'Smart guest list management with RSVP tracking and dietary preferences'
    }
  ];

  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Container maxWidth="lg" sx={{ mt: 8, mb: 14 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h1" gutterBottom>
              Plan Events Without the Stress
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
              Meet your AI assistant for event planning: smart, fast, and personalized.
            </Typography>
            <Button 
              variant="contained" 
              size="large"
              onClick={() => navigate('/new-event')}
              sx={{ 
                py: 2,
                px: 4,
                fontSize: '1.1rem'
              }}
            >
              Start Planning
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: '100%',
                height: '400px',
                maxWidth: 600,
                background: 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)',
                borderRadius: '24px',
                opacity: 0.8,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.5rem',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-10px)',
                },
              }}
            >
              Image Placeholder
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ mb: 14 }}>
        <Typography variant="h2" textAlign="center" gutterBottom>
          Features
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  p: 2
                }}
              >
                <Box sx={{ 
                  mb: 2,
                  color: 'primary.main',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {feature.icon}
                </Box>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default LandingPage;