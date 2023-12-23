import React, { useEffect, useState, useCallback } from 'react';
import { Router, useRouter } from 'next/router';
import { Props } from 'types';
import Header from './Header';
import DisclaimerDialog from 'components/disclaimer';
import Footer from './Footer';

const Layout: React.FC<Props> = ({ children }) => {
  const [defaultRoute, setDefaultRoute] = useState(false)
  const router = useRouter();

  // Use the useEffect hook to perform an action when the component mounts
  useEffect(() => {
    const currentUrl = router.pathname;
    
    // console.log('Current URL:', router);
    if(currentUrl == "/")
      setDefaultRoute(true)
    else 
      setDefaultRoute(false)
  }, [router]); 
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* <DisclaimerDialog /> */}
      <Header isDefault={false} defaultRoute={defaultRoute}/>
      <main className="flex-auto">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout