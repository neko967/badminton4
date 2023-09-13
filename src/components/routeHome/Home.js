import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

import NewGameButton from './NewGameButton.js';

export default function Home() {
  return (
    <div className="App">
      <NewGameButton/>
    </div>
  );
}