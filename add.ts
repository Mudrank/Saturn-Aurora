import dotenv from "dotenv";

import { Wallet, getDefaultProvider } from "ethers";
import { SaturnClient } from "@0xsaturn/sdk";

dotenv.config();

// Initialize client
const client = new SaturnClient(
  new Wallet(
    process.env.PRIVATE_KEY!,

    getDefaultProvider("https://testnet.aurora.dev")
  )
);

// Initialize the registry
const add = async () => {
  const registry = client.getContractRegistryModule(
    "0x2937966C1d6E97845F08396795d13B206089ccAF"
  );

  const { transactionHash } = await registry.add(
    "This contract",
    "0x2937966C1d6E97845F08396795d13B206089ccAF"
  );

  console.log("✨ Tx hash:", transactionHash);
};

add();
