import { useContext, useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"
import { AuthContext } from "../AuthProvider/AuthProvider"


export default function MyAddedVisaPage() {
  const {user} = useContext(AuthContext);
  const [addedData,setAddedData] = useState([])
  useEffect(()=>{
    fetch(`http://localhost:5000/visaApplication/byEmail/${user.email}`)
    .then(res => res.json())
    .then(data => setAddedData(data) )
  },[])
  return (
    <div className="container w-11/12 mx-auto my-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
         {
          
         }
      </div>
    </div>
  )
}
