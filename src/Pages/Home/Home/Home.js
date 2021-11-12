import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import ReviewSlider from "../../Shared/ReviewSlider/ReviewSlider";
import Collection from "../Collection/Collection";
import HomeCarousel from "./HomeCarousel/HomeCarousel";

const Home = () => {
  return (
    <div>
      <Navigation />
      <HomeCarousel />
      <Collection />
      <ReviewSlider />
    </div>
  );
};

export default Home;
