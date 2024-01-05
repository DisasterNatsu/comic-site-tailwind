import Caurasel from "@/components/caurasel";
import ChapterNavButton from "@/components/chapterNavigationButtons";
import Disqus from "@/components/disqus";
import Layout from "@/layout/layout";
import { Axios } from "@/utils/AxiosConfig";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import React from "react";

const Chapter = ({ chapter, chapterAll }) => {
  // Chapter Images

  const images = JSON.parse(chapter.pages);

  const comicNameLink = chapter.ComicTitle.toLowerCase().split(" ").join("-");

  const ogUrl = `https://diasterscans.com/comics/${chapter.comicID}-${comicNameLink}/${chapter.chapterID}-chapter-${chapter.ChapterNumber}`;

  // get useRouter from next/router

  const Router = useRouter();

  // disqus codes

  const stringId = Router.query.chapter.split("-");
  const intId = JSON.parse(stringId[0]);
  const name = stringId.splice(1, stringId.length - 1).join(" ");
  const configUrl = `http://localhost:3000/${Router.query.comicName}/${Router.query.chapter}`;

  return (
    <>
      <NextSeo
        title={`DS - ${chapter.ComicTitle} - ${chapter.ChapterNumber}`}
        titleTemplate={`DS - ${chapter.ComicTitle} - ${chapter.ChapterNumber}`}
        description={`Read ${chapter.ComicTitle}'s Chapter ${chapter.ChapterNumber} in english on Disaster Scans`}
        canonical={ogUrl}
        openGraph={{
          url: ogUrl,
          title: `DS - ${chapter.ComicTitle} - ${chapter.ChapterNumber}`,
          description: `Read ${chapter.ComicTitle}'s Chapter ${chapter.ChapterNumber} in english on Disaster Scans`,
          images: [
            {
              url: `https://f005.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=${chapter.CoverImage}`,
            },
          ],
        }}
      />
      <Layout>
        <Caurasel />
        <section className="text-center font-semibold my-8">
          <h1 className="md:text-3xl">{chapter.ComicTitle}</h1>
          <p className="md:text-2xl mt-2">
            Chapter {chapter.ChapterNumber}
            <span> - {chapter.ChapterName && chapter.ChapterName}</span>
          </p>
        </section>

        {/* Navigation buttons for navigating through the chapters */}

        <section className="w-full h-full">
          <ChapterNavButton chapter={chapter} allChapters={chapterAll} />
        </section>

        {/* Maping through images */}

        <section className="w-full h-full">
          {images.map((image, index) => {
            return (
              <img
                src={`https://f005.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=${image}`}
                alt={`The ${index + 1} page of ${
                  chapter.ComicTitle
                } comic chapter ${chapter.ChapterNumber}`}
                key={index}
                className="w-full lg:px-40 md:px-24"
                loading="lazy"
              />
            );
          })}
        </section>

        {/* Navigation buttons for navigating through the chapters */}

        <section className="w-full h-full my-10">
          <ChapterNavButton chapter={chapter} allChapters={chapterAll} />
        </section>
        <div className="mt-20 border-t-2 pt-10 border-dotted border-black dark:border-white">
          <Disqus identifier={intId} title={name} query={configUrl} />
        </div>
      </Layout>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const ChapterData = await Axios.get(
    `/chapters/${context.params.comicName}/${context.params.chapter}`
  );

  const allChapters = await Axios.get(`/chapters/${context.params.comicName}`);

  const chapter = await ChapterData.data;
  const chapterAll = await allChapters.data;

  if (!chapter.pages) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      chapter,
      chapterAll,
    },
  };
};

export default Chapter;
