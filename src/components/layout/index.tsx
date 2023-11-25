import React, { useEffect, useState, useCallback } from 'react';
import { Router, useRouter } from 'next/router';
import { Icon } from '@iconify/react';
import { Props } from 'types';
import Header from './Header';
import DisclaimerDialog from 'components/disclaimer';
import Footer from './Footer';
import SubHeader from './SubHeader';
import Modal from 'components/disclaimer';

const Layout: React.FC<Props> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  // Use the useEffect hook to perform an action when the component mounts
  useEffect(() => {
    // Access the current URL from the router object
    const currentUrl = router.asPath;
    
    // Log or perform any other action with the current URL
    console.log('Current URL:', currentUrl);

    // You can also access other properties of the router object, such as pathname, query, etc.
    // const { pathname, query } = router;

    // Clean up any resources when the component unmounts
    return () => {
      // Perform cleanup if needed
    };
  }, [router]); // Empty depend


  
  Router.events.on('routeChangeStart', () => {
    setIsLoading(true);
  });

  Router.events.on('routeChangeComplete', () => {
    setIsLoading(false);
  });

  Router.events.on('routeChangeError', () => {
    setIsLoading(false);
  });

  return (
    <div className="flex flex-col min-h-screen">
      {/* <DisclaimerDialog /> */}
      <Header isDefault={false}/>
      <main className="flex-auto">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout