import React from "react";
import { groceriesOptions } from "../utils/GroceriesOption";
import GroceriesCard from "./GroceriesCard";
import H1Tag from "./H1Tag";

const GroceriesOption = () => {
  return (
    <>
        <H1Tag text={"Shop groceries on Instamart"}/>
      <div className=" w-[80%] container mx-auto flex flex-nowrap overflow-x-auto gap-5">
        {groceriesOptions.map((groceriesData) => (
          <GroceriesCard key={groceriesData?.id} groceriesData={groceriesData} />
        ))}
      </div>
    </>
  );
};

export default GroceriesOption;
