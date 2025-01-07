import { useContext, useEffect, useState } from "react";
import UpdateModal from "./UpdateModal";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function MyAddedVisa({data,setAddedData,addedData,index}) {
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
       AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });

  return (
       <>
        <tr className="w-full  shadow-lg hover:shadow-xl transition duration-300 rounded-lg">
  {/* Index */}
  <th className="py-4 px-6 text-center font-bold  rounded-l-lg">
    {index + 1}
  </th>

  {/* Image */}
  <td className="py-4 px-6 text-center">
    <img
      src={image}
      alt="Visa"
      className="w-14 h-14 object-cover rounded-full border-2 border-Tangerine shadow-md"
    />
  </td>

  {/* Country */}
  <td className="py-4 px-6  font-medium text-center">
    {countryName}
  </td>

  {/* Visa Type */}
  <td className="py-4 px-6 text-center">
    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
      {visaType}
    </span>
  </td>

  {/* Processing Time */}
  <td className="py-4 px-6  text-center">{processingTime}</td>

  {/* Fee */}
  <td className="py-4 px-6  text-center font-semibold">
    ${fee}
  </td>

  {/* Validity */}
  <td className="py-4 px-6 text-center">
    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-medium">
      {validity}
    </span>
  </td>

  {/* Application Method */}
  <td className="py-4 px-6  text-center">{applicationMethod}</td>

  {/* Update Button */}
  <td className="py-4 px-6 text-center">
    <button
      className="font-semibold bg-Tangerine hover:bg-orange-600 text-white py-2 px-4 rounded-full transition duration-200"
      onClick={openModal}
    >
      Update
    </button>
  </td>

  {/* Delete Button */}
  <td className="py-4 px-6 text-center">
    <button
      onClick={() => handleDeleteItem(user.email)}
      className="font-semibold bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-full transition duration-200"
    >
      Delete
    </button>
  </td>
</tr>

       
  
       <UpdateModal data={data} closeModal={closeModal} addedData={addedData} setAddedData={setAddedData}></UpdateModal>
    </>
  )
}

