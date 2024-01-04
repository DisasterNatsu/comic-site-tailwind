import React from "react";
import { usePathname } from "next/navigation";

const ChapterList = ({ chapters }) => {
  const pathname = usePathname();

  return (
    <>
      {chapters.map((chapter, index) => {
        const url =
          pathname +
          "/" +
          chapter.chapterID +
          "-chapter-" +
          chapter.chapterNumber;

        return (
          <div key={chapter.chapterID}>
            <a
              href={url}
              className={`font-semibold whitespace-nowrap overflow-hidden cursor-pointer hover:text-red-600 dark:hover:text-yellow-400 flex justify-between visited:text-neutral-600  ${
                index === chapters.length - 1
                  ? ""
                  : "border-b-2 border-dotted visited:border-neutral-600 hover:border-white"
              }`}
            >
              <h1 className="py-2">
                <span>
                  {chapter.chapterNumber}
                  {chapter.ChapterName && ` : ${chapter.ChapterName}`}
                </span>
              </h1>
            </a>
          </div>
        );
      })}
    </>
  );
};

export default ChapterList;
