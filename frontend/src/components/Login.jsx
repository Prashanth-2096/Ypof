import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    return (
        <div className="flex items-center justify-center bg-ypof-background mt-16">
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
                            placeholder="Enter your email or phone number"
                            className="w-full text-ypof-background mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                            placeholder="Enter your password"
                            className="w-full text-ypof-background mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Forgot Password & Login Button */}
                    <div className="flex justify-between items-center">
                        <a href="#" className="text-blue-500 text-sm hover:underline">
                            Forgot Password?
                        </a>
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
                    <a onClick={() =>navigate("/signup")} className="text-blue-500 cursor-pointer hover:text-ypof">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
}
