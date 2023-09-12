import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import MatchRecord from './MatchRecord.js';

export default function Record() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <div>
      <Box sx={{ flexGrow: 1, marginTop: {xs:9, sm:10}}}>
        <div className="matchCardContainer">
          <MatchRecord></MatchRecord>
        </div>
        <div className="matchCardContainer">
          <MatchRecord></MatchRecord>
        </div>
        <div className="matchCardContainer">
          <MatchRecord></MatchRecord>
        </div>
      </Box>
    </div>
  );
}