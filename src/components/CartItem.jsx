import { useState } from "react";
import PropTypes from "prop-types";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function CartItem({ item }) {
  const [count, setCount] = useState(1);
  const handleMinusQuantity = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <div
      key={item.id}
      className="grid grid-cols-12 my-5 border-2 border-blue-gray p-2 space-x-4 rounded"
    >
      <div className="flex items-center gap-2 col-span-9 md:col-span-10 ">
        <img className="w-20 h-14 rounded-xl" src={item.image} alt="" />
        <div>
          <h4 className="text-lg font-semibold">{item.title}</h4>
          <h5>Price: ${item.price}</h5>
          <h5>Total: ${item.price}</h5>
        </div>
      </div>
      <div className="col-span-3 md:col-span-2 flex justify-end items-center">
        <div className="">
          <div>
            <button className="bg-gray-300 w-14 p-1 text-centner rounded">
              <div
                className="flex justify-center"
                onClick={() => setCount(count + 1)}
              >
                <FaPlus />
              </div>
            </button>
          </div>
          <input
            className="w-14 border border-gray-500 ps-1 rounded"
            type="number"
            name="quantity"
            id="quantity"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />

          <div>
            <button
              className="bg-gray-300 w-14 p-1 text-centner rounded"
              onClick={handleMinusQuantity}
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
  item: PropTypes.object.isRequired,
};
