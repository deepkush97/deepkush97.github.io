import Head from "next/head";
import { FC } from "react-transition-group/node_modules/@types/react";

interface SEOProps {
  description: string;
  title: string;
  siteTitle: string;
  siteUrl: string;
  image: string;
}

export const SEO: FC<SEOProps> = ({
  description,
  title,
  siteTitle,
  image,
  siteUrl,
}) => {
  return (
    <Head>
      <title>{`${title} | ${siteTitle}`}</title>
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:image" content={image} />

      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:url" content={siteUrl} />
    </Head>
  );
};
