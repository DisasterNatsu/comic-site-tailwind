import Cards from "@/components/cards";
import Caurasel from "@/components/caurasel";
import Layout from "@/layout/layout";
import { Axios } from "@/utils/AxiosConfig";
import { NextSeo } from "next-seo";
import React, { useState } from "react";

const Comics = ({ comics }) => {
  const [topEight] = useState(comics);

  return (
    <>
      <NextSeo
        title="Disaster Scans - Comics"
        titleTemplate="Disaster Scans - Comics"
        description="https://disasterscans.com's comic archive page"
        canonical="https://disasterscans.com/comics"
        openGraph={{
          url: "https://disasterscans.com/comics",
          title: "Disaster Scans - Comics",
          description: "disasterscans.com comic archive page",
          images: [
            {
              url: "https://f005.backblazeb2.com/file/dScans/logo.png",
            },
          ],
        }}
      />
      <Layout>
        <Caurasel />
        <div className="flex gap-2 p-4 flex-wrap flex-row justify-between">
          <div className="w-full">
            <h1 className="text-3xl font-bold dark:text-white md:text-left text-center mb-5">
              Comics
            </h1>
            {/* Mapping of Card Components */}
            <div className="w-full grid lg:grid-cols-5 md:grid-cols-3 xs:grid-cols-2 gap-x-4 mb-10 gap-y-9">
              {topEight.map((item) => {
                return <Cards key={item.id} comic={item} />;
              })}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export const getServerSideProps = async () => {
  const res = await Axios.get("/comics/all/comics");
  const comics = res.data;

  return { props: { comics } };
};

export default Comics;
