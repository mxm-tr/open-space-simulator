import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const NameForm = ({ userName, setUserName, handleSubmit }) => {
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '10px',
        boxShadow: 3,
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <Typography variant="h5" align="center" color="primary" gutterBottom>
        👋 Quel est ton prénom ?
      </Typography>
      <TextField
        id="name"
        label="Prénom"
        variant="outlined"
        fullWidth
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        required
        sx={{
          backgroundColor: '#fff',
          borderRadius: '5px',
        }}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Valider
      </Button>
    </Box>
  );
};

export default NameForm;
