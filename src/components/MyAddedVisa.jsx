import { useContext, useEffect, useState } from "react";
import UpdateModal from "./UpdateModal";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'

export default function MyAddedVisa({data,setAddedData,addedData}) {
  const {user} = useContext(AuthContext)
    const [isModalOpen, setIsModalOpen] = useState(false);
  const {_id,image,countryName,visaType,processingTime,documents,description,age,fee,validity,applicationMethod} = data;


       const openModal = (e) =>{
    e.stopPropagation();
    document.getElementById(`${_id}`).showModal()
  } 
   const closeModal = () => {
  const modal = document.getElementById(`${_id}`);
  setIsModalOpen(false);
  if (modal) {
    modal.close();
  }
};
 const handleDeleteItem = (email)=>{
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "rgb(255, 119, 41)",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
     fetch(`https://server-side-tawny.vercel.app/visaApplication/byEmail/${email}`,{
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
    const remainingVisa = addedData.filter(visa => visa._id !== _id);
    setAddedData(remainingVisa);
     }
     )
   
  }
});
    
   }
  return (
    <div className="flex flex-col lg:flex-row gap-10 bg-Tangerine bg-opacity-[0.3] p-5 text-base text-white font-xl">

       <div>
        <img src={image} alt="" className="w-32 "/>
        <div className="hidden lg:block">
        <button className="font-semibold border-[1px] border-white py-1 px-5 my-3" onClick={openModal}>Update</button><br />
        <button onClick={() => handleDeleteItem(user.email)}className="font-semibold border-[1px] border-white py-1 px-5 ">Delete</button>
        </div>
       </div>
       <div>
        <p>Country : {countryName}</p>
        <p>Visa Type : {visaType}</p>
        <p>Processing Time : {processingTime}</p>
        <p>Fee : {fee}</p>
        <p>Validity : {validity}</p>
        <p>Application method: {applicationMethod}</p>
       </div>
         <div className="lg:hidden">
        <button className="font-semibold border-[1px] border-white py-1 px-5 my-3" onClick={openModal}>Update</button><br />
        <button onClick={() => handleDeleteItem(user.email)}className="font-semibold border-[1px] border-white py-1 px-5 ">Delete</button>
        </div>
       <UpdateModal data={data} closeModal={closeModal} addedData={addedData} setAddedData={setAddedData}></UpdateModal>
    </div>
  )
}

