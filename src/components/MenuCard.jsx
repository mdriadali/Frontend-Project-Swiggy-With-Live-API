import React, { useState } from "react";
import Ptag from "./Ptag";
import MenuInfo from "./MenuInfo";

const MenuCard = ({ menuItems, selected }) => {
  const [isOpen, setIsOpen] = useState(true);
  

  if ("categories" in menuItems) {
    return (
      <div className="w-full">
        <h1 className="font-bold">{menuItems.title}</h1>
        {menuItems.categories.map((items) => (
          <MenuCard key={items?.title} menuItems={items} selected={selected} />
        ))}
      </div>
    );
  }

 
  if (!isOpen) {
 return(
     <div className="w-full">
      <div className="flex justify-between ">
        <h1 className="font-bold text-xl ">{menuItems.title}</h1>
        <button onClick={()=>setIsOpen(!isOpen)}>
         <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
          </button>
      </div>
            <hr  class=" border-8  border-gray-100 mb-5 mt-5" />
    </div>
 )
  }


   if(selected==="veg"){
    return(
      <div className="w-full">
     <div className="flex justify-between ">
        <h1 className="font-bold text-xl mb-4">{menuItems.title}</h1>
        <button onClick={()=>setIsOpen(!isOpen)}>
         <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>
          </button>
      </div>
      <div>
        {menuItems?.itemCards?.filter((food)=>"isVeg" in food.card.info)?.map((items) => (
          <MenuInfo key={items?.card?.info?.id} menuInfo={items?.card?.info} />
        ))}
      </div>
      <hr  className=" border-8  border-gray-100 mb-5 mt-5" />
    </div>
    )
  }

  if(selected==="nonveg"){
    return(
      <div className="w-full">
     <div className="flex justify-between ">
        <h1 className="font-bold text-xl mb-4">{menuItems.title}</h1>
        <button onClick={()=>setIsOpen(!isOpen)}>
         <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>
          </button>
      </div>
      <div>
        {menuItems?.itemCards?.filter((food)=>!("isVeg" in food.card.info))?.map((items) => (
          <MenuInfo key={items?.card?.info?.id} menuInfo={items?.card?.info} />
        ))}
      </div>
      <hr  className=" border-8  border-gray-100 mb-5 mt-5" />
    </div>
    )
  }

  return (
    <div className="w-full">
     <div className="flex justify-between ">
        <h1 className="font-bold text-xl mb-4">{menuItems.title}</h1>
        <button onClick={()=>setIsOpen(!isOpen)}>
         <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/></svg>
          </button>
      </div>
      <div>
        {menuItems?.itemCards?.map((items) => (
          <MenuInfo key={items?.card?.info?.id} menuInfo={items?.card?.info} />
        ))}
      </div>
      <hr  className=" border-8  border-gray-100 mb-5 mt-5" />
    </div>
  );
};

export default MenuCard;
