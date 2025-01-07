import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

export default function PrivatePage({children}) {
 const {user,loading,setLoading} = useContext(AuthContext);
     const location = useLocation();
     if(loading){
      return <div className="w-full h-screen flex items-center justify-center">
                       <span className="loading loading-ring loading-xs text-Tangerine"></span>
                        <span className="loading loading-ring loading-sm text-Tangerine"></span>
                        <span className="loading loading-ring loading-md text-Tangerine"></span>
                        <span className="loading loading-ring loading-lg text-Tangerine"></span>                        
                        </div>
     }
     if(user){
       return children;
      }else{
        
        return (
          <div>
          <Navigate state={{from:location.pathname}} to="/logIn"></Navigate>
       </div>
     )
    }
}
