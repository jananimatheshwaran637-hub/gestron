import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function City() {
  const { city } = useParams();
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/weather/${city}`)
      .then(res => res.json())
      .then(data => setWeather(data))
      .catch(err => console.log(err));
  }, [city]);

  return (
    <div>
      <h2>Weather Details</h2>
      {weather && weather.error ? <p>{weather.error}</p> :
       weather ? <div><h3>{weather.city}</h3>
         <p>Temperature: {weather.temp}</p>
         <p>Condition: {weather.condition}</p></div> :
       <p>Loading...</p>}
    </div>
  );
}
export default City;
