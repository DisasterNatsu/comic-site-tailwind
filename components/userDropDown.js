import React, { useState, useRef, useEffect } from "react";
import { PiHandWavingDuotone } from "react-icons/pi";
import { IoMdArrowDropdown } from "react-icons/io";

const UserDropdown = ({ userName }) => {
  const ref = useRef();

  const [userDropdowm, setUserDropdown] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu

      if (userDropdowm && ref.current && !ref.current.contains(e.target)) {
        setUserDropdown(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleaning up the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [userDropdowm]);

  return (
    <div ref={ref}>
      <button
        onClick={() => setUserDropdown(!userDropdowm)}
        className="flex justify-center items-center"
      >
        <img src="/assets/avater.png" alt="user avater" className="w-9" />
        <IoMdArrowDropdown className="ml-[-5px]" />
      </button>
      {userDropdowm && (
        <div
          className={`absolute top-[80px] bg-red-300 dark:bg-slate-900 py-4 rounded-md ml-[-100px] flex-col justify-center items-center gap-5 px-10 shadow-md ${
            userDropdowm ? "flex" : "hidden"
          }`}
        >
          <a href="#" className="flex gap-2 items-center text-2xl">
            Hi, {userName} <PiHandWavingDuotone className="text-yellow-700" />
          </a>
          <hr className="dark:border-b-white border-b-2 border-black w-full" />
          <a
            href="#"
            className="hover:bg-red-500 dark:hover:bg-yellow-400 dark:hover:text-black font-semibold py-2 px-4 rounded-md"
          >
            User Setting
          </a>
          <a
            href="#"
            className="hover:bg-red-500 dark:hover:bg-yellow-400 dark:hover:text-black font-semibold py-2 px-4 rounded-md"
          >
            Favourites
          </a>
          <a
            href="#"
            className="hover:bg-red-500 dark:hover:bg-yellow-400 dark:hover:text-black font-semibold py-2 px-4 rounded-md"
          >
            Preferance
          </a>
          <button className="dark:bg-slate-400 px-4 py-2 rounded-md dark:text-black dark:hover:text-white dark:hover:bg-slate-950 bg-red-600 hover:bg-or font-semibold">
            Log out!
          </button>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
