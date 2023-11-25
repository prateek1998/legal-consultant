import { NextSeo, NextSeoProps } from 'next-seo';

interface SeoProps extends NextSeoProps {
  title: string;
  description?: string;
}

const SEO = ({ title, description }: SeoProps) => {
  return <NextSeo title={title} description={description} />;
};

export default SEO;
