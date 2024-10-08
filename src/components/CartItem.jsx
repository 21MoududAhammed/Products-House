/* eslint-disable react/prop-types */
import { useState } from "react";
import PropTypes from "prop-types";
import { FaMinus, FaPlus } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { MyCartContext } from "../providers/CartProvider";

// eslint-disable-next-line react/prop-types
export default function CartItem({ item }) {
  // console.log(item);
  const { handleRemoveFromCart, increaseQuantity, decreaseQuantity } =
    MyCartContext();

  const [count, setCount] = useState(item?.quantity);

  // to decrease quantity
  const handleDecreaseQuantity = (id) => {
    if (count > 1) {
      setCount(count - 1);
      decreaseQuantity(id);
    }
  };
  //  to increase quantity
  const handleIncreaseQuantity = (id) => {
    setCount(count + 1);
    increaseQuantity(id);
  };

  return (
    <div className="grid grid-cols-12 my-5  shadow p-2 space-x-4 rounded">
      <div className="flex items-center gap-2 col-span-9 md:col-span-10 ">
        <div className={"w-20 h-14"}>
          <img
            className="w-full h-full rounded-xl"
            src={item?.thumbnail}
            alt="Product Image"
          />
        </div>
        <div>
          <h4 className="text-lg font-semibold">{item?.title}</h4>
          <h5>Price: ${item?.price.toFixed(2)}</h5>
          <h5>Total: ${(count * item?.price).toFixed(2)}</h5>
          <button
            className="flex items-center gap-2 bg-rose-400 rounded px-2 text-white font-semibold"
            onClick={() => handleRemoveFromCart(item?.id)}
          >
            Remove
            <RiDeleteBinLine />
          </button>
        </div>
      </div>
      <div className="col-span-3 md:col-span-2 flex justify-end items-center">
        <div className="">
          <div>
            <button className=" w-14 p-1 text-centner rounded">
              <div
                className="flex justify-center"
                onClick={() => handleIncreaseQuantity(item?.id)}
              >
                <FaPlus />
              </div>
            </button>
          </div>
          <input
            className="w-14 border ps-1 text-center rounded font-semibold border-none focus:border-none"
            type="text"
            name="quantity"
            id="quantity"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />

          <div>
            <button
              className=" w-14 p-1 text-centner rounded"
              onClick={() => handleDecreaseQuantity(item?.id)}
            >
              <div className="flex justify-center ">
                <FaMinus />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.object,
};
