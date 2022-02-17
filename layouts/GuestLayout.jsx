import React, { useState } from "react";
import Head from "next/head";
import Nav from "@/components/header/Nav";
import Container from "@/components/Container";

export default function GuestLayout(props) {
  const { children, pageTitle, container } = props;

  console.log(container);
  const initContainer = typeof container !== "undefined" ? container : true;
  const [containerActive, setContainerActive] = useState(initContainer);

  console.log(containerActive);
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Daily Calorie Apps" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen ">
        <Nav location="guest" />
        <div className="">
          {containerActive === true ? (
            <Container>{children}</Container>
          ) : (
            <div>{children}</div>
          )}
        </div>
      </div>
    </>
  );
}