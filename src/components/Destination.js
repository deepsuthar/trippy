import Mountain1 from "../assets/1.jpg"
import Mountain2 from "../assets/2.jpg"
import Mountain3 from "../assets/5.jpg"
import Mountain4 from "../assets/8.jpg"
import DestinationData from "./DestinationData"
import "./DestinationStyles.css"

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours Gives you the opportunity to see a lot, within a time frame.</p>
      
      <DestinationData
        className="first-des"
        heading="Taal Volcano, Batangas"
        text="Taal is a stratovolcano with a crater lake on a 5-km-wide volcanic
        island within a large caldera in the SW part of Luzon,
        Philippines, about 65 km S of Manila. Since at least 1968, episodes
        of increased seismicity, elevated lake temperatures, steaming,
        significant sulfur dioxide plumes, and deformation have been
        reported, both during and independent of eruptive periods."
        img1={Mountain1}
        img2={Mountain2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="MT. Danguldul, Batangas"
        text="Taal is a stratovolcano with a crater lake on a 5-km-wide volcanic
        island within a large caldera in the SW part of Luzon,
        Philippines, about 65 km S of Manila. Since at least 1968, episodes
        of increased seismicity, elevated lake temperatures, steaming,
        significant sulfur dioxide plumes, and deformation have been
        reported, both during and independent of eruptive periods."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
