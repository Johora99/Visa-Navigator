
import { useContext, useEffect } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../AuthProvider/AuthProvider';
import { ThemeContext } from './ThemeProvider';

export default function AddVisaPage() {
  const { isDarkMode} = useContext(ThemeContext);
  const {user} = useContext(AuthContext);
   const handleVisaApplication = (e)=>{
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
    fetch('http://localhost:5000/visaApplication',{
      method:'POST',
      headers:{
        'content-type':'application/json',
      },
      body:JSON.stringify(allVisaData)
    })
    .then(res => res.json())
    .then(data => {
      Swal.fire({
    position: "center",
    icon: "success",
  title: "Visa Added Successfully!",
  showConfirmButton: false,
  timer: 1500
});
    })

      e.target.reset()



    
   }
   useEffect(() => {
    document.title = "Visa Navigator || Add Visa page";
  }, []);
  return (
     <div>
        <div className='flex items-center justify-center mt-10'>

    <div className='container w-11/12 mx-auto lg:w-[30%] py-10'>
        <h3 className='text-xl lg:text-4xl font-semibold'>Welcome<span className='text-Tangerine'>Back !</span></h3>
        <p className={`text-xl text-black font-medium mb-10 ${isDarkMode ? " text-white " : " text-black"}`}>Enter your Credentials to access your account</p>
       <form onSubmit={handleVisaApplication}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div>
            <label className='inline-block mb-2'>
                <span className={`text-base text-black font-medium ${isDarkMode ? " text-white " : " text-black"}`}>Country Image</span>
            </label><br />
            <input type="url" name="image" id="" placeholder='Enter Country Image' className={`w-full rounded-xl border-[1px] border-Tangerine mb-5 placeholder:text-base font-normal px-2.5 py-3         focus:border-Tangerine ${isDarkMode ? "bg-gray-900 text-white " : "bg-white text-black"}`}/>
        </div>
        <div>
            <label className='inline-block mb-2'>
                <span className={`text-base text-black font-medium ${isDarkMode ? " text-white " : " text-black"}`}>Country Name</span>
            </label><br />
            <input type="text" name="countryName" id="" placeholder='Enter Country Name' className={`w-full rounded-xl border-[1px] border-Tangerine mb-5 placeholder:text-base focus:border-Tangerine font-normal px-2.5 py-3 ${isDarkMode ? "bg-gray-900 text-white " : "bg-white text-black"}`}/>
        </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div>
            <label className='inline-block mb-2'>
                <span className={`text-base text-black font-medium ${isDarkMode ? " text-white " : " text-black"}`}>Visa Type</span>
            </label><br />
        <select   className={`select select-bordered border-Tangerine rounded-xl mb-5 text-base focus:border-Tangerine ${isDarkMode ? "bg-gray-900 text-white " : "bg-white text-black"}`} name="visaType">
        <option selected className="text-base">Student Visa</option>
       <option>Work Visa</option>
       <option>Tourist Visa</option>
       <option>Business Visa</option>
       <option>Family/Spouse Visa</option>
        </select>
        </div>

        <div>
            <label className='inline-block mb-2'>
                <span className={`text-base text-black font-medium ${isDarkMode ? " text-white " : " text-black"}`}>Processing Time</span>
            </label><br />
            <input type="text" name="processingTime" id="" placeholder='Enter your email' className={`w-full rounded-xl border-[1px] border-Tangerine mb-5 placeholder:text-base font-normal px-2.5 py-3 focus:border-Tangerine ${isDarkMode ? "bg-gray-900 text-white " : "bg-white text-black"}`}/>
        </div>
        </div>
          <div>
              <label className='inline-block mb-2'>
                <span className={`text-base text-black font-medium ${isDarkMode ? " text-white " : " text-black"}`}>Required Documents</span>
            </label><br />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
              <div className="form-control">
           <label className="label cursor-pointer justify-start gap-3">
          <input type="checkbox"  name="validPassport" value="Valid Passport" className="w-5 h-5" />
            <span className={`label-text text-base ${isDarkMode ? " text-white " : " text-black"}`}>Valid Passport</span>
         </label>
         </div>
              <div className="form-control">
           <label className="label cursor-pointer justify-start gap-3">
          <input type="checkbox"  name="visaApplicationForm"
              value="Visa Application Form" className=" w-5 h-5" />
            <span className={`label-text text-base ${isDarkMode ? " text-white " : " text-black"}`}>Visa Application From </span>
         </label>
         </div>
              <div className="form-control">
           <label className="label cursor-pointer justify-start gap-3">
          <input type="checkbox"  name="passportPhoto"
              value="Recent Passport-Sized Photo" className=" w-5 h-5" />
            <span className={`label-text text-base ${isDarkMode ? " text-white " : " text-black"}`}>Recent Passport-Sized Photo</span>
         </label>
         </div>
              <div className="form-control">
           <label className="label cursor-pointer justify-start gap-3">
          <input type="checkbox"  name="nidCardPhotocopy"
              value="NID Card Photocopy" className=" w-5 h-5" />
            <span className={`label-text text-base ${isDarkMode ? " text-white " : " text-black"}`}>NID Card Photocopy</span>
         </label>
         </div>
            </div>
          </div>
           <div>
            <label className='inline-block mb-2'>
                <span className={`text-base text-black font-medium ${isDarkMode ? " text-white " : " text-black"}`}>Description</span>
            </label><br />
            <textarea className={`textarea textarea-bordered w-full border-Tangerine placeholder:text-base mb-5 focus:border-Tangerine ${isDarkMode ? "bg-gray-900 text-white " : "bg-white text-black"}`} placeholder="Description" name="description"></textarea>
           </div>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div>
            <label className='inline-block mb-2'>
                <span className={`text-base text-black font-medium ${isDarkMode ? " text-white " : " text-black"}`}>Age Restriction</span>
            </label><br />
            <input type="number" name="age" id="" placeholder='Enter Your Age' className={`w-full rounded-xl border-[1px] border-Tangerine mb-5 placeholder:text-base font-normal px-2.5 py-3 focus:border-Tangerine ${isDarkMode ? "bg-gray-900 text-white " : "bg-white text-black"}`}/>
        </div>
              <div>
            <label className='inline-block mb-2'>
                <span className={`text-base text-black font-medium ${isDarkMode ? " text-white " : " text-black"}`}>Fee ($)</span>
            </label><br />
            <input type="number" name="fee" id="" placeholder='Enter Your Fee' className={`w-full rounded-xl border-[1px] border-Tangerine mb-5 placeholder:text-base font-normal px-2.5 py-3 focus:border-Tangerine ${isDarkMode ? "bg-gray-900 text-white " : "bg-white text-black"}`}/>
        </div>
           </div>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
             <div>
            <label className='inline-block mb-2'>
                <span className={`text-base text-black font-medium ${isDarkMode ? " text-white  " : " text-black"}`}>Validity</span>
            </label><br />
            <input type="text" name="validity" id="" placeholder='Enter Validation' className={`w-full rounded-xl border-[1px] border-Tangerine mb-5 placeholder:text-base font-normal px-2.5 py-3 focus:border-Tangerine ${isDarkMode ? "bg-gray-900 text-white " : "bg-white text-black"}`}/>
        </div>
        <div>
            <label className='inline-block mb-2'>
                <span className={`text-base text-black font-medium ${isDarkMode ? " text-white " : " text-black"}`}>Application Method</span>
            </label><br />
            <input type="text" name="method" id="" placeholder='Enter Application Method' className={`w-full rounded-xl border-[1px] border-Tangerine mb-5 placeholder:text-base font-normal px-2.5 py-3 focus:border-Tangerine ${isDarkMode ? "bg-gray-900 text-white " : "bg-white text-black"}`}/>
        </div>
           </div>
         <div className='w-full'>
            <button className='text-white text-lg font-bold bg-Tangerine w-full inline-block text-center px-2.5 py-2 rounded-xl mt-5'>Add Visa</button>
         </div>
       </form>
    
         
    </div>
        </div>
      </div>
  )
}
