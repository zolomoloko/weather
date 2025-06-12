import { Sun } from "@/components/Sun";
import { Search } from "@/components/Search";
import { Moon } from "@/components/Moon";
import { Toirog } from "@/components/Toirog";
import { useEffect, useState } from "react";

export default function Home() {
  const [weather, setWeather] = useState({});
  const [searchValue, setSearchValue] = useState("Ulaanbaatar");
  const [cities, setCities] = useState([]);
  const [filteredCity, setfilteredCity] = useState([])
  const [error, setError] = useState("");
  // const cityUrl = `https://api.api-ninjas.com/v1/city?name=${cities}`;

  // const getCity = async () => {
  //   try {
  //     const response = await fetch(cityUrl, {
  //       headers: {
  //         "X-Api-Key": process.env.NEXT_PUBLIC_CITY_API_KEY,
  //       },
  //     });
  //     const data = await response.json();
  //     return data;
  //   } catch (error) {
  //   }
  // };

  const getWeather = async () => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${searchValue}`
      );
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      throw new Error(error);
    }
  };
  // console.log("wwww", weather);

  const getCities = async () => {
    try {
      const response = await fetch(
        "https://countriesnow.space/api/v0.1/countries"
      );
      const data = await response.json();
      setCities(data.data);
      // const result = data?.data?.filter((city) => {
      //   const findCities = city.cities.find(
      //     (findCities) => findCities === searchValue 
      //   );
      //   return findCities;
      // });
      // const city = result[0].cities.find((city) => city === searchValue);
      // setSearchValue(city);
    } catch (error) {
      setError("no location found");
    }
  };

// buttongiin oroltsooguigeer duuddag
  useEffect(() => {
    getCities();
    getWeather();
  }, []);

const handleChange = (event) => {
  setSearchValue(event.target.value);

  const citiesAndCountry = cities.flatMap((country) =>
  country.cities.map((city)=> `${city}, ${country.country}`)
);
const city = citiesAndCountry
?.filter((item)=>
item.toLowerCase().startsWith(searchValue.toLowerCase())
)
.slice(0, 4);
setfilteredCity(city);
};
  
  return (
    <div className="flex w-[100wv] h-[100vh]">
      <div className=" bg-[#f3f4f6] w-[50%] flex justify-center items-center">
        <div className="relative w-[800px] h-[1200px]   flex flex-row justify-center items-center">
          <Search 
          handleChange={handleChange}
          searchValue={searchValue}
          filteredCity={filteredCity}
          getWeather={getWeather}/>
          <img
            src="./sun.png"
            className="w-[174px] h-[174px] absolute top-[120px] left-30 z-0"
          />
          {error && <div>{error}</div>}
          <Sun weather={weather} />
        </div>
      </div>
      <div className="absolute flex justify-center items-center w-[100%] h-[100%]">
        <Toirog />
      </div>
      <div className="bg-[#0F141E] w-[50%] flex justify-center items-center">
        <div className="relative w-[800px] h-[1200px]   flex flex-row justify-center items-center">
          <img
            src="./moon.png"
            className="w-[174px] h-[174px] absolute top-[870px] left-125"
          />
          <Moon 
          weather={weather}/>
        </div>
      </div>
    </div>
  );
}
