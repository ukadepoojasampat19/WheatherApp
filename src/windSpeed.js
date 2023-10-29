import React from "react";
import TempApp from "./tempapp";


const WindSpeed = (props) => {
  const { city } = props;

  // Check if city is defined and if it has a 'wind' property
  if (city) {
    const Wind = city;
    return (
      <>
        <h3 className="temperature">Wind Speed: {Wind.speed} m/s</h3>
      </>
    );
  } else {
    // Handle the case where city or city.wind is not available
    //return <p>Wind information not available.</p>;
  }
};

export default WindSpeed;
