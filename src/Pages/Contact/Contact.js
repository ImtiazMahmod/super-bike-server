import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import Sponsored from "../Shared/Sponsored/Sponsored";
import SuperBikeInfo from "../Shared/SuperBikeInfo/SuperBikeInfo";

const Contact = () => {
  return (
    <div>
      <Navigation />
      <Box sx={{ my: 5 }}>
        <Typography sx={{ color: "tomato" }} variant="body1">
          Get in Touch
        </Typography>
        <Typography variant="h4" fontWeight="bold">
          Contact Us
        </Typography>
      </Box>
      <SuperBikeInfo />
      <Sponsored />
      <Footer />{" "}
    </div>
  );
};

export default Contact;
