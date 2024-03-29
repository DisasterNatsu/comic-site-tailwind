import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/logo.ico" sizes="any" />
      </Head>
      <body className="h-full">
        <div className="container mx-auto dark:text-white">
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  );
}
