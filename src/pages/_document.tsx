import Document, { Html, Head, Main, NextScript } from "next/document";

type Props = {};

export default class CustomDocument extends Document<Props> {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Neucha&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          />
          <meta name="theme-color" content="#000000" />
          <link rel="apple-touch-icon" href="./apple-touch-icon.png" />
          <link rel="icon" href="./favicon.ico" />
          <link rel="manifest" href="./site.webmanifest" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}