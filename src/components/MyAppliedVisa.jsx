
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
export default function MyAppliedVisa({myVisa}) {
    const {user} = useContext(AuthContext)
    const {_id,image,countryName,visaType,processingTime,documents,description,age,fee,validity,applicationMethod} = myVisa.details;
  return (
    <div>
      <div className="bg-Tangerine bg-opacity-[0.5] rounded-xl">
              <div className=' w-full bg-black bg-opacity-[0.3] p-5'>
              <div className="text-white text-lg">
                  <img src={image} alt="" className="w-14 h-14 rounded-full" />
                  <div>
                  <div>
                <p className="mt-5">Country : {countryName} </p>
                <p className="my-1">Visa Type : {visaType}</p>
                <p>Processing Time : {processingTime}</p>
                <p className="my-1">Fee : {fee}</p>
                <p>Validity : {validity}</p>
                  </div>
                  <div>
                <p className="my-1">Application Method : {applicationMethod}</p>
                <p>Applied Date : {myVisa.currentDate} </p>
                <p className="my-1">Applicant's Name : {user?.displayName}</p>
                <p>Applicant’s Email : {user?.email}</p>
                  </div>
                  </div>
              </div>
              <div>
                <button className="text-white border-[1px] border-Tangerine py-2 px-5 font-semibold mt-5">Cancel</button>
              </div>
              </div>
            </div>
    </div>
  )
}
