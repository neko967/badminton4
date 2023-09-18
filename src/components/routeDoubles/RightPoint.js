import React from 'react';
import Box from '@mui/material/Box';

export default function RightPoint({ rightPoint, rightIsServer, onPointClick }) {

  return (
    <>
      {rightIsServer ?
      <Box 
        sx={{ height: {xs:150, md:360}, marginTop: 0, backgroundColor: 'red', lineHeight: {xs:2, md:4.8},
        '&:hover': { backgroundColor: 'white.main', opacity: [0.9, 0.8, 0.7], },}}
        onClick={onPointClick}
      >
        <div className="point">
          {rightPoint}
        </div>
      </Box>
      :
      <Box 
        sx={{ height: {xs:150, md:360}, marginTop: 0, backgroundColor: 'white', lineHeight: {xs:2, md:4.8},
        '&:hover': { backgroundColor: 'white.main', opacity: [0.9, 0.8, 0.7], },}}
        onClick={onPointClick}
      >
        <div className="point">
          {rightPoint}
        </div>
      </Box>
      }
    </>
  );
}