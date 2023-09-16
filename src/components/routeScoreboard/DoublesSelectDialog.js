import React from 'react';
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
import MakeDoublesTeamDialog from './MakeDoublesTeamDialog.js';

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
  'ゲストA','ゲストB','ゲストC','ゲストD'
];

export default function DialogSelect({ doublesOpen, handleDoublesClose }) {
  const navigate = useNavigate();

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
        <DialogTitle>出場選手を選んでください</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
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
      <MakeDoublesTeamDialog doublesTeamOpen={doublesTeamOpen} handleDoublesTeamClose={handleDoublesTeamClose}/>
    </div>
  );
}