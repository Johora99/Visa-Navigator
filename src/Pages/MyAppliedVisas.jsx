
import MyAppliedVisa from "../components/MyAppliedVisa";
import bgImg from "../assets/bg-img.jpg";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

export default function MyAppliedVisas() {
  const { user } = useContext(AuthContext);
  const [visaData, setVisaData] = useState([]); 
  const [originalVisaData, setOriginalVisaData] = useState([]); 
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch(`https://server-side-tawny.vercel.app/visaUser/byEmail/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setVisaData(data);
        setOriginalVisaData(data); 
      });
  }, [user.email]);

  const bgStyle = {
    backgroundImage: `url(${bgImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const handleSearch = () => {
    const filteredData = originalVisaData.filter((visa) =>
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
          <div >
            
          <div className="overflow-x-auto">
  <table className="table text-white">
    {/* head */}
    <thead>
      <tr className="text-lg text-Tangerine">
        <th></th>
        <th>Country Flag</th>
        <th>Country</th>
        <th>Visa Type</th>
        <th>Processing Time</th>
        <th>Fee</th>
        <th>Validity</th>
        <th>Application Method </th>
        <th>Applied Date</th>
        <th>Applicant's Name</th>
        <th>Applicant’s Email </th>
        <th>Cancel</th>
      </tr>
    </thead>
    <tbody>
              {visaData?.map((myVisa,index) => (
                <MyAppliedVisa
                  key={myVisa._id}
                  myVisa={myVisa}
                  visaData={visaData}
                  setVisaData={setVisaData}
                  index={index}
                ></MyAppliedVisa>
              ))}
      
    </tbody>
  </table>
</div>
          </div>
        </div>
      </div>
    </div>
  );
}
