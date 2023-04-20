//getting balance by 
import { getHttpEndpoint } from "@orbs-network/ton-access";
import { mnemonicToWalletKey } from "ton-crypto";
import { fromNano, TonClient, WalletContractV4 } from "ton";



async function main() {
    const mnemonic = "Your wallet key phrase here";
    const key = await mnemonicToWalletKey(mnemonic.split(" "));
    const wallet = WalletContractV4.create({ publicKey: key.publicKey, workchain: 0});
    //initallize Ton RPC -- Here you can choose between 'Mainnet' and 'Testnet'
    const endpoint = await getHttpEndpoint({network: "testnet"});
    const client = new TonClient({endpoint});
   
    //Get balance
    const balance = (await client.getBalance(wallet.address));
    // can be ouputed as console.log("Balance: ", fromNano(balance)); or below
    const balanceupdate = fromNano(balance);
    console.log(balanceupdate);

/*  To get the sequence and contract state ? 
    //get sequence number from wallet
    const walletcontract = client.open(wallet);
    const seqno = await walletcontract.getSeqno();
    console.log("Seqno: ", seqno)
    
    //get contract state
    const getState = await client.getContractState(wallet.address)
    console.log("Seqno ",getState.state)

*/
}
main()

