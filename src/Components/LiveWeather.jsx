import React, { useEffect, useState } from "react";

const LiveWeather = () => {
    const [city,setCity] = useState(null);
    const [search,setSearch] = useState("Puranpur");

    const inputEvent = (event) => {
       setSearch(event.target.value);
    }    

    useEffect( () => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=456bc36bed81f97a920b5d8c291b8237`;
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);
        }
        fetchApi();
    },[search])
    
    return(
        <>
          <div className="box">

             <div className="inputData">
                <input type="text" className="inputFeild" value={search} onChange={inputEvent}></input>   
             </div>
          
          {!city ?(
              <p className="errorMsg">No Data Found</p>
          ) : (
            <div>
              <div className="info">
                <h2 className="location">
                 <i className="fa fa-street-view"></i> {search}
                </h2>
               <h1 className="temp">{city.temp}°C</h1>
               <h3 className="temp_min_max">Min : {city.temp_min}°C | Max : {city.temp_max}°C</h3>
              </div>
           </div>
          )}
          </div>
        </>
    );
}

export default LiveWeather;