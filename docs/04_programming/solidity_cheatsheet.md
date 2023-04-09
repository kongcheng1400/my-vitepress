# ethereum
## transactions
- from: address (signed by this)
- to: address
- value: uint(ether)
- data: message data bytes.
开始的4字节数据是函数选择器, 然后是参数.


# 变量.
- 初始值为0.
## access scope
- public, interval, private.
## 变量类型
### 数值类型(value type): 
  - bool
  - int, uint, int8 to int256, uint8 to uint256
  - fixed/unfixed fixedMxN, ufixedMxN
  - address: 20bytes. 有成员变量.
    - payable
    - .balance
    - .transfer: r
    - .send(): bool
    - .call
      - (bool success, ) = recipient.call{value:amt}("");
  - string:
### string
  - literal: string data = "test";
  - string操作需要更多gas比byte operation. 可以把string literal赋值给byte32 : byte32 data = "test";
#### bytes to string convertion
bytes memory bstr = new bytes(10);
string message = string(bstr);
## 引用类型(reference type): 数组和结构体.
  - bytes
    - 定长, 数值类型: byte, bytes1, bytes8, bytes32:
    - 不定长，引用类型. bytes is same as byte[]
### storage/memory/calldata
- 引用类型包括数组array, 结构体struct, 映射: mapping. 赋值时直接传递地址.由于这类变量比较复杂，占用空间大，使用时必须声明数据存储位置:
- storage:存在链上，合约里的状态变量默认storage
- memory: 函数里的参数和临时变量: 存内存.
- calldata: 和memory类似， 不能修改
### 数组
- 固定长度: type arrayName[arraySize]; uint balance[8], bytes1 arr[5], 
- 可变长度: type[] arrayName;  bytes, uint[] balance, bytes1[] arr
- 对于memory修饰的动态数组，可以用new来创建，但是必须声明长度，而且长度不能改变. 
  - uint[] memory array8 = new uint[](len);
  - bytes memory b = new bytes(len)
- 静态数组static array
  - uint[3] memory c = [uint(1), 2, 3];
- 数组字面量: [uint(1), 2, 3], solidity如果一个值没有制定type, 默认就是最小该单位的type. 这时候就是uint8

#### 数组的成员
- length
- push
#### 初始化.
### 结构体
结构体一般用于表示一个记录:
struct Student{
    uint256 id;
    uint256 socre;
}
Student student;

  
### 映射类型: Solidity中的哈希表.
- 声明映射: mapping(_KeyType => _ValueTYpe): mapping(uint => address) public idToAddress
#### 规则
- _keytype只能选择默认类型: uint, address, 不能用自定义结构体. _ValueTYpe:可以使用自定义的类型.
- 映射的存储位置必须是storage.
- 如果映射为public, 那么solidity会自动给你创建一个getter函数，可以通过Key来查询对应的Value.
- 新增: _Var[_Key] = _Value

#### 原理
- 映射不储存任何key的资讯，也没有length
- 映射使用keccak256
- Ethereum会定义所有未使用的空间为0, 所以未赋值Value的初始值为0.

## 变量的作用域 type
storage, global, local.

状态变量(state variable)， 局部变量， 全局变量.

状态变量
- 数据存储在链上，所有合约内的函数都可以访问. (合约内，函数外)
- contract storage.

全局变量:
- solidity预留关键字，它们可以在函数内不声明直接使用:
- 主要是区块链和交易相关的属性
- msg.sender(address payable), msg.data(bytes calldata), msg.sig(bytes4), msg.value(uint), now(uint)
- tx.gasprice(uint)
- blockhash(uint blockNumber) returns (bytes32), block.coinbase(address payable), block.difficult
- gasleft()

local variables:

### 全局变量-以太单位与时间单位.

solidity中不存在小数点， 以0代题为小数点， 利用以太单位可以避免误算的问题.
wei, gwei, ether.
- assert(1 wei == 1)
- assert(1 gwei == 1e9)
- assert(1 ether == 1e18)

时间单位:
assert(1 seconds == 1)
assert(1 minutes == 60 seconds)
seconds: 1
minutes: 60 seconds = 60
hours: 60 minutes = 3600
days: 24hours = 86400


# constant和immutable
- 只有数值变量可以声明constant和immutable; string和bytes可以声明为constant, 但不能为immutable.
- constant变量必须在声明的时候初始化，之后则不能改变.
- immutable变量可以在声明时或构造函数中初始化，因此更加灵活.

# 操作符.
- 算术操作符
- 比较操作符
- 逻辑关系操作符
- 赋值/算术赋值
  - 简单赋值， Add and assignment +=, ...
- 条件三元操作符.

# control/decision
- if else if else
- for
- while
- do-while
- ?: 三元
## loop controll
- break

# 函数:
  - function <function name> (<parameter types>) {internal|external|public|private} [pure|view|payable] [returns (<return types>)]
    - internal, external, public, private: 可见性
      - external: 只能合约外部访问(可以用this.f()来调用)
    - pure, view, payable: 权限
      - payable:带着它的函数，运行的时候可以给合约转入ETH.
    - returns/return
      - 多个返回值
      - 命名式返回.

## 构造函数和修饰器
合约控制权限.
### 构造函数
- 部署合约的时候自动运行一次。
- 此时初始化合约的owner地址

### 修饰器modifer
-改变函数行为.
声明函数拥有的特性，并减少代码冗余， 让函数具有某些特定的行为.
- 使用场景：运行函数前的检查，例如地址，变量，余额等.
- '_;' 函数体在这里插入.

### view 函数 /
- 修改状态变量
- 发送事件
- 创建其他合约
- 使用 selfdestruct
- 发送Ether via calls
- 调用其他任何不是vie或者pure的函数
- 使用low-level calls
- 使用特定inline assembly codes.

### fallback函数.
- 被调用的函数不存在的时候调用
- external
- 没有名字，没有参数，没有返回值，一个合约一个, 
- if not marked payable, it will throw exeption if contract receives plain either without data.
### receive() 函数.
- 没有名字没有参数没有返回值， 必须external payable.
### 加密函数
- keccak256(bytes memory) returns (bytes32)
- 
# 表达式
  - 解构赋值
## type(x)
-取得类型的信息.x可以是contract或者integer type.
- contract: type(C).name, type(C).createCode, type(C).runtimeCode, 
- interface: type(I).interfaceId, 
- integer type T: type(T).min, type(T).max 

## common pattern
### Withdrawal pattern
### 限制访问



# library/using/import
import "./IERC20.sol";
import "../../math/SafeMath.sol";
 using SafeMath for uint256;
using: including a library within a contract in solidity.


# 继承/oop
把合约看作是C++中的类，solidity也是面向对象的编程，支持继承.
- virtual: 父合约中的函数，如果希望子合约重写，需要加上virtual关键字.
- override: 子合约重写了父合约中的函数，需要加上override关键字.
- 用override修饰的
## contract
- 包含: 构造函数， 状态变量，函数
- visibility quantifiers: external, internal, public, private.

### 多重继承
1. 继承时按照最高到最低: contract Erzi is Yeye, Baba;
2. 如果某一个函数在多个继承的合约里都存在， 比如例子中的hip(), pop(), 在子合约里面必须重写，不然会报错.
3. 重写在多个父合约中都重名的函数时，override关键字后面要加上所有父亲的名字，例如override(Yeye, Baba)

### 构造函数的继承
1. 在继承时声明父构造函数的参数，例如contract B is A(1)
2. 在子合约的构造函数中声明构造函数的参数.

### 抽象合约和接口
如果一个智能合约里至少有一个未实现的函数，则必须为abstract

#### 接口 interface
类似于抽象合约但是不实现任何功能。接口的规则:
1. 不能包含状态变量
2. 不能包含构造函数
3. 不能继承接口外的其他合约
4. 所有函数都必须是external且不能有函数题
5. 继承接口的合约必须实现接口定义的所有功能.

如果智能合约实现了某种接口(ERC20/ERC721)，其他Dapps和智能合约就知道如何与它交互。因为接口提供了两个重要信息:
1. 合约里每个函数的bytes4选择器，以及函数签名:函数名(每个参数类型.)

# 异常: error, require, assert
3种抛出异常的方法.
- error 0.8.4版本新加的内容，方便且高效的向用户解释操作失败的原因. error必须搭配revert使用.
- require: 0.8之前抛出异常的方法:很好用, gas随着描述异常的字符串的长度增加，比error命令要高。使用方法 require(检查条件， "异常的描述")
- assert: 不知道异常信息.

# 事件 Event
两个特点:
- 响应
- 经济.
### EVM log
包含topics, 数据data.

# 知识点
## 库合约
库函数是一种特殊的合约，为了提升solidity 代码的复用性和减少gas而存在。库合约一般都是一些好用的函数合集(库函数)
1. 不能存在状态变量
2. 不能够继承或者被继承.
3. 不能接收以太币.
4. 不可以被销毁.
5. 可以包含结构和枚举。
只在特定地址部署一次，代码被各种合约重用。

### 使用
using for 指令: using A for B; 附加库A到类型B=>库A中的函数会自动添加为N类型变量的成员，可以直接调用。调用的时候，这个变量会被当作第一个参数传递给函数.
或者通过库合约名屌用库函数.
String: 将uint256转换为String
Address: 判断某个地址是否为合约地址
Create2:更安全的使用Create2 EVM opcode
Arrays: 跟数组相关的库函数.

## import
利用import导入其他合约中的全局符号(外部源代码)

## 接收 ETH recieve和fallback
0.6.4版本之前，只有fallback()函数。0.6之后solidity才将fallback()函数拆分成receive()和fallback()两个函数.
solidity支持两种特殊的回调函数: receive()和fallback().
1. 接收ETH
2. 处理合约中不存在的函数调用.(代理合约 proxy contract)

### recieve
只用于处理接收ETH.
- 一个合约最多只有一个receive()函数，声明方式与一般函数不一样，不需要function关键字:
- recieve() external payable {...} 不能有参数，不能有返回值，必须包含external和payable

### fallback
在屌用合约不存在的函数时被触发。可用于接收ETH,
- 必须由external 

## send ETH
接收方地址.transfer()/send()/call()
transfer(), send(), call() 其中call()是被鼓励的用法.
(bool success, ) = recipient.call{value:amt}("");
require(success, "Transfer failed.");
transfer(), send()的gas限制在2300, 如果对方receive()调用复杂则可能失败.
- transfer() 失败会异常回滚
- send() 返回true/false
- call() 返回(bool, data)
## 已知合约代码(或接口)和地址的情况下调用其他合约的函数
1. 传入目标合约地址，生成目标合约的引用，然后调用目标函数


## call
call是address类型的低级成员函数，用来与其他合约交互.
- 返回值(bool, data)
- call是solidity官方推荐的通过触发fallback或receive函数发送ETH的方法.
- 目标合约地址.call(二进制编码)
二进制编码: abi.encodeWithSignature('函数签名'， 逗号分隔的具体参数.)

abi.encodeWithSignature("f(uint256,address)", _x, _addr)

目标合约地址.call{value:发送数额, gas:gas数额}(二进制编码);

## delegatecall
- 用户A通过合约B来delegate call合约C的时候，执行的是合约C的函数，context也是合约B的,msg.sender是A的地址，并且如果函数改变一些状态变量，产生的效果会作用域合约B的变量上。
- delegatecall在调用合约时可以指定交易发送的gas, 但不能指定发送的ETH数额。

应用场景:
1. 代理合约 proxy contract.

## 合约中创建合约
create和create2.
Contract x = new Contract{value: _value}(params)

create2:
使我们在智能合约部署在以太坊网络之前就能预测合约的地址：

create的新合约的地址: = hash(创建者地址，nonce)

create2: = hash("0xFF", 创建者地址，salt, bytecode): 如果创建者使用create2
Contract x = new Contract{salt: _salt, value: _value}(params)

## ABI编码解码
编码:abi.encode, abi.encodePacked, abi.encodeWithSignature, abi.encodeWithSelector.
解码: abi.decode, 
encode: ABI被设计出来跟智能合约交互， 他将每个参数填充为32byte的数据，并拼接在一起.
encodePacked: 省略了很多0. 节省空间不与合约交互，例如算一些数据的hash时。
encodewithSignature: 第一个参数为函数签名:低昂调用其他合约可以使用。在encode前面加了选择器.
### 使用场景:
1. ABI场配合call来实现对合约的底层带哦用.
address(contract).staticcall(data)
2. ethers.js常用ABI实现合约的导入和函数的调用.

const wavePortalContract = new ethers.Contract(contractAddress, contractABI, signer);
const waves = await wavePortalContract.getAllWaves();
3. 对不开源合约进行反编译后，某些函数无法查到函数签名，可以通过ABI进行调用.

## try catch

只能用于external函数或创建合约时: constructor(被视为external函数)

## ERC20
来自EIP20, 它实现了代币转账的基本逻辑:
- 余额
- 转账
- 授权转账
- 总供给
- 代币信息(可选)

### IERC20是ERC20代币标准的接口合约.
- 两个event, Transfer, Approval

# ERC165 standard interface detection
- 如何识别接口
- 如何发布其实现的接口
- 如何检测是否实现ERC-165
- 如何检测是否实现指定接口

interface IERC721Receiver: 目标合约必须实现IERC721Receiver接口才能接收ERC721代币.不然会revert.

