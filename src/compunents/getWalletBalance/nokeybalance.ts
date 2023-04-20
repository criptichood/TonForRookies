
import { getHttpEndpoint } from "@orbs-network/ton-access";
import { address, fromNano, TonClient } from "ton";


//Can not be returned as reac jsx compunent due to promise
async function NokeyBalance() {
    //Passing address as a variable and getting the balance, contract state
    const pubkey = "EQAf6CHgA3yEizLCEt95JNJqDt2Hw-EvCXW3LSSfQXz_myn-";
  
    //Neteork Initialization testnet/mainnet
    const endpoint = await getHttpEndpoint({network: "mainnet"});
    const client = new TonClient({endpoint})
    //get balance of public address
    const balance = await client.getBalance(address(pubkey));
    //get state
    //const getState = await client.getContractState(address(pubkey))

    // console.log(pubkey)
    // console.log("State: ", getState.state)
    // console.log("Seqno ",getState.blockId.seqno)
    console.log("Balance: ", fromNano(balance));

    
    
}
NokeyBalance();
