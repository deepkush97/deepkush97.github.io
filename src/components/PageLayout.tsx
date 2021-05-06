import { FC } from "react";
import { SEO } from "./SEO";

export interface PageLayoutProps {
  title: string;
}

export const PageLayout: FC<PageLayoutProps> = ({ title, children }) => {
  return (
    <div className="page-animation">
      <SEO
        title={title}
        siteTitle="deepkush97"
        description="Deepanshu Kushwaha Portfolio"
        image="./logo.png"
        siteUrl="https://deepkush97.github.io/"
      />

      <h1 className="text-center display-3">{title}</h1>
      <hr />
      <div className="px-3">{children}</div>
    </div>
  );
};
