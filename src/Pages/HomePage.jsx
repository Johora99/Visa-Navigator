import { useEffect } from "react";
import Assesment from "../components/Assesment";
import Banner from "../components/Banner";
import LatestVisas from "../components/LatestVisas";
import OurDestination from "../components/OurDestination";
import OurServices from "../components/OurServices";
import ChooseUs from "@/components/ChooseUs";
import CommonQuestion from "@/components/CommonQuestion";
import Testimonial from "@/components/Testimonial";





export default function HomePage() {
  useEffect(() => {
    document.title = "Visa Navigator || Home Page";
  }, []);
  return (
    <div>
      <Banner></Banner>
      <LatestVisas></LatestVisas>
      <OurServices></OurServices>
      <OurDestination></OurDestination>
      <ChooseUs></ChooseUs>
      <Testimonial></Testimonial>
      <CommonQuestion></CommonQuestion>
      <Assesment></Assesment>
    </div>
  )
}
