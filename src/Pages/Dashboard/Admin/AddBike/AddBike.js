import { TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import MuiButton from "../../../Shared/StyledComponent/MuiButton/MuiButton";

const AddBike = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    ///post data to server
    axios
      .post("https://nameless-fortress-10028.herokuapp.com/bikes", data)
      .then((res) => {
        console.log(res.data);
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
            sx={{ mt: 2, width: "50%" }}
            variant="outlined"
            {...register("title")}
          />

          <TextField
            required
            label="Image URL"
            sx={{ mt: 2, width: "50%" }}
            variant="outlined"
            {...register("img")}
          />
          <TextField
            required
            label="Bike Price"
            sx={{ mt: 2, width: "50%" }}
            variant="outlined"
            type="number"
            {...register("price")}
          />

          <TextField
            required
            label="Rating"
            sx={{ mt: 2, width: "50%" }}
            variant="outlined"
            type="number"
            {...register("rating", { required: true, min: 0, max: 5 })}
          />
          {errors.review?.type === "min" && (
            <Typography color="error" sx={{ textAlign: "left" }}>
              Please input 0 to 5
            </Typography>
          )}
          <TextField
            required
            multiline
            rows={5}
            label="Description"
            variant="outlined"
            sx={{ my: 2, width: "50%" }}
            {...register("desc")}
          />
        </Box>
        <MuiButton type="submit">Add Bike</MuiButton>
      </form>
    </div>
  );
};

export default AddBike;
