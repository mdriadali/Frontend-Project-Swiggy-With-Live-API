import React from "react";
import Ptag from "./Ptag";
import { Link } from "react-router";

const RestaurantCard = ({ restaurantData }) => {
  return (
    <>

        <div className="  w-[25%] flex-none p-1 transform transition duration-150 hover:scale-95 cursor-pointer ">
          <Link to={`/city/delhi/${restaurantData?.info?.id}`}>
            <div className="relative w-70 h-45 ">
              <img
                className="w-70 h-45 object-cover rounded-3xl p-2"
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/" +
                  restaurantData.info.cloudinaryImageId
                }
                alt=""
              />
              <h1 className="absolute bottom-0 font-bold text-xl text-white  w-[80%] container m-4 z-20">
                {restaurantData?.info?.aggregatedDiscountInfoV3?.header}
                {restaurantData?.info?.aggregatedDiscountInfoV3?.subHeader}
                {restaurantData?.info?.aggregatedDiscountInfoV3?.discountTag}
              </h1>
              <div className="absolute  rounded-3xl  bottom-0 left-0 right-0 m-2 h-45 bg-gradient-to-t from-black opacity-60 "></div>
            </div>

            <h1 className="mx-4 text-xl font-bold  truncate">
              {restaurantData.info.name}
            </h1>
            <div>
              <div className="flex justify-items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 ml-2.5 text-green-500"
                >
                  <path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l7.1-1.01L12 2z" />
                </svg>
                <p
                  className={"font-bold"}
                >{` ${restaurantData?.info?.avgRatingString} ${restaurantData?.info?.sla?.slaString} `}</p>
              </div>
              <p className="mx-4 truncate"> {restaurantData?.info?.cuisines?.join(", ")}</p>
              <p className="mx-4 truncate"> {restaurantData?.info?.areaName}</p>
            </div>
          </Link>
      </div>
    </>
  );
};

export default RestaurantCard;
