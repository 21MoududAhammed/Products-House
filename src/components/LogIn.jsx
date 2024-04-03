import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyAuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";

export default function LogIn() {
  const navigate = useNavigate();
  const { logInWithEmailAndPassword } = MyAuthContext();
  const initialUserData = {
    email: "",
    password: "",
  };
  const [user, setUser] = useState(initialUserData);

  // to handle all input fields data
  const handleInputFields = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  // to handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await logInWithEmailAndPassword(user.email, user.password);
      toast(`${res?.user?.displayName} is logged in successfully.`);
      setUser(initialUserData);
      navigate("/");
    } catch (err) {
      console.log(err.message);
      toast(err.message);
    }
  };
  return (
    <div className="mt-5 px-5">
      <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="px-6 py-4">
          <div className="flex justify-center mx-auto">
            <h1 className="text-3xl font-serif">Login</h1>
          </div>
          <form>
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                placeholder="Email Address"
                aria-label="Email Address"
                name="email"
                value={user.email}
                onChange={handleInputFields}
              />
            </div>
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                placeholder="Password"
                aria-label="Password"
                name="password"
                value={user.password}
                onChange={handleInputFields}
              />
            </div>
            <div className="flex items-center justify-between mt-4">
              <Link
                to={"/reset"}
                className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500"
              >
                Forget Password?
              </Link>
              <button
                className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                onClick={handleSubmit}
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
        <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
          <span className="text-sm text-gray-600 dark:text-gray-200">
            {`Don't have an account?`}
          </span>
          <Link
            to={"/register"}
            className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
