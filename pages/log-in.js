import React, { useState } from "react";
import ThemeToggle from "@/components/themeToggle";
import { Axios } from "@/utils/AxiosConfig";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const LogIn = () => {
  // Defining states

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Referance to the useRouter hook from next/router

  const Router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Error handling

    if (!email || !password) {
      return setError("Both email and password is required!");
    } else if (password.length <= 5) {
      return setError("Password must have over five characters!");
    }

    // Data that will be sent to the backend to process

    const data = {
      email: email,
      password: password,
    };

    // Try catch block

    try {
      const logInRequest = await Axios.post("/user/log-in", data); // Sending the data to api

      const response = await logInRequest.data;

      Cookies.set("ds-token", response.authToken);

      setSuccess(true);

      return Router.replace("/home");
    } catch (error) {
      console.log(error); // Setting the error message recieved to the error message
    }
  };

  return (
    <div className="h-screen flex justify-center items-center ">
      <div className="relative flex flex-col m-6 space-y-8 shadow-2xl rounded-2xl md:flex-row md:space-y-0 dark:bg-gradient-to-r dark:from-orange-100 dark:to-orange-50  bg-gradient-to-r from-gray-900 to-gray-950">
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold text-white dark:text-black">
            Welcome Back
          </span>
          <span className="font-light text-white dark:text-gray-400 mb-8">
            Welcome back! Please enter your details
          </span>

          {/* Form Start */}

          <form onSubmit={handleSubmit}>
            {/* Email Input with label */}

            <div className="py-4">
              <label
                htmlFor="email"
                className="mb-2 text-md text-white dark:text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                className="w-full p-2 border border-gray-200 rounded-md placeholder:font-light placeholder:text-gray-500 text-black"
                id="email"
                name="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password Input with label */}

            <div className="py-4">
              <label
                htmlFor="password"
                className="mb-2 text-md dark:text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full p-2 border border-gray-200 rounded-md placeholder:font-light placeholder:text-gray-500 text-black"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Remember Checkbox and Forgot Section */}

            <div className="flex justify-between w-full py-4">
              <div className="mr-24">
                <input
                  type="checkbox"
                  name="remberMe"
                  id="rememberMe"
                  className="mr-2 cursor-pointer"
                />
                <label
                  htmlFor="rememberMe"
                  className="text-md cursor-pointer text-white dark:text-black"
                >
                  Remember for 30 days
                </label>
              </div>
              <a
                className="font-bold text-md hover:text-yellow-400 dark:hover:text-yellow-400 cursor-pointer text-white dark:text-black"
                href="#"
              >
                Forgot password?
              </a>
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

          {/* Sign Up Page */}

          <div className="text-center dark:text-gray-400 text-white">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="font-bold text-white dark:text-black cursor-pointer hover:text-yellow-400 dark:hover:text-yellow-400"
            >
              Sign up here
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

export default LogIn;
