import NextLink from "next/link";
import { classes } from "../configs/classnames";

const Error = () => {
  return (
    <section className="flex items-center justify-center py-12 md:py-20 w-full">
      <div className="space-y-4">
        <div
          className={`px-5 shadow-lg ${classes.textWhite} text-sm font-mono subpixel-antialiased 
              ${classes.background.dark} pb-6 pt-4 rounded-lg leading-normal overflow-hidden w-full md:w-96 h-44 `}
        >
          <div className="flex items-center space-x-4">
            <div className="top flex space-x-2 items-center">
              <div className="h-3 w-3 bg-red-500 rounded-full"></div>
              <div className="h-3 w-3 bg-yellow-300 rounded-full"></div>
              <div className="h-3 w-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="flex-1 text-red-500 font-semibold">
              404 Not Found
            </span>
          </div>
          <div className="mt-2 flex">
            <span className="text-green-400">deepkush-port:~$</span>
          </div>
          <p className="flex-1">
            Path:{" "}
            {typeof window !== "undefined" ? window.location.pathname : ""}
          </p>
          <p className="flex-1 text-yellow-400">Error: Path is invalid.</p>
          <p className="flex-1 text-yellow-400">
            Reason: Page expired or doesn't exist.
          </p>
        </div>
        <div className="w-full flex justify-center">
          <NextLink href="/">
            <a className="bg-transparent hover:bg-aquamarine-800 hover:bg-opacity-20 text-aquamarine-500 inline-block font-normal font-mono my-4 py-2 px-4 border border-aquamarine-500">
              Go to Home
            </a>
          </NextLink>
        </div>
      </div>
    </section>
  );
};

export default Error;
