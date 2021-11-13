import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import ReviewSlider from "../../Shared/ReviewSlider/ReviewSlider";
import Sponsored from "../../Shared/Sponsored/Sponsored";
import Collection from "../Collection/Collection";
import HomeCarousel from "./HomeCarousel/HomeCarousel";
import MiniGallary from "./MiniGallary/MiniGallary";

const Home = () => {
  return (
    <div>
      <Navigation />
      <HomeCarousel />
      <Collection />
      <MiniGallary />
      <ReviewSlider />
      <Sponsored />
      <Footer />
    </div>
  );
};

export default Home;
