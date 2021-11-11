import { TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import MuiButton from "../StyledComponent/MuiButton/MuiButton";

const BuyNow = ({ bike }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    ///order post to server
    axios.post("http://localhost:5000/orders", data).then((res) => {
      if (res.data.insertedId) {
        alert("order confirmed");
        reset();
      }
    });
  };

  return (
    <div>
      <Typography variant="h4" fontWeight="bold">
        Purchase
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
            placeholder="Bike Title"
            sx={{ mt: 2, width: "75%" }}
            variant="outlined"
            value={bike?.title}
            {...register("title")}
          />
          <TextField
            required
            label="Address"
            sx={{ mt: 2, width: "75%" }}
            variant="outlined"
            {...register("address")}
          />
          <TextField
            required
            label="Phone"
            sx={{ mt: 2, width: "75%" }}
            variant="outlined"
            {...register("phone")}
          />

          <TextField
            required
            label="Quantity"
            sx={{ mt: 2, width: "75%" }}
            variant="outlined"
            type="number"
            {...register("quantity", { required: true, min: 1 })}
          />
          {errors.quantity?.type === "min" && (
            <Typography color="error" sx={{ textAlign: "left" }}>
              Please input minimum 1
            </Typography>
          )}
          <TextField
            multiline
            rows={5}
            label="Note"
            placeholder="Additional short note"
            variant="outlined"
            sx={{ my: 2, width: "75%" }}
            {...register("note")}
          />
        </Box>
        <MuiButton type="submit">Buy Now</MuiButton>
      </form>
    </div>
  );
};

export default BuyNow;
