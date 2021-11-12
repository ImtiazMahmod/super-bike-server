import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Divider,
  Rating,
} from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles, styled } from "@mui/styles";
import { Link } from "react-router-dom";
import { green, red } from "@mui/material/colors";

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
        <img src={order?.bike?.img} height="auto" width="100%" alt="bike" />
      </CardActionArea>
      <CardContent>
        <StyledRating
          sx={{ ms: "auto" }}
          size="small"
          color="tomato"
          name="half-rating"
          //   defaultValue={rating}
          readOnly
        />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography gutterBottom variant="h6" component="div">
            {order?.bike?.title}
          </Typography>
          <Typography
            gutterBottom
            variant="subtitle1"
            fontWeight="bold"
            component="div"
          >
            BDT {order?.bike?.price}
          </Typography>
        </Box>
        <Divider />
      </CardContent>
      <CardActions sx={{ my: 1 }}>
        <Box sx={{ mx: "auto" }}>
          {" "}
          <Link className={root} to={`/purchase/${order?.bike?._id}`}>
            <Button
              variant="outlined"
              size="small"
              color="error"
              sx={{ color: "tomato" }}
            >
              Details
            </Button>
          </Link>
        </Box>
      </CardActions>{" "}
    </Card>
  );
};

export default SingleOrder;
