import { SearchIcon } from "lucide-react"

export const Search = ({searchValue, handleChange, filteredCity, setSearchValue, getWeather}) => {
    const changeWeather = (value) => {
        setSearchValue(value.split(",")[0]);
        getWeather()
    };
    return(
        <div className="absolute top-[110px] left-10 z-30 ">
            <div className="flex items-center w-[567px] h-80px rounded-[48px] bg-white pl-[30.52px]">
                <SearchIcon className="w-[35px] h-[35px] text-gray-500"/>
                <input 
                type="text" 
                placeholder="Search" 
                className="w-full py-4 pl-3 pr-6 text-[32px] font-bold text-gray-600 outline-none" 
                onChange={handleChange}
                value={searchValue}
                />
            </div>
            <div>
                {filteredCity.map((city, index) => (
                    <div key={index} onClick={() => changeWeather(city)}>
                     {city}
                    </div>
                ))}
            </div>
        </div>
    )
}