


export default function MyAddedVisa({data}) {
  const {_id,image,countryName,visaType,processingTime,documents,description,age,fee,validity,applicationMethod} = data;
  return (
    <div className="flex gap-10 bg-Tangerine bg-opacity-[0.3] p-5 text-base text-white font-xl">
       <div>
        <img src={image} alt="" className="w-32 "/>
        <button className="font-semibold border-[1px] border-white py-1 px-5 my-3">Update</button><br />
        <button className="font-semibold border-[1px] border-white py-1 px-5 ">Delete</button>
       </div>
       <div>
        <p>Country : {countryName}</p>
        <p>Visa Type : {visaType}</p>
        <p>Processing Time : {processingTime}</p>
        <p>Fee : {fee}</p>
        <p>Validity : {validity}</p>
        <p>Application method: {applicationMethod}</p>
       </div>
    </div>
  )
}

