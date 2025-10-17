import React from "react";
import { foodData } from "../utils/FoodOption";
import FoodCard from "./FoodCard";
import H1Tag from "./H1Tag";

const FoodOption = () => {
  return (
    <>
    <H1Tag text={"Order our best food options"}/>
      <div className="max-w-[80%] container mx-auto flex  overflow-x-scroll gap-4">
        {foodData.map((foodData) => (
          <FoodCard key={foodData.id} foodData={foodData} />
        ))}
      </div>
    </>
  );
};

export default FoodOption;
