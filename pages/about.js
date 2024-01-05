import Layout from "@/layout/layout";
import { NextSeo } from "next-seo";
import React from "react";

const About = () => {
  return (
    <>
      <NextSeo
        title="Disaster Scans - About"
        titleTemplate="Disaster Scans - About"
        description="https://disasterscans.com's about page"
        canonical="https://disasterscans.com/about"
        openGraph={{
          url: "https://disasterscans.com/about",
          title: "Disaster Scans - About",
          description: "disasterscans.com about page",
          images: [
            {
              url: "https://f005.backblazeb2.com/file/dScans/logo.png",
            },
          ],
        }}
      />
      <Layout>
        <div className="p-4 dark:text-white">
          <section>
            <h2 className="text-4xl font-semibold border-b-2 border-dotted border-dark dark:border-white mb-3 md:text-left text-center">
              Our Origin
            </h2>
            <p className="md:text-left text-center">
              The Disaster Scans started first as an Youtube channel, with the
              first ever series Natsu, the former group leader picked up is
              Apotheosis and with support of our readers and with Natsu&apos;s
              love for manhua we picked up more serieses. However, finally The
              Disaster Scans moved away from YouTube.
            </p>
          </section>
          <hr className="my-3" />
          <section>
            <h2 className="text-4xl font-semibold border-b-2 border-dotted border-dark dark:border-white mb-3 md:text-left text-center">
              The Journey
            </h2>
            <p className="md:text-left text-center">
              The domain{" "}
              <span className="cursor-pointer">disasterscans.com</span> along
              with hosting was first purchased by a reader named KMA, and now he
              is a key member of this group. Along the way we suffered many
              hardships and through all the trials and tribulations we still
              survived with the support of our readers and hopefully, we will
              continue to provide quality releases for our readers.
            </p>
            <p className="md:text-left text-center mt-4">
              Thank you for supporting us... we couldn&apos;t have been able to
              do it without the support from all our readers.
            </p>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default About;
