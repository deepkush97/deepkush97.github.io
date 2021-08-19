import Link from "next/link";
import React, { FC } from "react";
import { classes } from "../configs/classnames";
import { title, navigation } from "../configs/data";

export const Navbar = () => {
  return (
    <>
      <nav
        className={`sticky top-0 w-full z-20 ${classes.background.base} backdrop-blur-lg bg-opacity-75 flex flex-wrap items-center justify-between py-4 md:py-8  navbar-expand-lg`}
      >
        <div className="container px-6 mx-auto flex  flex-wrap items-center justify-between">
          <div className="w-full flex justify-center md:w-auto md:static md:block md:justify-start">
            <Link href="/">
              <a
                className={`${classes.textBase} text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase`}
              >
                {title}
              </a>
            </Link>
          </div>
          <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-start">
            {Object.values(navigation).map((nav) => (
              <NavItem
                key={nav.id}
                id={nav.id}
                number={nav.number}
                title={nav.text}
              />
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

interface NavItemProps {
  id: string;
  number: string;
  title: string;
}

export const NavItem: FC<NavItemProps> = ({ id, number, title }) => {
  return (
    <Link href={`/#${id}`}>
      <a
        className={`${classes.textBase} ${classes.textHover} text-sm leading-relaxed inline-block mr-4 py-2 whitespace-nowrap`}
      >
        <span className={`${classes.textAccent} font-mono`}>{number}.</span>{" "}
        {title}
      </a>
    </Link>
  );
};
