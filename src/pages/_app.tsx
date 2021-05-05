import { AppProps } from "next/app";
import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/SideBar";
import "../styles/sketchy.bootstrap.min.css";
import "../styles/style.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <div className="d-flex">
        <SideBar />
        <main className="container p-3 ">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default App;
