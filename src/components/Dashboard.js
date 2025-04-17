import React from 'react';
import { Container, Grid, Paper, Typography, Card, CardContent, Button } from '@mui/material';
import { CalendarMonth, LocationOn, People, AttachMoney } from '@mui/icons-material';

function Dashboard() {
  const upcomingEvents = [
    {
      id: 1,
      name: "Company Conference",
      date: "2024-03-15",
      location: "Tech Hub",
      guests: 150,
      budget: 5000
    },
    // Add more mock events as needed
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Welcome to AI Event Planner
          </Typography>
        </Grid>
        
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Upcoming Events
            </Typography>
            <Grid container spacing={3}>
              {upcomingEvents.map((event) => (
                <Grid item xs={12} md={6} key={event.id}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6">{event.name}</Typography>
                      <Grid container spacing={2} sx={{ mt: 2 }}>
                        <Grid item xs={6}>
                          <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
                            <CalendarMonth sx={{ mr: 1 }} />
                            {event.date}
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
                            <LocationOn sx={{ mr: 1 }} />
                            {event.location}
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
                            <People sx={{ mr: 1 }} />
                            {event.guests} guests
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
                            <AttachMoney sx={{ mr: 1 }} />
                            ${event.budget}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Button variant="contained" sx={{ mt: 2 }}>
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;