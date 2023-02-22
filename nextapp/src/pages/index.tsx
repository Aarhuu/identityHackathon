import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/Index.module.scss";

export default function Home() {
  const router = useRouter();
  const query = router.query;

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.indexPage}>
        <div className={styles.box}>
          {query.buySuccess && (
            <h3 style={{ color: "green", marginBottom: "1rem" }}>
              Tokens bought successfully
            </h3>
          )}
          {query.sendSuccess && (
            <h3 style={{ color: "green", marginBottom: "1rem" }}>
              Tokens sent successfully
            </h3>
          )}
          <Link href="/buy" className={styles.linkButton}>
            Buy
          </Link>
          <Link href="/send" className={styles.linkButton}>
            Send
          </Link>
        </div>
      </div>
    </>
  );
}
