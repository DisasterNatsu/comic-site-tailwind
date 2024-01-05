import Error from "next/error";

const CustomError = ({ statusCode }) => {
  return (
    <Error
      statusCode={statusCode}
      title={
        statusCode === 410
          ? "The requested resource is no longer available"
          : undefined
      }
    />
  );
};

const gonePages = ["gone", "/manga/martial-peak", "foo/bar"];

const compareURLs = (n, h) => {
  const nParts = n.split("/").filter(Boolean);
  const hParts = h.split("/").filter(Boolean);

  return (
    nParts.length <= hParts.length &&
    nParts.every((part, i) => part === hParts[i])
  );
};

export const getServerSideProps = async ({ req, res }) => ({
  props: {
    statusCode:
      res.statusCode === 404 && gonePages.includes(req.url)
        ? 410
        : res.statusCode,
  },
});

export default CustomError;
