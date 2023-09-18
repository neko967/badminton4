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

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs};
}

const defaultRows = [
  createData('ゲストA', '〇〇高校', '58%', 2036),
  createData('ゲストB', '〇〇高校', '47%', 1987),
  createData('ゲストC', '〇〇高校', '64%', 2134),
  createData('ゲストD', '〇〇高校', '50%', 2000),
  createData('ゲストE', '〇〇高校', '43%', 1964),
  createData('ゲストF', '〇〇高校', '55%', 2025),
  createData('ゲストG', '〇〇高校', '45%', 1975),
  createData('ゲストH', '〇〇高校', '41%', 1932),
];

const LoginRows = [
  createData('ログイン後は自分が登録したメンバーが出るように鋭意製作中です'),
];


export default function Members( {isAuth}) {

  return (
    <>
      <TableContainer component={Paper} sx={{marginTop: {xs:7 ,sm:8}}}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">名前</StyledTableCell>
              <StyledTableCell align="left">所属</StyledTableCell>
              <StyledTableCell align="right">勝率</StyledTableCell>
              <StyledTableCell align="right">強さ</StyledTableCell>
            </TableRow>
          </TableHead>
          {!isAuth ?
          <TableBody>
            {defaultRows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="left">{row.calories}</StyledTableCell>
                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
          :
          <TableBody>
             {LoginRows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="left">{row.calories}</StyledTableCell>
                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
          }
        </Table>
      </TableContainer>
    </>
  );
}