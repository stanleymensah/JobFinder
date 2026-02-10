import { FiSearch } from "react-icons/fi";
import { IoMapOutline } from "react-icons/io5";
import { RiGeminiFill } from "react-icons/ri";

export default function SearchBar() {
  return (
    <div className="search-bar flex items-center justify-center w-full bg-black text-white">
      <div className="container flex flex-col items-center gap-6 p-8 w-full">
        <div className="top w-full flex items-center justify-center gap-2 md:justify-start gap-2">
          <h1 className="text-xl md:text-2xl xl:text-3xl">
            Find Your Dream Job Here
          </h1>
          <RiGeminiFill size="25px" />
        </div>
        <div className="down w-full flex items-center text-sm">
          <div className="search-container w-full bg-white h-16 ps-8 pe-2 rounded-lg text-black flex items-center gap-4 justify-between md:rounded-full">
            <div className="fields flex flex-col gap-1 w-full md:flex-row">
              <div className="job-title w-full flex items-center gap-2 md:w-1/2 lg:w-1/2">
                <FiSearch color="gray" />
                <input
                  type="text"
                  name="title"
                  placeholder="Job title or keyword"
                  className="border-0 outline-none bg-transparent w-full"
                />
              </div>

              <div className="w-full h-px bg-gray-300 md:hidden"></div>

              <div className="country w-full flex items-center gap-2 md:w-1/2 lg:w-1/2">
                <IoMapOutline color="gray" />
                <input
                  type="text"
                  name="location"
                  placeholder="Add country or city"
                  className="border-0 outline-none bg-transparent w-full"
                />
              </div>
            </div>

            <div className="button flex w-1/5 justify-end">
            <button className="bg-primary text-white w-10 h-12 rounded-lg flex items-center justify-center md:hidden">
              <FiSearch size="25px" />
            </button>
              <button className="hidden md:block bg-primary text-white w-24 h-13 rounded-full hover:bg-blue-600 transition cursor-pointer">
                Search
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
