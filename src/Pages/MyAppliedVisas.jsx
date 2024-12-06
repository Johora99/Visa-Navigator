import { useLoaderData } from "react-router-dom"
import MyAppliedVisa from "../components/MyAppliedVisa";
import bgImg from '../assets/bg-img.jpg'


export default function MyAppliedVisas() {
  const data = useLoaderData();
    const bgStyle = {
   backgroundImage: `url(${bgImg})`,
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat',
    backgroundPosition:'center',
  
    
  };
  return (
     <div style={bgStyle} className="mb-20">
      <div className="bg-black bg-opacity-[0.5] py-10">
    <div className="container w-11/12 mx-auto">
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-20">
      {
          data?.map(myVisa => <MyAppliedVisa key={myVisa._id} myVisa={myVisa}></MyAppliedVisa>)
      }
       </div>
    </div>
      </div>
     </div>
  )
}
