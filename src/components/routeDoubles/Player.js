import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

export default function Player({ leftUpPlayer, leftDownPlayer, rightUpPlayer, rightDownPlayer,
                                 leftConsecutivePointSwitch, rightConsecutivePointSwitch }) {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid xs={3}>
          <Item>{leftUpPlayer}</Item>
        </Grid>
        <Grid xs={3}>
          <Item>{leftDownPlayer}</Item>
        </Grid>
        <Grid xs={3}>
          <Item>{rightUpPlayer}</Item>
        </Grid>
        <Grid xs={3}>
          <Item>{rightDownPlayer}</Item>
        </Grid>
      </Grid>
    </Box>
  );
}