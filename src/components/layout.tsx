import { AppProps } from "next/app";
import React from "react";
import Header from "./header";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
