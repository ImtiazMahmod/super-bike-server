import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import Collection from "../Collection/Collection";
import HomeCarousel from "./HomeCarousel/HomeCarousel";

const Home = () => {
  return (
    <div>
      <Navigation />
      <HomeCarousel />
      <Collection />
    </div>
  );
};

export default Home;
