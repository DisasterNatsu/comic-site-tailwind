import React from "react";
import { usePathname } from "next/navigation";
import ReactTimeAgo from "react-time-ago";

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

        const date = Date.parse(chapter.chapterDate);

        return (
          <div key={chapter.chapterID}>
            <a
              href={url}
              className={`font-medium md:font-semibold tracking-tight whitespace-nowrap overflow-hidden cursor-pointer hover:text-red-600 dark:hover:text-yellow-400 flex justify-between visited:text-neutral-600  ${
                index === chapters.length - 1
                  ? ""
                  : "border-b-2 border-dotted visited:border-neutral-600 border-neutral-600 visited:dark:border-neutral-600 dark:border-white"
              }`}
            >
              <h1 className="py-2 w-28 xs:w-48 md:w-72 lg:w-full overflow-hidden whitespace-nowrap text-ellipsis">
                <span>
                  {chapter.chapterNumber}
                  {chapter.ChapterName && ` : ${chapter.ChapterName}`}
                </span>
              </h1>
              <h1 className="py-2">
                <ReactTimeAgo date={date} locale="en-US" />
              </h1>
            </a>
          </div>
        );
      })}
    </>
  );
};

export default ChapterList;
