import React, { useState } from "react";
import Layout from "@/layout/layout";
import { Axios } from "@/utils/AxiosConfig";
import CommicDescription from "@/components/comicDescription";
import ComicCredits from "@/components/comicCredits";
import FirstAndLast from "@/components/buttonsFirstAndLast";
import PaginationButtons from "@/components/paginationButtons";
import ChapterList from "@/components/chapterList";
import { NextSeo } from "next-seo";

const ComicDetails = (props) => {
  // Defining Router

  const comic = props.comic;
  const chapters = props.chapters;

  // state

  const [currentPage, setCurrentPage] = useState(1);

  if (chapters.length <= 0) {
    return (
      <div>
        <h1>Still no chapters for this comic</h1>
      </div>
    );
  }

  // Pagination Logic

  const chaptersPerPage = 30;
  const totalPages = Math.ceil(chapters.length / chaptersPerPage); // Total number of pages
  const indexOfLastChapter = currentPage * chaptersPerPage;
  const indexOfFirstChapter = indexOfLastChapter - chaptersPerPage;

  // Current chapters that are being rendered from the main array of chapters

  const currentChapters = chapters.slice(
    indexOfFirstChapter,
    indexOfLastChapter
  );

  const comicName = comic.ComicTitle.toLowerCase().split(" ").join("-"); // for open graph url

  return (
    <>
      <NextSeo
        title={`DS - ${comic.ComicTitle}`}
        titleTemplate={`DS - ${comic.ComicTitle}`}
        description={comic.Description}
        canonical={`https://disasterscans.com/comics/${comic.id}-${comicName}`}
        openGraph={{
          url: `https://disasterscans.com/comics/${comic.id}-${comicName}`,
          title: `DS - ${comic.ComicTitle}`,
          description: comic.Description,
          images: [
            {
              url: `https://f005.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=${comic.CoverImage}`,
            },
          ],
        }}
      />
      <Layout>
        <div className="w-full shadow-lg my-4 dark:shadow-white dark:shadow-md dark:text-white rounded-md px-2">
          <div className="flex w-full h-full flex-col justify-center items-center md:flex-row md:items-start gap-y-2 p-4">
            {/* Cover Image */}
            <div className="flex flex-col justify-center items-center gap-y-2">
              <img
                src={`https://f005.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=${comic.CoverImage}`}
                alt={`Cover Image of <Comic Name>`}
                className="w-full sm:w-[300px] md:w-[400px] object-cover rounded-lg mr-2"
              />
              <h1 className="text-2xl font-semibold">{comic.ComicTitle}</h1>
            </div>

            {/* Larger Screen Size's Description */}

            <div className="w-full hidden md:flex flex-col gap-y-3">
              <CommicDescription desc={comic.Description} />
              <FirstAndLast
                firstChapters={chapters[chapters.length - 1]}
                lastChapter={chapters[0]}
              />
            </div>

            {/* Mobile's Description and Credits */}

            <div className="w-full md:hidden">
              <ComicCredits />
              <CommicDescription desc={comic.Description} />
            </div>
          </div>
        </div>

        {/* Chapter and Comic Credit Section for display with higher resolution */}

        <div className="w-full dark:text-white flex flex-row gap-3 justify-between">
          {/* Chapters Section */}

          <div className="shadow-lg my-4 dark:shadow-white dark:shadow-md rounded-md px-6 py-6 md:w-[67%] w-full flex flex-col gap-6">
            {/* Rendering chapters if there are any */}

            {chapters ? (
              <ChapterList chapters={currentChapters} />
            ) : (
              <h1>No Chapters found</h1>
            )}

            {/* Pagination component */}

            {totalPages > 1 && (
              <PaginationButtons
                pages={totalPages}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            )}
          </div>

          {/* Comic Credits (display: hidden for mobile and smaller devices) */}

          <div className="h-full shadow-lg my-4 dark:shadow-white dark:shadow-md rounded-md px-2 md:w-[32%] md:block hidden py-5">
            <ComicCredits
              author={comic.Author}
              totalChapters={chapters.length}
              artist={comic.Artist}
              origin={comic.Origin}
              status={comic.Status}
            />

            {/* Discord iframe */}

            <iframe
              src="https://discord.com/widget?id=645192363123277846&theme=dark"
              className="w-full h-[500px]"
              allowtransparency="true"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            ></iframe>
          </div>
        </div>
      </Layout>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const ComicRes = await Axios.get(`/comics/${context.params.comicName}`);
  const ChapterRes = await Axios.get(`/chapters/${context.params.comicName}`);

  const comic = await ComicRes.data;
  const chapters = await ChapterRes.data;

  if (!comic) {
    return {
      notFound: true,
    };
  }
  if (
    (comic && !chapters) ||
    chapters.message === "There are no Chapters for that comic"
  ) {
    return {
      props: {
        comic,
      },
    };
  }
  return {
    props: {
      comic,
      chapters,
    },
  };
};

export default ComicDetails;
