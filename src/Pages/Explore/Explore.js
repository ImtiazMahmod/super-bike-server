import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleBike from "../Home/Collection/SingleBike/SingleBike";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import Spinner from "../Shared/Spinner/Spinner";

const Explore = () => {
  const [bikes, setBikes] = useState([]);

  //load all bike
  useEffect(() => {
    axios
      .get("https://nameless-fortress-10028.herokuapp.com/bikes")
      .then((res) => {
        setBikes(res.data);
      });
    if (!bikes) {
      return <Spinner />;
    }
  }, []);

  return (
    <Box>
      <Navigation />
      <Box sx={{ minHeight: "100vh", my: 12 }}>
        <Typography color="tomato">DISCOVER YOUR</Typography>
        <Typography fontWeight="bold" variant="h4">
          {" "}
          BIKE RANGE
        </Typography>
        <Container>
          <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }}>
            {bikes?.map((bike) => (
              <Grid key={bike._id} item xs={4} sm={4} md={4}>
                <SingleBike bike={bike} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default Explore;
