// Remove styled import since it's not needed
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  TextField,
  Button,
  Grid,
  Typography,
  Box,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Slider,
  Switch,
  FormControlLabel,
  InputAdornment,
} from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ImageIcon from '@mui/icons-material/Image';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CloseIcon from '@mui/icons-material/Close';

const currencies = [
  { code: 'USD', symbol: '$' },
  { code: 'EUR', symbol: '€' },
  { code: 'INR', symbol: '₹' },
];

function CreateEvent() {
  const [eventData, setEventData] = useState({
    name: '',
    dateTime: new Date(),
    location: '',
    type: '',
    customTypeDescription: '',
    guestCount: '',
    budget: [1000, 5000],
    currency: 'USD',
    banner: null,
    aiSuggestions: false
  });

  const eventTypes = ['Birthday', 'Conference', 'Wedding', 'Corporate', 'Social', 'Custom'];

  const handleBudgetChange = (event, newValue) => {
    setEventData({ ...eventData, budget: newValue });
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setEventData({ ...eventData, banner: URL.createObjectURL(file) });
    }
  };

  return (
    <Box sx={{ 
      p: 4, 
      maxWidth: 800, 
      margin: 'auto',
      backgroundColor: 'rgba(15, 23, 42, 0.95)',
      backdropFilter: 'blur(20px)',
      borderRadius: '24px',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
    }}>
      <Typography variant="h4" sx={{ 
        mb: 4,
        fontWeight: 700,
        background: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}>
        Create New Event
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Event Name"
            value={eventData.name}
            onChange={(e) => setEventData({ ...eventData, name: e.target.value })}
            sx={{ 
              '& .MuiOutlinedInput-root': {
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
              }
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              label="Date & Time"
              value={eventData.dateTime}
              onChange={(newValue) => setEventData({ ...eventData, dateTime: newValue })}
              renderInput={(params) => <TextField {...params} fullWidth />}
              sx={{ width: '100%' }}
            />
          </LocalizationProvider>
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Location"
            value={eventData.location}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <LocationOnIcon sx={{ color: '#8B5CF6' }} />
                </InputAdornment>
              ),
            }}
            onChange={(e) => setEventData({ ...eventData, location: e.target.value })}
          />
        </Grid>

        <Grid item xs={12}>
          <Typography sx={{ mb: 2, color: 'rgba(255, 255, 255, 0.7)' }}>Event Type</Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            {eventTypes.map((type) => (
              <Button
                key={type}
                variant={eventData.type === type ? "contained" : "outlined"}
                onClick={() => setEventData({ ...eventData, type })}
                sx={{
                  px: 3,
                  py: 1.5,
                  borderRadius: '12px',
                  fontSize: '1.1rem',
                  color: eventData.type === type ? 'white' : 'rgba(255, 255, 255, 0.7)',
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                  backgroundColor: eventData.type === type ? 
                    'linear-gradient(135deg, #8B5CF6, #EC4899)' : 
                    'rgba(255, 255, 255, 0.05)',
                  '&:hover': {
                    backgroundColor: eventData.type === type ?
                      'linear-gradient(135deg, #7C3AED, #DB2777)' :
                      'rgba(255, 255, 255, 0.1)',
                  }
                }}
              >
                {type}
              </Button>
            ))}
          </Box>
          {eventData.type === 'Custom' && (
            <TextField
              fullWidth
              multiline
              rows={3}
              placeholder="Describe your custom event type..."
              value={eventData.customTypeDescription || ''}
              onChange={(e) => setEventData({ ...eventData, customTypeDescription: e.target.value })}
              sx={{ 
                mt: 2,
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  color: 'white',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#8B5CF6',
                },
              }}
            />
          )}
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            type="number"
            label="Expected Guests"
            value={eventData.guestCount}
            onChange={(e) => {
              const value = Math.max(0, parseInt(e.target.value) || 0);
              setEventData({ ...eventData, guestCount: value });
            }}
            inputProps={{ min: 0 }}
            sx={{ 
              '& .MuiOutlinedInput-root': {
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
              }
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <Typography gutterBottom>Budget Range</Typography>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 2 }}>
            <FormControl sx={{ minWidth: 120 }}>
              <Select
                value={eventData.currency}
                onChange={(e) => setEventData({ ...eventData, currency: e.target.value })}
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  color: 'white',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                  },
                  '& .MuiSelect-icon': {
                    color: 'rgba(255, 255, 255, 0.7)',
                  },
                }}
              >
                {currencies.map((currency) => (
                  <MenuItem key={currency.code} value={currency.code}>
                    {currency.symbol} {currency.code}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Box sx={{ flex: 1 }}>
              <TextField
                type="number"
                value={eventData.budget[0]}
                onChange={(e) => setEventData({ ...eventData, budget: [parseInt(e.target.value) || 0, eventData.budget[1]] })}
                InputProps={{
                  startAdornment: <InputAdornment position="start">{currencies.find(c => c.code === eventData.currency)?.symbol}</InputAdornment>,
                }}
                sx={{ width: '45%', mr: 2 }}
              />
              <TextField
                type="number"
                value={eventData.budget[1]}
                onChange={(e) => setEventData({ ...eventData, budget: [eventData.budget[0], parseInt(e.target.value) || 0] })}
                InputProps={{
                  startAdornment: <InputAdornment position="start">{currencies.find(c => c.code === eventData.currency)?.symbol}</InputAdornment>,
                }}
                sx={{ width: '45%' }}
              />
            </Box>
          </Box>
        </Grid>

        {/* Removed the Theme Colors Grid item section completely */}

        <Grid item xs={12}>
          <Button
            component="label"
            variant="outlined"
            startIcon={<ImageIcon />}
            sx={{ 
              width: '100%',
              height: '100px',
              borderStyle: 'dashed',
              borderRadius: '12px',
              background: eventData.banner ? `url(${eventData.banner})` : 'none',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            Upload Event Banner
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={handleImageUpload}
            />
          </Button>
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Switch
                checked={eventData.aiSuggestions}
                onChange={(e) => setEventData({ ...eventData, aiSuggestions: e.target.checked })}
                color="secondary"
              />
            }
            label={
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <AutoAwesomeIcon sx={{ color: '#EC4899' }} />
                <Typography>AI Suggestions for venues & timeline</Typography>
              </Box>
            }
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              py: 2,
              mt: 2,
              background: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
              borderRadius: '12px',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 10px 20px rgba(139, 92, 246, 0.3)',
              }
            }}
          >
            Create Event
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CreateEvent;