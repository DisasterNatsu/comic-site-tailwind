import React from "react";

const Caurasel = () => {
  return (
    <div className="max-w-full px-4 lg:h-[300px] xs:h-[200px] h-[800px] my-10 xs:flex sm:justify-between block">
      <img src="/assets/yang-kai.webp" alt="Yang Kai" className="md:h-full" />
      <div className="my-auto text-center dark:text-white">
        <p className="md:pb-6 pb-2 lg:text-3xl sm:text-lg font-semibold md:block mt-5 xs:hidden">
          Disaster <span className="text-yellow-500">Scans</span>
        </p>
        <p className="lg:text-2xl sm:text-sm xs:pb-4 xxs:text-xs">
          This Site is currently in on Beta Release
        </p>
        <p className="lg:text-lg text-xs">
          Please contact us via{" "}
          <a
            href="https://discord.gg/disaster-scans"
            target="_blank"
            className="underline hover:text-yellow-500"
          >
            Discord
          </a>{" "}
          to report any bug you encounter
        </p>
      </div>
      <img
        src="/assets/su-yan.png"
        alt="Su Yan"
        className="md:h-full transform scale-x-[-1]"
      />
    </div>
  );
};

export default Caurasel;
