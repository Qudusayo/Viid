import "./../styles/global.scss";
import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from "@livepeer/react";
import * as React from "react";
import Navbar from "../components/Navbar/Navbar";

const livepeerClient = createReactClient({
  provider: studioProvider({
    apiKey: process.env.NEXT_PUBLIC_STUDIO_API_KEY,
  }),
});

export default function App({ Component, pageProps }) {
  return (
    <LivepeerConfig client={livepeerClient}>
      <Navbar />
      <Component {...pageProps} />
    </LivepeerConfig>
  );
}
