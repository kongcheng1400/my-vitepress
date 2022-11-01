# Solidity

## specifiers:
#### Solidity:函数. 

### 函数修饰符: 
State可见行: public, internal, private.
函数类型： 
```
function <function name>(<parameter types>) {internal|external|public|private} [pure|view|payable] [returns (<return types>)]
```
注意returns, return的区别.


### 数据位置和变量的作用域: 
storage, memory, calldata

合约内函数外可以不写位置，缺省为状态变量, storage.
函数内可以不写位置，缺省为memory.

state variable, local variable, global variable.

- local variable:函数内声明, 局部变量.
- state variable: 合约内，函数外.
- global variable: solidity 预留的关键字. msg.sender, block.number, msg.data.

### visibility
缺省情况下为internal；合约内的函数必须明确可见性：

External/Public函数有两个成员：.address, .selector

Function Visibility specifiers: public, private, external, internal(相对于contract来讲.), default: internal

external(contract interface, transactions, can’t be called internally-f(). this.f()可以, only message calls), public(can callinternally or message calls), internal(可以使用内部参数:例如mapping, storage引用), private

Internal与external: 合约外部的调用, message call.{value: 10, gas: 10000}, payable, 使用this.f()

external与public的区别:public可以被合约内调用. 

(stateMutability: view/pure/payable/nonpayable), stateMutability: default nonpayable

### modifier/构造函数
修饰符:权限管理/require(必须满足某些条件否则revert), modifier. 两个特殊函数:receive, fallback.
- 运行函数前的检查，例如地址，变量，余额等。





Payable: 这个public函数能收ETH,或者这个合约包含构造函数和fallback函数.

## reference types
- reference types vs value types: 引用类型的值可以通过不同的名字改变。值类型则每次得到单独的一份copy.
- 包含array, structs, mappings. 使用引用类型必须表明存储区域. memory(函数lifetime), storage(contract lifetime), calldata
- 赋值或者类型转换改变数据位置总会导致copy操作.

### 数组
固定长度和可变长度.

注意与其他语言的区别: uint[][5]:含有5个可变长度数组的数组。
bool[2][]:包含paris的动态数组.
```
//固定长度:
uint[8] array1;
//可变长度:
unit[] array4;
```

### 创建数组
allocating memory Arrays:
new
```
unit[] memory array8 = new uint[](5);
bytes memory array9 = new bytes(9);
```

字面常数:
`[1,2,3]`: solidity中如果一个元素没有指明type的时候,默认为最小单位，所以.`[uint(1),2, 3]`

### bytes, string
bytes: 任意长度raw byte数据, string: 任意长度utf-8 data.
bytes, string不是值类型，是数组/reference type.

### 数组成员
- length: memory数据的长度在创建后市固定的.
- push(), pop(): 动态数组和bytes有push(), pop()  

## event
`event Transfer(address indexed from, address indexed to,uint256 value)`
indexed关键字.


## struct 

## 函数 

Error handling: Assert, Require, Revert, and Exceptions.
State-reverting exceptions

### Function modifiers:
Declarative way to change the behaviour: eg: 在执行函数前检查某条件.

Free functions:
合约外定义的函数是free functions: 隐式internal visibility. 代码包含在所有调用它们的合约里面，就像internal library functions.(编译器会把函数代码添加在调用她们的地方.)
只不过没有this.


### Special functions:(不带function关键字.)
Receive functions: receive() external payable {}, 如果没有这个函数: payable fallback function.

Fallback function: 
fallback() external [payable] {} or fallback(bytes calldata input) external [payable] returns (bytes memory output)


### State variable:
State visibility: public, internal, private (this.s调用getter,而s是直接访问storage)

Constant and immutable state variables: 编译器不保留storage slot. 直接用值代替.

Chiper than normal statevariables. 保留为32bytes. 只支持值类型和strings.

State variable:缺省storage(存储在区块链上.)


## Library:
只部署一次，代码可以使用ELEGATECALL复用。
DELEGATECALL:code is executed in the calling contract

### 继承及OOP:
Solidity:
Is, 使用virtual 来override.

### 接口 EIP165
规则:
1. 不能包含状态变量
2. 不能包含构造函数
3. 不能继承除接口外其他合约
4. 所有函数必须是external且不能有函数体
5. 继承接口的合约必须实现接口定义的所有功能.
接口是智能合约的骨架，定义了合约的功能以及如何处罚它们。
- 接口提供了bytes4选择器以及基于它们的函数签名
- 接口ID.

ERC721 接口合约定义了3个event，9个function.没有函数体。

## 特殊函数

### error handling
三种方法: error, require, assert
```
error TransferNotOwner(address sender);

function transferOwner1(uint tokenId, address newOwner) public {
    if (_owners[tokenId] != msg.sender) {
        revert TransferNotOwner();
    }
    _owners[tokenId] = newOwner;
}
//require 重写:
function transerOwner2(uint256 tokenId, address newOwner) public {
    require(_owners[tokenId] == msg.sender, "Transfer Not Owner");
    _owners[tokenId] = newOwner;
}
//assert:一般用于debug,不能解释原因:
function transferOwner3(uint256 tokenId, address newOwner) public {
    assert(_owners[tokenId] == msg.sender);
    _owners[tokenId] = newOwner;
}

```
### 接收ETH
receive(), fallback()
`receive() external payable {} //只接收，没有数据给它`
`fallback() external payable {} 合约不存在的函数， proxy contract//`

### send ETH
- transfer(), send(), call()

### library
与普通合约的区别:



ABI interface. Import
Enums, Events, Try/catch, function selectors, abi.encode/decode, hashing, Yul/assembly.