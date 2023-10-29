import React,{useEffect, useState} from "react";
import WindSpeed from "./windSpeed";
import Day_date from "./date";
import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faUserCircle  } from '@fortawesome/free-solid-svg-icons';




//import "./css/style.css";

let resJson ={};
let setWind ={};

function TempApp() {
  const [cityData,setCity]= useState("mumbai");
  const [search, setSearch] = useState("mumbai");
  
  
  
  useEffect ( () =>
  {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=85c498b52c37645e2650dd4505d92d64`
      
      const response = await fetch(url);
      resJson = await response.json();
      setCity(resJson.main);
       setWind = resJson.wind;
      //console.log(setWind );
      //console.log(resJson);
    }

   /* useEffect(() => {
      const fetchWeatherData = async () => {
        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=YOUR_API_KEY`
          );
  
          if (response.ok) {
            const data = await response.json();
            console.log(data.main);
            setCityData(data);
          
          } else {   
            setCityData(null); // Reset data if the request is not successful
          }
        } catch (error) {
          console.error("Error fetching data: ", error);
          setCityData(null);
        }
      };
  
      fetchWeatherData();
    }, [search]);
  
  */
    fetchApi();
  },[search])
  return (
    <>
      <div className="search-box">
          <div className="container">
          <div className="Edit"><b>ClearSky</b></div>
          <input type="search"
            value={search}
            className="button"
            placeholder="search city"
            onChange={(event) => {
              setSearch(event.target.value);
              
            } } />
            <Day_date/>
            <div className="icons">
              <div className="icon-1">
                <FontAwesomeIcon icon={faGlobe} />
              </div>
              <div className="icon-2">
                <FontAwesomeIcon icon={ faUserCircle } />
              </div>

            </div>
        </div>
        <div className="images">
          <div className="part-1"></div>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/019/989/658/small/weather-and-meteorology-icon-set-sun-clouds-rain-symbol-isolated-png.png" alt="nature-image"></img>
          <div className="part-2"></div>
        </div>
        { !cityData ? (
          <p>Not Found</p>
        ) : (
          
           
            
            <div className="temp">
              <h2>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M320 64A64 64 0 1 0 192 64a64 64 0 1 0 128 0zm-96 96c-35.3 0-64 28.7-64 64v48c0 17.7 14.3 32 32 32h1.8l11.1 99.5c1.8 16.2 15.5 28.5 31.8 28.5h38.7c16.3 0 30-12.3 31.8-28.5L318.2 304H320c17.7 0 32-14.3 32-32V224c0-35.3-28.7-64-64-64H224zM132.3 394.2c13-2.4 21.7-14.9 19.3-27.9s-14.9-21.7-27.9-19.3c-32.4 5.9-60.9 14.2-82 24.8c-10.5 5.3-20.3 11.7-27.8 19.6C6.4 399.5 0 410.5 0 424c0 21.4 15.5 36.1 29.1 45c14.7 9.6 34.3 17.3 56.4 23.4C130.2 504.7 190.4 512 256 512s125.8-7.3 170.4-19.6c22.1-6.1 41.8-13.8 56.4-23.4c13.7-8.9 29.1-23.6 29.1-45c0-13.5-6.4-24.5-14-32.6c-7.5-7.9-17.3-14.3-27.8-19.6c-21-10.6-49.5-18.9-82-24.8c-13-2.4-25.5 6.3-27.9 19.3s6.3 25.5 19.3 27.9c30.2 5.5 53.7 12.8 69 20.5c3.2 1.6 5.8 3.1 7.9 4.5c3.6 2.4 3.6 7.2 0 9.6c-8.8 5.7-23.1 11.8-43 17.3C374.3 457 318.5 464 256 464s-118.3-7-157.7-17.9c-19.9-5.5-34.2-11.6-43-17.3c-3.6-2.4-3.6-7.2 0-9.6c2.1-1.4 4.8-2.9 7.9-4.5c15.3-7.7 38.8-14.9 69-20.5z" /></svg>{search}
              </h2>
              <h1> {cityData.temp} °C</h1>
              <h2> Min : {cityData.temp_min}°C | Max : {cityData.temp_max}°C</h2>
              
             
            </div>      
           
         
            


        )}
        <div className="bottom">
        <div className="bottom-left">
          <h3>humidity: {cityData && cityData.humidity ? cityData.humidity + ' %' : 'No data'}</h3>
        </div>
        <div className="bottom-right">
            <h3>Pressure: {cityData && cityData.pressure ? cityData.pressure : 'No data'}</h3>
        </div>
</div>


    
      
      
      </div>
    </>
  );
}

export default TempApp;
