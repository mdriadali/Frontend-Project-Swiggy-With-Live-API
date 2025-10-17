import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className="bg-[#ff5200] text-white font-bold">
      <div className="flex justify-between container mx-auto py-8 ">
        <a href="https://www.swiggy.com/">
          <img
            className="w-40 h-12"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
            alt="Swiggy"
          />
        </a>
        <div className=" flex gap-8 items-center">
          <a target="_blank" href="https://www.swiggy.com/corporate/">
            Swiggy Corporate
          </a>
          <a target="_blank" href="https://partner.swiggy.com/login#/swiggy">
            Partner with us
          </a>
          <a href="" className="border py-4 px-6 rounded-2xl">
            Get the App
          </a>
          <a href="" className="bg-black py-4 px-8 rounded-2xl">
            Sign in
          </a>
        </div>
      </div>

      <div className="pt-16 pb-8 relative">
        <img className=" w-60 h-110 absolute top-0 left-0 " src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" />
        <img  className="w-60 h-110 absolute top-0 right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" />
        <div className=" max-w-[60%] text-5xl text-center container mx-auto">
          Order food & groceries. Discover best restaurants. Swiggy it!
        </div>
        <div className="max-w-[60%] flex gap-5  pt-6 text-black container mx-auto">
          <input
            type="text"
            placeholder="Delhi, India"
            className="bg-white w-[40%]  py-4 px-6 rounded-2xl"
          />
          <input
            type="text"
            placeholder="Search for restaurant, item or more"
            className="bg-white w-[55%]  py-4 px-6 rounded-2xl"
          />
        </div>
      </div>
      <div className=" flex max-w-[75%] container mx-auto">

        <Link  className="flex-none" to="/restaurants">
        <img 
        className="w-100 h-100"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" alt="" />
        </Link>

        <img
        className="w-100 h-100"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png" alt="" />
        <img
        className="w-100 h-100"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png" alt="" />
      </div>
    </header>
  );
};

export default Header;
