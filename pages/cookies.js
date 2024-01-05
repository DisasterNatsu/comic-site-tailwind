import Layout from "@/layout/layout";
import { NextSeo } from "next-seo";
import Link from "next/link";
import React from "react";

const Cookies = () => {
  return (
    <>
      <NextSeo
        title="Disaster Scans - Cookie"
        titleTemplate="Disaster Scans - Cookie"
        description="https://disasterscans.com's Cookie Policy decleration"
        canonical="https://disasterscans.com/cookie"
        openGraph={{
          url: "https://disasterscans.com/cookie",
          title: "Disaster Scans - Cookie",
          description: "disasterscans.com Cookie Policy decleration",
          images: [
            {
              url: "https://f005.backblazeb2.com/file/dScans/logo.png",
            },
          ],
        }}
      />
      <Layout>
        <h1 className="text-5xl font-semibold border-b-2 border-dotted border-dark dark:border-white mb-3 text-center my-4">
          Cookie Policy for Disaster Scans
        </h1>

        <p className="md:text-left text-center">
          This is the Cookie Policy for Disaster Scans, accessible from{" "}
          <Link
            className="cursor-pointer dark:text-white text-slate-900 hover:text-red-500 dark:hover:text-yellow-400 font-semibold"
            href="/home"
          >
            https://disasterscans.com
          </Link>
        </p>

        <h1 className="text-3xl font-semibold border-b-2 border-dotted border-dark dark:border-white my-3 md:text-left text-center">
          What Are Cookies
        </h1>

        <p className="md:text-left text-center">
          As is common practice with almost all professional websites this site
          uses cookies, which are tiny files that are downloaded to your
          computer, to improve your experience. This page describes what
          information they gather, how we use it and why we sometimes need to
          store these cookies. We will also share how you can prevent these
          cookies from being stored however this may downgrade or
          &lsquo;break&lsquo; certain elements of the sites functionality.
        </p>

        <h1 className="text-3xl font-semibold border-b-2 border-dotted border-dark dark:border-white my-3 md:text-left text-center">
          How We Use Cookies
        </h1>

        <p className="md:text-left text-center">
          We use cookies for a variety of reasons detailed below. Unfortunately
          in most cases there are no industry standard options for disabling
          cookies without completely disabling the functionality and features
          they add to this site. It is recommended that you leave on all cookies
          if you are not sure whether you need them or not in case they are used
          to provide a service that you use.
        </p>

        <h1 className="text-3xl font-semibold border-b-2 border-dotted border-dark dark:border-white my-3 md:text-left text-center">
          Disabling Cookies
        </h1>

        <p className="md:text-left text-center">
          You can prevent the setting of cookies by adjusting the settings on
          your browser{" "}
          <span className="font-semibold">
            (see your browser Help for how to do this)
          </span>
          . Be aware that disabling cookies will affect the functionality of
          this and many other websites that you visit. Disabling cookies will
          usually result in also disabling certain functionality and features of
          the this site. Therefore it is recommended that you do not disable
          cookies.
        </p>
        <h1 className="text-3xl font-semibold border-b-2 border-dotted border-dark dark:border-white my-3 md:text-left text-center">
          The Cookies We Set
        </h1>

        <ul className="md:px-10 sm:px-5 list-none">
          <li>
            <p className="md:text-left text-center my-3 font-semibold">
              Login related cookies
            </p>
            <p className="md:text-left text-center">
              We use cookies when you are logged in so that we can remember this
              fact. This prevents you from having to log in every single time
              you visit a new page. These cookies are typically removed or
              cleared when you log out to ensure that you can only access
              restricted features and areas when logged in.
            </p>
          </li>
        </ul>

        <h1 className="text-3xl font-semibold border-b-2 border-dotted border-dark dark:border-white my-3 md:text-left text-center">
          Third Party Cookies
        </h1>

        <p className="md:text-left text-center">
          In some special cases we also use cookies provided by trusted third
          parties. The following section details which third party cookies you
          might encounter through this site.
        </p>

        <ul className="md:px-10 sm:px-5 list-disc">
          <li className="my-2">
            <p>
              This site uses Google Analytics which is one of the most
              widespread and trusted analytics solution on the web for helping
              us to understand how you use the site and ways that we can improve
              your experience. These cookies may track things such as how long
              you spend on the site and the pages that you visit so we can
              continue to produce engaging content.
            </p>
            <p className="my-1">
              For more information on Google Analytics cookies, see the official
              Google Analytics page.
            </p>
          </li>

          <li className="my-2">
            <p>
              The Google AdSense service we use to serve advertising uses a
              DoubleClick cookie to serve more relevant ads across the web and
              limit the number of times that a given ad is shown to you.
            </p>
            <p className="my-1">
              For more information on Google AdSense see the official Google
              AdSense privacy FAQ.
            </p>
          </li>

          <li className="my-2">
            <p>
              We use adverts to offset the costs of running this site and
              provide funding for further development. The behavioural
              advertising cookies used by this site are designed to ensure that
              we provide you with the most relevant adverts where possible by
              anonymously tracking your interests and presenting similar things
              that may be of interest.
            </p>
          </li>
        </ul>

        <h1 className="text-3xl font-semibold border-b-2 border-dotted border-dark dark:border-white my-3 md:text-left text-center">
          More Information
        </h1>

        <p className="md:text-left text-center">
          Hopefully that has clarified things for you and as was previously
          mentioned if there is something that you aren&apos;t sure whether you
          need or not it&apos;s usually safer to leave cookies enabled in case
          it does interact with one of the features you use on our site.
        </p>

        <p className="md:text-left text-center my-2">
          For more general information on cookies, please read{" "}
          <a href="https://www.cookiepolicygenerator.com/sample-cookies-policy/">
            the Cookies Policy article
          </a>
          .
        </p>

        <p className="md:text-left text-center my-2">
          However if you are still looking for more information then you can
          contact us through one of our preferred contact methods:
        </p>

        <p className="md:text-left text-center my-2 mb">
          Email:{" "}
          <a
            href="mailto:martialscans@gmail.com"
            className="font-semibold hover:text-red-500 dark:hover:text-yellow-400"
          >
            martialscans@gmail.com
          </a>
        </p>
      </Layout>
    </>
  );
};

export default Cookies;
