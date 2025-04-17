import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import EventForm from './components/EventForm';
import Dashboard from './components/Dashboard';
import TaskScheduler from './components/TaskScheduler';
import LandingPage from './components/LandingPage';
import Events from './components/Events';

function App() {
  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#8B5CF6',
        light: '#A78BFA',
        dark: '#7C3AED',
      },
      secondary: {
        main: '#EC4899',
        light: '#F472B6',
        dark: '#DB2777',
      },
      background: {
        default: '#0F172A',
        paper: 'rgba(30, 41, 59, 0.8)',
      },
      text: {
        primary: '#F1F5F9',
        secondary: '#CBD5E1',
      },
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontWeight: 800,
        letterSpacing: '-0.025em',
        fontSize: '3.5rem',
        background: 'linear-gradient(to right, #8B5CF6, #EC4899)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      },
      h2: {
        fontWeight: 700,
        letterSpacing: '-0.02em',
      },
      h3: {
        fontWeight: 600,
        letterSpacing: '-0.015em',
      },
      button: {
        textTransform: 'none',
        fontWeight: 600,
      },
    },
    shape: {
      borderRadius: 16,
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backdropFilter: 'blur(12px)',
            backgroundColor: 'rgba(30, 41, 59, 0.8)',
            transition: 'all 0.5s ease',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.9), rgba(30, 41, 59, 0.7))',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.1)',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
              border: '1px solid rgba(139, 92, 246, 0.3)',
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            padding: '10px 24px',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-2px)',
            },
          },
          contained: {
            background: 'linear-gradient(135deg, #8B5CF6, #7C3AED)',
            boxShadow: '0 4px 12px rgba(139, 92, 246, 0.2)',
            '&:hover': {
              background: 'linear-gradient(135deg, #A78BFA, #8B5CF6)',
              boxShadow: '0 8px 16px rgba(139, 92, 246, 0.3)',
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App" style={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 25%),
            radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.1) 0%, transparent 35%)`,
          position: 'relative',
          zIndex: 1,
        }}>
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/new-event" element={<EventForm />} />
            <Route path="/tasks" element={<TaskScheduler />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
