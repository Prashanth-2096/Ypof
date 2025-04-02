import { useContext,useState,useEffect,createContext } from "react";
import { auth } from "../../firebaseConfig";
import { signInWithEmailAndPassword,onAuthStateChanged,signOut,GoogleAuthProvider,signInWithPopup } from "firebase/auth";

const AuthContext=createContext();

export const AuthProvider=({children})=> {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    useEffect(() => {
      setLoading(true);
      const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
        setLoading(false);
      })
    
      return () => {
        unsubscribe();
      }
    }, []);

    const login=async (email,password )=>{
      await signInWithEmailAndPassword(auth,email,password);
        
    }
    const googleLogin=async ()=>{
      const provider=new GoogleAuthProvider();
      await signInWithPopup(auth,provider);
      
    }
    const logout=async ()=>{
        await signOut(auth);
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, login, logout,googleLogin }}>
            {!loading && children}
        </AuthContext.Provider>
    )

    
};
export const useAuth = () => {
    return useContext(AuthContext);
};