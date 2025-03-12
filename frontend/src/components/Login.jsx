import {useState,React} from "react";
import {Link} from 'react-router-dom';
export default function Login() {
    const [data,setData]=useState({
        Username:'',
        Password:''
    })
    return (
        <div className="flex items-center justify-center bg-ypof-background">
            <div className="bg-ypof-background border border-ypof p-8 rounded-lg shadow-lg w-96">
                {/* Title */}
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>

                {/* Login Form */}
                <form className="flex flex-col gap-4">
                    {/* Username Input */}
                    <div>
                        <label htmlFor="username" className="block text-gray-700 font-medium">
                            Username
                        </label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            
                            required
                            placeholder="Email or phone number"
                            value={data.Email}
                            onChange={(e)=> setData({...data,Username:e.target.value})}
                            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-ypof-background bg-ypof"
                        />
                    </div>

                    {/* Password Input */}
                    <div>
                        <label htmlFor="password" className="block text-gray-700 font-medium">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            required
                            placeholder="Password"
                            value={data.Password}
                            onChange={(e)=> setData({...data,Password:e.target.value})}
                            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-ypof-background bg-ypof"
                        />
                    </div>

                    {/* Forgot Password & Login Button */}
                    <div className="flex justify-between items-center">
                        <Link to="" className="text-blue-500 hover:underline hover:text-ypof cursor-pointer">
                            Forgot Password?
                        </Link>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
                    >
                        Login
                    </button>
                </form>

                {/* Signup Link */}
                <p className="text-center text-gray-600 text-sm mt-4">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-blue-600 hover:underline hover:text-ypof cursor-pointer">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
}
