import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CookieConsent from "@/components/cookieConsent";
import Script from "next/script";

const Layout = ({ children }) => {
  return (
    <>
      <Script
        async="async"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2651302773019896"
        crossOrigin="anonymous"
      />
      <Navbar />
      {children}
      <CookieConsent />
      <Footer />
    </>
  );
};

export default Layout;
