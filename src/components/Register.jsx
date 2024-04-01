import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
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

    setUser(initialUserData); // clear all fields

    try {
      const res = await registerUserWithEmailAndPassword(
        user.email,
        user.password
      );
      await updateProfile(auth.currentUser, {
        displayName: user.name,
        photoURL: user.profile_img,
      });
      console.log(res);
      toast(`Successfully Signed up ${res.user.email}`)
    } catch (err) {
      console.log(err.message);
      toast(err.message);
     
    }

    navigate("/");
  };

  return (
    <div className="w-[300px] mx-auto mt-10 px-4 py-5 bg-gray-300 rounded">
      <h3 className="text-3xl font-bold text-center mb-3">Register</h3>
      <form className="space-y-2">
        <div>
          <label htmlFor="name">Name</label>
          <br />
          <input
            className="outline-none focus:border-blue-500 border-2 border-gray-500 rounded px-2 w-full"
            type="text"
            name="name"
            id="name"
            placeholder="Enter Name"
            value={user.name}
            onChange={handleInputs}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="outline-none focus:border-blue-500 border-2 rounded px-2 border-gray-500 w-full"
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email"
            value={user.email}
            onChange={handleInputs}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="outline-none focus:border-blue-500 border-2 rounded px-2 border-gray-500 w-full"
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            value={user.password}
            onChange={handleInputs}
          />
          <p className="text-xs text-red-600">
            {passwordError && passwordError}
          </p>
        </div>
        <div>
          <label htmlFor="profile_img">Profile Image</label>
          <br />
          <input
            className="outline-none focus:border-blue-500 border-2 rounded px-2 border-gray-500 w-full"
            type="text"
            name="profile_img"
            id="profile_img"
            placeholder="Enter url"
            value={user.profile_img}
            onChange={handleInputs}
          />
        </div>
        <div>
          <button
            className="bg-blue-600 rounded w-full py-1 text-white font-semibold mt-5"
            type="submit"
            onClick={handleSubmit}
          >
            Register
          </button>
        </div>
        <div className="flex justify-around">
          <p>Do you have an account?</p>
          <NavLink to={"/login"} className={"text-blue-800"}>
            Log In
          </NavLink>
        </div>
      </form>
    </div>
  );
}
