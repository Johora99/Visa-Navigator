
import { useContext, useEffect } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function MyAppliedVisa({myVisa,setVisaData,visaData,index}) {
    const {user} = useContext(AuthContext)
    const {_id,image,countryName,visaType,processingTime,documents,description,age,fee,validity,applicationMethod} = myVisa.details;


  const handleVisaCancel = (id) => {
     console.log(id)
       Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "rgb(255, 119, 41)",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes Delete It"
}).then((result) => {
  if (result.isConfirmed) {
     fetch(`https://server-side-tawny.vercel.app/visaUser/byId/${id}`,{
        method:"DELETE",
     })
     .then(res=> res.json())
     .then(data => 
      {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        const remainingVisa = visaData.filter(visa => visa._id !== myVisa._id);
        setVisaData(remainingVisa);
        console.log(data)
      }
    )
   
  }
});
};
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });

  return (
    
    
                
          <tr className="bg-Tangerine bg-opacity-[0.5] rounded-xl">
          <th>{index + 1}</th>
        <td><img src={image} alt="" className="w-14 h-14 rounded-full"/></td>
        <td>{countryName}</td>
        <td>{visaType}</td>
        <td>{processingTime}</td>
        <td>{fee}</td>
        <td>{validity}</td>
        <td>{applicationMethod}</td>
        <td>{myVisa.visaData.date}</td>
        <td>{myVisa.visaData.fastName} {myVisa.visaData.lastName}</td>
        <td>{user?.email}</td>
        <td><button onClick={() => handleVisaCancel(myVisa._id)} className="text-white border-[1px] border-Tangerine py-2 px-5 font-semibold mt-5">Cancel</button></td>
      </tr>
      
      
          
    
  )
}
