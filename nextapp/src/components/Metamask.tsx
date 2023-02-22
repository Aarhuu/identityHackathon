import React, { FunctionComponent } from "react";
import { useState, useEffect, useContext } from "react";
import { BrowserProvider } from "ethers";

import { WalletAddressContext } from "@/components/WalletAddressContext";

import styles from "@/styles/Metamask.module.scss";

import { ethers } from "ethers";
import { deposit, release } from "../utils/ethFunctions";

const Metamask: FunctionComponent = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [hasMetamask, setHasMetamask] = useState(false);
  const { walletAddress, setWalletAddress } = useContext(WalletAddressContext);

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      setHasMetamask(true);
    }
  }, []);

  async function connect() {
    if (typeof window.ethereum !== "undefined") {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });
        setIsConnected(true);

        const signer = await provider.getSigner();
        const signerAddress = await signer.getAddress();
        setWalletAddress(signerAddress);
        console.log(signerAddress);
      } catch (e) {
        console.log(e);
      }
    } else {
      setIsConnected(false);
    }
  }

  return (
    <div>
      {hasMetamask ? (
        isConnected ? (
          <button className={styles.button}>
            Connected <hr /> {walletAddress}
          </button>
        ) : (
          <button onClick={() => connect()} className={styles.button}>
            Connect
          </button>
        )
      ) : (
        "Please install metamask"
      )}
      {/* <button onClick={deposit}>test deposit</button>
      <button onClick={release}>test release</button> */}
    </div>
  );
};

export default Metamask;
