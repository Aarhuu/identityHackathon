import Head from "next/head";
import styles from "@/styles/BuyTokens.module.scss";

import CheckoutForm from "@/components/CheckoutForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>Buy tokens</title>
        <meta name="description" content="Buy tokens page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.buyTokensPage}>
        <CheckoutForm />
      </div>
    </>
  );
}
