import React from "react";

const Cards = ({ comic }) => {
  // Defining the next url

  const newUrl =
    comic.id + "-" + comic.ComicTitle.toLowerCase().split(" ").join("-");

  return (
    <a href={`/comics/${newUrl}`}>
      <div className="w-full text-center hover:scale-105 cursor-pointer xl:h-[350px] mmd:h-[260px] md:h-[350px] xs:h-[400px] h-[390px]  mx-0 rounded-md duration-500 group-hover:z-10">
        <img
          src={`https://f005.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=${comic.CoverImage}`}
          alt={`Cover Image of ${comic.ComicTitle}`}
          className="w-full xl:h-[340px] mmd:h-[250px] md:h-[340px] xs:h-[390px] h-96 object-cover rounded-md"
          loading="lazy"
        />
        <h1 className="dark:text-white font-semibold mmd:text-sm mt-2">
          {comic.ComicTitle}
        </h1>
      </div>
    </a>
  );
};

export default Cards;
