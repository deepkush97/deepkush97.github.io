import React, { FC } from "react";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { classes } from "../configs/classnames";

export const MainLayout: FC = ({ children }) => {
  return (
    <main
      className={`w-screen h-screen ${classes.background.base} bg-no-repeat bg-full overflow-auto`}
    >
      <Navbar />
      <div className="min-h-full w-full mx-auto px-6 sm:px-44">{children}</div>
      <Footer />
    </main>
  );
};
