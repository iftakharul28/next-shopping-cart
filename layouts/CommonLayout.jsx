import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';

const CommonLayout = ({ children, title }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Your Trusted Partner" />
        <meta property="og:title" content="ShopBD | Your Trusted Partner" />
        <meta property="og:type" content="website" />
        <title>
          {title ? `${title} - ShopBD` : 'ShopBD | Your Trusted Partner'}
        </title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link
          rel="shortcut icon"
          type="image/png"
          sizes="16x16"
          href="/favicon.ico"
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <div className="container common-layout">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default CommonLayout;
