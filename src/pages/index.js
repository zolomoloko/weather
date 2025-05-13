import {Sun} from "@/components/Sun"
import {Search} from "@/components/Search"
import { Moon } from "@/components/Moon"
import {Toirog} from "@/components/Toirog"

export default function Home() {
  return (
    <div className="flex w-[100wv] h-[100vh]" >

      <div className=" bg-[#f3f4f6] w-[50%] flex justify-center items-center">
        <div className="relative w-[800px] h-[1200px] border-1 border-amber-950  flex flex-row justify-center items-center">       
          <Search/>    
          <img src="./sun.png" className="w-[174px] h-[174px] absolute top-[120px] left-30 z-0"/>
          <Sun/>
        </div>
      </div>
      <div className="absolute flex justify-center items-center w-[100%] h-[100%]">
        <Toirog/>
      </div>
      <div className="bg-[#0F141E] w-[50%] flex justify-center items-center">
        <div className="relative w-[800px] h-[1200px] border-1 border-amber-950  flex flex-row justify-center items-center">
          <img src="./moon.png" className="w-[174px] h-[174px] absolute top-[870px] left-125"/>
          <Moon/>
        </div>
      </div>

    </div>
  )}