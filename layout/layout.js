import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CookieConsent from "@/components/cookieConsent";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head></Head>
      <Navbar />
      {children}
      <CookieConsent />
      <Footer />
    </>
  );
};

export default Layout;
