import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'
export default function ModalBox({closeModal,details}) {
  const {user} = useContext(AuthContext)
  console.log(user)
  const {_id,countryName,fee} = details;
   const currentDate = new Date().toLocaleDateString('en-CA');
  const handleApplyVisa = (e) =>{
    e.preventDefault();
    const fastName = e.target.fastName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const date = e.target.date.value;
    const fee = e.target.fee.value;
    const visaData = {fastName,lastName,email,date,fee}
    fetch('http://localhost:5000/visaUser',{
      method:'POST',
      headers:{
          'content-type':'application/json',
      },
      body:JSON.stringify(visaData)
    })
    .then(res => res.json())
      .then(data => {
      Swal.fire({
    position: "center",
    icon: "success",
  title: "Visa Applied Successfully Done!",
  showConfirmButton: false,
  timer: 1500
});
    })
    console.log(visaData)
  }

  return (
    <div>
<dialog id={`${_id}`} className="modal">
  <div className="modal-box">
    <h3 className='text-xl lg:text-4xl text-black font-semibold text-center mb-10'>Apply For <span className='text-Tangerine'> {countryName} </span>Visa</h3>
   <form onSubmit={handleApplyVisa}>
      <div className="p-5">
        <div>
            <label>
                <span className='text-base inline-block mb-2 text-black font-medium'>First Name</span>
            </label><br />
            <input type="text" name="fastName" id="" placeholder='Enter your name' className='w-full rounded-xl border-[1px] border-Tangerine mb-5 placeholder:text-base font-normal  px-2.5 py-2 text-black' />
        </div>
      <div>
            <label>
                <span className='text-base inline-block mb-2 text-black font-medium'>Last Name</span>
            </label><br />
            <input type="text" name="lastName" id="" placeholder='Enter your name' className='w-full rounded-xl border-[1px] border-Tangerine mb-5 placeholder:text-base font-normal  px-2.5 py-2 text-black' />
        </div>
        <div>
            <label className='inline-block mb-2'>
                <span className='text-base text-black font-medium'>Email address</span>
            </label><br />
            <input type="email" name="email" id="" placeholder='Enter your email' className='w-full rounded-xl border-[1px] border-Tangerine mb-5 placeholder:text-base font-normal px-2.5 py-2 text-black' defaultValue={user?.email
            } />
        </div>
        <div>
            <label className='inline-block mb-2'>
                <span className='text-base text-black font-medium'>Applied date</span>
            </label><br />
            <input type="date" name="date" id="" placeholder='Enter your email' className='w-full rounded-xl border-[1px] border-Tangerine mb-5 placeholder:text-base font-normal px-2.5 py-2 text-black' defaultValue={currentDate} />
        </div>
        <div>
            <label className='inline-block mb-2'>
                <span className='text-base text-black font-medium'>Fee ($)</span>
            </label><br />
            <input type="number" name="fee" id="" placeholder='Enter your email' className='w-full rounded-xl border-[1px] border-Tangerine mb-5 placeholder:text-base font-normal px-2.5 py-2 text-black' defaultValue={fee} />
        </div>
    <div className="modal-action">
      <div className='w-full'>
            <button onClick={closeModal} className='text-white text-lg font-bold bg-Tangerine w-full inline-block text-center px-2.5 py-2 rounded-xl mt-5'>Apply</button>
         </div>
    </div>
      </div>
       </form>
  </div>
</dialog>
    </div>
  )
}
