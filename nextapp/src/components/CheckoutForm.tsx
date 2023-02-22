import React, { useEffect, useState, useContext } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { useRouter } from "next/router";

import { WalletAddressContext } from "@/components/WalletAddressContext";

import api from "@/utils/front-api";

import styles from "@/styles/CheckoutForm.module.scss";

// Amount form types
interface AmountFormElements extends HTMLFormControlsCollection {
  amount: HTMLInputElement;
}

interface AmountForm extends HTMLFormElement {
  readonly elements: AmountFormElements;
}

export default function CheckoutForm() {
  const [step, setStep] = useState<"amount" | "checkout">("amount");

  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState("");
  const [language, setLanguage] = useState("");

  const [clientSecret, setClientSecret] = useState<string>();
  const [error, setError] = useState<string>();
  const [processing, setProcessing] = useState(false);

  const { walletAddress } = useContext(WalletAddressContext);

  const stripe = useStripe();
  const elements = useElements();

  const router = useRouter();

  useEffect(() => {
    setLanguage(navigator.language);
  }, []);

  const handleSubmitAmount = async (e: React.FormEvent<AmountForm>) => {
    e.preventDefault();
    const target = e.currentTarget.elements;

    const requestedAmount = Number.parseInt(target.amount.value);

    api
      .getProductDetails({ amount: requestedAmount })
      .then((productDetails: any) => {
        setAmount(productDetails.amount / 100);
        setCurrency(productDetails.currency);
      });

    api
      .createPaymentIntent({
        payment_method_types: ["card"],
        amount: requestedAmount,
        description: walletAddress,
      })
      .then((clientSecret: string) => {
        setClientSecret(clientSecret);
        setStep("checkout");
      })
      .catch((err: any) => {
        setError(err.message);
      });
  };

  const handleSubmit = async (ev: any) => {
    ev.preventDefault();
    setProcessing(true);

    if (!stripe || !elements) {
      setError("Stripe is not loaded yet");
      setProcessing(false);
      console.log("[error]", "Stripe is not loaded yet");
      return;
    }

    if (!clientSecret) {
      setError("Stripe is not loaded yet");
      setProcessing(false);
      console.log("[error]", "Stripe is not loaded yet");
      return;
    }

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)!,
        billing_details: {
          name: ev.target.name.value,
        },
      },
    });

    if (payload.error) {
      setError(`Payment failed: ${payload.error.message}`);
      setProcessing(false);
      console.log("[error]", payload.error);
    } else {
      setError(undefined);
      setProcessing(false);
      router.push({
        pathname: "/",
        query: { buySuccess: "true" },
      });
      console.log("[PaymentIntent]", payload.paymentIntent);
    }
  };

  const renderForm = () => {
    const options = {
      style: {
        base: {
          color: "#32325d",
          fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
          fontSmoothing: "antialiased",
          fontSize: "16px",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
        invalid: {
          color: "#fa755a",
          iconColor: "#fa755a",
        },
      },
    };

    return (
      <>
        <form
          onSubmit={handleSubmitAmount}
          className={`${styles.amountStep} ${
            step === "checkout" ? styles.hidden : ""
          }`}
        >
          <button
            style={{ visibility: "hidden" }}
            className={styles.backButton}
            type="button"
          >
            <MdNavigateBefore />
          </button>

          <input
            className={styles.amountInput}
            type="number"
            id="amount"
            name="amount"
            placeholder="Amount"
          />

          <button className={styles.nextButton}>
            <MdNavigateNext />
          </button>
        </form>

        <form
          onSubmit={handleSubmit}
          className={`${styles.checkoutStep} ${
            step === "checkout" ? styles.active : ""
          }`}
        >
          <button
            onClick={() => setStep("amount")}
            className={styles.backButton}
            type="button"
          >
            <MdNavigateBefore />
          </button>

          <div>
            <h1>
              {currency.toLocaleUpperCase()}
              {language
                ? amount.toLocaleString(language, {
                    minimumFractionDigits: 2,
                  })
                : amount}
            </h1>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              autoComplete="cardholder"
              className={styles.checkoutInput}
            />

            <CardElement className={styles.checkoutInput} options={options} />

            {error && <div className="message sr-field-error">{error}</div>}
          </div>

          <button
            className={styles.payButton}
            disabled={processing || !clientSecret || !stripe}
          >
            {processing ? "Processing…" : "Pay"}
          </button>
        </form>
      </>
    );
  };

  return <div className={styles.checkoutForm}>{renderForm()}</div>;
}
