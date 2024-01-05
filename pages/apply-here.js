import React from "react";
import Layout from "@/layout/layout";
import { NextSeo } from "next-seo";

const Contacts = () => {
  return (
    <>
      <NextSeo
        title="Disaster Scans - Apply Here"
        titleTemplate="Disaster Scans - Apply Here"
        description="https://disasterscans.com's join us page"
        canonical="https://disasterscans.com/apply-here"
        openGraph={{
          url: "https://disasterscans.com/apply-here",
          title: "Disaster Scans - Apply Here",
          description: "disasterscans.com join us page",
          images: [
            {
              url: "https://f005.backblazeb2.com/file/dScans/logo.png",
            },
          ],
        }}
      />
      <Layout>
        <div className="sm:px-4 dark:text-white mt-16">
          <h1 className="text-4xl font-semibold text-center">
            We$aposll be glad to have you here!
          </h1>
          <p className="text-xl text-center border-b-2 border-black dark:border-white border-dotted">
            We are glad to know that you want to work with us
          </p>
        </div>
        <section className="my-6">
          <form>
            <div className="md:w-[70%] mx-auto sm:flex gap-4 w-full block">
              <div className="w-full">
                <label htmlFor="name" className="dark:text-white font-semibold">
                  Name or Alias:
                </label>
                <input
                  name="name"
                  type="text"
                  className="focus:outline-none w-full h-10 rounded-md px-2 mt-2 md:mb-0 mb-3"
                  id="name"
                  placeholder="Enter your name or Alias"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="dark:text-white font-semibold"
                >
                  Email:
                </label>
                <input
                  name="email"
                  type="email"
                  className="focus:outline-none w-full h-10 rounded-md px-2 my-2"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            <div className="md:w-[70%] mx-auto sm:flex gap-4 w-full block my-3">
              <div className="w-full">
                <label htmlFor="name" className="dark:text-white font-semibold">
                  The role you want to work for:
                </label>
                <select
                  name="role"
                  id="role-dropdown"
                  className="w-full focus:outline-none h-10 rounded-md px-2 my-2"
                  defaultValue={"DEFAULT"}
                  required
                >
                  <option value="DEFAULT" disabled>
                    Select the role you want to apply for
                  </option>
                  <option value="translator">Translator</option>
                  <option value="cleaner">Cleaner</option>
                  <option value="re-drawer">Re-drawer</option>
                  <option value="quality-checker">Quality Checker</option>
                </select>
              </div>
              <div className="w-full">
                <label
                  htmlFor="hours-available"
                  className="dark:text-white font-semibold"
                >
                  Time can you spare in a week:
                </label>
                <input
                  name="time"
                  type="number"
                  className="focus:outline-none w-full h-10 rounded-md px-2 my-2"
                  id="hours-available"
                  placeholder="Please enter how much time you can spare a day?"
                  required
                />
              </div>
            </div>
            <div className="md:w-[70%] mx-auto flex gap-4 w-full mt-5 justify-start">
              <input
                name="consent"
                type="checkbox"
                className="self-center items-center"
                required
              />
              <p className="text-md dark:text-white">
                By clicking this button you are agreeing to the fact that this
                is a voluntary work and you agree to share your email and name
                (optional) with us.
              </p>
            </div>
            <div className="flex justify-center">
              <input
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-md md:w-80 cursor-pointer text-white font-semibold w-full mt-3"
              />
            </div>
          </form>
        </section>
      </Layout>
    </>
  );
};

export default Contacts;
