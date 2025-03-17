import {useState,React} from "react";
import {Link,useNavigate} from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../firebaseConfig';
import Header from "./Header";
import { useAuth } from "../contexts/authContext.jsx"; 


export default function Login() {
    const [data,setData]=useState({
        UserName:'',
        Password:''
    })
    const navigate=useNavigate();
    const {login}=useAuth();
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
    return (
        <div className="flex items-center justify-center bg-ypof-background mt-16">
            <div className="bg-ypof-background border border-ypof p-8 rounded-lg shadow-lg w-96">
                {/* Title */}
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>

                {/* Login Form */}
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    {/* Username Input */}
                    <div>
                        <label htmlFor="username" className="block text-gray-700 font-medium">
                            Username
                        </label>
                        <input
                            type="email"
                            name="username"
                            id="username"
                            
                            required
                            placeholder="Email or phone number"
                            value={data.UserName}
                            onChange={(e)=> setData({...data,UserName:e.target.value})}
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
                    
                    {error && <p className="font-semibold text-red-400">{errorMessage}</p>}
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
