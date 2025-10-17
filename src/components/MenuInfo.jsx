
import { addItems, DecrementItems, IncrementItems } from "../context/CartSlice";
import { useDispatch, useSelector } from "react-redux";

const MenuInfo = ({ menuInfo }) => {
  const items = useSelector((state) => state.cartSlice.items);
  const element = items.find((item) => item.id === menuInfo.id);
  const cart = element ? (element.quantity) : (0);
  const dispatch = useDispatch();
  const handelAdd = () => {
    dispatch(addItems(menuInfo));
  };
  const handeIncrement = () => {
    dispatch(IncrementItems(menuInfo));
  };
  const handelDecrement = () => {
    dispatch(DecrementItems(menuInfo));
  };
  return (
    <>
      <div className="flex justify-between ">
        <div className="w-[70%]">
          <div className="w-3.5 h-3.5 border-2 mt-2 border-green-600 rounded  flex justify-center items-center">
            <div className="bg-green-600 w-2 h-2 rounded-2xl p-1 "></div>
          </div>
          <h1 className="font-bold text-gray-700">{menuInfo?.name}</h1>
          <h1 className="font-bold">
            {menuInfo?.defaultPrice
              ? "₹" + menuInfo?.defaultPrice / 100
              : "₹" + menuInfo?.price / 100}
          </h1>
          <div className="flex">
            <span className="inline-block w-auto h-auto">
              <svg
                className="w-5 h-5 "
                viewBox="0 0 14 14"
                fill="#00a63e"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
              >
                <rect width="0" height="0" fill="white"></rect>
                <path
                  d="M5.67163 3.99166C6.22068 2.34179 6.49521 1.51686 7 1.51686C7.50479 1.51686 7.77932 2.34179 8.32837 3.99166L8.65248 4.96556H9.60668C11.4122 4.96556 12.315 4.96556 12.4703 5.45302C12.6256 5.94049 11.8893 6.4628 10.4167 7.50744L9.67376 8.03444L9.97544 8.94095C10.5325 10.615 10.8111 11.452 10.4033 11.754C9.99553 12.056 9.27604 11.5457 7.83705 10.5249L7 9.93112L6.16295 10.5249C4.72396 11.5457 4.00447 12.056 3.5967 11.754C3.18893 11.452 3.46747 10.615 4.02456 8.94095L4.04557 8.87783C4.18081 8.47145 4.24843 8.26825 4.18684 8.08006C4.12525 7.89187 3.94958 7.76725 3.59824 7.51802C2.11566 6.46633 1.37437 5.94049 1.52971 5.45302C1.68504 4.96556 2.5878 4.96556 4.39332 4.96556H5.34752L5.67163 3.99166Z"
                  fill="#00a63e"
                ></path>
              </svg>
            </span>

            <span className="font-bold text-sm text-green-600">
              {menuInfo?.ratings?.aggregatedRating?.rating}
            </span>
            <span className=" text-sm">
              {menuInfo?.ratings?.aggregatedRating?.ratingCountV2
                ? "(" + menuInfo?.ratings?.aggregatedRating?.ratingCountV2 + ")"
                : ""}
            </span>
          </div>
          <p className="line-clamp-2 ">{menuInfo?.description} </p>
        </div>
        <div className="w-[20%]  h-30 relative pb-5">
          <img
            className="w-36 h-28 rounded-xl"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/" +
              menuInfo?.imageId
            }
          />
          {cart === 0? (
            <button
              className="  w-28 h-10 absolute bottom-0 left-4 text-green-500  bg-white shadow rounded-2xl font-bold"
              onClick={handelAdd}
            >
              Add
            </button>
          ) : (
            <div className=" w-28 h-10 absolute bottom-0 left-4 text-green-500  bg-white shadow rounded-2xl font-bold flex  box-border justify-around items-center  ">
              <button className="h-full w-9" onClick={handelDecrement}>
                -
              </button>
              <span>{cart}</span>
              <button className="h-full w-9 " onClick={handeIncrement}>
                +
              </button>
            </div>
          )}
        </div>
      </div>
      <hr className=" border-[1]  border-gray-400 mb-5 mt-5" />
    </>
  );
};

export default MenuInfo;
