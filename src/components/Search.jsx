import { SearchIcon } from "lucide-react"

export const Search = () => {
    return(
        <div className="absolute top-[110px] left-50 z-3 ">
            <div className="flex items-center w-[567px] h-80px rounded-[48px] bg-white pl-[30.52px]">
                <SearchIcon className="w-[35px] h-[35px] text-gray-500"/>
                <input type="text" placeholder="Search" className="w-full py-4 pl-3 pr-6 text-[32px] font-bold text-gray-400 outline-none" />
            </div>
        </div>
    )
}