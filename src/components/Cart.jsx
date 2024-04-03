import { Link, useNavigate } from "react-router-dom";
import { MyCartContext } from "../providers/CartProvider";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";
import { BsFillArrowThroughHeartFill } from "react-icons/bs";
import { toast } from "react-toastify";

export default function Cart() {
  const navigate = useNavigate();
  const { cart } = MyCartContext();
  const [address, setAddress] = useState("");
  const [bill, setBill] = useState(0);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (!address) {
      toast("Please give your address.");
    } else {
      toast("Your order placed.");
      navigate('/')
    }
  };

  useEffect(() => {
    if (cart[0]) {
      const totalPrice = cart?.reduce((accumulator, product) => {
        return accumulator + product.price * product.quantity;
      }, 0);
      setBill(totalPrice);
    }
  }, [cart]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 m-2 md:m-3  md:gap-5 shadow-xl p-3 ">
      {cart[0] ? (
        <div className="md:col-span-8">
          <h1 className="text-xl font-bold text-rose-600 text-center">
            Added Products
          </h1>
          {cart?.map((item) => {
            return <CartItem key={item?.id} item={item} />;
          })}
        </div>
      ) : (
        <div className="md:col-span-8">
          {" "}
          <Link to={"/"} className="text-2xl text-blue-600">
            Empty! Click Here To Add Products.
          </Link>
        </div>
      )}
      {/* checkout  */}
      <div className="md:col-span-4  border-2 rounded  p-5 ">
        <div>
          <h1 className="text-3xl font-bold mb-3 text-center text-rose-600">
            Checkout Summery
          </h1>
          <div>
            <div className="flex justify-between items-center border-b-2 border-dotted my-2">
              <p>Subtotal: </p>
              <p>
                $ <span>{cart[0] ? bill : 0}</span>
              </p>
            </div>
            <div className="flex justify-between items-center border-b-2 border-dotted my-2">
              <p>Shipping: </p>
              <p>
                $ <span>{cart[0] ? 10 : 0}</span>
              </p>
            </div>
            <div className="flex justify-between items-center border-b-2 border-dotted">
              <p>Total: </p>
              <p>
                $ <span>{cart[0] ? bill + 10 : 0}</span>
              </p>
            </div>
            <div className="mt-5">
              <form>
                <label htmlFor="address">Address</label>
                <textarea
                  className="border w-full p-1 rounded"
                  name="address"
                  id="address"
                  placeholder="Enter your address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                ></textarea>
                <button
                  className="bg-blue-500 text-white font-semibold w-full py-1 rounded mt-5 flex items-center justify-center gap-5"
                  onClick={handlePlaceOrder}
                >
                  Place Order <BsFillArrowThroughHeartFill />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
}
