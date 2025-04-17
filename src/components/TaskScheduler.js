import React, { useState } from 'react';
import { 
  Container, 
  Paper, 
  Typography, 
  List, 
  ListItem, 
  ListItemText, 
  Checkbox,
  Chip,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';

function TaskScheduler() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Book venue', completed: false, deadline: '2024-02-20', priority: 'high' },
    { id: 2, title: 'Send invitations', completed: false, deadline: '2024-02-25', priority: 'medium' },
  ]);

  const [open, setOpen] = useState(false);
  const [newTask, setNewTask] = useState({ title: '', deadline: '', priority: 'medium' });

  const handleToggle = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleAddTask = () => {
    setTasks([...tasks, { ...newTask, id: tasks.length + 1, completed: false }]);
    setOpen(false);
    setNewTask({ title: '', deadline: '', priority: 'medium' });
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Event Tasks
        </Typography>
        <Button variant="contained" onClick={() => setOpen(true)} sx={{ mb: 3 }}>
          Add New Task
        </Button>
        <List>
          {tasks.map((task) => (
            <ListItem
              key={task.id}
              secondaryAction={
                <Chip 
                  label={task.priority}
                  color={task.priority === 'high' ? 'error' : 'default'}
                />
              }
            >
              <Checkbox
                edge="start"
                checked={task.completed}
                onChange={() => handleToggle(task.id)}
              />
              <ListItemText 
                primary={task.title}
                secondary={`Deadline: ${task.deadline}`}
                sx={{ textDecoration: task.completed ? 'line-through' : 'none' }}
              />
            </ListItem>
          ))}
        </List>
      </Paper>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add New Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Task Title"
            fullWidth
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Deadline"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            value={newTask.deadline}
            onChange={(e) => setNewTask({ ...newTask, deadline: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleAddTask}>Add Task</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default TaskScheduler;