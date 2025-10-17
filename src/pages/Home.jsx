import React from "react";
import Header from "../components/Header";
import FoodOption from "../components/FoodOption";
import GroceriesOption from "../components/GroceriesOption";
import DineoutOption from "../components/DineoutOption";

const Home = () => {
  return (
    <>
      <Header />
      <FoodOption />
      <GroceriesOption />
      <DineoutOption />
    </>
  );
};

export default Home;
