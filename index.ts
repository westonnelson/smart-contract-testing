import { ethers, Wallet } from "ethers";

(async () => {

const connection = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/1628d9d5818d42db81b70ed204f84170')

DEV_WALLET = Wallet

const gasPrice = connection.getGatPrice()
const wallet = ethers.Wallet
const signer = wallet.connect(connection);

const recipient = 
"0xF5bF3B7B7D03EfD34BA1E1BcF1694080975d8A1c";
const tx = {
    from: wallet.address,
    to: recipient, 
    value: ethers.utils.paseUnits("0.001", "wei"),
    gasPrice: gasPrice, 
    gasLimit: ethers.utils.hexlify(100000), // 100 GWEI
    nonce: connection.getTransactionCount(wallet.address, 'latest')
};

const transaction = await signer.sendTransaction(tx);

console.log(transaction)

};

})();