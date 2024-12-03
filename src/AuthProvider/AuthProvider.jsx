
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import auth from '../Firebase/firebase.init.js'
import { GoogleAuthProvider } from "firebase/auth";
const AuthContext = createContext(null)
export default function AuthProvider({children}) {
const[user,setUser]=useState(null)
    const [loading,setLoading] = useState(true)


    const creatUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }


    const logInUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }


    const signOutUser = ()=>{
        setLoading(true)
        return signOut(auth)
    }


    useEffect(()=>{
      const onUser = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            onUser()
        }
    },[])
   
    const provider = new GoogleAuthProvider();
    const googleSignIn = ()=>{
      return signInWithPopup(auth,provider)
    }
    const userUpdateProfile = (name,photoURL)=>{
    return updateProfile(auth.currentUser,{
      displayName:name,photoURL:photoURL
    })
  }
    const authInfo ={
     creatUser,
     logInUser,
     signOutUser,
     user,
     setUser,
     loading,
     googleSignIn,
     userUpdateProfile
     
    }
  return (
   <AuthContext.Provider value={authInfo}>
     {children}
   </AuthContext.Provider>
  )
}
export{AuthContext};

