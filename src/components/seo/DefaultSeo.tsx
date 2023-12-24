import React from 'react';
import { DefaultSeo as NextDefaultSeo } from 'next-seo';
import siteSettings from 'settings/site-settings';

const DefaultSeo = () => {
  return (
    <NextDefaultSeo
      title={siteSettings.title}
      titleTemplate={`${siteSettings.name} | %s`}
      defaultTitle={siteSettings.title}
      description={siteSettings.description}
      canonical="https://sethiandassociates.com/"
      openGraph={{
        type: 'website',
        locale: 'en_IE',
        site_name: siteSettings.name,
        images: [
          {
            url: siteSettings.ogImageUrl,
            width: 800,
            height: 600,
            alt: 'Og sethi-logo',
          },
          {
            url: siteSettings.ogImageUrl,
            width: 900,
            height: 800,
            alt: 'Og sethi-logo',
          },
        ],
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
      }}
      additionalMetaTags={[
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1 maximum-scale=1',
        },
        {
          name: 'apple-mobile-web-app-capable',
          content: 'yes',
        },
        {
          name: 'msapplication-TileColor',
          content: '#ffffff',
        },
        {
          name: 'theme-color',
          content: '#ffffff',
        },
      ]}
      additionalLinkTags={[
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/favicon/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon/favicon-16x16.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '512x512',
          href: '/favicon/android-chrome-512x512.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '192x192',
          href: '/favicon/android-chrome-192x192.png',
        },
        {
          rel: 'icon',
          href: '/favicon/favicon.ico',
        },
        {
          rel: 'manifest',
          href: '/favicon/manifest.json',
        },
      ]}
    />
  );
};

export default DefaultSeo;
