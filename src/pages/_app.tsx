import { useEffect } from 'react';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import DefaultSeo from 'components/seo/DefaultSeo';
import 'animate.css';
import 'styles/globals.css';

interface Props {
  children: React.ReactNode;
}
const Nope: React.FC<Props> = ({ children }) => <>{children}</>;
const nodeEnv = process.env.NODE_ENV;

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const Layout = (Component as any).Layout || Nope;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = document.getElementById('globalLoader');
      if (loader) loader.remove();
    }
  }, []);

  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      value={{ light: 'light', dark: 'dark' }}
      // defaultTheme="system"
    >
      <DefaultSeo />
      {nodeEnv === 'production' && (
        <>
          {/* <GoogleAnalytics />
          <FbMessenger /> */}
        </>
      )}
      <Layout pageProps={pageProps}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ThemeProvider>
  );
}
