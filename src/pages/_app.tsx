import { AppProps } from "next/app";
import { MainLayout } from "../layouts/main";
import "../styles/style.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default App;
