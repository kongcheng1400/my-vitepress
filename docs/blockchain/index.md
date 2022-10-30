# architecture
Opstack: consesus + execution + proof layer

## ETH trend tech
- EIP4844 PDS. 1000x Cap, 100x Fees.
- EIP4337 abstract account
- Eth storage: DA persistent.

## 网络层
- 客户端软件的两个部分：执行客户端和共识客户端, 执行:在EVM执行并且保存世界状态. 共识: POS算法，使网络能够根据来自执行端的数据达成一致.
- 共识层是以前的信标链,引入了pos并且根据来自以太坊的数据协调验证者网络.
- 两个独立的P2p网络: 连接执行客户端用于transaction gossip, 一个连接共识客户端用于block gossip.
[如图](./cons_client_net_layer.png)