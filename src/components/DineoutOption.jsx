import React from "react";
import { dineoutOptions } from "../utils/DineoutOption";
import DineoutCard from "./DineoutCard";
import H1Tag from "./H1Tag";

const DineoutOption = () => {
  return (
    <>
      <H1Tag text={"Discover best restaurants on Dineout"} />

      <div className="  max-w-[80%] flex container mx-auto  p-4 gap-5 overflow-x-scroll">
        {dineoutOptions.map((dineoutData) => (
          <DineoutCard key={dineoutData.info.id} dineoutData={dineoutData} />
        ))}
      </div>
    </>
  );
};

export default DineoutOption;
