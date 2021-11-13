import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

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
      title: "REVIVED",
      subtitle: "Introducing New MODEL",
      description: "The All Rounder Gixxer Series.",
    },
    {
      img: "https://i.ibb.co/wMPDwTK/layer-img-1.png",
      title: "Awesome",
      subtitle: "Introducing New MODEL",
      description: "The All Rounder GSX 125 .",
    },
  ];

  const useStyles = makeStyles({
    root: {
      background: "url(https://i.ibb.co/h97T76F/1.jpg)",
      minHeight: "70vh",
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
          >
            <Grid
              item
              xs={4}
              sm={4}
              md={5}
              sx={{
                display: "flex",
                alignItems: "center",
                mt: 3,
                mx: "auto",
              }}
            >
              <Container>
                <Box>
                  <Typography
                    sx={{ textAlign: "left", fontWeight: "bold" }}
                    variant="h3"
                  >
                    {bike.title}
                  </Typography>
                  <Typography sx={{ textAlign: "left" }} variant="h4">
                    {bike.subtitle}
                  </Typography>
                  <Typography sx={{ textAlign: "left" }} variant="h5">
                    {bike.description}
                  </Typography>
                </Box>
                <Link style={{ textDecoration: "none" }} to="/explore">
                  {" "}
                  <Button
                    sx={{ display: "flex", color: "white", mt: 3 }}
                    color="warning"
                    variant="contained"
                    className="CheckButton"
                  >
                    Buy Now
                  </Button>
                </Link>
              </Container>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: 3,
              }}
              xs={4}
              sm={4}
              md={6}
              item
            >
              <Box
                sx={{
                  p: 5,
                }}
              >
                {" "}
                <img style={{ width: "100%" }} src={bike.img} alt="" />
              </Box>
            </Grid>
          </Grid>
        ))}
      </Carousel>
    </Box>
  );
}
export default HomeCarousel;
