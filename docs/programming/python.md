## 数据类型
不可变: Number(int, float, complex), String, Tuple
可变: List, Dictionary Set

- 数字类型是不允许改变的，改变之后重新分配存储空间，可以使用del删除引用。

list: [e,e,e]
tuple: (e,e,e)

### set
- 使用大括号,或者set()函数
- 无序，唯一.

创建
```
parame = {value01,value02,...}
或者
set(value)

```

examples:
```
sites = {'Google', 'Taobao', 'Runoob', 'Facebook', 'Zhihu', 'Baidu'}

print(sites)   # 输出集合，重复的元素被自动去掉

# 成员测试
if 'Runoob' in sites :
    print('Runoob 在集合中')
else :
    print('Runoob 不在集合中')

# set可以进行集合运算
a = set('abracadabra')
b = set('alacazam')
print(a)
print(a - b)     # a 和 b 的差集
print(a | b)     # a 和 b 的并集
print(a & b)     # a 和 b 的交集
print(a ^ b)     # a 和 b 中不同时存在的元素
```

### Dictionary
使用{}创建的key:value pair
或者使用dict()
```
#!/usr/bin/python3

dict = {}
dict['one'] = "1 - 菜鸟教程"
dict[2]     = "2 - 菜鸟工具"

tinydict = {'name': 'runoob','code':1, 'site': 'www.runoob.com'}

print (dict['one'])       # 输出键为 'one' 的值
print (dict[2])           # 输出键为 2 的值
print (tinydict)          # 输出完整的字典
print (tinydict.keys())   # 输出所有键
print (tinydict.values()) # 输出所有值
```

构造函数:dict(d)
d可以是元素的列表，集合，或者元组.
```
>>> dict([('Runoob', 1), ('Google', 2), ('Taobao', 3)])
{'Runoob': 1, 'Google': 2, 'Taobao': 3}
>>> {x: x**2 for x in (2, 4, 6)}
{2: 4, 4: 16, 6: 36}
>>> dict(Runoob=1, Google=2, Taobao=3)
{'Runoob': 1, 'Google': 2, 'Taobao': 3}
```

### 类型转换
- int(x)
- float(x)
- complex(real, [,img])
- str(x)
- repr(x)
- eval(x)
- tuple(s)
- lsit(s)
- set(s)
- fronzenset(s)
- chr(x)
- ord(x)
- hex(x)
- oct(x)

## 推导式子
一种独特的数据处理方式，从一个序列构建另一个新的数据序列.
- list推导式
- dict推导式
- set推导式
- tuple推导式

### 列表推导式
```
[表达式 for 变量 in 列表]
[out_exp_res for out_exp in input_lsit]

或者
[表达式 for 变量 in 列表 if 条件]
[out_exp_res for out_exp in input_list if condition]
[结果值1 if 判断条件 else 结果2  for 变量名 in 原列表]


# exmaple
>>> names = ['Bob','Tom','alice','Jerry','Wendy','Smith']
>>> new_names = [name.upper()for name in names if len(name)>3]
>>> print(new_names)
['ALICE', 'JERRY', 'WENDY', 'SMITH']

>>> multiples = [i for i in range(30) if i % 3 == 0]
>>> print(multiples)
[0, 3, 6, 9, 12, 15, 18, 21, 24, 27]

list1 = ['python', 'test1', 'test2']
list2 = [word.title() if word.startswith('p') else word.upper() for word in list1]
print(list2)
```

### 字典推导式
`{key_expr: value_expr for value in collection}`
或者
`{key_expr: value_expr for value in collection if condition}`
example:
```
listdemo = ['Google','Runoob', 'Taobao']
# 将列表中各字符串值为键，各字符串的长度为值，组成键值对
>>> newdict = {key:len(key) for key in listdemo}
>>> newdictx
{'Google': 6, 'Runoob': 6, 'Taobao': 6}
>>> dic = {x: x**2 for x in (2, 4, 6)}
>>> dic
{2: 4, 4: 16, 6: 36}
>>> type(dic)
<class 'dict'>
```

### 集合推导式
`{expression for item in Sequence}`
or
`{expression for item in Sequence if conditional}`

```
>>> setnew = {i**2 for i in (1,2,3)}
>>> setnew
{1, 4, 9}

>>> a = {x for x in 'abracadabra' if x not in 'abc'}
>>> a
{'d', 'r'}
>>> type(a)
<class 'set'>
```

### tuple推导式
`(expression for item in Sequence)`
or
`(expression for item in Sequence if conditional)`
可以利用range区间，tuple, list, dict, set等数据类型，快速生一个满足制定需求的tuple.



## 运算符
- 成员运算符 in , not in
- 身份运算符 is , id()

in, not in用来测试是否在制定序列中.

## Number
### 数学函数: math.
- abs(x)
- ceil(x)
...

### 随机数函数
- choice(seq)
### 三角函数

### 数学常量

