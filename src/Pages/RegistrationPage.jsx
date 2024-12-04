
import { useContext, useState } from "react"
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import gImg from '../assets/icons8-google-48.png'
import { AuthContext } from "../AuthProvider/AuthProvider";
export default function RegistrationPage() {
  const navigate = useNavigate();
    const {creatUser,googleSignIn,userUpdateProfile} = useContext(AuthContext);
    const [showPassword,setShowPassword] = useState(false);
    const [check,setCheck] = useState();
    const [errorPassword,setErrorPassword] = useState('');
    const [errorMassage,setErrorMassage] = useState('');
    const handleCreatUser = (e)=>{
       e.preventDefault();
       setCheck('');
       setErrorPassword('');
       const name = e.target.name.value;
       const email = e.target.email.value;
       const password = e.target.password.value;
       const photoURL = e.target.photoUrl.value;
       const checkbox = e.target.check.checked;
       console.log(photoURL)
        e.target.reset();
        
       const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
       if(!checkbox){
        setCheck('Accept Our Terms and Policy')
        return;
       }
       if(password.length < 6){
        setErrorPassword('Password must be at least 6 characters long.')
        return;
       }
       if (!/[a-z]/.test(password)) {
        setErrorPassword('Password must contain at least one lowercase letter.')
        return;
    }
    if (!/[A-Z]/.test(password)) {
        setErrorPassword('Password must contain at least one uppercase letter.')
        return;
    }
    if (!/\d/.test(password)) {
        setErrorPassword('Password must contain at least one number.')
        return;
    }
    if (!/[@$!%*?&]/.test(password)) {
        setErrorPassword('Password must contain at least one special character (@$!%*?&).')
        return;
    }
    creatUser(email,password)
    .then((result)=>{

        userUpdateProfile(name,photoURL)
        .then((result)=>{

        }).catch(err=>{
            console.log(err)
        })
       navigate('/');
    }).catch(err=>{
        setErrorMassage(err);
    })
    }
    const handleGoogleSignIn = ()=>{
        googleSignIn()
        .then((result)=>{
            navigate('/');
        }).catch(err=>{
            console.log(err);
        })
    }
  return (
  <div>
        <div>
        <div className='flex items-center justify-center'>
    <div className='container w-11/12 lg:w-[30%] py-10'>
        <h3 className='text-xl lg:text-4xl font-semibold mb-10'><span className='text-Tangerine'> Get Started </span> Now</h3>
       <form onSubmit={handleCreatUser}>
        <div>
            <label>
                <span className='text-base inline-block mb-2 text-black font-medium'>Name</span>
            </label><br />
            <input type="text" name="name" id="" placeholder='Enter your name' className='w-full rounded-xl border-[1px] border-Tangerine mb-5 placeholder:text-base font-normal  px-2.5 py-2'/>
        </div>
        <div>
            <label className='mb-2'>
                <span className='text-base inline-block mb-2 text-black font-medium'>Email address</span>
            </label><br />
            <input type="email" name="email" id="" placeholder='Enter your email' className='w-full rounded-xl border-[1px] border-Tangerine mb-5 placeholder:text-base font-normal  px-2.5 py-2'/>
        </div>
        <div>
            <label className='mb-2'>
                <span className='text-base inline-block mb-2 text-black font-medium'>Photo URL</span>
            </label><br />
            <input type="url" name="photoUrl" id="" placeholder='Enter your Photo URL' className='w-full rounded-xl border-[1px] border-Tangerine mb-5 placeholder:text-base font-normal  px-2.5 py-2'/>
        </div>
        <div className='relative'>
            <label className='mb-2'>
                <span className='text-base inline-block mb-2 text-black font-medium'>Password</span>
            </label><br />
           <input type={showPassword ? 'text':'password'} name="password" id="" placeholder='Enter your password' className='w-full rounded-xl border-[1px] border-Tangerine mb-5 placeholder:text-base font-normal px-2.5 py-2'/>
              <span onClick={()=>setShowPassword(!showPassword)} className='absolute right-3 top-1/2 cursor-pointer'>
                {
                    showPassword? <IoEyeOutline />:<IoEyeOffOutline className=' text-LightGray'/> 

                }
                </span>
            <div className=''>
                    {
                        errorPassword && <p className='text-sm text-red-600'>{errorPassword}</p>
                    }
                
            </div>
        </div>
        <div className="form-control">
           <label className="label cursor-pointer justify-start gap-2">
          <input type="checkbox" name='check' className="checkbox w-4 h-4" />
          <span className="label-text text-base text-black font-medium">I agree to the <Link className='underline decoration-Tangerine'>terms & policy</Link></span>
          </label>
          <div>
                    {
                        check && <p className='text-red-600 text-sm'>{check}</p>
                    }
                
            </div>
         </div>
         <div className='w-full'>
            <button  className='text-white text-base font-bold bg-Tangerine w-full inline-block text-center px-3 py-2 rounded-xl mt-5'>Sign up</button>
         </div>
          <div className='mt-5'>
                    {
                        errorMassage && <p className='text-red-600 text-sm'>Error : Already have an account!</p>
                    }
                
            </div>
       </form>
           <div className="divider my-10">OR</div>
            <div>
               <button onClick={handleGoogleSignIn} className='flex items-center gap-2 rounded-xl border-[1px] border-LightGray w-fit px-2.5 py-2'> <img src={gImg} alt="" className='w-5'/>
                <p className='text-base text-black font-medium'>Sign In With Google</p>
                </button>
            </div>
            <div className='text-center my-5'>
                <p className='text-base text-black font-medium'>Have an account ? <Link to='/logIn' className='text-Tangerine hover:underline hover:decoration-Tangerine'>Sign In</Link></p>
            </div> 
    </div>
        </div>
  
      </div>
  
    </div>
  )
}
