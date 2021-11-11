import React from "react";
import { Button, Container, Grid } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";

function HomeCarousel(props) {
  var bikes = [
    {
      img: "https://i.ibb.co/wMPDwTK/layer-img-1.png",
      title: "Best Deal",
      subtitle: "15% - 20% Off",
      description: "The All Rounder GSX -A GREAT Combination.",
    },
    {
      img: "https://i.ibb.co/wMPDwTK/layer-img-1.png",
      title: "GREATNESS REVIVED",
      subtitle: "Introducing New MODEL",
      description:
        "The All Rounder GSX 125 - from the great combination of the GSX & Gixxer Series.",
    },
    {
      img: "https://i.ibb.co/wMPDwTK/layer-img-1.png",
      title: "GREATNESS REVIVED",
      subtitle: "Introducing New MODEL",
      description:
        "The All Rounder GSX 125 - from the great combination of the GSX & Gixxer Series.",
    },
  ];

  const useStyles = makeStyles({
    root: {
      background: "url(https://i.ibb.co/h97T76F/1.jpg)",
      minHeight: "70vh",
      //   height: "100vh",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      mnWidth: "100%",
    },
  });

  const { root } = useStyles();

  return (
    <Box>
      <Carousel animation="slide" interval={6000}>
        {bikes.map((bike, i) => (
          <Grid
            key={i}
            columns={{ xs: 4, sm: 8, md: 12 }}
            className={root}
            container
            spacing={3}
            sx={{
              alignItems: "center",
            }}
          >
            <Grid item xs={4} sm={4} md={5}>
              <Container>
                <h2>{bike.title}</h2>
                <h2>{bike.subtitle}</h2>
                <p>{bike.description}</p>
                <Button variant="contained" className="CheckButton">
                  Buy Now
                </Button>
              </Container>
            </Grid>
            <Grid
              sx={{ alignItems: "center", justifyContent: "center" }}
              xs={4}
              sm={4}
              md={6}
              item
            >
              <img style={{ width: "100%" }} src={bike.img} alt="" />
            </Grid>
          </Grid>
        ))}
      </Carousel>
    </Box>
  );
}
export default HomeCarousel;
