import { AppProps } from "next/app";
import { MainLayout } from "../layouts/main";
import "../styles/style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { SEO } from "../components/SEO";
import {
  site_name,
  github_link,
  title,
  applicationDescription,
} from "../configs/data";
function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SEO
        title="DeepKush"
        siteTitle={site_name}
        description={applicationDescription}
        image="./logo.png"
        siteUrl="https://deepkush97.github.io/"
      />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default App;
