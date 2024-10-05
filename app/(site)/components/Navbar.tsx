// src/components/MessengerNavbar.tsx

import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Chat, Notifications, AccountCircle } from '@mui/icons-material';

const MessengerNavbar: React.FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#24292e' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          Messenger
        </Typography>
        <Button color="inherit" sx={{ marginRight: 2 }}>
          Home
        </Button>
        <Button color="inherit" sx={{ marginRight: 2 }}>
          Messages
        </Button>
        <Button color="inherit" sx={{ marginRight: 2 }}>
          Contacts
        </Button>
        <IconButton color="inherit" sx={{ marginRight: 2 }}>
          <Chat />
        </IconButton>
        <IconButton color="inherit" sx={{ marginRight: 2 }}>
          <Notifications />
        </IconButton>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default MessengerNavbar;
