import { TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import MuiButton from "../../../Shared/StyledComponent/MuiButton/MuiButton";

const AddBike = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    ///post data to server
    axios
      .post("https://nameless-fortress-10028.herokuapp.com/bikes", data)
      .then((res) => {
        //bike added
        if (res.data.insertedId) {
          Swal.fire({
            title: "Bike Added",
            text: "Bike added to your store.",
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "OK",
          });
          reset();
        }
      });
  };

  return (
    <div>
      <Typography variant="h4" fontWeight="bold">
        Add a Bike
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
            required
            label="Title"
            sx={{ mt: 2, width: "75%" }}
            variant="outlined"
            {...register("title")}
          />

          <TextField
            required
            label="Image URL"
            sx={{ mt: 2, width: "75%" }}
            variant="outlined"
            {...register("img")}
          />
          <TextField
            required
            label="Bike Price"
            sx={{ mt: 2, width: "75%" }}
            variant="outlined"
            type="number"
            {...register("price")}
          />

          <TextField
            required
            label="Rating"
            sx={{ mt: 2, width: "75%" }}
            variant="outlined"
            type="number"
            {...register("rating", { required: true, min: 0, max: 5 })}
          />

          <TextField
            required
            multiline
            rows={5}
            label="Description"
            variant="outlined"
            sx={{ my: 2, width: "75%" }}
            {...register("desc")}
          />
        </Box>
        <MuiButton type="submit">Add Bike</MuiButton>
      </form>
    </div>
  );
};

export default AddBike;
