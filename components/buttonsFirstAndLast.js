import React from "react";
import { usePathname } from "next/navigation";

const FirstAndLast = ({ firstChapters, lastChapter }) => {
  const pathname = usePathname(); // get the pathname from next/navigation

  // the first chapter's link

  const firstChapterLink =
    pathname +
    "/" +
    firstChapters.chapterID +
    "-chapter-" +
    firstChapters.chapterNumber;

  // the last chapter's link

  const lastChapterLink =
    pathname +
    "/" +
    lastChapter.chapterID +
    "-chapter-" +
    lastChapter.chapterNumber;

  return (
    <div className="flex px-2 gap-x-4">
      <a
        className="px-4 py-2 bg-slate-500 rounded-md text-white hover:bg-slate-900 hover:text-white shadow-sm cursor-pointer"
        href={firstChapterLink}
      >
        Read First
      </a>
      <a
        className="px-4 py-2 bg-slate-500 rounded-md text-white hover:bg-slate-900 hover:text-white shadow-sm cursor-pointer"
        href={lastChapterLink}
      >
        Read Last
      </a>
    </div>
  );
};

export default FirstAndLast;
