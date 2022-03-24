import { JsonRpcProvider } from "@ethersproject/providers";
import { ethers, Wallet } from "ethers";

(async () => {

import WEB3_INFURA_PROVIDER_KEY from env
 
const WEB3_INFURA_PROVIDER_KEY = JsonRpcProvider

const connection = new ethers.providers.JsonRpcProvider(WEB3_INFURA_PROVIDER_KEY);


const gasPrice = connection.getGasPrice()
const wallet = ethers.Wallet.createRandom
const signer = wallet.connect(connection);

const recipient = 
"0xF5bF3B7B7D03EfD34BA1E1BcF1694080975d8A1c";
const tx = {
    from: wallet.address,
    to: recipient, 
    value: ethers.utils.parseUnits("0.001", "wei"),
    gasPrice: gasPrice, 
    gasLimit: ethers.utils.hexlify(100000), // 100 GWEI
    nonce: connection.getTransactionCount(wallet.address, 'latest')
};

const transaction = await signer.sendTransaction(tx);

console.log(transaction)

};

})();