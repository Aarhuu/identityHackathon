import Head from "next/head";
import styles from "@/styles/SendTokens.module.scss";

import SendTokensForm from "@/components/SendTokensForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>Send tokens</title>
        <meta name="description" content="Send tokens page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.sendTokensPage}>
        <SendTokensForm />
      </div>
    </>
  );
}
