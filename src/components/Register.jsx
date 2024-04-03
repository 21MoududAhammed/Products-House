import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyAuthContext } from "../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { toast } from "react-toastify";

export default function Register() {
  const navigate = useNavigate();
  const initialUserData = {
    name: "",
    email: "",
    password: "",
    profile_img: "",
  };
  const [user, setUser] = useState(initialUserData);
  const [passwordError, setPasswordError] = useState(null);
  const { registerUserWithEmailAndPassword } = MyAuthContext();

  //   to handle input fields data
  const handleInputs = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  //   to handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const userPassword = user.password;
    const lowerCase = /[a-z]/g;
    const upperCase = /[A-Z]/g;
    const numbers = /[0-9]/g;

    if (!userPassword.match(lowerCase)) {
      setPasswordError("Add a lowercase letter!");
      return;
    } else if (!userPassword.match(upperCase)) {
      setPasswordError("Add a uppercase letter!");
      return;
    } else if (userPassword.length < 8 || userPassword.length > 20) {
      setPasswordError("Password length should be in between 8 & 20.");
      return;
    } else if (!userPassword.match(numbers)) {
      setPasswordError("Add a number!");
      return;
    } else {
      setPasswordError(null);
    }

    try {
      const res = await registerUserWithEmailAndPassword(
        user.email,
        user.password
      );
      await updateProfile(auth.currentUser, {
        displayName: user.name,
        photoURL: user.profile_img,
      });
      toast(`Successfully Signed up ${res.user.email}`);
      setUser(initialUserData); // clear all fields
      navigate("/");
    } catch (err) {
      console.log(err.message);
      toast(err.message);
    }
  };

  return (
    <div className="mt-3 mx-2">
      <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="px-6 py-4">
          <div className="flex justify-center mx-auto">
            <h1 className="text-3xl font-serif">Register</h1>
          </div>
          <form>
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                placeholder="Enter Name"
                name="name"
                value={user.name}
                onChange={handleInputs}
              />
            </div>
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                placeholder="Email Address"
                aria-label="Email Address"
                name="email"
                value={user.email}
                onChange={handleInputs}
                required
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
                onChange={handleInputs}
                required
              />
              <p className="text-xs ps-1 text-red-600">{passwordError}</p>
            </div>
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                placeholder="Profile Image url"
                name="profile_img"
                value={user.profile_img}
                onChange={handleInputs}
                required
              />
            </div>
            <div className="flex items-center justify-between mt-4">
              <button
                className="w-full px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                onClick={handleSubmit}
              >
                Register
              </button>
            </div>
          </form>
        </div>
        <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
          <span className="text-sm text-gray-600 dark:text-gray-200">
            Do you have an account?{" "}
          </span>
          <Link
            to={"/login"}
            className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
