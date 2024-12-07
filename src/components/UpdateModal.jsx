import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'
import { RxCross1 } from "react-icons/rx";
export default function UpdateModal({data,closeModal}) {
    const {user} = useContext(AuthContext);
    const {_id,image,countryName,visaType,processingTime,documents,description,age,fee,validity,applicationMethod} = data;
    const handleUpdate = (e)=>{
      e.preventDefault();
        const image = e.target.image.value;
    const countryName = e.target.countryName.value;
    const visaType = e.target.visaType.value;
    const processingTime = e.target.processingTime.value;
    const validPassport = e.target.validPassport.value;
    const visaApplicationForm = e.target.visaApplicationForm.value;
    const passportPhoto = e.target.passportPhoto.value;
    const nidCardPhotocopy = e.target.nidCardPhotocopy.value;
    const description = e.target.description.value;
    const age = e.target.age.value;
    const fee = e.target.fee.value;
    const validity = e.target.validity.value;
    const applicationMethod = e.target.method.value;
    const email = user.email;
     const documents = [validPassport,visaApplicationForm,passportPhoto,nidCardPhotocopy]
    const allVisaData = {
      image,countryName,visaType,processingTime,documents,description,age,fee,validity,applicationMethod,email
    }
    fetch(`http://localhost:5000/visaApplication/byEmail/${email}`,{
      method:'PUT',
      headers:{
        'content-type':'application/json',
      },
      body:JSON.stringify(allVisaData)
    })
    .then(res => res.json())
    .then(data =>{
      
               Swal.fire({
      title: "Visa Update Successfully",
     text: "That thing is still around?",
     icon: "success"
});
    
    
    })
    }
  return (
    <div>
<dialog id={`${_id}`} className="modal">
  <div className="modal-box text-black">
    <div className="flex items-center justify-between">
      <h3>Update</h3>
        <div onClick={closeModal}><RxCross1 className="text-Tangerine text-xl font-bold cursor-pointer"/></div>
    </div>
  <form onSubmit={handleUpdate}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div>
            <label className='inline-block mb-2'>
                <span className='text-base text-black font-medium'>Country Image</span>
            </label><br />
            <input type="url" name="image" id="" placeholder='Enter Country Image' className='w-full rounded-xl border-[1px] border-Tangerine mb-5 placeholder:text-base font-normal px-2.5 py-3' defaultValue={image}/>
        </div>
        <div>
            <label className='inline-block mb-2'>
                <span className='text-base text-black font-medium'>Country Name</span>
            </label><br />
            <input type="text" name="countryName" id="" placeholder='Enter Country Name' className='w-full rounded-xl border-[1px] border-Tangerine mb-5 placeholder:text-base font-normal px-2.5 py-3' defaultValue={countryName}/>
        </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div>
            <label className='inline-block mb-2'>
                <span className='text-base text-black font-medium'>Visa Type</span>
            </label><br />
      <select
  className="select select-bordered border-Tangerine w-full rounded-xl mb-5 text-base"
  name="visaType"
  defaultValue={visaType} 
>
  <option value="Student Visa">Student Visa</option>
  <option value="Work Visa">Work Visa</option>
  <option value="Tourist Visa">Tourist Visa</option>
  <option value="Business Visa">Business Visa</option>
  <option value="Family/Spouse Visa">Family/Spouse Visa</option>
</select>
        </div>

        <div>
            <label className='inline-block mb-2'>
                <span className='text-base text-black font-medium'>Processing Time</span>
            </label><br />
            <input type="text" name="processingTime" id="" placeholder='Enter your email' className='w-full rounded-xl border-[1px] border-Tangerine mb-5 placeholder:text-base font-normal px-2.5 py-3' defaultValue={processingTime}/>
        </div>
        </div>
          <div>
              <label className='inline-block mb-2'>
                <span className='text-base text-black font-medium'>Required Documents</span>
            </label><br />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
              <div className="form-control">
           <label className="label cursor-pointer justify-start gap-3">
          <input type="checkbox"  name="validPassport" value="Valid Passport" className="w-5 h-5" checked/>
            <span className="label-text text-base">Valid Passport</span>
         </label>
         </div>
              <div className="form-control">
           <label className="label cursor-pointer justify-start gap-3">
          <input type="checkbox"  name="visaApplicationForm"
              value="Visa Application Form" className=" w-5 h-5" checked/>
            <span className="label-text text-base">Visa Application From </span>
         </label>
         </div>
              <div className="form-control">
           <label className="label cursor-pointer justify-start gap-3">
          <input type="checkbox"  name="passportPhoto"
              value="Recent Passport-Sized Photo" className=" w-5 h-5" checked/>
            <span className="label-text text-base">Recent Passport-Sized Photo</span>
         </label>
         </div>
              <div className="form-control">
           <label className="label cursor-pointer justify-start gap-3">
          <input type="checkbox"  name="nidCardPhotocopy"
              value="NID Card Photocopy" className=" w-5 h-5" checked/>
            <span className="label-text text-base">NID Card Photocopy</span>
         </label>
         </div>
            </div>
          </div>
           <div>
            <label className='inline-block mb-2'>
                <span className='text-base text-black font-medium'>Description</span>
            </label><br />
            <textarea className="textarea textarea-bordered w-full border-Tangerine placeholder:text-base mb-5" placeholder="Description" name="description" defaultValue={description}></textarea>
           </div>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div>
            <label className='inline-block mb-2'>
                <span className='text-base text-black font-medium'>Age Restriction</span>
            </label><br />
            <input type="number" name="age" id="" placeholder='Enter Your Age' className='w-full rounded-xl border-[1px] border-Tangerine mb-5 placeholder:text-base font-normal px-2.5 py-3' defaultValue={age}/>
        </div>
              <div>
            <label className='inline-block mb-2'>
                <span className='text-base text-black font-medium'>Fee ($)</span>
            </label><br />
            <input type="number" name="fee" id="" placeholder='Enter Your Fee' className='w-full rounded-xl border-[1px] border-Tangerine mb-5 placeholder:text-base font-normal px-2.5 py-3' defaultValue={fee}/>
        </div>
           </div>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
             <div>
            <label className='inline-block mb-2'>
                <span className='text-base text-black font-medium'>Validity</span>
            </label><br />
            <input type="text" name="validity" id="" placeholder='Enter Validation' className='w-full rounded-xl border-[1px] border-Tangerine mb-5 placeholder:text-base font-normal px-2.5 py-3' defaultValue={validity}/>
        </div>
        <div>
            <label className='inline-block mb-2'>
                <span className='text-base text-black font-medium'>Application Method</span>
            </label><br />
            <input type="text" name="method" id="" placeholder='Enter Application Method' className='w-full rounded-xl border-[1px] border-Tangerine mb-5 placeholder:text-base font-normal px-2.5 py-3' defaultValue={applicationMethod}/>
        </div>
           </div>
         <div className='w-full'>
          <div className="modal-action">
      <div className='w-full'>
            <button onClick={closeModal} className='text-white text-lg font-bold bg-Tangerine w-full inline-block text-center px-2.5 py-2 rounded-xl mt-5'>Update</button>
         </div>
    </div>
         </div>
       </form>
  
  </div>
</dialog>
    </div>
  )
}
