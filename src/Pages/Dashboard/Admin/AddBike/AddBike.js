import { TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Axios } from "axios";
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
    Axios.post("", {
      method: "POST",
      Headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
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
            label="Title"
            sx={{ mt: 2, width: "50%" }}
            variant="outlined"
            {...register("title", { required: true })}
          />
          <TextField
            label="Image URL"
            sx={{ mt: 2, width: "50%" }}
            variant="outlined"
            {...register("img")}
          />
          <TextField
            label="Bike Price"
            sx={{ mt: 2, width: "50%" }}
            variant="outlined"
            type="number"
            {...register("price", { required: true })}
          />
          <TextField
            multiline
            rows={5}
            label="Description"
            variant="outlined"
            sx={{ my: 2, width: "50%" }}
            {...register("desc", { required: true })}
          />

          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}
        </Box>
        <MuiButton type="submit">Add Bike</MuiButton>
      </form>
    </div>
  );
};

export default AddBike;
