import ReactGA from "react-ga";

export const initGA = () => {
  ReactGA.initialize("G-D65XV6PBXZ");
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
