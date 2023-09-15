import React from 'react';
import Box from '@mui/material/Box';

export default function RightPoint({ rightPoint, rightIsServer, onPointClick }) {

  return (
    <>
      {rightIsServer ?
      <Box 
        sx={{ height: {xs:150, md:360}, marginTop: 0, backgroundColor: 'red', lineHeight: {xs:9, md:21},
        '&:hover': { backgroundColor: 'white.main', opacity: [0.9, 0.8, 0.7], },}}
        onClick={onPointClick}
      >
        {rightPoint}
      </Box>
      :
      <Box 
        sx={{ height: {xs:150, md:360}, marginTop: 0, backgroundColor: 'white', lineHeight: {xs:9, md:21},
        '&:hover': { backgroundColor: 'white.main', opacity: [0.9, 0.8, 0.7], },}}
        onClick={onPointClick}
      >
        {rightPoint}
      </Box>
      }
    </>
  );
}