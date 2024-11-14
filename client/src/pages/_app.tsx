import type { AppProps } from "next/app";
import "../styles/globals.css";
import Head from "next/head";
import { NextPage, NextPageContext } from "next";
import { ReactElement, ReactNode } from "react";
import { ThemeProvider } from "@/context/theme-context";
import { UserProvider } from "@/shared/userdata-context";
import { GoogleOAuthProvider } from "@react-oauth/google";

export type NextPageWithLayout<P = unknown, IP = NextPageContext> = NextPage<
  P,
  IP
> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ThemeProvider>
      <Head>
        <title>MedKart</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="MedKart" />
      </Head>
      <GoogleOAuthProvider clientId={`${process.env.NEXT_PUBLIC_CLIENT_ID}`}>
        <UserProvider>{getLayout(<Component {...pageProps} />)}</UserProvider>
      </GoogleOAuthProvider>
    </ThemeProvider>
  );
}
