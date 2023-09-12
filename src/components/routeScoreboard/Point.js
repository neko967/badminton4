import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

export default function LeftScore() {

  return (
    <>
      <Box sx={{ height: {xs:150, md:360}, marginTop: 0, backgroundColor: 'white', lineHeight: {xs:9, md:21},
        '&:hover': { backgroundColor: 'white.main', opacity: [0.9, 0.8, 0.7], },}}>13</Box>
    </>
  );
}