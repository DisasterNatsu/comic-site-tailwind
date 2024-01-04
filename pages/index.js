import { useEffect } from "react";
import { useRouter } from "next/router";

export default function () {
  // Defining Router

  const Router = useRouter();

  useEffect(() => {
    Router.push("/home");
  }, []);

  return;
}
