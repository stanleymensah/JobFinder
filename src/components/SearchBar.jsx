import { FiSearch } from "react-icons/fi";
import { IoMapOutline } from "react-icons/io5";
import { RiGeminiFill } from "react-icons/ri";

export default function SearchBar() {
  return (
    <div className="search-bar flex items-center justify-center w-full bg-black text-white">
      <div className="container flex flex-col items-center gap-6 p-8 w-full">
        <div className="top w-full flex items-center gap-2">
          <h1 className="text-2xl">Find Your Dream Job Here</h1>
          <RiGeminiFill size="25px"/>
        </div>
        <div className="down w-full flex items-center text-sm">
          <div className="search-container w-full bg-white h-16 ps-8 pe-2 rounded-full text-black flex items-center gap-4 justify-between">
            <div className="job-title w-2/5 flex items-center gap-2">
              <FiSearch color="gray" />
              <input
                type="text"
                name="title"
                placeholder="Job title or keyword"
                className="border-0 outline-none bg-tansparent w-full"
              />
            </div>
            
            <div className="country w-2/5 flex items-center gap-2">
              <IoMapOutline color="gray" />
              <input
                type="text"
                name="country"
                placeholder="Add country or city"
                className="border-0 outline-none bg-transparent w-full"
              />
            </div>
            <div className="button flex w-1/5 justify-end">
              <button className="bg-primary text-white w-32 h-13 rounded-full" type="submit">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
