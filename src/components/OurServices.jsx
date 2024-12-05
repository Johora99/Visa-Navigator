import starIcon from '../assets/icons8-star-50.png'
import Img1 from '../assets/1000_F_317328556_FLtaOieyLDOwGeXFntbxoVobcwAcOuuT.jpg'
export default function OurServices() {
  return (
    <div className="container w-11/12 mx-auto">
      <div className="text-center">
      <div className='flex items-center justify-center gap-3'>
        <img src={starIcon} alt="" className='w-10'/>
          <h4 className="text-Tangerine text-xl font-semibold">SERVICES</h4>
        <img src={starIcon} alt="" className='w-10'/>
      </div>
        <h2 className="text-7xl font-bold leading-[100px] mb-20">Outstanding Immigration <br className='hidden lg:block'/>
        <span className="text-Tangerine">Visa</span>  Services. </h2>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mb-20'>
          <div className='relative'>
            <div className='w-full overflow-hidden '>
              <div className='hover:scale-150 transition-all duration-500'>
               <img src={Img1} alt="" className=''/>
              </div>
            </div>
             <div className='absolute right-0 -bottom-1/3 bg-white p-5 shadow-lg'>
              <h3 className='text-2xl font-semibold'>Student Visa</h3>
              <p className='text-base font-medium text-Gray my-3'>Processing times vary by visa type and country, <br /> ranging from a few weeks to an several months</p>
              <button className='text-Tangerine text-lg font-semibold border-[1px] border-Tangerine py-1 px-5 mt-10'>Read More</button>
             </div>
        
        
             </div>
          <div className='relative overflow-hidden'>
            <div className='hover:scale-150 transition-all duration-500'>
               <img src={Img1} alt="" className=''/>
            </div>
             <div className='absolute w-[40%] right-0 bottom-4 bg-white'>
              <h3>Student Visa</h3>
              <p>Processing times vary by visa type and country, ranging from a few weeks to an several months</p>
              <button>Read More</button>
             </div>
        
        
             </div>
          <div className='relative overflow-hidden'>
            <div className='hover:scale-150 transition-all duration-500'>
               <img src={Img1} alt="" className=''/>
            </div>
             <div className='absolute w-[40%] right-0 bottom-4 bg-white'>
              <h3>Student Visa</h3>
              <p>Processing times vary by visa type and country, ranging from a few weeks to an several months</p>
              <button>Read More</button>
             </div>
        
        
             </div>
      
        
          </div>
      </div>
  
  )
}
