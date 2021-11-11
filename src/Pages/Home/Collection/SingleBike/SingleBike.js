import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Divider,
  Rating,
} from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/styles";
import { Link } from "react-router-dom";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "tomato",
  },
});

const SingleBike = ({ bike }) => {
  return (
    <Card sx={{ maxWidth: 345, height: 500, borderRadius: "20px" }}>
      <CardActionArea>
        <CardMedia component="img" height="250" image={bike?.img} alt="bike" />
      </CardActionArea>
      <CardContent>
        <StyledRating
          sx={{ ms: "auto" }}
          size="small"
          color="tomato"
          name="half-rating"
          defaultValue={bike?.rating}
          readOnly
        />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography gutterBottom variant="h6" component="div">
            {bike?.title}
          </Typography>
          <Typography
            gutterBottom
            variant="subtitle1"
            fontWeight="bold"
            component="div"
          >
            BDT {bike?.price}
          </Typography>
        </Box>
        <Divider />
        <Typography sx={{ pt: 2 }} variant="body2" color="text.secondary">
          {bike?.desc.slice(0, 50)}...
        </Typography>
      </CardContent>

      <CardActions sx={{ my: 1 }}>
        <Box sx={{ mx: "auto" }}>
          {" "}
          <Link to={`/purchase/${bike?._id}`}>
            <Button variant="outlined" size="small" color="error">
              Buy Now
            </Button>
          </Link>
        </Box>
      </CardActions>
    </Card>
  );
};

export default SingleBike;
