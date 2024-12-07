
import { useLoaderData } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import LatestVisa from "../components/LatestVisa";
import { ThemeContext } from "./ThemeProvider";

export default function AllVisaPage() {
  const { isDarkMode} = useContext(ThemeContext);
  const data = useLoaderData(); 
  const [selectedVisaType, setSelectedVisaType] = useState("All Visa");

  
  const filteredVisas = selectedVisaType === "All Visa"? data: data.filter((visa) => visa.visaType === selectedVisaType);


  const handleFilterChange = (e) => {
    setSelectedVisaType(e.target.value);
  };
useEffect(() => {
    document.title = "Visa Navigator || All Visa";
  }, []);
  return (
    <div className="container w-11/12 mx-auto">
      <div className="text-center mt-20">
        <h2 className="text-4xl lg:text-7xl font-bold">
          <span className="text-Tangerine">All</span> Visa
        </h2>
        <p className="text-base text-Gray font-medium mt-5">
          Explore the most recent visa opportunities! Below are the All visa
          options available for various countries.
          <br className="hidden lg:block" />
          Each visa card provides essential information.
        </p>
        <div className="w-[30%] border-b-[2px] border-Tangerine mx-auto mt-5"></div>
        <div className="mt-20">
          <select
            className={`select select-bordered border-Tangerine rounded-xl mb-5 text-base focus:border-Tangerine ${isDarkMode ? "bg-gray-900 text-white " : "bg-white text-black"}`}
            name="visaType"
            value={selectedVisaType}
            onChange={handleFilterChange}
          >
            <option>All Visa</option>
            <option>Student Visa</option>
            <option>Work Visa</option>
            <option>Tourist Visa</option>
            <option>Business Visa</option>
            <option>Family/Spouse Visa</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 my-20">
        {filteredVisas.map((visa) => (
          <LatestVisa key={visa._id} visa={visa}></LatestVisa>
        ))}
      </div>
    </div>
  );
}
