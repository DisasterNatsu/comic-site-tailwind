import Layout from "@/layout/layout";
import { NextSeo } from "next-seo";
import React from "react";

const Contact = () => {
  return (
    <>
      <NextSeo
        title="Disaster Scans - Cotact Us"
        titleTemplate="Disaster Scans - Cotact Us"
        description="https://disasterscans.com's contact us page"
        canonical="https://disasterscans.com/contact"
        openGraph={{
          url: "https://disasterscans.com/contact",
          title: "Disaster Scans - Cotact Us",
          description: "disasterscans.com contact us page",
          images: [
            {
              url: "https://f005.backblazeb2.com/file/dScans/logo.png",
            },
          ],
        }}
      />
      <Layout>
        <div className="dark:text-white flex flex-col w-full md:max-w-2xl mx-auto my-24">
          <h1 className="text-4xl font-semibold text-center">
            What can we help you with?
          </h1>
          <p className="text-xl text-center border-b-2 border-black dark:border-white border-dotted">
            Send us a message and we will get back to you soon
          </p>
          <form className="my-8 flex flex-col gap-4 justify-center px-1">
            <label htmlFor="name" className="font-semibold">
              Name
              <input
                type="text"
                id="name"
                name="name"
                className="focus:outline-none w-full h-10 rounded-md px-2 font-medium mt-1"
                placeholder="Enter your name here"
                required
              />
            </label>

            <label htmlFor="email" className="font-semibold">
              Email
              <input
                type="email"
                id="email"
                name="email"
                className="focus:outline-none w-full h-10 rounded-md px-2 font-medium mt-1"
                placeholder="Enter your email here"
                required
              />
            </label>

            <label htmlFor="message" className="font-semibold">
              Message
              <textarea
                type="text"
                rows="7"
                id="message"
                name="message"
                className="focus:outline-none w-full rounded-md px-2 font-medium mt-1"
                placeholder="Enter your mesage here"
                required
              />
            </label>
            <input
              type="submit"
              className="px-6 py-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-md md:w-80 cursor-pointer text-white font-semibold w-full mx-auto"
            />
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Contact;
