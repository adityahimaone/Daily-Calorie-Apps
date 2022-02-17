import React from "react";
import Head from "next/head";
import Nav from "@/components/header/Nav";
import Container from "@/components/Container";

export default function UserLayout(props) {
  const { children, pageTitle } = props;
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Daily Calorie Apps" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Nav location="user" />
        <div className="min-h-screen">
          <Container>{children}</Container>
        </div>
      </div>
    </>
  );
}