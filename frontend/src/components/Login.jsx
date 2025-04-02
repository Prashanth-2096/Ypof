import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

export default function Login() {
    const [data,setData]=useState({
        UserName:'',
        Password:''
    })
    const navigate=useNavigate();
    const {login,googleLogin}=useAuth();
    const [error,setError]=useState(false);
    const [errorMessage,setErrorMessage]=useState('');
    const handleSubmit=async (e)=>{
        e.preventDefault();
        try {
            await login(data.UserName,data.Password)
            navigate("/");
            console.log("LoggedIn successfully")
                     
        } catch (error) {
            const errorMessage=error.message;
            const errorCode=error.code;
            setError(true);
            
            switch (errorCode) {
                case "auth/invalid-email":
                    setErrorMessage("This Email address is invalid");
                    setData({...data,UserName:'',Password:''});
                    break;
                case "auth/user-disabled":
                    setErrorMessage("This account is disabled by the admin");
                    setData({...data,UserName:'',Password:''});
                    break;
                case "auth/user-not-found":
                    setErrorMessage("This Email address is not registered");
                    setData({...data,UserName:'',Password:''});
                    break;
                case "auth/wrong-password":
                    setErrorMessage("Password entered is incorrect");
                    setData({...data,Password:''})
                    break;  
                default:
                    setErrorMessage(errorMessage);
                    break;
            }
        }
    }

    const handleGoogleSignup=async (e)=>{
        e.preventDefault();
        try {
            await googleLogin();
            
            navigate("/");
            console.log("LoggedIn successfully")
                     
        } catch (error) {
            const errorMessage=error.message;
            const errorCode=error.code;
            setError(true);
            
            switch (errorCode) {
                case "auth/operation-not-allowed":
                    setErrorMessage("Email/password accounts are not enabled.");
                    break;
                case "auth/operation-not-supported-in-this-environment":
                    setErrorMessage("HTTP protocol is not supported. Please use HTTPS.");
                    break;
                case "auth/popup-blocked":
                    setErrorMessage("Popup has been blocked by the browser. Please allow popups for this website.");
                    break;
                case "auth/popup-closed-by-user":
                    setErrorMessage("Popup has been closed by the user before finalizing the operation. Please try again.");
                    break;  
                default:
                    setErrorMessage(errorMessage);
                    break;
            }
        }
    }

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
                    <button
                        onClick={handleGoogleSignup}
                        className="w-full bg-blue-600 flex gap-3 items-center justify-center bg-blue-00 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
                    >
                        <img width="24" height="24" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo"/>
                        Sign in with google
                    </button>
                    
                    {error && <p className="font-semibold text-red-400">{errorMessage}</p>}
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
