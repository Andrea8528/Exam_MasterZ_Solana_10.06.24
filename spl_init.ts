import { Keypair, Connection, PublicKey} from "@solana/web3.js";

import { createMint, mintTo, getOrCreateAssociatedTokenAccount, } from "@solana/spl-token";

import wallet from "./wallet.json";

const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));
const connection = new Connection("https://api.devnet.solana.com", "finalized");

(async () => {

    const mint = await createMint(
        connection,
        keypair,
        keypair.publicKey,
        null,
        6,
    );

    console.log("(Save for mint)-Mint Address:", mint.toBase58());

 
})()















