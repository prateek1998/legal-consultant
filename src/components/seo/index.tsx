import { NextSeo, NextSeoProps } from 'next-seo';

interface SeoProps extends NextSeoProps {
  title: string;
  description?: string;
}

const SEO = ({ title, description }: SeoProps) => {
  return (
    <NextSeo
      title={title}
      description={description}
      additionalMetaTags={[
        {
          property: 'keywords',
          content:
            'Law Firm in Delhi, Lawyers In Delhi, Law Firm in Delhi NCR, Keshav Sethi, Jitendra Sethi & Associate,Legal Firms in Delhi,Divorce Lawyers in Delhi, Criminal Lawyers in Delhi, Family Lawyers, Supreme court lawyers, High court Lawyers, Preet vihar, Delhi, Noida, Gurgaon, Best, Top',
        },
      ]}
    />
  );
};

export default SEO;
