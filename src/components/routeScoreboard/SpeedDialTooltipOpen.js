import React from 'react';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import PersonIcon from '@mui/icons-material/Person';
import PeopleIcon from '@mui/icons-material/People';
import { useNavigate } from 'react-router-dom';
import SinglesSelectDialog from './SinglesSelectDialog';
import DoublesSelectDialog from './DoublesSelectDialog';

export default function SpeedDialTooltipOpen({ setLeftPlayer, setRightPlayer }) {
  const [dialOpen, setDialOpen] = React.useState(false);
  const handleDialOpen = () => setDialOpen(true);
  const handleDialClose = () => setDialOpen(false);

  const actions = [
    { icon: <PeopleIcon onClick={() => {handleDoublesClickOpen();}} />, name: 'ダブルス' },
    { icon: <PersonIcon onClick={() => {handleSinglesClickOpen();}}/>, name: 'シングルス' },
  ];

  const [singlesOpen, setSinglesOpen] = React.useState(false);
  const handleSinglesClickOpen = () => {
    setSinglesOpen(true);
  };
  const handleSinglesClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setSinglesOpen(false);
    }
  };

  const [doublesOpen, setDoublesOpen] = React.useState(false);
  const handleDoublesClickOpen = () => {
    setDoublesOpen(true);
  };
  const handleDoublesClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setDoublesOpen(false);
    }
  };

  return (
    <>
    <Box sx={{ position: 'fixed', bottom: 60, left: 0, right: {xs: 10, lg:120}}}>
      <Backdrop open={dialOpen} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        onClose={handleDialClose}
        onOpen={handleDialOpen}
        open={dialOpen}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={handleDialClose}
          />
        ))}
      </SpeedDial>
    </Box>
    <SinglesSelectDialog 
      singlesOpen={singlesOpen} 
      handleSinglesClose={handleSinglesClose} 
      setLeftPlayer={setLeftPlayer}
      setRightPlayer={setRightPlayer}
    />
    <DoublesSelectDialog 
      doublesOpen={doublesOpen} 
      handleDoublesClose={handleDoublesClose} 
    />
  </>
  );
}