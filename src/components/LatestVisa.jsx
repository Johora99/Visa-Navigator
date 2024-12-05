import React from 'react'

export default function LatestVisa({visa}) {
 const {_id,image,countryName,visaType,processingTime,documents,description,age,fee,validity,applicationMethod} = visa;
  return (
    <div>
      <div className="card bg-Tangerine bg-opacity-[0.1] shadow-xl p-10 h-full">
  <figure>
    <img
      src={image}
      alt="Shoes" className='w-40 h-40 rounded-full object-cover'/>
  </figure>
  <div className="">
    <div className='mt-5 text-center'>
      <p className='text-base text-Gray font-medium'>Country : {countryName}</p>
      <p className='text-base text-Gray font-medium my-2'>Visa Type : {visaType}</p>
      <p className='text-base text-Gray font-medium'>Processing Time : {processingTime}</p>
      <p className='text-base text-Gray font-medium my-2'>Fee : {fee}</p>
      <p className='text-base text-Gray font-medium'>Validity : {validity}</p>
      <p className='text-base text-Gray font-medium my-2'>Application Method : {applicationMethod}</p>
    </div>
    <div className="card-actions justify-center">
      <button className="text-Tangerine text-lg font-semibold border-[1px] border-Tangerine py-2 px-5 mt-5">See Details</button>
    </div>
  </div>
</div>
    </div>
  )
}
