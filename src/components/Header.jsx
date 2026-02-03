import { NavLink } from "react-router-dom";
import { FaUserLarge } from "react-icons/fa6";
import { PiInfinityBold } from "react-icons/pi";
import { IoNotificationsOutline } from "react-icons/io5";

export default function Header() {
  return (
    <header className="bg-black text-white flex items-center justify-center h-16 text-xs">
      <nav className="flex w-full items-center justify-between px-8 h-full">
        <div className="left w-1/5">
          <PiInfinityBold color="#2a85ff" size="35px" />
        </div>
        <div className="middle w-3/5 flex gap-5 justify-center h-full items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? "text-primary border-b-3" : "text-white"}`
            }
          >
            Find Jobs
          </NavLink>
          <NavLink
            to="talents"
            className={({ isActive }) =>
              `${isActive ? "text-primary border-b-3" : "text-white"}`
            }
          >
            Find Talents
          </NavLink>
          <NavLink
            to="upload"
            className={({ isActive }) =>
              `${isActive ? "text-primary border-b-3" : "text-white"}`
            }
          >
            Upload Job
          </NavLink>
          <NavLink
            to="about"
            className={({ isActive }) =>
              `${isActive ? "text-primary border-b-3" : "text-white"}`
            }
          >
            About us
          </NavLink>
        </div>
        <div className="right w-1/5 flex items-center justify-end gap-5">
          <IoNotificationsOutline size="20px" />
          <span className="">John Doe</span>
          <FaUserLarge />
        </div>
      </nav>
    </header>
  );
}
