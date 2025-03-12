import {React,useState} from 'react'
import {Link} from 'react-router-dom';
import { createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../firebaseConfig"


export default function SignUp() {
    const [data,setData]=useState({
        FirstName:'',
        LastName:'',
        Email:'',
        Password:'',
        ConfirmPassword:'',
        Phone:'',
    });
    const [error,setError]=useState(false);
    const [errorMessage,setErrorMessage]=useState('');
    const handleSubmit=async (e)=>{
        e.preventDefault();
        console.log(data);
        try {
            const userCredential=await createUserWithEmailAndPassword(
                auth,
                data.Email,
                data.Password,

            );
            const user=userCredential.user
        } catch (error) {
            const errorMessage=error.message;
            const errCode=error.code;
            setError(true);

            switch(errCode){
                case "auth/weak-password":
                    setErrorMessage("password is too weak.");
                    break;
                case "auth/email-already-in-use":
                    setErrorMessage("Email already in use by another account.");
                    break;
                case "auth/invalid-email":
                    setErrorMessage("The Email address is invalid.");
                    break;
                case "auth/operation-notallowed":
                    setErrorMessage("Email/password accounts are not enabled.")
                    break;
                default:
                    setErrorMessage(errorMessage);
                    break;
            }
        }
    }
    return (
        <div className="flex flex-col justify-between pt-16 items-center">
            <div className="border p-4 m-2 text-center rounded-lg border-ypof w-96">
                <h2 className="text-2xl font-semibold mb-3">SignUp</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3 ">
                    <div className="flex flex-col gap-2 ">
                        <label htmlFor="firstname" className="font-medium text-start">First Name*</label>
                        <input 
                            name="firstname"
                            id="firstname"
                            type="text"
                            required
                            placeholder="Enter your First name"
                            value={data.FirstName}
                            onChange={(e)=> setData({...data,FirstName:e.target.value})}
                            className="p-2 text-ypof bg-ypof-background border border-ypof rounded-lg"
                        />
                    </div>
                    <div className="flex flex-col gap-2 ">
                        <label htmlFor="lastname" className="font-medium text-start">Last Name</label>
                        <input 
                            name="lastname"
                            id="lastname"
                            type="text"
                            placeholder="Enter your Last name"
                            value={data.LastName}
                            onChange={(e)=> setData({...data,LastName:e.target.value})}
                            className="p-2 text-ypof bg-ypof-background border border-ypof rounded-lg"
                        />
                    </div>
                    <div className="flex flex-col gap-2 ">
                        <label htmlFor="Email" className="font-medium text-start">Email*</label>
                        <input 
                            name="Email"
                            id="Email"
                            type="email"
                            required
                            placeholder="Enter your Email"
                            value={data.Email}
                            onChange={(e)=> setData({...data,Email:e.target.value})}
                            className="p-2 text-ypof bg-ypof-background border border-ypof rounded-lg"
                        />
                    </div>
                    <div className="flex flex-col gap-2 ">
                        <label htmlFor="Password" className="font-medium text-start">Password*</label>
                        <input 
                            name="Password"
                            id="Password"
                            required
                            type="password"
                            placeholder="Enter your Password"
                            value={data.Password}
                            onChange={(e)=> setData({...data,Password:e.target.value})}
                            className="p-2 text-ypof bg-ypof-background border border-ypof rounded-lg"
                        />
                    </div>
                    <div className="flex flex-col gap-2 ">
                        <label htmlFor="Confirm Password" className="font-medium text-start">Confirm Password*</label>
                        <input 
                            name="Confirm Password"
                            id="Confirm Password"
                            required
                            type="password"
                            placeholder="Enter your Confirm Password"
                            value={data.ConfirmPassword}
                            onChange={(e)=> setData({...data,ConfirmPassword:e.target.value})}
                            className="p-2 text-ypof bg-ypof-background border border-ypof rounded-lg"
                        />
                    </div>
                    <div className="flex flex-col gap-2 ">
                        <label htmlFor="Phone" className="font-medium text-start">Phone*</label>
                        <input 
                            name="Phone"
                            id="Phone"
                            required
                            type="tel"
                            placeholder="Enter your Phone"
                            value={data.Phone}
                            onChange={(e)=> setData({...data,Phone:e.target.value})}
                            className="p-2 text-ypof bg-ypof-background border border-ypof rounded-lg"
                        />
                    </div>
                    <button  type="submit" className="">
                        SignUp
                    </button>
                    {error && <p>{errorMessage}</p>}
                </form>
                <div className="flex mt-2 gap-2">
                    <p className='text-gray-600'>Already have an account?</p>
                    <Link to="/login" className='text-blue-600 cursor-pointer hover:text-ypof hover:underline'>
                        Login
                    </Link>
                </div>
            </div>
                
        </div>
    )
}
