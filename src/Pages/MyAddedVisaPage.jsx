import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../AuthProvider/AuthProvider"
import bgImg from '../assets/pngtree-visualizing-the-tourism-and-travel-concept-booking-airline-tickets-online-with-image_13549510.png'
import MyAddedVisa from "../components/MyAddedVisa";

export default function MyAddedVisaPage() {
  const {user} = useContext(AuthContext);
  const [addedData,setAddedData] = useState([])
  useEffect(()=>{
    fetch(`https://server-side-tawny.vercel.app/visaApplication/byEmail/${user.email}`)
    .then(res => res.json())
    .then(data => setAddedData(data) )
  },[])
  const bgStyle = {
   backgroundImage: `url(${bgImg})`,
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat',
    
  
  
    
  };
      useEffect(() => {
    document.title = "Visa Navigator || My Added Visa Page";
  }, []);
  return (
    <div>
      <div className="container w-11/12 mx-auto text-center my-10 lg:my-20">
        <h2 className="text-4xl lg:text-7xl font-bold">My
          <span className="text-Tangerine"> Added </span>  Visa
        </h2>
        <p className="text-base text-Gray font-medium mt-5">
          Explore the most recent visa opportunities! Below are the All visa
          options available for various countries.
          <br className="hidden lg:block" />
          Each visa card provides essential information.
        </p>
      </div>
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
    </div>
  
  )
}
