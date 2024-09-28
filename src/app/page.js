import React from "react";
import Hero from "./components/home/heroSection/Hero";
import Carousel from "./components/home/carouselSection/Carousel";
import Categoryes from "./components/home/categoryesSection/Categoryes";

export default function Home() {
  return (
    <>
      <Hero />
      <Carousel />
      <Categoryes />
    </>
  );
}
