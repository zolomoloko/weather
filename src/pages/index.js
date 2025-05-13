import {Sun} from "@/components/Sun"
import {Search} from "@/components/Search"

export default function Home() {
  return (
    <div className="flex w-[100wv]">
      <div className="bg-[#f3f4f6] w-[50%] h-[1200px] relative flex flex-col items-center justify-center">
         <Search/>
        <img src="./sun.png" className="w-[174px] h-[174px] absolute top-[120px] left-70"/>
        <Sun/>
      </div>
      <div className="bg-[#0F141E] w-[50%] h-[1200px]">
        <img src="./moon.png" className="w-[174px] h-[174px] absolute box-border border-none m-auto block"/>
      </div>
    </div>
  )}