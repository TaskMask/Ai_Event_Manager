import React from 'react';
import { Container } from '@mui/material';
import CreateEvent from './CreateEvent';

function Events() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <CreateEvent />
    </Container>
  );
}

export default Events;