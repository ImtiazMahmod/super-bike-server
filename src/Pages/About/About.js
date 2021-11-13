import React from "react";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import ReviewSlider from "../Shared/ReviewSlider/ReviewSlider";
import Sponsored from "../Shared/Sponsored/Sponsored";

const About = () => {
  return (
    <div>
      <Navigation />

      <ReviewSlider />
      <Sponsored />
      <Footer />
    </div>
  );
};

export default About;
