import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import { FaUserLarge } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";

export default function DropDown() {
  return (
    <Menu as="div" className="relative inline-block">
      <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white inset-ring-1 inset-ring-white/5 hover:bg-white/20">
        <RxHamburgerMenu size="20px" />
      </MenuButton>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            {({ active }) => (
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${active ? 'bg-gray-100 text-gray-900' : 'text-white'} block px-4 py-2 text-sm ${isActive ? "text-primary" : ""}`
                }
              >
                Find Jobs
              </NavLink>
            )}
          </MenuItem>
          <MenuItem>
            {({ active }) => (
              <NavLink
                to="talents"
                className={({ isActive }) =>
                  `${active ? 'bg-gray-100 text-gray-900' : 'text-white'} block px-4 py-2 text-sm ${isActive ? "text-primary" : ""}`
                }
              >
                Find Talents
              </NavLink>
            )}
          </MenuItem>
          <MenuItem>
            {({ active }) => (
              <NavLink
                to="upload"
                className={({ isActive }) =>
                  `${active ? 'bg-gray-100 text-gray-900' : 'text-white'} block px-4 py-2 text-sm ${isActive ? "text-primary" : ""}`
                }
              >
                Upload Job
              </NavLink>
            )}
          </MenuItem>
          <MenuItem>
            {({ active }) => (
              <NavLink
                to="about"
                className={({ isActive }) =>
                  `${active ? 'bg-gray-100 text-gray-900' : 'text-white'} block px-4 py-2 text-sm ${isActive ? "text-primary" : ""}`
                }
              >
                About us
              </NavLink>
            )}
          </MenuItem>
          <MenuItem>
            {({ active }) => (
              <div className={`${active ? 'bg-gray-100 text-gray-900' : 'text-white'} block px-4 py-2 text-sm flex items-center gap-2`}>
                <span className="">John Doe</span>
                <FaUserLarge />
              </div>
            )}
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}
