import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../AuthProvider/AuthProvider"
import bgImg from '../assets/pngtree-visualizing-the-tourism-and-travel-concept-booking-airline-tickets-online-with-image_13549510.png'
import MyAddedVisa from "../components/MyAddedVisa";
import AOS from 'aos';
import 'aos/dist/aos.css';
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
      AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });

  return (
    <div>
      <div className="container w-11/12 mx-auto text-center my-10 lg:my-20">
        <h2 data-aos="zoom-in" className="text-4xl lg:text-7xl font-bold">My
          <span className="text-Tangerine"> Added </span>  Visa
        </h2>
        <p data-aos="zoom-in" className="text-base text-Gray font-medium mt-5">
          Explore the most recent visa opportunities! Below are the All visa
          options available for various countries.
          <br className="hidden lg:block" />
          Each visa card provides essential information.
        </p>
      </div>
     <div style={bgStyle}>
      <div className=" bg-black bg-opacity-[0.3]">
    <div className="container w-11/12 mx-auto mb-20">
      <div>
      <div className="overflow-x-auto">
  <table className="table w-full bg-transparent text-white text-base">
    {/* head */}
    <thead>
      <tr className="text-lg text-black">
        <th>#</th>
        <th>Country Flag</th>
        <th>Country</th>
        <th>Visa Type</th>
        <th>Processing Time</th>
        <th>Fee</th>
        <th>Validity</th>
        <th>Application method</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {
          addedData.map((data,index) => <MyAddedVisa key={data._id} data={data} setAddedData={setAddedData} addedData={addedData} index={index}></MyAddedVisa>)
         }
      
      
      
    </tbody>
  </table>
</div>
      </div>
    </div>
      </div>
     </div>
    </div>
  
  )
}
