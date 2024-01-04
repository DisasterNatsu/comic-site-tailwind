import { useRouter } from "next/router";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { BiSolidFoodMenu } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { useOnKeyPress } from "@/hooks/useOnKeyPress";
import Link from "next/link";

const ChapterNavButton = ({ chapter, allChapters }) => {
  const Router = useRouter(); // Defining router

  const currentLink = Router.asPath.split("/"); // Splitting the

  const chapterListLink = `/comics/${currentLink[currentLink.length - 2]}`; // Link pointing to that comic's chapter list

  //   Finding the index of the current chapter being shown

  const innerIndex = allChapters.findIndex(
    (x) => x.chapterID == chapter.chapterID
  );

  //   Function to navigate to previous chapter

  const handlePrevButton = () => {
    if (innerIndex === allChapters.length - 1) return;

    const prevChapterId = allChapters[innerIndex + 1].chapterID;
    const prevChapterNumber = allChapters[innerIndex + 1].chapterNumber;
    const comicPartName = Router.query.comicName; // Getting the Comic Title from query using next router
    const link = `/comics/${comicPartName}/${prevChapterId}-chapter-${prevChapterNumber}`; // Next chapter's link

    return Router.push(link);
  };

  //   Function to navigate to next chapter

  const handleNextButton = () => {
    if (innerIndex === 0) return;

    const nextChapterId = allChapters[innerIndex - 1].chapterID;
    const nextChapterNumber = allChapters[innerIndex - 1].chapterNumber;
    const comicPartName = Router.query.comicName; // Getting the Comic Title from query using next router
    const link = `/comics/${comicPartName}/${nextChapterId}-chapter-${nextChapterNumber}`; // Next chapter's link

    return Router.push(link);
  };

  //   Handing navigation of key press

  useOnKeyPress(handlePrevButton, "ArrowLeft");

  useOnKeyPress(handleNextButton, "ArrowRight");

  return (
    <div className="flex justify-between my-4 lg:px-40 md:px-24 px-2">
      {/* Previous button */}
      <button
        className={
          innerIndex !== allChapters.length - 1
            ? "flex justify-center items-center gap-x-2 hover:text-red-600 dark:hover:text-yellow-400"
            : "flex justify-center items-center gap-x-2 text-transparent bg-transparent cursor-default"
        }
        disabled={innerIndex !== allChapters.length - 1 ? false : true}
        onClick={handlePrevButton}
      >
        <FaLongArrowAltLeft size={30} />{" "}
        <span className="hidden md:block">Prev</span>
      </button>

      {/* Home and comic chapterList theme */}

      <div className="flex gap-x-2 cursor-pointer justify-center items-center">
        <a
          href={chapterListLink}
          className="hover:text-red-600 dark:hover:text-yellow-400"
        >
          <BiSolidFoodMenu size={20} />
        </a>
        <Link
          href="/"
          className="hover:text-red-600 dark:hover:text-yellow-400"
        >
          <FaHome size={20} />
        </Link>
      </div>

      {/* Next button */}

      <button
        className={
          innerIndex !== 0
            ? "flex justify-center items-center gap-x-2 hover:text-red-600 dark:hover:text-yellow-400"
            : "flex justify-center items-center gap-x-2 text-transparent bg-transparent cursor-default"
        }
        disabled={innerIndex !== 0 ? false : true}
        onClick={handleNextButton}
      >
        <span className="hidden md:block">Next</span>
        <FaLongArrowAltRight size={30} />
      </button>
    </div>
  );
};

export default ChapterNavButton;
