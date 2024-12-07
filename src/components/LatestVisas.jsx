import { useEffect, useState } from "react"
import LatestVisa from "./LatestVisa"
import { Link } from "react-router-dom"


export default function LatestVisas() {
  const [visas,setVisas] = useState([])
  useEffect(()=>{
    fetch('https://server-side-tawny.vercel.app/newVisas')
    .then(res => res.json())
    .then(data => setVisas(data))
  },[])
  return (
    <div className="container w-11/12 mx-auto">
      <div className="text-center my-20">
        <h2 className="text-4xl lg:text-7xl font-bold"><span className="text-Tangerine">Latest</span> Visa </h2>
        <p className="text-base text-Gray font-medium mt-5">Explore the most recent visa opportunities! Below are the latest visa options available for various countries. <br className="hidden lg:block"/> Each visa card provides essential information .</p>
        <div className="w-[30%] border-b-[2px] border-Tangerine mx-auto mt-5"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mb-20">
          {
            visas.map(visa => <LatestVisa key={visa._id} visa={visa}></LatestVisa>)
          }
      </div>
      <div className="text-center mb-20">
        <Link to='/allVisa' className="text-white text-lg lg:text-xl font-semibold bg-Tangerine py-3 px-10">See All Visas</Link>
      </div>
    </div>
  )
}
