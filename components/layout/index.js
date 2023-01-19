import React, { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Handiani - Portfolio</title>
      </Head>
      <Fragment>
        <Header />
        <div>{children}</div>
        <Footer />
      </Fragment>
    </>
  );
}
