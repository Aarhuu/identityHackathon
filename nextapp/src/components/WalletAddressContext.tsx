import React, { FunctionComponent, PropsWithChildren } from "react";
import { useState, createContext } from "react";

const WalletAddressContext = createContext<{
  walletAddress: string;
  setWalletAddress: React.Dispatch<React.SetStateAction<string>>;
}>({ walletAddress: "", setWalletAddress: () => null });

const WalletAddressContextProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [walletAddress, setWalletAddress] = useState("");

  return (
    <WalletAddressContext.Provider value={{ walletAddress, setWalletAddress }}>
      {children}
    </WalletAddressContext.Provider>
  );
};

export { WalletAddressContext };

export default WalletAddressContextProvider;
