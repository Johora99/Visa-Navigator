import { useLoaderData, useNavigate } from "react-router-dom"
import bgImg from '../assets/composition-cotton-airline-toy-jet_23-2148169868.png'
import ModalBox from "../components/ModalBox";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


export default function VisaDetailsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {user} = useContext(AuthContext)
  const currentDate = new Date().toLocaleDateString('en-CA');
  const navigate = useNavigate()
  const [details,setDetails] = useState({})
  const bgStyle = {
   backgroundImage: `url(${bgImg})`,
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat',
    backgroundPosition:'center',
  
    
  };
  const data = useLoaderData();
  useEffect(()=>{
    setDetails(data);
  },[])
   const {_id,image,countryName,visaType,processingTime,documents,description,age,fee,validity,applicationMethod} = data;
  

     const openModal = (e) =>{
    e.stopPropagation();
    document.getElementById(`${_id}`).showModal()
  } 


   const closeModal = () => {
  const modal = document.getElementById(`${_id}`);
  const email = user.email;
  const myVisa = {
    details, currentDate,email
  }
  setIsModalOpen(false);
    fetch('https://server-side-tawny.vercel.app/myAppliedVisa',{
      method:'POST',
      headers:{
        'content-type':'application/json',
      },
      body:JSON.stringify(myVisa)
    })
    .then(res => res.json())
    .then(data => console.log(data))
  if (modal) {
    modal.close();
    navigate('/allVisa')
  }
};
 const cancelApply = ()=>{
  const modal = document.getElementById(`${_id}`);
    if (modal) {
    modal.close();
  }
 }
    useEffect(() => {
    document.title = "Visa Navigator || Visa Details Page";
  }, []);
  return (
    <div className="container w-11/12 mx-auto my-20" style={bgStyle}>
    <div className="bg-black bg-opacity-[0.3] p-10">
      <div className="card glass w-full lg:w-[50%] ml-auto p-10">
  <figure>
    <img
      src={image}
      alt="car!" className="rounded-xl "/>
  </figure>
  <div className="text-white">
    <div className='mt-5  flex flex-col lg:flex-row lg:items-center justify-between lg:gap-10'>
      <div>
        <p className='text-base  font-medium'>Country : {countryName}</p>
      <p className='text-base  font-medium my-2'>Visa Type : {visaType}</p>
        <p className='text-base  font-medium'>Processing Time : {processingTime}</p>
      </div>
     <div>
      <p className='text-base  font-medium my-2'>Fee : $ {fee}</p>
      <p className='text-base  font-medium'>Validity : {validity}</p>
      <p className='text-base  font-medium my-2'>Application Method : {applicationMethod}</p>
    </div>
    </div>
    <div>
      <p>Documents : {
        documents.map(document => <li>{document}</li>)
        }</p>
        <p>Description : {description}</p>
        <p>Age Restriction : {age}</p>
    </div>
    <div className="card-actions justify-center">
      <button onClick={openModal} className="border-[1px] border-Tangerine py-2 lg:py-3 px-5 text-white text-lg font-semibold mt-5">Apply for the visa</button>
    </div>
    <ModalBox details={details} closeModal={closeModal} cancelApply={cancelApply}></ModalBox>
  </div>
</div>
    </div>
    </div>
  )
}
