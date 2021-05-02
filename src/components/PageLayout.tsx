import { FC } from "react";

interface PageLayoutProps {
  title: string;
}

export const PageLayout: FC<PageLayoutProps> = ({ title, children }) => {
  return (
    <>
      <h1 className="text-center display-3">{title}</h1>
      <hr />
      <div className="px-3">{children}</div>
    </>
  );
};
