import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import MenuInfo from "./MenuInfo";

const MenuSearch = () => {
  const [Search, setSearch] = useState("");
  const [filterData, setFilterData] = useState([]);
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    let interval;
    const fetchMenu = async () => {
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      const swiggy = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
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
            data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        );

      if (data) {
        const filter = data.filter((items) => "title" in items.card.card);
        setFilterData(filter);
        clearInterval(interval);
        console.log(" filter Data found, stopping calls");
      }
    };
    fetchMenu();
    interval = setInterval(fetchMenu, 4000);
    return () => clearInterval(interval);
  }, [id]);
console.log(data)
 useEffect(()=>{
setData(
      (filterData.flatMap((items) =>
        items?.card?.card?.itemCards?.filter((food) =>
          food?.card?.info?.name.toLowerCase().includes(Search.toLowerCase())
        )
      )).filter(Boolean)
    );
 },[Search,filterData])

  return (
    <div>
      <div className="w-[60%]  container mx-auto mt-5">
        <div className="flex justify-between">
          <input
            className="w-full focus:outline-none ml-3"
            type="text"
            placeholder="Search"
            value={Search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#000000"
            className="mr-3"
          >
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
          </svg>
        </div>
        <hr />
      </div>

      {Search===""?(""):
      <div className="w-[60%] container mx-auto mt-5">
        <div>
          {data.map((items) => (
            <MenuInfo
              key={`${items?.card?.info?.id}-${Math.random()}`}
              menuInfo={items?.card?.info}
            />
          ))}
        </div>
        <hr className=" border-8  border-gray-100 mb-5 mt-5" />
      </div>}
    </div>
  );
};

export default MenuSearch;
