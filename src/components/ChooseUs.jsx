import Img from '../assets/istockphoto-904172104-612x612.jpg'
import starIcon from '../assets/icons8-star-50.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaCoins } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
export default function ChooseUs() {
     AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
      });
  return (
    <div>
        <div className="text-center pt-20">
            <div className='flex items-center justify-center gap-3'>
              <img src={starIcon} alt="" className='w-10'/>
                <h4 data-aos="zoom-in" className="text-Tangerine text-xl font-semibold uppercase">WHY CHOOSE US</h4>
              <img src={starIcon} alt="" className='w-10'/>
            </div>
            <div className='px-5'>
              <h2 data-aos="zoom-in" className="text-4xl lg:text-7xl font-bold leading-[50x] lg:leading-[100px] mb-20">Few reasons to choose our <br className='hidden lg:block'/>
              <span className="text-Tangerine">visa company</span></h2>
            </div>
            </div>
            <div className='mb-20 container w-11/12 mx-auto lg:grid lg:grid-cols-5
            gap-10'>
          <div data-aos="fade-right" className="relative w-full col-span-2">
           <img src={Img} alt="" className="rounded-2xl w-full h-full" />
         <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-25 transition-all duration-300 hover:bg-opacity-50 rounded-2xl">
  
         </div>
           </div>


            <div  data-aos="fade-left" className='col-span-3'>
              <p className='text-base font-medium text-Gray'>Choosing our visa company means opting for a seamless and reliable visa application experience. With years of expertise, our dedicated team guides you through every step of the process, offering personalized solutions that meet the specific requirements of your destination. </p>
              <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-6">
  {/* Cost Effective Card */}
  <div className="relative bg-white rounded-xl shadow-lg transform hover:-rotate-2 hover:-translate-y-2 transition-all duration-300">
    <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-2xl">
    
    </div>
    <div className="p-6 relative z-10">
      <div className="flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full mb-4 mx-auto shadow-lg">
          <FaCoins className='text-2xl'/>
      </div>
      <h3 className="text-xl font-bold text-center mb-2">Cost Effective</h3>
      <p className="text-gray-600 text-center">
        Affordable solutions without compromising on quality, making your investment worthwhile.
      </p>
    </div>
  </div>

  {/* Direct Interviews Card */}
  <div className="relative bg-white rounded-xl shadow-lg transform hover:rotate-2 hover:-translate-y-2 transition-all duration-300">
    <div className="absolute -top-8 -right-8 w-32 h-32 bg-green-500 rounded-full opacity-20 blur-2xl"></div>
    <div className="p-6 relative z-10">
      <div className="flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full mb-4 mx-auto shadow-lg">
        <FaUserTie className='text-2xl'/>
      </div>
      <h3 className="text-xl font-bold text-center mb-2">Direct Interviews</h3>
      <p className="text-gray-600 text-center">
        Simplify your journey by enabling direct communication with consulates and agencies.
      </p>
    </div>
  </div>

  {/* Trusted Customer Card */}
  <div className="relative bg-white rounded-xl shadow-lg transform hover:-rotate-2 hover:-translate-y-2 transition-all duration-300">
    <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-yellow-500 rounded-full opacity-20 blur-2xl"></div>
    <div className="p-6 relative z-10">
      <div className="flex items-center justify-center w-16 h-16 bg-yellow-500 text-white rounded-full mb-4 mx-auto shadow-lg">
      <FaAward className='text-2xl'/>
      </div>
      <h3 className="text-xl font-bold text-center mb-2">Trusted by Customers</h3>
      <p className="text-gray-600 text-center">
        A track record built on trust and a long list of satisfied clients worldwide.
      </p>
    </div>
  </div>

  {/* Support Team Card */}
  <div className="relative bg-white rounded-xl shadow-lg transform hover:rotate-2 hover:-translate-y-2 transition-all duration-300">
    <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-red-500 rounded-full opacity-20 blur-2xl"></div>
    <div className="p-6 relative z-10">
      <div className="flex items-center justify-center w-16 h-16 bg-red-500 text-white rounded-full mb-4 mx-auto shadow-lg">
        <FaHandsHelping className='text-2xl'/> 
      </div>
      <h3 className="text-xl font-bold text-center mb-2">Support Team</h3>
      <p className="text-gray-600 text-center">
        Our dedicated team is ready to assist you at every step of the visa process.
      </p>
    </div>
  </div>
</div>



              </div>
            </div>
            </div>
    </div>
  )
}
