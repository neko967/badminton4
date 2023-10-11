import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories) {
  return { name, calories};
}

const defaultRows = [
  createData('ゲストA', '〇〇高校'),
  createData('ゲストB', '〇〇高校'),
  createData('ゲストC', '〇〇高校'),
  createData('ゲストD', '〇〇高校'),
  createData('ゲストE', '〇〇高校'),
  createData('ゲストF', '〇〇高校'),
  createData('ゲストG', '〇〇高校'),
  createData('ゲストH', '〇〇高校'),
];

const LoginRows = [
  createData('ログイン後は自分が登録したメンバーが出るように鋭意製作中です'),
];



export default function Members( {isAuth, isAdmin}) {

  return (
    <>
      <TableContainer component={Paper} sx={{marginTop: {xs:7 ,sm:8}}}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">名前</StyledTableCell>
              <StyledTableCell align="left">所属</StyledTableCell>
            </TableRow>
          </TableHead>
          {isAuth || isAdmin ||
          <TableBody>
            {defaultRows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="left">{row.calories}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
          }
          {isAuth &&
          <TableBody>
             {LoginRows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="left">{row.calories}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
          }
          {isAdmin &&
          <TableBody>
            {AdminRows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="left">{row.calories}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
          }
        </Table>
      </TableContainer>
    </>
  );
}