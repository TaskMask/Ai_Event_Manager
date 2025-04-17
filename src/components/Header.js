import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, InputBase, Badge } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import ProfileForm from './ProfileForm';

function Header() {
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <>
      <AppBar 
        position="static" 
        sx={{
          background: 'rgba(15, 23, 42, 0.9)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <Toolbar sx={{ gap: 2 }}>
          <IconButton
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography 
            variant="h6" 
            component={Link} 
            to="/"
            sx={{ 
              flexGrow: 0,
              textDecoration: 'none',
              color: 'inherit',
              fontWeight: 700,
              background: 'linear-gradient(to right, #8B5CF6, #EC4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Placeholder
          </Typography>

          <Box sx={{ 
            flexGrow: 1,
            display: 'flex',
            gap: 2,
            ml: 4
          }}>
            <Button 
              color="inherit" 
              component={Link} 
              to="/dashboard"
              sx={{
                borderRadius: '8px',
                px: 2,
                '&:hover': {
                  background: 'rgba(139, 92, 246, 0.1)',
                }
              }}
            >
              Dashboard
            </Button>
            <Button 
              color="inherit" 
              component={Link} 
              to="/events"
              sx={{
                borderRadius: '8px',
                px: 2,
                '&:hover': {
                  background: 'rgba(139, 92, 246, 0.1)',
                }
              }}
            >
              Events
            </Button>
            <Button 
              color="inherit" 
              component={Link} 
              to="/sessions"
              sx={{
                borderRadius: '8px',
                px: 2,
                '&:hover': {
                  background: 'rgba(139, 92, 246, 0.1)',
                }
              }}
            >
              Sessions
            </Button>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ 
              position: 'relative',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              p: '4px 12px',
              display: 'flex',
              alignItems: 'center'
            }}>
              <SearchIcon sx={{ color: 'rgba(255, 255, 255, 0.7)', mr: 1 }} />
              <InputBase
                placeholder="Search..."
                sx={{ 
                  color: 'inherit',
                  '& input': {
                    color: 'white',
                  }
                }}
              />
            </Box>

            <IconButton color="inherit">
              <Badge badgeContent={3} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>

            <IconButton 
              color="inherit"
              sx={{
                background: 'rgba(139, 92, 246, 0.2)',
                '&:hover': {
                  background: 'rgba(139, 92, 246, 0.3)',
                }
              }}
              onClick={() => setProfileOpen(true)}
            >
              <AccountCircleIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      
      <ProfileForm 
        open={profileOpen}
        onClose={() => setProfileOpen(false)}
      />
    </>
  );
}

export default Header;