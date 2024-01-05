import React, { Fragment, useEffect, useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { Popover, Transition } from "@headlessui/react";
import ThemeToggle from "./themeToggle";
import UserDropdown from "./userDropDown";
import Link from "next/link";
import Cookies from "js-cookie";
import { Axios } from "@/utils/AxiosConfig";
import { NavData } from "@/static/navData";
import Image from "next/image";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [activeSearch, setActiveSearch] = useState([]); // For searchbar

  const handleSearch = async (e) => {
    if (e.target.value == "") {
      setActiveSearch([]);
      return false;
    }

    // fetch the data from api, currently using an empty data variable as to not make vs code mad

    const comics = await Axios.get("/comics/all/comics");

    let data = await comics.data;

    setActiveSearch(
      data
        .filter((d) =>
          d.ComicTitle.toLocaleLowerCase().includes(
            e.target.value.toLocaleLowerCase()
          )
        )
        .slice(0, 8)
    );
  };

  // check if user is logged in

  const isLoggedIn = async () => {
    const token = Cookies.get("ds-token"); // Getting the token from cookies

    if (!token) {
      return setLoggedIn(false); // Set logged in to false if there is no token
    }

    // try catch block

    try {
      // send the jwt to api to handle
      // Axios.post the three arguments are Axios.post(url to the api, body of the request, headers that takes an object)

      const isAuth = await Axios.post("/user/auth", null, {
        headers: {
          "disaster-scans-token": token,
        },
      });

      const response = await isAuth.data;

      setLoggedIn(true); // set the state
      setUserName(response.userName); // set userName that can be used to greet the user
    } catch (error) {
      console.log(error);
      return setLoggedIn(false);
    }
  };

  // Call isLoggedIn in useEffect hook (TODO)

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <Popover
      className={`py-3 flex items-center border-b-2 px-6 h-24 dark:text-white dark:border-white border-black`}
    >
      <div className="hidden sm:block">
        <Link href="/home">
          <img
            loading="eager"
            src="/assets/logo-min.png"
            className="w-16"
            alt="logo"
          />
        </Link>
      </div>

      {/* The Searchbar */}

      <div className="grow">
        <form className="max-w-[640px] flex items-center justify-center gap-2 md:gap-8">
          <div className="relative">
            <input
              type="search"
              placeholder="Type here..."
              className="xl:w-[500px] md:w-[300px] sm:w-[250px] w-[150px] p-3 rounded-full bg-slate-300 dark:bg-medium focus:outline-none"
              onChange={(e) => handleSearch(e)}
            />
            <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 rounded-full">
              <FaSearch className="text-slate-950" />
            </button>
          </div>
          {activeSearch.length > 0 && (
            <div className="absolute p-4 bg-gradient-to-r from-gray-900 to-gray-950 dark:from-orange-100 dark:to-orange-50 xl:w-[500px] md:w-[300px] sm:w-[250px] w-[150px] rounded-xl flex flex-col gap-2 top-20 text-white dark:text-dark">
              {activeSearch.map((result, index) => {
                return (
                  <div key={index}>
                    <Image
                      src={`https://f005.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=${result.CoverImage}`}
                      width={70}
                      height={90}
                      className="object-cover"
                    />
                    <span>{result.ComicTitle}</span>
                  </div>
                );
              })}
            </div>
          )}
        </form>
      </div>

      {/* Menu Items */}

      <div className="grow">
        <ul className="hidden lg:flex items-center justify-center gap-2 md:gap-8">
          {NavData.map((item, i) => {
            return (
              <li key={i}>
                <Link
                  href={item.link}
                  className="hover:bg-yellow-400  hover:text-slate-900  p-2 py-3 rounded-md"
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Button for opening mobile menu */}

      <div className="flex grow items-center justify-end lg:hidden">
        <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text">
          <FaBars className="h-6 w-6" aria-hidden="true" />
          <span className="sr-only">Open Menu</span>
        </Popover.Button>
      </div>

      {/* The Menu */}

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterForm="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition lg:hidden bg-white dark:bg-dark z-20"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50 p-2">
            <div className="flex items-center justify-between">
              <h1 className="px-4 font-bold mb-[-15px] cursor-pointer">
                <Link href="/home">Disaster Scans</Link>
              </h1>
              <div className="-mr-2">
                {/* Button for closing the menu */}

                <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close Menu</span>
                  <FaTimes className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>

            {/* Mobile nav links */}

            <div className="mt-6">
              <nav className="grid gap-y-8 mt-6">
                {NavData.map((item, i) => {
                  return (
                    <Link
                      key={i}
                      className="px-4 focus:outline-none focus:ring-inset"
                      href={item.link}
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Sign in and register links */}

            <div className="mt-6 flex flex-col item-center gap-2">
              <Link
                href="/log-in"
                className="rounded-md mt-2 px-4 py-2 text-sm font-medium text-block md:text-xl w-full border-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-grey-500"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                className="rounded-md bg-gray-500 px-4 py-2 text-sm font-medium text-block md:text-xl w-full border-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-grey-500 mb-[10px]"
              >
                Register
              </Link>
            </div>

            {/* The Theme toggle for mobile menu */}

            <ThemeToggle />
          </div>
        </Popover.Panel>
      </Transition>

      {/* User Links */}

      <div className="hidden lg:flex items-center gap-x-5">
        {loggedIn ? (
          <UserDropdown userName={userName} />
        ) : (
          <Link href="/log-in" className="mr-2 font-bold">
            Log in
          </Link>
        )}
        <ThemeToggle classes={"hidden lg:flex"} />
      </div>
    </Popover>
  );
};

export default Navbar;
