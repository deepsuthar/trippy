import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You Can Discover unique Destination using Google Maps.</p>
      <div className="tripcard">
        {/* <h2>Hi</h2> */}
        <TripData
          image={Trip1}
          heading="Trip in Indonesia"
          text="Taal is a stratovolcano with a crater lake on a 5-km-wide volcanic island within a large caldera in the SW part of Luzon, Philippines, about 65 km S of Manila. Since at least 1968, episodes of increased seismicity, elevated lake temperatures."
        />
        <TripData
          image={Trip2}
          heading="Trip in Malaysia"
          text="Taal is a stratovolcano with a crater lake on a 5-km-wide volcanic island within a large caldera in the SW part of Luzon, Philippines, about 65 km S of Manila. Since at least 1968, episodes of increased seismicity, elevated lake temperatures."
        />
        <TripData
          image={Trip3}
          heading="Trip in France"
          text="Taal is a stratovolcano with a crater lake on a 5-km-wide volcanic island within a large caldera in the SW part of Luzon, Philippines, about 65 km S of Manila. Since at least 1968, episodes of increased seismicity, elevated lake temperatures."
        />
      </div>
    </div>
  );
}

export default Trip;

