import { Container, Grid, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import { deepOrange } from "@mui/material/colors";

function ReviewSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    adaptiveWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [reviews, setReviews] = useState([]);
  ///load reviews
  useEffect(() => {
    axios.get("http://localhost:5000/review").then((res) => {
      setReviews(res.data);
    });
  }, []);
  return (
    <div>
      <Container sx={{ my: 6 }}>
        <Typography sx={{ color: "tomato" }} variant="body1">
          REVIEWS
        </Typography>
        <Typography variant="h4" fontWeight="bold">
          WHY CUSTOMER LOVE US
        </Typography>
        <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={4} sm={4} md={6}>
            <Container>
              <Slider {...settings}>
                {reviews?.map((review) => (
                  <Box>
                    <Box sx={{ textAlign: "left", p: 3, mt: 3 }}>
                      <Typography variant="subtitle1">
                        "{review?.review}"
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          my: 3,
                        }}
                      >
                        {" "}
                        <Typography color="text.secondary">
                          {review?.name}
                        </Typography>
                        <Rating
                          sx={{ color: "tomato" }}
                          name="half-rating-read"
                          defaultValue={review?.rating}
                          precision={0.5}
                          readOnly
                        />
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Slider>
            </Container>
          </Grid>
          <Grid
            item
            sm={4}
            md={6}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <FormatQuoteRoundedIcon
              sx={{ fontSize: "20rem", color: deepOrange[200] }}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default ReviewSlider;
