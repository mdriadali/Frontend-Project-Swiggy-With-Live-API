import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Simmer from "./Simmer";

const RestaurantsOptions = () => {
  const [restData, setRestData] = useState(null);

  useEffect(() => {
    let interval;

    async function fetchData() {
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      const swiggy =
        "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.7040592&lng=77.10249019999999&carousel=true&third_party_vendor=1";
      const response = await fetch(proxyUrl + swiggy, {
        method: "GET",
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          Accept: "application/json",
        },
      });
      const data = await response
        .json()
        .then(
          (data) =>
            data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants
        );
      console.log(`data: ${data}`);

      if (data) {
        setRestData(data);
        clearInterval(interval);
        console.log(" Data found, stopping calls");
      }
    }

    fetchData();
    interval = setInterval(fetchData, 4000);
    return () => clearInterval(interval);
  }, []);

  console.log(restData);

  if (!restData) {
    return <Simmer />;
  }
  return (
    <>
      <div className=" w-[80%]  container mx-auto flex flex-wrap ">
        {restData.map((restaurantData) => (
          <RestaurantCard
            key={restaurantData?.info?.id}
            restaurantData={restaurantData}
          />
        ))}
      </div>
    </>
  );
};

export default RestaurantsOptions;
