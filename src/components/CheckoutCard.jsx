import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DecrementItems, IncrementItems } from "../context/CartSlice";

const CheckoutCard = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cartSlice.items);

  const handeIncrement = (item) => {
    dispatch(IncrementItems(item));
  };
  const handelDecrement = (item) => {
    dispatch(DecrementItems(item));
  };

  if (data.length === 0) {
    return (
      <div>
        <h1>No cart</h1>
      </div>
    );
  }
  return (
    <>
    <div className=" w-full h-screen bg-[#E9ECEE]">

      <div className="w-90 h-[70%] bg-white shadow absolute top-[20%] left-1/2 transform -translate-x-1/2 ">
        <div className="w-full  h-[calc(100%-60px)] overflow-y-scroll  ">
          {data.map((item) => (
            <div
            key={item.id}
            className="flex w-[100%] justify-between items-center  mt-5 font-bold text-sm"
            >
              <div className="flex w-[60%] ml-4">
                <img
                className="w-12 h-8"
                src={
                  `https://media-assets.swiggy.com/swiggy/image/upload/` +
                  item.imageId
                }
                alt=""
                />
                <div className="text-wrap  text-[12px] ml-2 w-[50%]">
                  {item.name}
                </div>
              </div>
              <div className=" w-[20%] h-10 ml-4 text-green-500  bg-white border border-gray-400 font-bold flex  box-border justify-around items-center  ">
                <button
                  className="h-full w-9 text-gray-400 font-bold"
                  onClick={() => handelDecrement(item)}
                  >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  className="h-full w-9 font-bold"
                  onClick={() => handeIncrement(item)}
                  >
                  +
                </button>
              </div>
              <div className="w-[20%] px-4">
                {item?.defaultPrice
                  ? "₹" + (item?.defaultPrice / 100) * item.quantity
                  : "₹" + (item?.price / 100) * item.quantity}
              </div>
            </div>
          ))}
        </div>

        <div className="flex  justify-between bottom-0 left-0 right-0  bg-white py-4 px-4 font-bold border-t-2 border-gray-100 z-50">
          <div>TO PAY</div>
          <div>
            ₹
            {data.reduce((acc, item) => {
              const price = item.defaultPrice
              ? item.defaultPrice / 100
              : item.price / 100;
              return acc + price * item.quantity;
            }, 0)}
          </div>
        </div>
      </div>
            </div>
    </>
  );
};

export default CheckoutCard;
