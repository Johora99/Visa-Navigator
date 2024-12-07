import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../AuthProvider/AuthProvider"
import MyAddedVisa from "../components/MyaddedVisa";
import bgImg from '../assets/pngtree-visualizing-the-tourism-and-travel-concept-booking-airline-tickets-online-with-image_13549510.png'

export default function MyAddedVisaPage() {
  const {user} = useContext(AuthContext);
  const [addedData,setAddedData] = useState([])
  useEffect(()=>{
    fetch(`http://localhost:5000/visaApplication/byEmail/${user.email}`)
    .then(res => res.json())
    .then(data => setAddedData(data) )
  },[])
  const bgStyle = {
   backgroundImage: `url(${bgImg})`,
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat',
    
  
  
    
  };
  return (
     <div style={bgStyle}>
      <div className=" bg-black bg-opacity-[0.3]">
    <div className="container w-11/12 mx-auto mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 p-5">
         {
          addedData.map(data => <MyAddedVisa key={data._id} data={data} setAddedData={setAddedData} addedData={addedData}></MyAddedVisa>)
         }
      </div>
    </div>
      </div>
     </div>
  
  )
}
