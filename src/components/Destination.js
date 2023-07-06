import Mountain1 from "../assets/1.jpg"
import Mountain2 from "../assets/2.jpg"
import Mountain3 from "../assets/3.jpg"
import Mountain4 from "../assets/4.jpg"
import "./DestinationStyles.css"

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours Gives you the opportunity to see a lot, within a time frame.</p>
      <div className="first-des">
        <div className="des-text">
          <h2>Taal Volcano, Batangas</h2>
          <p>
            Taal is a stratovolcano with a crater lake on a 5-km-wide volcanic
            island within a large caldera in the SW part of Luzon,
            Philippines, about 65 km S of Manila. Since at least 1968, episodes
            of increased seismicity, elevated lake temperatures, steaming,
            significant sulfur dioxide plumes, and deformation have been
            reported, both during and independent of eruptive periods.
          </p>
        </div>
        <div className="image">
            <img alt="img" src={Mountain1}/>
            <img alt="img" src={Mountain2}/>
        </div>
      </div>
    </div>
  );
};

export default Destination;
