import React from 'react'
import Paper from '@mui/material/Paper';

import HomeIcon from '@mui/icons-material/Home';
import RestoreIcon from '@mui/icons-material/Restore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import GroupsIcon from '@mui/icons-material/Groups';

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
              <BottomNavigationAction icon={<RestoreIcon />} onClick={() => navigate('/record')}/>
              <BottomNavigationAction icon={<MoreVertIcon />} onClick={() => navigate('/member')}/>
            </BottomNavigation>
          </Paper> 
        </Box>
      </div>
    );
  }
}