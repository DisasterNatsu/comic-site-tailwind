import React, { useState } from "react";

const CommicDescription = ({ desc }) => {
  const [showDesc, setShowDesc] = useState(false); // State to show the entire description or not

  return (
    <div className="text-center md:text-left md:px-2 h-full">
      <h1 className="text-lg md:text-3xl font-medium border-b-2 border-dotted border-neutral-600 dark:border-white">
        Description
      </h1>
      <p
        className={`${
          showDesc
            ? ""
            : "h-14 leading-5 overflow-hidden text-ellipsis comic-desc"
        } text-sm mx-auto text-center md:text-left md:text-lg md:h-full`}
      >
        {desc}
      </p>
      <p
        className="cursor-pointer font-medium dark:hover:text-yellow-400 hover:text-red-500 md:hidden"
        onClick={() => setShowDesc(!showDesc)}
      >
        {showDesc ? "show less" : "show more"}
      </p>
    </div>
  );
};

export default CommicDescription;
