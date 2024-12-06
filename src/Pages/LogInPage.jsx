
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import gImg from '../assets/icons8-google-48.png'
import { useContext, useRef, useState } from 'react'
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { AuthContext } from '../AuthProvider/AuthProvider.jsx';
import { toast } from 'react-toastify';
export default function LogInPage() {
  const navigate = useNavigate();
    const location = useLocation()
    const emailRef = useRef();
    const {logInUser,googleSignIn} = useContext(AuthContext)
     const [showPassword,setShowPassword] = useState(false)
      
  

 const resetPassword = () => {
    const resetEmail = emailRef.current?.value;
  navigate("/reset", { state: { resetEmail } });
 }

    const handelLogInUser = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        e.target.reset();

        logInUser(email,password)
        .then((result)=>{
            if(location.state?.from){
          navigate(location.state.from)
        }else{
          navigate('/')
        }
        }).catch(err=>{
             toast.error("Please provide a valid email.");
        })
    }
     const handleGoogleSignIn = ()=>{
         googleSignIn()
        .then((result)=>{
           if(location.state?.from){
          navigate(location.state.from)
        }else{
          navigate('/')
        }
        }).catch(err=>{
            console.log(err)
        })
    }
  return (
   <div>
        <div className='flex items-center justify-center my-20'>

    <div className='container w-11/12 mx-auto lg:w-[30%] py-10'>
        <h3 className='text-xl lg:text-4xl font-semibold'>Welcome<span className='text-Tangerine'>Back !</span></h3>
        <p className='text-xl text-black font-medium mb-10'>Enter your Credentials to access your account</p>
       <form onSubmit={handelLogInUser}>
        <div>
            <label className='inline-block mb-2'>
                <span className='text-base text-black font-medium'>Email address</span>
            </label><br />
            <input type="email" name="email" id="" ref={emailRef}  placeholder='Enter your email' className='w-full rounded-xl border-[1px] border-Tangerine mb-5 placeholder:text-base font-normal px-2.5 py-2'/>
        </div>
        <div className='relative'>
            <label className='mb-2 flex items-center justify-between'>
                <span className='text-base text-black font-medium'>Password</span>
                <Link onClick={resetPassword} className='text-base font-medium  hover:underline hover:decoration-Tangerine cursor-pointer'>forgot password</Link>
            </label>
           <input type={showPassword ? 'text':'password'} name="password" id="" placeholder='Enter your password' className='w-full rounded-xl border-[1px] border-Tangerine mb-5 placeholder:text-base font-normal px-2.5 py-2'/>
            <span onClick={()=>setShowPassword(!showPassword)} className='absolute right-3 top-1/2 cursor-pointer'>
                {
                    showPassword? <IoEyeOutline />:<IoEyeOffOutline className=' text-LightGray'/> 

                }
                </span>
        </div>
        <div className="form-control">
           <label className="label cursor-pointer justify-start gap-2">
          <input type="checkbox"  className="checkbox w-4 h-4" />
          <span className="label-text text-base text-black font-medium">Remember for 30 days</span>
          </label>
         </div>
         <div className='w-full'>
            <button className='text-white text-lg font-bold bg-Tangerine w-full inline-block text-center px-2.5 py-2 rounded-xl mt-5'>Login</button>
         </div>
       </form>
           <div className="divider my-10">OR</div>
            <div>
                <button onClick={handleGoogleSignIn} className='flex items-center gap-2 rounded-xl border-[1px] border-LightGray w-fit px-3 py-2'>
                    <img src={gImg} alt="" className='w-5'/>
                <p className='text-base text-black font-medium'>Sign In With Google</p>
                </button>
            </div>
            <div className='text-center my-5'>
                <p className='text-base text-black font-medium'>Don’t have an account ? <Link to='/register' className='text-Tangerine hover:underline hover:decoration-Tangerine'>Sign Up</Link></p>
            </div>
         
    </div>
        </div>
      </div>
  )
}
