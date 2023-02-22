import React, { useState } from "react";
import { MdNavigateBefore } from "react-icons/md";
import { deposit } from "@/utils/ethFunctions";
import { useRouter } from "next/router";

import styles from "@/styles/CheckoutForm.module.scss";

// Amount form types
interface SendFormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  amount: HTMLInputElement;
  wallet: HTMLInputElement;
}

interface SendForm extends HTMLFormElement {
  readonly elements: SendFormElements;
}

export default function SendTokensForm() {
  const [error, setError] = useState<string>();
  const [processing, setProcessing] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<SendForm>) => {
    e.preventDefault();
    setProcessing(true);
    const target = e.currentTarget.elements;

    const email = target.email.value;
    const amount = Number.parseInt(target.amount.value);
    const wallet = target.wallet.value;

    await deposit(wallet, amount * 1000000);
    router.push({
      pathname: "/",
      query: { sendSuccess: "true" },
    });
  };

  const renderForm = () => {
    return (
      <>
        <form onSubmit={handleSubmit}>
          <button
            style={{ visibility: "hidden" }}
            onClick={() => null}
            className={styles.backButton}
            type="button"
          >
            <MdNavigateBefore />
          </button>

          <div>
            <input
              className={styles.amountInput}
              type="number"
              id="amount"
              name="amount"
              placeholder="Amount"
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              autoComplete="recipient-email"
              className={styles.checkoutInput}
            />
            <input
              type="text"
              id="wallet"
              name="wallet"
              placeholder="Wallet"
              autoComplete="recipient-wallet"
              className={styles.checkoutInput}
            />

            {error && <div className="message sr-field-error">{error}</div>}
          </div>

          <button className={styles.payButton} disabled={processing}>
            {processing ? "Sending" : "Send"}
          </button>
        </form>
      </>
    );
  };

  return <div className={styles.checkoutForm}>{renderForm()}</div>;
}
