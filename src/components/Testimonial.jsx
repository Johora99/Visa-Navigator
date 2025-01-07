import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
const AutoplaySlider = withAutoplay(AwesomeSlider);
import bgImg from '../assets/testimonial.jpg'
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import starIcon from '../assets/icons8-star-50.png'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
export default function Testimonial() {
    const [clintData,setClintData] = useState([]) 
  useEffect(()=>{
    fetch('/clints.json')
    .then(res => res.json())
    .then(data => setClintData(data.client_satisfaction))
  },[])
 useEffect(() => {
  AOS.init({
    duration: 1000, 
    once: true, 
  });
}, []);
  return (
    <div className="w-full">
         <div className="text-center pt-20">
                     <div className='flex items-center justify-center gap-3'>
                       <img src={starIcon} alt="" className='w-10'/>
                         <h4 data-aos="zoom-in" className="text-Tangerine text-xl font-semibold uppercase">Client Say</h4>
                       <img src={starIcon} alt="" className='w-10'/>
                     </div>
                     <div className='px-5'>
                       <h2 data-aos="zoom-in" className="text-4xl lg:text-7xl font-bold leading-[50x] lg:leading-[100px] mb-20">What Our   <br className='hidden lg:block'/>
                       <span className="text-Tangerine">Clients</span> Are Saying</h2>
                     </div>
                     </div>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} 
        interval={3000} 
        animation="cubeAnimation"
        className="h-[500px] my-20 relative"
        style={{backgroundImage:`url(${bgImg})`,backgroundSize: 'cover',
         backgroundPosition: 'center', backgroundAttachment:'fixed',height:'500px'}}
      >
           
           {
             clintData?.map(clint =><>
             <div className='absolute  inset-0 flex  justify-center'>
                <div className='text-center'>
                    <img src={clint.image} alt="" className='w-24 h-24 lg:w-32 lg:h-32 rounded-full mx-auto mt-10' />
                    <p  data-aos="zoom-in" className='text-2xl lg:text-3xl font-semibold text-black mt-3'>{clint.name}</p>
                    <p  data-aos="zoom-in" className='text-lg lg:text-xl  font-medium my-3'>{clint.location}</p>
                    <p  data-aos="zoom-in" className='text-xl lg:text-2xl text-white w-[40%] mx-auto '>{clint.feedback}</p>
                    <div>
                        <p className='text-base text-LightGray my-2 '>Rating : {clint.rating}</p>
                        <Rating
      style={{ maxWidth: 180,margin:'auto' }}
      value={clint.rating}
      readOnly
    />
                    </div>
                </div>
             </div>
             </>
             )
           }
   

      </AutoplaySlider>
    </div>
  );
} 