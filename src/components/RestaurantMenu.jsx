import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import MenuCard from "./MenuCard";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [menuData, setmenuData] = useState([]);
  const [selected, setSelected] = useState(null);

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
        const filterData = data.filter((items) => "title" in items.card.card);
        setmenuData(filterData);
        clearInterval(interval);
        console.log(" Data found, stopping calls");
      }
    };
    fetchMenu();
    interval = setInterval(fetchMenu, 4000);
    return () => clearInterval(interval);
  }, [id]);
  console.log(menuData);

  return (
    <div>
      <Link to={`/city/delhi/${id}/search/`}>
      <div className="w-[60%] flex justify-center items-center h-10 container mx-auto mt-5 text-center font-bold text-gray-500 bg-gray-200 rounded-2xl ">
        <p> Search for dishes </p>
      </div>
      </Link>
      <div className="w-[60%] container mx-auto mt-5">
        <button
          className={` py-1 px-4 border border-gray-500 rounded-2xl ${
            selected === "veg" ? "bg-red-500" : "bg-gray-300"
          }`}
          onClick={() => setSelected(selected === "veg" ? null : "veg")}
        >
          Veg
        </button>
        <button
          className={` py-1 px-4 border border-gray-500 rounded-2xl ${
            selected === "nonveg" ? "bg-green-500" : "bg-gray-300"
          }`}
          onClick={() => setSelected(selected === "nonveg" ? null : "nonveg")}
        >
          Nonveg
        </button>
      </div>
      <div className="w-[60%] container mx-auto">
        {menuData.map((items) => (
          <MenuCard
            key={items?.card?.card?.title}
            menuItems={items?.card?.card}
            selected={selected}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
