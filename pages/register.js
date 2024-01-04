import ThemeToggle from "@/components/themeToggle";
import { Axios } from "@/utils/AxiosConfig";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Register = () => {
  // Calling the useRouter hook from next/router

  const Router = useRouter();

  // Define initial States

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    // Preventing default reloading
    e.preventDefault();

    // Error preventing

    if (!email || !userName || !password || !passwordCheck) {
      return setError("Required details are not provided!");
    } else if (password !== passwordCheck) {
      return setError("Passwords didn't match");
    } else if (password >= 5) {
      return setError("Password must be over 5 characters");
    }

    // Data that will be sent to api for further processing

    const data = {
      userName: userName,
      email: email,
      password: password,
      passwordCheck: passwordCheck,
    };

    // try catch block

    try {
      const newAccountReq = await Axios.post("/user/register", data); // Sending the request through api

      const response = await newAccountReq.data;

      Router.replace("/log-in");
    } catch (error) {
      if (error.data.message) return setError(error.data.message);
      return console.log(error);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center ">
      <div className="relative flex flex-col m-6 space-y-8 shadow-2xl rounded-2xl md:flex-row md:space-y-0 dark:bg-gradient-to-r dark:from-orange-100 dark:to-orange-50  bg-gradient-to-r from-gray-900 to-gray-950">
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold text-white dark:text-black">
            Welcome
          </span>
          <span className="font-light text-white dark:text-gray-400 mb-8">
            Welcome! Please enter your details
          </span>

          {/* Form Start */}

          <form onSubmit={handleSubmit}>
            {/* Username input with label */}

            <div className="py-2">
              <label
                htmlFor="text"
                className="mb-2 text-md text-white dark:text-gray-600"
              >
                User Name
              </label>
              <input
                type="userName"
                className="w-full p-2 border border-gray-200 rounded-md placeholder:font-light placeholder:text-gray-500"
                id="userName"
                name="userName"
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>

            {/* Email Input with label */}

            <div className="py-2">
              <label
                htmlFor="email"
                className="mb-2 text-md text-white dark:text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                className="w-full p-2 border border-gray-200 rounded-md placeholder:font-light placeholder:text-gray-500"
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password Input with label */}

            <div className="py-2">
              <label
                htmlFor="password"
                className="mb-2 text-md text-white dark:text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full p-2 border border-gray-200 rounded-md placeholder:font-light placeholder:text-gray-500"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Confirm password */}

            <div className="py-2">
              <label
                htmlFor="confirmPassword"
                className="mb-2 text-md text-white dark:text-gray-600"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="w-full p-2 border border-gray-200 rounded-md placeholder:font-light placeholder:text-gray-500"
                onChange={(e) => setPasswordCheck(e.target.value)}
                required
              />
            </div>

            {/* Remember Checkbox and Forgot Section Hidden*/}

            <div className="flex justify-between w-full bg-transparent text-transparent">
              <div className="mr-24">
                <p htmlFor="rememberMe" className="text-md cursor-default">
                  Remember for 30 days
                </p>
              </div>
              <p className="font-bold text-md cursor-default" href="#">
                Forgot password?
              </p>
            </div>

            {/* Input button */}

            <input
              type="submit"
              className="px-6 py-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-lg cursor-pointer text-white font-semibold w-full mt-3 mb-6"
            />
          </form>

          <button className="w-full border dark:border-gray-300 text-md p-2 rounded-lg mb-6 dark:text-black text-white hover:bg-black dark:hover:text-white">
            <Image
              src="/google.svg"
              alt="Google Icon"
              className="inline mr-2"
              width={24}
              height={24}
            />
            Sign in with Google
          </button>

          {/* Sign in Part */}

          <div className="text-center dark:text-gray-400 text-white">
            Already have an account?{" "}
            <Link
              href="/log-in"
              className="font-bold text-white dark:text-black cursor-pointer hover:text-yellow-400 dark:hover:text-yellow-400"
            >
              Log in here
            </Link>
          </div>
        </div>

        {/* Right side image section */}

        <div className="relative">
          <img
            src="/mpLoginCover.webp"
            alt="Cover Image for log in page"
            className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
          />

          {/* Text on image */}

          <div className="absolute hidden bottom-10 right-0 p-6 bg-slate-700 bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block w-full text-center">
            <span className="text-white text-xl font-semibold">
              Welcome to Heaven!
            </span>
          </div>
        </div>

        {/* The Theme Toggle */}

        <div className="absolute bottom-4 md:left-[-40%] left-0 right-0 mr-auto ml-auto w-16">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Register;
