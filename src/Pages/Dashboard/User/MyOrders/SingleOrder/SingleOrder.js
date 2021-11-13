import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Divider,
  IconButton,
  Rating,
} from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles, styled } from "@mui/styles";
import { Link } from "react-router-dom";
import { green, red } from "@mui/material/colors";
import { BackspaceOutlined } from "@mui/icons-material";
import Swal from "sweetalert2";
import axios from "axios";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "tomato",
  },
});

///make custom styles
const useStyles = makeStyles({
  root: {
    textDecoration: "none",
  },
  status: {
    color: "white",
    fontWeight: "bold",
    borderRadius: "5%",
    width: "50%",
  },
});

const SingleOrder = ({ order }) => {
  //delete bike
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Your order will be canceled!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://nameless-fortress-10028.herokuapp.com/deleteOrder/${id}`
          )
          .then((res) => {
            if (res.data.deletedCount) {
              Swal.fire("Cancel!", "Your order has been deleted.", "success");
            }
          });
      }
    });
  };
  console.log(order);
  const { root, status } = useStyles();
  return (
    <Card
      sx={{
        maxWidth: 345,
        height: 470,
        borderRadius: "20px",
      }}
    >
      <CardActionArea>
        <Box sx={{ mx: 3, mt: 1 }}>
          {order?.status === "Pending" && (
            <Typography
              variant="subtitle1"
              className={status}
              sx={{ bgcolor: red[500], mr: "auto" }}
            >
              {order?.status}
            </Typography>
          )}
          {order?.status === "Shipped" && (
            <Typography
              variant="subtitle1"
              className={status}
              sx={{ bgcolor: green[500], ml: "auto" }}
            >
              {order?.status}
            </Typography>
          )}
          {order?.status === "Rejected" && (
            <Typography
              variant="subtitle1"
              className={status}
              sx={{ bgcolor: red[700], ml: "auto" }}
            >
              {order?.status}
            </Typography>
          )}
        </Box>
        <img src={order?.bikeInfo?.img} height="auto" width="100%" alt="bike" />
      </CardActionArea>
      <CardContent>
        {" "}
        <Typography
          sx={{ textAlign: "left" }}
          gutterBottom
          variant="h6"
          component="div"
        >
          {order?.bikeInfo?.title}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            gutterBottom
            variant="subtitle1"
            fontWeight="bold"
            component="div"
          >
            BDT {order?.bikeInfo?.price}
          </Typography>
          <StyledRating
            sx={{ ms: "auto" }}
            size="small"
            color="tomato"
            name="half-rating"
            defaultValue={order?.bikeInfo?.rating}
            readOnly
          />
        </Box>
        <Divider />
        <Typography
          textAlign="left"
          gutterBottom
          sx={{ mt: 1 }}
          variant="subtitle1"
          component="div"
        >
          {order?.bikeInfo?.desc.slice(0, 50)}
        </Typography>
      </CardContent>
      <CardActions
        sx={{ my: 1, display: "flex", justifyContent: "space-between" }}
      >
        <Link className={root} to={`/purchase/${order?.bikeInfo?._id}`}>
          <Button
            variant="outlined"
            size="small"
            color="error"
            sx={{ color: "tomato" }}
          >
            Details
          </Button>
        </Link>
        <IconButton
          onClick={() => handleDelete(order?._id)}
          sx={{ textAlign: "right" }}
        >
          <BackspaceOutlined button color="error" />
        </IconButton>
      </CardActions>{" "}
    </Card>
  );
};

export default SingleOrder;
