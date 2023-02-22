import { ethers, Wallet } from "ethers";
import erc20abi from "./erc20abi.json";
import bankabi from "./tokenbank.json";

const tokenAddress = "0x41aF18B94B3E577f219eE36e0F6a0ecaAECcc11c";
const bankAddress = "0x92be1404e609a3823c404a1D12BdD569375c1885";

// runs automatically
export const sendTokens = async (userAddress: string, amount: number) => {
  const PRIVATE_KEY: string = process.env.PRIVATE_KEY || "";
  const MUMBAI_URL = process.env.MUMBAI_URL;

  // userAddress from front-end
  // const userAddress = "0x10C01015ffb92ED106151f9f3c894B265A9E206F";

  const provider = new ethers.InfuraProvider(
    { name: "maticmum", chainId: 80001 },
    MUMBAI_URL
  );
  console.log(provider);

  const reserveWallet = new Wallet(PRIVATE_KEY, provider);

  const tokenContract: any = new ethers.Contract(
    tokenAddress,
    erc20abi,
    provider
  );

  const tx = await tokenContract
    .connect(reserveWallet)
    .transfer(userAddress, amount);
  await tx.wait();
  console.log(tx);
};

// pops up metamask
export const deposit = async (recipient: string, amount: number) => {
  const provider = new ethers.BrowserProvider(window.ethereum);
  await window.ethereum.request({ method: "eth_requestAccounts" });

  const signer = await provider.getSigner();
  console.log(signer);

  const tokenContract: any = new ethers.Contract(
    tokenAddress,
    erc20abi,
    provider
  );

  const bankContract: any = new ethers.Contract(bankAddress, bankabi, provider);

  const approve = await tokenContract
    .connect(signer)
    .approve(bankAddress, amount);
  await approve.wait();

  const tx = await bankContract.connect(signer).deposit(recipient, amount);
  await tx.wait();
  console.log(tx);
};

// runs automatically
export const release = async (recipient: string) => {
  const PRIVATE_KEY: string = process.env.PRIVATE_KEY || "";
  const MUMBAI_URL = process.env.MUMBAI_URL;

  const provider = new ethers.InfuraProvider(
    { name: "maticmum", chainId: 80001 },
    MUMBAI_URL
  );

  const reserveWallet = new Wallet(PRIVATE_KEY, provider);

  const bankContract: any = new ethers.Contract(bankAddress, bankabi, provider);

  const tx = await bankContract.connect(reserveWallet).release(recipient);
  await tx.wait();
  console.log(tx);
};
