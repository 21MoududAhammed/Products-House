import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MyAuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";

export default function LogIn(){
    const navigate = useNavigate();
    const {logInWithEmailAndPassword} = MyAuthContext();
    const initialUserData = {
        email: '',
        password: ''
    }
    const [user, setUser] = useState(initialUserData)

    // to handle all input fields data 
    const handleInputFields = (e) =>{
        e.preventDefault();
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    }
    // to handle submit 
    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
          const res = await logInWithEmailAndPassword(user.email, user.password);
          toast(`${res?.user?.displayName} is logged in successfully.`)
          setUser(initialUserData)
          navigate('/')
        }catch(err){
            console.log(err.message)
            toast(err.message);
        }
        

    }
    return (
        <div className="w-[300px] mx-auto mt-10 px-4 py-5 bg-gray-300 rounded">
            <h3 className="text-3xl font-bold text-center mb-3">Log In</h3>
            <form action="">
                
                <div>
                    <label htmlFor="email">Email</label><br />
                    <input className="outline-none focus:border-blue-500 border-2 rounded px-2 border-gray-500 w-full" type="email" name="email" id="email" value={user.email} onChange={handleInputFields}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label><br />
                    <input className="outline-none focus:border-blue-500 border-2 rounded px-2 border-gray-500 w-full" type="password" name="password" id="password" value={user.password} onChange={handleInputFields} />
                </div>
                <button className="bg-blue-600 rounded w-full py-1 text-white font-semibold mt-5" type="submit" onClick={handleSubmit} >Login</button>
                <div className="flex justify-around">
                <NavLink to={'/reset'} className={'text-blue-800'}>Forgot Password</NavLink>
                <NavLink to={'/register'} className={'text-blue-800'}>Register</NavLink>
                </div>
            </form>
        </div>
    );
}