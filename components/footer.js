import Link from "next/link";
import React from "react";
import { FaYoutube, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="dark:text-white">
      <div className="my-0 border-t-2 flex flex-col justify-around items-start p-20 md:flex-row dark:border-white border-black">
        <div className="p-5 ">
          <ul>
            <p className="font-bold text-3xl pb-6">
              Disaster <span className="text-yellow-500">Scans</span>
            </p>
            <div className="flex gap-6 pb-5">
              {/* Section for Icons */}
              <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
              <FaTwitter className="text-2xl cursor-pointer hover:text-blue-500" />
              <FaFacebook className="text-2xl cursor-pointer hover:text-blue-600" />
              <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
            </div>
          </ul>
        </div>

        {/* Contact Us Section */}

        <div className="p-5">
          <ul>
            <p className="font-bold text-2xl pb-4">Contact Us</p>
            <li className="text-md pb-2 font-semibold hover:text-red-600 dark:hover:text-yellow-600 cursor-pointer">
              <a href="https://discord.gg/disaster-scans" target="_blank">
                Discord
              </a>
            </li>
            <li className="text-md pb-2 font-semibold hover:text-red-600 dark:hover:text-yellow-600 cursor-pointer">
              <Link href="mailto:martialscans@gmail.com">Email</Link>
            </li>
            <li className="text-md pb-2 font-semibold hover:text-red-600 dark:hover:text-yellow-600 cursor-pointer">
              <Link href="/contact">Fill out this form</Link>
            </li>
          </ul>
        </div>

        {/* Support Us Section */}

        <div className="p-5">
          <ul>
            <p className="font-bold text-2xl pb-4">Support Us</p>
            <li className="text-md pb-2 font-semibold hover:text-red-600 dark:hover:text-yellow-600 cursor-pointer">
              <a
                href="https://www.paypal.com/paypalme/disasterScans"
                target="_blank"
              >
                Paypal
              </a>
            </li>
            <li className="text-md pb-2 font-semibold hover:text-red-600 dark:hover:text-yellow-600 cursor-pointer">
              <a href="https://www.patreon.com/martialscans" target="_blank">
                Patreon
              </a>
            </li>
            <li className="text-md pb-2 font-semibold hover:text-red-600 dark:hover:text-yellow-600 cursor-pointer">
              <a href="https://ko-fi.com/martialscans" target="_blkank">
                Ko-Fi
              </a>
            </li>
          </ul>
        </div>

        {/* Work With us Section */}

        <div className="p-5">
          <ul>
            <p className="font-bold text-2xl pb-4">Work With Us!</p>
            <li className="text-md pb-2 font-semibold hover:text-red-600 dark:hover:text-yellow-600 cursor-pointer">
              <Link href="/apply-here">Apply Here</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Credits Section */}

      <div className="flex flex-col justify-center items-center text-center p-5">
        <h1 className="font-semibold">
          © 2023-2024 All rights reserved | Built with 💖 by{" "}
          <span className="hover:text-red-600 dark:hover:text-yellow-600 font-semibold cursor-pointer">
            Shilajit
          </span>
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
