import { AppProps } from "next/app";
import Head from "next/head";
import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/SideBar";
import "../styles/sketchy.bootstrap.min.css";
import "../styles/style.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
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
