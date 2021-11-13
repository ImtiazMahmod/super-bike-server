import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container, IconButton, TablePagination } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
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

//delete bike
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
          `https://nameless-fortress-10028.herokuapp.com/deleteBike/${id}`
        )
        .then((res) => {
          if (res.data.deletedCount) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
    }
  });
};

function BikeTable({ bikes }) {
  ///pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Container>
      <Paper>
        <TableContainer sx={{ maxHeight: 640 }} component={Paper}>
          <Table stickyHeader aria-label="sticky table" sx={{ minWidth: 480 }}>
            <TableHead>
              <TableRow>
                <StyledTableCell>Bike Name</StyledTableCell>
                <StyledTableCell>Rating</StyledTableCell>
                <StyledTableCell>Price</StyledTableCell>
                <StyledTableCell>Delete</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bikes
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((bike) => (
                  <StyledTableRow key={bike?._id}>
                    <StyledTableCell component="th" scope="row">
                      {bike?.title}
                    </StyledTableCell>
                    <StyledTableCell>{bike?.rating}</StyledTableCell>
                    <StyledTableCell>{bike?.price}</StyledTableCell>
                    <StyledTableCell>
                      <IconButton
                        onClick={() => handleDelete(bike?._id)}
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
          count={bikes.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Container>
  );
}

export default BikeTable;
