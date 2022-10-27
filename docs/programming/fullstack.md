
# programming 汇总
::: info
这部分应该是web3 full stack
:::

## Types:
JS:  7 types: number, undefined, boolean, string, symbol, null, Object

Go: int, byte, boolean, string, float

Solidity: int, unit, int8, int256, boolean, fixed, ufixed,fixed128x18, address,address payable, uint160, bytes20, contract

### 组合类型:
Solidity:固定尺寸数组: bytes1… bytes32
在js中没有struct, 在go中有。在solidity中有.

Map, array, struct,  3种data location类型: memory, storage, calldata. 省略则为storage.

Array slices:有点类似于go里面的array slice,但是限制很多.mappings只有storage

#### Solidity最常用
基本类型: Int, uint, boolean, bytes, address

变量的缺省值:
Boo,uint, int, 静态尺寸数组:每个元素都为0.引用类型:bytes, string, 缺省值为空.

Scope:
 遵循C99,从声明到最小{}结束。for循环是个例外，从初始化到for循环结束。函数的参数到函数体结束.
代码块之外声明的可以在声明前看到。
Checked or unchecked:
< 0.8.0: wrap for overflow. ^0.8.0: revert.

### Error:
State-reverting来处理错误.错误bubble up直到被try/catch捕获。例外的是send, call, delegatecall, staticcall. 返回false.(如果调用账户不存在返回true, 必须先检查账户是否存在.)
Error(string), Panic(uint256). Panic via assert and Error via require.
Assert和require可以用来检查条件，throw一个一场。
```
if (!condition) revert CustomError(); 与require 自定义错误.
```
### 函数修饰符: 
State可见行: public, internal, private.
函数类型： 
```
function (<parameter types>) {internal|external} [pure|view|payable] [returns (<return types>)]
```
缺省情况下为internal；合约内的函数必须明确可见性：
External/Public函数有两个成员：.address, .selector
Function Visibility specifiers: public, private, external, internal(相对于contract来讲.)
modifiers:pure, view, payable, constant, immutable, 
控制结构： if else, while, do, for, break, continue, return, 
Internal与external: 合约外部的调用, message call.{value: 10, gas: 10000}, payable, 使用this.f()
external与public的区别:public可以被合约内调用. 
Payable: 这个public函数能收ETH,或者这个合约包含构造函数和fallback函数.
Low-level calls:
函数调用: 
SOlidity:命名参数.
Error handling: Assert, Require, Revert, and Exceptions.
State-reverting exceptions


## Javascript:我的要点
可计算属性, 解构赋值。

### ECMA6:类的定义,继承。
工厂模式，按照特定接口创建对象。(不知道类型)
构造函数模式. 函数声明模式，赋值给变量的函数表达式.
原型模式:每个函数都有一个原型属性(对象)
 Class ES2015(private member: #)
JS的原生引用类型Object, Array, String都在原型上定义了实例方法。

### ES6 modules
Default export,Named export,Renamed export and import, module object, module aggregation, dynamic module loading.
模块只能有一个default export: 可以匿名函数作为缺省导出.
例如:
Import randomSquare from ‘./modules/square.mjs’
相当于: import {default as randomSquare} from ‘./modules/square.mjs’


Renamed export or renamed import: 可以在导出或者导入侧做重命名:
Module export:
Import * as Module from ‘/modules/module.mjs’
使用: Module.f1(), Module.f2()
Module aggregation:
Export {xxx} from ‘./x.mjs’

### 引用类型
基本引用类型: Date, RegExp, 原始值包装对象.
复合引用类型: Array, Map
数组:
动态，任意类型。
两个创建数组的静态方法: Array.from(), Array.of()

迭代器方法: keys(), values(), entries()

复制和填充方法: copyWithin(), fill()

负索引
栈方法:push, pop, 队列方法。

断言函数
迭代方法: every(), filter(), forEach(),map(), some()

### JS函数:

Js没有函数签名。JS的函数参数实际上是一个类数组。arguments
函数声明与函数表达式, 胖箭头函数.

## Solidity

### specifiers:
#### Solidity:函数. 
可见性visibility:(public, extermal, internal, private), (stateMutability: view/pure/payable/nonpayable), 

修饰符:权限管理/require(必须满足某些条件否则revert), modifier. 两个特殊函数:receive, fallback.

View: read and not change state. Pure:not read nor modify. revert 不是state modification

stateMutability: default nonpayable

Default visibility level: internal

#### Function visibility specifier: 
external(contract interface, transactions, can’t be called internally-f(). this.f()可以, only message calls), public(can callinternally or message calls), internal(可以使用内部参数:例如mapping, storage引用), private

State variable:缺省storage(存储在区块链上.)



#### Function modifiers:
Declarative way to change the behaviour: eg: 在执行函数前检查某条件.

Free functions:
合约外定义的函数是free functions: 隐式internal visibility. 代码包含在所有调用它们的合约里面，就像internal library functions.(编译器会把函数代码添加在调用她们的地方.)
只不过没有this.


#### Special functions:(不带function关键字.)
Receive functions: receive() external payable {}, 如果没有这个函数: payable fallback function.

Fallback function: 
fallback() external [payable] {} or fallback(bytes calldata input) external [payable] returns (bytes memory output)


#### State variable:
State visibility: public, internal, private (this.s调用getter,而s是直接访问storage)
Constant and immutable state variables: 编译器不保留storage slot. 直接用值代替.
Chiper than normal statevariables. 保留为32bytes. 只支持值类型和strings.

Library:
只部署一次，代码可以使用ELEGATECALL复用。
DELEGATECALL:code is executed in the calling contract

### 继承及OOP:
JS:
实例，原型，类成员.
在类块中定义的所有内容都会定义在类的原型上。方法定义在类构造函数.
静态类方法, 非常适合做工厂模式.
继承: extends. ES6类为继承内置引用类型提供了顺畅的机制。
Solidity:
Is, 使用virtual 来override.
ABI interface. Import
Enums, Events, Try/catch, function selectors, abi.encode/decode, hashing, Yul/assembly.

=>state variable to defaultvalue/inline. Constructor执行之后，部署到区块链。其中的代码包含所有的公共接口和所有的函数调用可以接触到的函数。不包含构造函数。如果没有构造函数，合约则会有个缺省构造函数。
=>base constructor的参数: 必须指定base constructor的参数: inheritance list or modifer-style, 否则就必须指定为abstract.
=>abstract contracts, interface():与ABI接口更像，两者转换。



## Vue.js

SFC(single file component), logic(js), template(HTML), style(CSS).
Options API and COmposition API.
Options API: a component’s logic: object’s option: data, methods, mounted. Object: this.

### Case sensitivity
Html tags和attributes: 不分大小写.
VUE: Pascalcase. Props: kebab-case

### Components/Vue instance
注册: 使用components option, PascalCase命名.
创建vue instance的传入options对象: data object⇔ instance’s properties, 除了data properties, Vue instance暴露了一些有用的instance properties和方法.以$前缀: $data, $el
Vue instances: 初始化步骤: 数据观察，编译模板，挂载DOM,更新DOM.


Data property: 放reactive state. Data component option, data() 返回一个对象.
在template中，可以引入返回对象的属性, 路径，甚至脚本. {{}}只用于文字

### directive bindings
v-bind:id=”component property” : id attribute ⇔ component property.
Boolean bindings,
动态多属性绑定: v-bind=”component property
Component property也可以是
Dynamically Binding Multiple Attributes: v-bind=”objectOfAttrs”
Calling Functions: call a component-exposed method.
Dynamic argument:如果使用复杂的dynamic argument,最好使用computed property
Specifier:
V-model: form input或者component之间的双向绑定. 属性绑定与事件结合在一起。
V-bind: element attr/component props 到表达式的动态绑定.
V-if:
Watch option:
Directives/arguments/dynamic arguments/modifiers
V-bind, v-html, 
V-bind可以加一个参数，带冒号：v-bind:href = “property”来响应html 元素的attribute的更新.
v-on也可以带参数,简写@events
参数可以使用js 表达式: v-bind:[attributeName], v-on:[eventName]
Directive的参数的后缀:
Class binding: 可以使用property, 或者 computed property.

props, methods, computed
Data option: 组件状态。使用this. Top-level properties. Data option返回的对象。
Methods: this, the component instance. 避免使用箭头函数，否则this 不起作用。在component’s的template中使用。
Methods VS computed properties: computed properties: cached. Methods: called each rendering.

Props: 注册的component的attributes. Component instance的自己的数据。
One-way-down binding:  prevents child components from accidentally mutating the parent’s state.
解决长parent chain问题的props drilling: provide, inject

Event handlers:
Method vs inline detection:foo , method, foo()=> inline
emits option:
Lifecycle hooks/component lifecycle hooks.
Vue CLI/Vue router/
Views:页面  pages connected to routers
Components: 嵌入到页面或者其他组件.
<a => <router-link

Notes:
Don’t use arrow functions on an options property or callback, such as created: () => console.log(this.a) or vm.$watch('a', newValue => this.myMethod()). Since an arrow function doesn’t have a this, this will be treated as any other variable and lexically looked up through parent scopes until found, often resulting in errors such as Uncaught TypeError: Cannot read property of undefined or Uncaught TypeError: this.myMethod is not a function.

Build in components:
Transition, TransitionGroup, KeepAlive, Teleport,Suspense.

Vite express



## Git
Git
Git remote -v
Git remote show origin
git log --oneline --decorate:
Github
配置账户. 2. 配置ssh连接. 3. 初始化本地. 4. Github上创建远程仓库 5. 设置远程仓库.
➜  ~ git config --global user.name
kongcheng1400
➜  ~ git config --global user.email
kongcheng1400@icloud.com
ls -al ~/.ssh : id_rsa, id_rsa.pub

ssh -T git@github.com
//初始化本地仓库.
git init -b main
//配置远程仓库
➜  prj1 git:(main) git remote add origin git@github.com:kongcheng1400/prj1.git
➜  prj1 git:(main) git remote -v
origin	git@github.com:kongcheng1400/prj1.git (fetch)
origin	git@github.com:kongcheng1400/prj1.git (push)
git push -u origin master //推送到远程的master分支。
git push origin --delete main //删除远程分支.
git pull origin master --allow-unrelated-histories
git push -u origin master


## HTML/CSS
选择符: 空格，包含选择符; +, 相邻选择符.
根据状态确定样式: a:hover
属性和值都是区分大小写.
速记属性: font, background,padding, border, margin:允许在一行中设置多个属性值:padding: 10px 15px 15px 5px;(clock wise from the top)
工作过程:
html文件=>DOM=>资源(图片，视频，脚本，样式)=>渲染树.
规则集, 每个声明用分号隔开.
选择器：元素选择器, ID选择器(.#my-id); 类选择器: .my-class; 属性选择器:img[src]
Comma:选择器列表.
: 伪类选择器,伪元素: a:hover,  p::first-line, 
空格：后代组合器.

BOX:
Block box, inline box.

## Nodejs
NPM:
npm config set registry https://registry.npm.taobao.org

