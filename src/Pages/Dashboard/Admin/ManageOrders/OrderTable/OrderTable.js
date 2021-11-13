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
import { IconButton, TablePagination } from "@mui/material";
import Swal from "sweetalert2";

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
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      axios
        .delete(
          `https://nameless-fortress-10028.herokuapp.com/deleteOrder/${id}`
        )
        .then((res) => {
          if (res.data.deletedCount) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
    }
  });
};

function OrderTable({ orders }) {
  ///pagination
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Paper>
      <TableContainer sx={{ maxHeight: 640 }}>
        <Table sx={{ minWidth: 480 }} stickyHeader aria-label="sticky table">
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
            {orders
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((order) => (
                <StyledTableRow key={order?._id}>
                  <StyledTableCell component="th" scope="row">
                    {order?.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {order?.bikeInfo?.title}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {order?.bikeInfo?.price}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {order?.address}
                  </StyledTableCell>
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
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={orders.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default OrderTable;
