import React from "react";
import Hero from "./components/home/heroSection/Hero";
import Carousel from "./components/home/carouselSection/Carousel";
import CategoryesHome from "./components/home/categoryesHomeSection/CategoryesHome";

export default function Home() {
  return (
    <>
      <Hero />
      <Carousel />
      <CategoryesHome />
    </>
  );
}
