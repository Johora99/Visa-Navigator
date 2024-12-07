import { useLoaderData } from "react-router-dom";
import MyAppliedVisa from "../components/MyAppliedVisa";
import bgImg from "../assets/bg-img.jpg";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

export default function MyAppliedVisas() {
  const{user} = useContext(AuthContext)
  const [visaData, setVisaData] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); 
  useEffect(() => {
    fetch(`https://server-side-tawny.vercel.app/myAppliedVisa/byEmail/${user.email}`)
    .then(res => res.json())
    .then(data =>setVisaData(data))
    
  }, []);

  const bgStyle = {
    backgroundImage: `url(${bgImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };


  const handleSearch = () => {
    const filteredData = data.filter((visa) =>
      visa.details.countryName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setVisaData(filteredData);
  };
       useEffect(() => {
    document.title = "Visa Navigator || My Applied Visa Page";
  }, []);
  return (
    <div>
  <div className="text-center my-20">
            <input
              type="text"
              className="input input-bordered w-1/2 lg:w-1/3 border-Tangerine text-black"
              placeholder="Search by Country Name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              className="bg-Tangerine py-3 px-5 rounded-xl text-white ml-3"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
    <div style={bgStyle} className="mb-20">
      <div className="bg-black bg-opacity-[0.5] py-10">
        <div className="container w-11/12 mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-20">
            {visaData?.map((myVisa) => (
              <MyAppliedVisa
                key={myVisa._id}
                myVisa={myVisa}
                visaData={visaData}
                setVisaData={setVisaData}
              ></MyAppliedVisa>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
