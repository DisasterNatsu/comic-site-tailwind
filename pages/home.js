import { useState } from "react";
import Cards from "@/components/cards";
import Caurasel from "@/components/caurasel";
import Layout from "@/layout/layout";
import { Axios } from "@/utils/AxiosConfig";
import { NextSeo } from "next-seo";

const Home = ({ comics }) => {
  // Setting the state for the latest eight comics

  const [topEight] = useState(comics);

  return (
    <>
      <NextSeo
        title="Disaster Scans - Home"
        titleTemplate="Disaster Scans - Home"
        description="https://disasterscans.com's home page"
        canonical="https://disasterscans.com/home"
        openGraph={{
          url: "https://disasterscans.com/home",
          title: "Disaster Scans - Home",
          description: "disasterscans.com home page",
          images: [
            {
              url: "https://f005.backblazeb2.com/file/dScans/logo.png",
            },
          ],
        }}
      />
      <main>
        <Layout>
          <Caurasel />
          <div className="flex gap-2 p-4 flex-wrap flex-row justify-between">
            <div className="lg:w-[67%] w-full">
              <h1 className="text-3xl font-bold dark:text-white md:text-left text-center mb-5">
                Comics
              </h1>
              {/* Mapping of Card Components */}
              <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 gap-x-4 mb-10 gap-y-9">
                {topEight.map((item) => {
                  return <Cards key={item.id} comic={item} />;
                })}
              </div>
            </div>
            <div className="lg:w-[32%] w-full">
              <iframe
                src="https://discord.com/widget?id=645192363123277846&theme=dark"
                className="w-full h-[500px]"
                allowtransparency="true"
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              ></iframe>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export const getServerSideProps = async () => {
  const res = await Axios.get("/comics/all/comics");
  const comics = res.data;

  return { props: { comics } };
};

export default Home;
