import { useLoaderData } from "react-router-dom"
import LatestVisa from "../components/LatestVisa";


export default function AllVisaPage() {
  const data = useLoaderData();

  return (
    <div className="container w-11/12 mx-auto">
      <div className="text-center mt-20">
    <h2 className="text-7xl font-bold"><span className="text-Tangerine">All</span> Visa </h2>
      <p className="text-base text-Gray font-medium mt-5">Explore the most recent visa opportunities! Below are the All visa options available for various countries. <br className="hidden lg:block"/> Each visa card provides essential information .</p>
      <div className="w-[30%] border-b-[2px] border-Tangerine mx-auto mt-5"></div>
      </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 my-20">
          {
            data.map(visa => <LatestVisa key={visa._id} visa={visa}></LatestVisa>)
          }
        </div>
    </div>
  )
}
