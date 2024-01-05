import React from "react";

const ComicCredits = ({ author, totalChapters, artist, status, origin }) => {
  return (
    <div className="w-full sm:w-[100px]: flex flex-col gap-y-3 mb-4">
      <div className="flex justify-between px-2">
        <p className="font-medium">Origin:</p>
        <p>{origin}</p>
      </div>
      <div className="flex justify-between px-2">
        <p className="font-medium">Author:</p>
        <p>{author}</p>
      </div>
      <div className="flex justify-between px-2">
        <p className="font-medium">Artist:</p>
        <p>{artist}</p>
      </div>
      <div className="flex justify-between px-2">
        <p className="font-medium">Source Language:</p>
        <p>Chinese</p>
      </div>
      <div className="flex justify-between px-2">
        <p className="font-medium">Source Status:</p>
        <p>{status}</p>
      </div>
      <div className="flex justify-between px-2">
        <p className="font-medium">Release Status:</p>
        <p>{status}</p>
      </div>
      <div className="flex justify-between px-2">
        <p className="font-medium">Total Chapters:</p>
        <p>{totalChapters}</p>
      </div>
    </div>
  );
};

export default ComicCredits;
