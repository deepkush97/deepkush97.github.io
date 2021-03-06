import React, { FC } from "react";
import { classes } from "../configs/classnames";
import { githubLink, title } from "../configs/data";

export const Footer: FC = () => {
  return (
    <>
      <footer
        className={`sticky ${classes.background.base} bottom-0 block py-2`}
      >
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
              <div
                className={`text-sm text- font-semibold py-1 text-center md:text-left`}
              >
                Created with ❤️ by {title}
              </div>
            </div>
            <div className="w-full md:w-8/12 px-4 mt-2 md:mt-0">
              <ul className="flex flex-wrap list-none md:justify-end justify-center">
                <li>
                  <FooterLink onClick={() => window.open(githubLink, "_blank")}>
                    Github
                  </FooterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

type FooterLinkProps = {
  onClick?: () => void;
};

export const FooterLink: FC<FooterLinkProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`${classes.textBase} ${classes.textHover} ${classes.underline} text-sm font-semibold block py-1 px-3`}
    >
      {children}
    </button>
  );
};
