import React from "react";
import CarouselHome from "./Carousel/CarouselHome";
import IndividualBanner from "./IndividualBanner/IndividualBanner";
import TrendingProducts from "./TrendingProducts/TrendingProducts";
import InfoCircles from "./InfoCircles/InfoCircles";
function Home() {
  return (
    <div className="container">
      <CarouselHome />
      <InfoCircles />
      <IndividualBanner />
      <TrendingProducts />
    </div>
  );
}

export default Home;
