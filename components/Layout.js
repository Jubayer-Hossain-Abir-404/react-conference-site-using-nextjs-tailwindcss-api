import Head from 'next/head';
import React from 'react'
import Nav from './Nav'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        
      </Head>
      <Nav />
      {children}
    </>
  );
};

export default Layout