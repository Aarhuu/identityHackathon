import React from "react";
import type { AppProps } from "next/app";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import WalletAddressContextProvider from "@/components/WalletAddressContext";
import Metamask from "@/components/Metamask";

import api from "../utils/front-api";

import "@/styles/globals.css";

const stripePromise = api.getPublicStripeKey().then((key) => loadStripe(key));

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Elements stripe={stripePromise}>
      <WalletAddressContextProvider>
        <div className="app-wrapper">
          <nav>
            <Metamask />
          </nav>
          <main>
            <Component {...pageProps} />
          </main>
        </div>
      </WalletAddressContextProvider>
    </Elements>
  );
}
