
import { useLoaderData } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import LatestVisa from "../components/LatestVisa";
import { ThemeContext } from "./ThemeProvider";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AllVisaPage() {
  const { isDarkMode } = useContext(ThemeContext);
  const data = useLoaderData();
  const [selectedVisaType, setSelectedVisaType] = useState("All Visa");
  const [sortOrder, setSortOrder] = useState("none"); // State for sorting

  const filteredVisas =
    selectedVisaType === "All Visa"
      ? data
      : data.filter((visa) => visa.visaType === selectedVisaType);

  // Sorting logic
  const sortedVisas = [...filteredVisas].sort((a, b) => {
    if (sortOrder === "lowToHigh") {
      return a.fee - b.fee; // Sort by fee in ascending order
    } else if (sortOrder === "highToLow") {
      return b.fee - a.fee; // Sort by fee in descending order
    }
    return 0; // No sorting
  });

  const handleFilterChange = (e) => {
    setSelectedVisaType(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  useEffect(() => {
    document.title = "Visa Navigator || All Visa";
  }, []);

  AOS.init({
    offset: 200,
    duration: 600,
    easing: "ease-in-sine",
    delay: 100,
  });

  return (
    <div className="container w-11/12 mx-auto">
      <div className="text-center mt-20">
        <h2 data-aos="zoom-in" className="text-4xl lg:text-7xl font-bold">
          <span className="text-Tangerine">All</span> Visa
        </h2>
        <p data-aos="zoom-in" className="text-base text-Gray font-medium mt-5">
          Explore the most recent visa opportunities! Below are the All visa
          options available for various countries.
          <br className="hidden lg:block" />
          Each visa card provides essential information.
        </p>
        <div className="w-[30%] border-b-[2px] border-Tangerine mx-auto mt-5"></div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-5 mt-20">
          {/* Visa Type Filter */}
          <select
            className={`select select-bordered border-Tangerine rounded-xl mb-5 lg:mb-0 text-base focus:border-Tangerine ${
              isDarkMode ? "bg-gray-900 text-white " : "bg-white text-black"
            }`}
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

          {/* Sort By Fee */}
          <select
            className={`select select-bordered border-Tangerine rounded-xl text-base focus:border-Tangerine ${
              isDarkMode ? "bg-gray-900 text-white " : "bg-white text-black"
            }`}
            name="sortOrder"
            value={sortOrder}
            onChange={handleSortChange}
          >
            <option value="none">Sort By Fee</option>
            <option value="lowToHigh">Fee (Low to High)</option>
            <option value="highToLow">Fee (High to Low)</option>
          </select>
        </div>
      </div>

      {/* Visa Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 my-20">
        {sortedVisas.map((visa) => (
          <LatestVisa key={visa._id} visa={visa}></LatestVisa>
        ))}
      </div>
    </div>
  );
}
