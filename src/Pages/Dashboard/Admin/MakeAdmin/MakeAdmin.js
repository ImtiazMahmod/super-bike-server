import { TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import MuiButton from "../../../Shared/StyledComponent/MuiButton/MuiButton";

const MakeAdmin = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    ///make admin post to server
    axios
      .put("https://nameless-fortress-10028.herokuapp.com/makeAdmin", data)
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            title: "Make Admin",
            text: "New Admin created.",
            icon: "success",
            showCancelButton: false,
            confirmButtonColor: "#3085d6",
            // cancelButtonColor: "#3085d6",
            confirmButtonText: "ok",
          });
          reset();
        } else {
          Swal.fire({
            title: "Error",
            text: "Try Again.",
            icon: "error",
            showCancelButton: false,
            confirmButtonColor: "#3085d6",
            // cancelButtonColor: "#3085d6",
            confirmButtonText: "ok",
          });
          reset();
        }
      });
  };
  return (
    <div>
      <Typography variant="h4" sx={{ fontWeight: "bold", my: 3 }}>
        Make Admin
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <TextField
            label="Email"
            required
            sx={{ my: 2, width: "75%" }}
            variant="outlined"
            {...register("email")}
          />
        </Box>
        <MuiButton type="submit">Submit</MuiButton>
      </form>
    </div>
  );
};

export default MakeAdmin;
