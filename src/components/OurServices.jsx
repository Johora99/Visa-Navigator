import starIcon from '../assets/icons8-star-50.png'
import Img1 from '../assets/1000_F_317328556_FLtaOieyLDOwGeXFntbxoVobcwAcOuuT.jpg'
import Img2 from '../assets/Family-Sponsorship.jpg'
import Img3 from '../assets/Business-visitor-visa.jpg'
import Img4 from '../assets/51-1.png'
import Img5 from '../assets/9d257020-9530-11ef-b625-ed49b635f0e5.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext } from 'react'
import { ThemeContext } from '@emotion/react'
export default function OurServices() {
    const { isDarkMode} = useContext(ThemeContext);
      AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });

  return (
    <div className="container w-11/12 mx-auto ">
      <div className="text-center">
      <div className='flex items-center justify-center gap-3'>
        <img src={starIcon} alt="" className='w-10'/>
          <h4 data-aos="fade-right" className="text-Tangerine text-xl font-semibold">SERVICES</h4>
        <img src={starIcon} alt="" className='w-10'/>
      </div>
        <h2 data-aos="fade-left" className="text-4xl lg:text-7xl font-bold leading-[50px] lg:leading-[100px] mb-20">Outstanding Immigration <br className='hidden lg:block'/>
        <span className="text-Tangerine">Visa</span>  Services. </h2>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mb-20'>
          <div data-aos="zoom-in-down" className='relative mb-20'>
            <div className='w-full overflow-hidden '>
              <div className='hover:scale-150 transition-all duration-500 h-[300px] lg:h-[400px]'>
               <img src={Img1} alt="" className='h-full object-cover w-full'/>
              </div>
            </div>
             <div className='absolute right-0 -bottom-1/3 bg-white p-5 shadow-lg rounded-xl rounded-tr-none'>
              <h3 className='text-2xl font-semibold'>Student Visa</h3>
              <p className='text-base font-medium text-Gray my-3'>Processing times vary by visa type and country, <br /> ranging from a few weeks to an several months</p>
              <button className={`text-Tangerine text-lg font-semibold border-[1px] border-Tangerine py-1 px-5 mt-10 hover:bg-Tangerine hover:text-white`}>Read More</button>
             </div>
        
        
             </div>
        <div data-aos="zoom-in-down" className='relative my-20 lg:my-0 lg:mb-20'>
            <div className='w-full overflow-hidden '>
              <div className='hover:scale-150 transition-all duration-500 h-[300px] lg:h-[400px]'>
               <img src={Img3} alt="" className='h-full object-cover w-full'/>
              </div>
            </div>
             <div className='absolute right-0 -bottom-1/3 bg-white p-5 shadow-lg rounded-xl rounded-tr-none'>
              <h3 className='text-2xl font-semibold'>Business Visa</h3>
            <p className='text-base font-medium text-Gray my-3'>Processing times vary by visa type and country, <br /> ranging from a few weeks to an several months</p>
              <button className={`text-Tangerine text-lg font-semibold border-[1px] border-Tangerine py-1 px-5 mt-10 hover:bg-Tangerine hover:text-white`}>Read More</button>
             </div>
        
        
             </div>
          <div data-aos="zoom-in-down" className='relative my-20 lg:my-0 lg:mb-20'>
            <div className='w-full overflow-hidden '>
              <div className='hover:scale-150 transition-all duration-500 h-[300px] lg:h-[400px] w-full'>
               <img src={Img2} alt="" className='h-full object-cover w-full'/>
              </div>
            </div>
             <div className='absolute right-0 -bottom-1/3 bg-white p-5 shadow-lg rounded-xl rounded-tr-none'>
              <h3 className='text-2xl font-semibold'>Family Visa</h3>
            <p className='text-base font-medium text-Gray my-3'>Processing times vary by visa type and country, <br /> ranging from a few weeks to an several months</p>
              <button className={`text-Tangerine text-lg font-semibold border-[1px] border-Tangerine py-1 px-5 mt-10 hover:bg-Tangerine hover:text-white`}>Read More</button>
             </div>
        
        
             </div>
          <div data-aos="zoom-in-down" className='relative my-20'>
            <div className='w-full overflow-hidden '>
              <div className='hover:scale-150 transition-all duration-500 h-[300px] lg:h-[400px]'>
               <img src={Img4} alt="" className='h-full object-cover w-full'/>
              </div>
            </div>
             <div className='absolute right-0 -bottom-1/3 bg-white p-5 shadow-lg rounded-xl rounded-tr-none'>
              <h3 className='text-2xl font-semibold'>Tourist Visa</h3>
            <p className='text-base font-medium text-Gray my-3'>Processing times vary by visa type and country, <br /> ranging from a few weeks to an several months</p>
              <button className={`text-Tangerine text-lg font-semibold border-[1px] border-Tangerine py-1 px-5 mt-10 hover:bg-Tangerine hover:text-white`}>Read More</button>
             </div>
        
        
             </div>
          <div data-aos="zoom-in-down" className='relative my-20'>
            <div className='w-full overflow-hidden '>
              <div className='hover:scale-150 transition-all duration-500 h-[300px] lg:h-[400px]'>
               <img src={Img5} alt="" className='h-full object-cover w-full'/>
              </div>
            </div>
             <div className='absolute right-0 -bottom-1/3 bg-white p-5 shadow-lg rounded-xl rounded-tr-none'>
              <h3 className='text-2xl font-semibold'>Work Visa</h3>
            <p className='text-base font-medium text-Gray my-3'>Processing times vary by visa type and country, <br /> ranging from a few weeks to an several months</p>
              <button className={`text-Tangerine text-lg font-semibold border-[1px] border-Tangerine py-1 px-5 mt-10 hover:bg-Tangerine hover:text-white`}>Read More</button>
             </div>
             </div>
          </div>
      </div>
  
  )
}
