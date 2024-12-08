import React from 'react'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function LatestVisa({visa}) {
 const {_id,image,countryName,visaType,processingTime,documents,description,age,fee,validity,applicationMethod} = visa;
     AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });

  return (
    <div data-aos="flip-left">
      <div className="card bg-Tangerine bg-opacity-[0.1] shadow-xl p-5 lg:p-10 h-full lg:hover:transform lg:hover:scale-125 transition-all duration-300 z-[10]">
        <div className='bg-Tangerine p-5 bg-opacity-10'>
  <figure>
    <img
      src={image}
      alt="Shoes" className='w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover'/>
  </figure>
  <div className="">
    <div className='mt-5 text-center'>
      <p className='text-base text-Gray font-medium'>Country : {countryName}</p>
      <p className='text-base text-Gray font-medium my-2'>Visa Type : {visaType}</p>
      <p className='text-base text-Gray font-medium'>Processing Time : {processingTime}</p>
      <p className='text-base text-Gray font-medium my-2'>Fee : $ {fee}</p>
      <p className='text-base text-Gray font-medium'>Validity : {validity}</p>
      <p className='text-base text-Gray font-medium my-2'>Application Method : {applicationMethod}</p>
    </div>
    <div data-aos="zoom-in" className="card-actions justify-center">
      <Link to={`/visaApplication/${_id}`} className="text-Tangerine text-lg font-semibold border-[1px] border-Tangerine py-2 px-5 mt-5 hover:text-white hover:bg-Tangerine">See Details</Link>
    </div>
  </div>
        </div>
</div>
    </div>
  )
}
