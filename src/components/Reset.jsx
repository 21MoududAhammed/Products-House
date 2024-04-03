import { Link, useNavigate } from "react-router-dom";
import { MyAuthContext } from "../providers/AuthProvider";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Reset() {
  const navigate = useNavigate();
  const { resetPassword } = MyAuthContext();
  const [email, setEmail] = useState("");

  // to submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(email);
      toast("Email sent to password reset!");
      setEmail("");
      navigate("/login");
    } catch (err) {
      toast(err.message);
      console.log(err.message);
    }
  };
  return (
    <>
      <div className="mt-5 mx-2">
        <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
          <div className="px-6 py-4">
            <div className="flex justify-center mx-auto">
              <h1 className="text-3xl font-serif">Reset</h1>
            </div>
            <form>
              <div className="w-full mt-4">
                <input
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                  type="email"
                  placeholder="Email Address"
                  aria-label="Email Address"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between mt-4">
                <button
                  className="w-full px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                  onClick={handleSubmit}
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
          <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
            <span className="text-sm text-gray-600 dark:text-gray-200">
              Try again to 
            </span>
            <Link to={'/login'} className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
