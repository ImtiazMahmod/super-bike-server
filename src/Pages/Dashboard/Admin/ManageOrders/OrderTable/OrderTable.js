import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import OrderStatus from "../OrderStatus/OrderStatus";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "gray",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },

  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

///delete order
const handleDelete = (id) => {
  axios.delete(`http://localhost:5000/deleteOrder/${id}`).then((res) => {
    console.log(res.data);
  });
};

function OrderTable({ orders }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Customer Name</StyledTableCell>
            <StyledTableCell align="right">Bike Name</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Address</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders?.map((order) => (
            <StyledTableRow key={order?._id}>
              <StyledTableCell component="th" scope="row">
                {order?.displayName}
              </StyledTableCell>
              <StyledTableCell align="right">
                {order?.bikeInfo?.title}
              </StyledTableCell>
              <StyledTableCell align="right">
                {order?.bikeInfo?.price}
              </StyledTableCell>
              <StyledTableCell align="right">{order?.address}</StyledTableCell>
              <StyledTableCell align="right">
                <OrderStatus status={order?.status} id={order?._id} />
              </StyledTableCell>
              <StyledTableCell align="right">
                <IconButton
                  onClick={() => handleDelete(order?._id)}
                  aria-label="delete"
                >
                  <DeleteIcon color="error" />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default OrderTable;
