import { HeartIcon, HomeIcon, MapPin, UserIcon } from "lucide-react"

export  const Sun = ({weather}) => {
    return(
        <div className="w-103 pb-[60px] rounded-[48px] bg-white/750 backdrop-blur-lg shadow-lg absolute z-20">
            <div className="py-14 px-10 space-y-12">
                <div className="flex justify-between items-center">
                    <div className="space-y-2">
                        <h1 className="text-gray-400">{weather?.forecast?.forecastday[0].date}</h1>
                        <h2 className="text-gray-900 font-extrabold text-5xl">{weather?.location?.name}</h2>
                    </div>
                    <MapPin className="w-[32px] h-[32px] text-gray-700"/>
                </div>
                <img src="./nar.png" className="w-[274px] h-[274px] m-auto"/>
            </div>
            <div className="px-12">
                <div className="text-transparent bg-clip-text font-extrabold text-[110px] -mt-10 bg-gradient-to-b from-black to-white">{weather?.current?.temp_c}°</div>
                <div className="mb-12 flex items-center gap-[10px]">
                    <h3 className="text-amber-500 font-extrabold  h-6">{weather?.current?.condition?.text}</h3>
                    <img src={weather?.current?.condition?.icon} alt="zurag" />
                </div>
                <div className="flex items-center justify-between">
                    <HomeIcon className="w-[32px] h-[32px] text-gray-800"/>
                    <MapPin className="w-[32px] h-[32px] text-gray-300"/>
                    <HeartIcon className="w-[32px] h-[32px] text-gray-300"/>
                    <UserIcon className="w-[32px] h-[32px] text-gray-300"/>
                </div>
            </div>
        </div>
    )
}
// weather.weather?.0?.main