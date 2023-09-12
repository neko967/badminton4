import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import HomeIcon from '@mui/icons-material/Home';
import ScoreboardIcon from '@mui/icons-material/Scoreboard';
import RestoreIcon from '@mui/icons-material/Restore';
import PeopleIcon from '@mui/icons-material/People';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import { useNavigate } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Menu() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  const matches = useMediaQuery('(max-width:599px)');

  if (matches) {
    return (
      <div>
        <Box sx={{ flexGrow: 1, display: { sm: 'none', xs: 'block' } }}>
          <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
              showLabels
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            >
              <BottomNavigationAction icon={<HomeIcon />} onClick={() => navigate('/')}/>
              <BottomNavigationAction icon={<ScoreboardIcon />} onClick={() => navigate('/scoreboard')}/>
              <BottomNavigationAction icon={<RestoreIcon />} onClick={() => navigate('/record')}/>
              <BottomNavigationAction icon={<PeopleIcon />} onClick={() => navigate('/member')}/>
            </BottomNavigation>
          </Paper> 
        </Box>
      </div>
    );
  }
}