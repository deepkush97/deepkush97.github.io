import Head from "next/head";
import Link from "next/link";
import React from "react";
import { classes } from "../configs/classnames";
import { site_name } from "../configs/strings";

export const Navbar = () => {
  return (
    <>
      <Head>
        <title>{site_name}</title>
      </Head>
      <nav
        className={`sticky top-0 w-full z-20 ${classes.background.base} backdrop-blur-lg bg-opacity-75 flex flex-wrap items-center justify-between  py-8 navbar-expand-lg`}
      >
        <div className="container px-6 mx-auto flex  flex-wrap items-center justify-between">
          <div className="w-full relative flex flex-row justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a
                className={`${classes.textBase} text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase`}
              >
                {site_name}
              </a>
            </Link>
          </div>
          <div className="flex">
            <Link href="/#about">
              <a
                className={`${classes.textBase} text-sm leading-relaxed inline-block mr-4 py-2 whitespace-nowrap`}
              >
                <span className={`${classes.textAccent} font-mono`}>01.</span>{" "}
                About
              </a>
            </Link>
            <Link href="/#profile">
              <a
                className={`${classes.textBase} text-sm leading-relaxed inline-block mr-4 py-2 whitespace-nowrap`}
              >
                <span className={`${classes.textAccent} font-mono`}>02.</span>{" "}
                Profile
              </a>
            </Link>
            <Link href="/#feedback">
              <a
                className={`${classes.textBase} text-sm leading-relaxed inline-block mr-4 py-2 whitespace-nowrap`}
              >
                <span className={`${classes.textAccent} font-mono`}>03.</span>{" "}
                Feedback
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
