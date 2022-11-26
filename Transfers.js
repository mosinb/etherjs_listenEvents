import { ethers } from "ethers";
import ERC20 from "./ERC20.js";

//Node Provider Addres
const nodeProvider = 'https://bsc-mainnet.nodereal.io/v1/64a9df0874fb4a93b9d0a3849de012d3';
const customHttpProvider = new ethers.providers.JsonRpcProvider(nodeProvider);

//ERC-20 contract address
const contractAddress = '0x55d398326f99059fF775485246999027B3197955'; //(BSC-USD) 

const contract = new ethers.Contract(contractAddress, ERC20.abi, customHttpProvider);

contract.on("Transfer", (from, to, value, event) => {
  console.log({
    from: from,
    to: to,
    value: value.toString(),
    data: event
  });
});
