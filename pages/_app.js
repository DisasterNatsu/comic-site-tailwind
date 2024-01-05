import "@/styles/globals.css";
import { useEffect } from "react";
import { initGA, logPageView } from "@/libs/analytics";
import { initializeGoogleTagManager } from "@/libs/googleTagManager";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import ru from "javascript-time-ago/locale/ru.json";

const App = ({ Component, pageProps }) => {
  TimeAgo.addLocale(en);
  TimeAgo.addLocale(ru);

  useEffect(() => {
    initGA(); // Initialize google analytics
    logPageView(); // Log the initial page view
    initializeGoogleTagManager("GTM-KQS4S7BM");
  });

  return <Component {...pageProps} />;
};

export default App;
