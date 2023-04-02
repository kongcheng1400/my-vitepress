# 基本术语:
- Provider: 区块链的只读访问类
- Signer: 通过私钥来访问和交互区块链的类
- Contract: 连接到特定合约的抽象
- Transaction:
- Receipt: a transaction has been included.
## 转换.
- parseEther
- parseUints
- formatEther
-feePerGas

## Signer

## contracts
只读contract:执行call操作:调用合约中的view和pure函数.
const contract = new ethers.Contract(`address`, `abi`, `provider`);
可读写contract:
const contract = new ethers.Contract(`address`, `abi`, `signer`);
### ABI
1. 从remix编译页面复制.或者从 copy contract ABI
2. 同意使用Human-Readable Abi: function signature和event signature来写abi.

### Fragment

## Wallets
包含私钥以及支持high-level方法来签署常见操作和交互.
### Wallet
加载私钥直接访问区块链.

#### BaseWallet
- stream-lined implementation of a Signer that operates with a private key.

#### class Wallet

#### interface Signer.

## gas calculation

before london upgrade:
Gas Units(limit) & Gas Price per unit: 21,000 * 200 = 4,200,000, 0.0042ETH

after the london upgrade:
gas limit * (base + priority fee) 
refund = max fee - (base fee + priority fee)