import { Container, Divider, Grid, Rating, Typography } from "@mui/material";
import { styled } from "@mui/styles";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import BuyNow from "../Shared/BuyNow/BuyNow";
import Navigation from "../Shared/Navigation/Navigation";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "tomato",
  },
});

const Purchase = () => {
  const [bike, setBike] = useState("");
  const { bikeId } = useParams();

  //load single bike
  useEffect(() => {
    axios
      .get(
        `https://nameless-fortress-10028.herokuapp.com/singleBike/${bikeId} `
      )
      .then((res) => {
        setBike(res.data);
      });
  }, [bikeId]);

  return (
    <>
      <Navigation />
      <Container>
        <Box sx={{ my: 12 }}>
          <Grid container columns={{ xs: 4, sm: 8, md: 12 }} spacing={3}>
            <Grid xs={4} sm={4} md={8} item>
              <img width="100%" src={bike?.img} alt="" />
              <Box>
                <Box sx={{ my: 4 }}>
                  {" "}
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    {" "}
                    <Typography fontWeight="bold" variant="h4">
                      {bike?.title}
                    </Typography>
                    <StyledRating
                      sx={{ ms: "auto" }}
                      size="small"
                      color="tomato"
                      name="half-rating"
                      defaultValue={bike?.rating}
                      readOnly
                    />
                  </Box>
                  <Typography
                    sx={{
                      textAlign: "end",
                      fontWeight: "bold",
                      color: "tomato",
                    }}
                  >
                    BDT {bike?.price}
                  </Typography>
                </Box>
                <Divider sx={{ my: 3 }} />
                <Typography sx={{ textAlign: "start" }}>
                  {bike?.desc}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
              <BuyNow bike={bike} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Purchase;
