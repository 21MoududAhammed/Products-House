import { NavLink } from "react-router-dom";

export default function LogIn(){
    return (
        <div className="w-[300px] mx-auto mt-10 px-4 py-5 bg-gray-300 rounded">
            <h3 className="text-3xl font-bold text-center mb-3">Log In</h3>
            <form action="">
                
                <div>
                    <label htmlFor="email">Email</label><br />
                    <input className="outline-none focus:border-blue-500 border-2 rounded px-2 border-gray-500 w-full" type="email" name="email" id="email" />
                </div>
                <div>
                    <label htmlFor="password">Password</label><br />
                    <input className="outline-none focus:border-blue-500 border-2 rounded px-2 border-gray-500 w-full" type="password" name="password" id="password" />
                </div>
                <button className="bg-blue-600 rounded w-full py-1 text-white font-semibold mt-5" type="submit" >Register</button>
                <div className="flex justify-around">
                <NavLink to={'/reset'} className={'text-blue-800'}>Forgot Password</NavLink>
                <NavLink to={'/register'} className={'text-blue-800'}>Register</NavLink>
                </div>
            </form>
        </div>
    );
}