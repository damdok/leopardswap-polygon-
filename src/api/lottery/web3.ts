import Web3 from 'web3'

const BSC_NODE_RPC = [
  "https://rpc-mainnet.maticvigil.com",
  "https://bold-lingering-sky.matic.quiknode.pro/41bba9dd8031db66f9b59fb8e31c8b6959661eda/",
  "https://rpc-mainnet.maticvigil.com",
];

export const getWeb3 = (): Web3 => {
  const provider: string = BSC_NODE_RPC[Math.floor(Math.random() * BSC_NODE_RPC.length)];

  return new Web3(new Web3.providers.HttpProvider(provider, { timeout: 30000 }));
};

export const getContract = (abi: any, address: string) => {
  const web3: Web3 = getWeb3();

  return new web3.eth.Contract(abi, address);
};
