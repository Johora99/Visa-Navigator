
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function MyAppliedVisa({myVisa,setVisaData,visaData}) {
    const {user} = useContext(AuthContext)
    const {_id,image,countryName,visaType,processingTime,documents,description,age,fee,validity,applicationMethod} = myVisa.details;


  const handleVisaCancel = (id) => {
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
     fetch(`https://server-side-tawny.vercel.app/myAppliedVisa/byId/${id}`,{
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
    <div>
      <div data-aos="zoom-in" className="bg-Tangerine bg-opacity-[0.5] rounded-xl">
              <div className=' w-full bg-black bg-opacity-[0.3] p-5'>
              <div className="text-white text-lg">
                  <img src={image} alt="" className="w-14 h-14 rounded-full" />
                  <div>
                  <div>
                <p className="mt-5">Country : {countryName} </p>
                <p className="my-1">Visa Type : {visaType}</p>
                <p>Processing Time : {processingTime}</p>
                <p className="my-1">Fee : {fee}</p>
                <p>Validity : {validity}</p>
                  </div>
                  <div>
                <p className="my-1">Application Method : {applicationMethod}</p>
                <p>Applied Date : {myVisa.currentDate} </p>
                <p className="my-1">Applicant's Name : {user?.displayName}</p>
                <p>Applicant’s Email : {user?.email}</p>
                  </div>
                  </div>
              </div>
              <div>
                <button onClick={() => handleVisaCancel(myVisa._id)} className="text-white border-[1px] border-Tangerine py-2 px-5 font-semibold mt-5">Cancel</button>
              </div>
              </div>
            </div>
    </div>
  )
}
