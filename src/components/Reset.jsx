import { NavLink, useNavigate } from "react-router-dom";
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
      toast('Email sent to password reset!')
      setEmail('')
      navigate('/login')
    } catch (err) {
      toast(err.message);
      console.log(err.message);
    }
  };
  return (
    <div className="w-[300px] mx-auto mt-10 px-4 py-5 bg-gray-300 rounded">
      <h3 className="text-3xl font-bold text-center mb-3">Reset</h3>
      <form action="">
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="outline-none focus:border-blue-500 border-2 rounded px-2 border-gray-500 w-full"
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button
          className="bg-blue-600 rounded w-full py-1 text-white font-semibold mt-5"
          type="submit"
          onClick={handleSubmit}
        >
          Reset
        </button>
        <div className="flex justify-around">
          <NavLink to={"/login"} className={"text-blue-800"}>
            Log In
          </NavLink>
          <NavLink to={"/register"} className={"text-blue-800"}>
            Register
          </NavLink>
        </div>
      </form>
    </div>
  );
}
