import React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';

export default function NewGameButton() {

  return (
    <div>
      <Box sx={{ '& > :not(style)': { m: 1 } }} >
        <Fab variant="extended" color="primary" sx={{ position: 'flex', top: 400 }}>
           ログイン
        </Fab>
      </Box>
    </div>
  );
}