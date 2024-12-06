import Assesment from "../components/Assesment";
import Banner from "../components/Banner";
import LatestVisas from "../components/LatestVisas";
import OurDestination from "../components/OurDestination";
import OurServices from "../components/OurServices";



export default function HomePage() {
  return (
    <div>
      <Banner></Banner>
      <LatestVisas></LatestVisas>
      <OurServices></OurServices>
      <OurDestination></OurDestination>
      <Assesment></Assesment>
  
    </div>
  )
}
