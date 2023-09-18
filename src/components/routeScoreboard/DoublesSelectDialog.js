import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'ゲストA','ゲストB','ゲストC','ゲストD', 'ゲストE','ゲストF','ゲストG','ゲストH'
];

export default function DialogSelect({ doublesOpen, handleDoublesClose,
                                       setLeftUpPlayer, setLeftDownPlayer, 
                                       setRightUpPlayer, setRightDownPlayer }) {
  const [personName, setPersonName] = React.useState([]);
  const [players, setPlayers] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  function handlePlayers (personName) {
    setPlayers(personName);
  }

  const [doublesTeamOpen, setDoublesTeamOpen] = React.useState(false);
  const handleDoublesTeamClickOpen = () => {
    setDoublesTeamOpen(true);
  };
  const handleDoublesTeamClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setDoublesTeamOpen(false);
    }
  };

  return (
    <div>
      <Dialog disableEscapeKeyDown open={doublesOpen} onClose={handleDoublesClose}>
        <DialogTitle>4人選んでください</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-checkbox-label">ダブルス</InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput label="Tag" />}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={personName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl> 
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDoublesClose}>Cancel</Button>
          <Button onClick={() => {handleDoublesClose(); handlePlayers(personName); handleDoublesTeamClickOpen();}}>Ok</Button>
        </DialogActions>
      </Dialog>
      <MakeDoublesTeamDialog doublesTeamOpen={doublesTeamOpen} 
                             handleDoublesTeamClose={handleDoublesTeamClose} 
                             players={players}
                             setLeftUpPlayer={setLeftUpPlayer}
                             setLeftDownPlayer={setLeftDownPlayer}
                             setRightUpPlayer={setRightUpPlayer}
                             setRightDownPlayer={setRightDownPlayer}
      />
    </div>
  );
}

function MakeDoublesTeamDialog({ doublesTeamOpen, handleDoublesTeamClose, players,
                                 setLeftUpPlayer, setLeftDownPlayer, 
                                 setRightUpPlayer, setRightDownPlayer }) {
  const navigate = useNavigate();

  const [firstPlayer, setFirstPlayer] = useState('');
  const handleFirstPlayerChange = (event) => {
    setFirstPlayer(String(event.target.value) || '');
  };

  const [secondPlayer, setSecondPlayer] = useState('');
  const handleSecondPlayerChange = (event) => {
    setSecondPlayer(String(event.target.value) || '');
  };

  const [thirdPlayer, setThirdPlayer] = useState('');
  const handleThirdPlayerChange = (event) => {
    setThirdPlayer(String(event.target.value) || '');
  };

  const [fourthPlayer, setFourthPlayer] = useState('');
  const handleFourthPlayerChange = (event) => {
    setFourthPlayer(String(event.target.value) || '');
  };

  function setPlayers (dividedPlayers) {
    setLeftUpPlayer(dividedPlayers[0]);
    setLeftDownPlayer(dividedPlayers[1]);
    setRightUpPlayer(dividedPlayers[2]);
    setRightDownPlayer(dividedPlayers[3]);
  }

  return (
    <div>
      <Dialog disableEscapeKeyDown open={doublesTeamOpen} onClose={handleDoublesTeamClose}>
        <DialogTitle>チームの振り分け</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <FormControl sx={{ m: 1, minWidth: 228 }}>
              <InputLabel id="demo-dialog-select-label">チーム１</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={firstPlayer}
                onChange={handleFirstPlayerChange}
                input={<OutlinedInput label="FirstPlayer" />}
              >
                <MenuItem value={players[0]}>{players[0]}</MenuItem>
                <MenuItem value={players[1]}>{players[1]}</MenuItem>
                <MenuItem value={players[2]}>{players[2]}</MenuItem>
                <MenuItem value={players[3]}>{players[3]}</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 228 }}>
              <InputLabel id="demo-dialog-select-label">チーム１</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={secondPlayer}
                onChange={handleSecondPlayerChange}
                input={<OutlinedInput label="SecondPlayer" />}
              >
                <MenuItem value={players[0]}>{players[0]}</MenuItem>
                <MenuItem value={players[1]}>{players[1]}</MenuItem>
                <MenuItem value={players[2]}>{players[2]}</MenuItem>
                <MenuItem value={players[3]}>{players[3]}</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 228 }}>
              <InputLabel id="demo-dialog-select-label">チーム２</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={thirdPlayer}
                onChange={handleThirdPlayerChange}
                input={<OutlinedInput label="ThirdPlayer" />}
              >
                <MenuItem value={players[0]}>{players[0]}</MenuItem>
                <MenuItem value={players[1]}>{players[1]}</MenuItem>
                <MenuItem value={players[2]}>{players[2]}</MenuItem>
                <MenuItem value={players[3]}>{players[3]}</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 228 }}>
              <InputLabel id="demo-dialog-select-label">チーム２</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={fourthPlayer}
                onChange={handleFourthPlayerChange}
                input={<OutlinedInput label="FourthPlayer" />}
              >
                <MenuItem value={players[0]}>{players[0]}</MenuItem>
                <MenuItem value={players[1]}>{players[1]}</MenuItem>
                <MenuItem value={players[2]}>{players[2]}</MenuItem>
                <MenuItem value={players[3]}>{players[3]}</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDoublesTeamClose}>Cancel</Button>
          <Button onClick={() => {handleDoublesTeamClose(); navigate('/doubles'); 
                                  setPlayers([firstPlayer, secondPlayer, thirdPlayer, fourthPlayer]); }
                          }>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}