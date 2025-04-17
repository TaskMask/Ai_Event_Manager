import React, { useState } from 'react';
import { 
  Container, 
  Paper, 
  TextField, 
  Button, 
  Typography, 
  Grid,
  MenuItem
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function EventForm() {
  const [eventData, setEventData] = useState({
    eventName: '',
    eventType: '',
    date: '',
    budget: '',
    guestCount: '',
    location: ''
  });

  const eventTypes = [
    'Birthday Party',
    'Wedding',
    'Corporate Event',
    'Conference',
    'Social Gathering'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(eventData);
  };

  const handleChange = (e) => {
    setEventData({
      ...eventData,
      [e.target.name]: e.target.value
    });
  };

  const navigate = useNavigate();

  const handleCreateEvent = () => {
    // Logic to create a new event
    // ...

    // Navigate to the Events tab after creating the event
    navigate('/events');
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Create New Event
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Event Name"
                name="eventName"
                value={eventData.eventName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                select
                label="Event Type"
                name="eventType"
                value={eventData.eventType}
                onChange={handleChange}
              >
                {eventTypes.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="date"
                label="Date"
                name="date"
                InputLabelProps={{ shrink: true }}
                value={eventData.date}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="number"
                label="Budget"
                name="budget"
                value={eventData.budget}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="number"
                label="Guest Count"
                name="guestCount"
                value={eventData.guestCount}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Location"
                name="location"
                value={eventData.location}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button 
                variant="contained" 
                color="primary" 
                type="submit"
                size="large"
              >
                Get AI Recommendations
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button 
                variant="contained" 
                color="secondary" 
                size="large"
                onClick={handleCreateEvent} // Add onClick handler
              >
                Start Planning
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}

export default EventForm;