# 07 Array Cardio 💪 指南二

> JavaScript30仿写：
>
> [JavaScript30](https://javascript30.com) 教程原作者：[Wes Bos](https://github.com/wesbos)    
> 完整指南在 [GitHub](https://github.com/wesbos/JavaScript30)  
> 中文参考指南：[GitHub](https://github.com/soyaine/JavaScript30)  
> 作者：[缉熙Soyaine](https://github.com/soyaine)

第七篇开坑于：2017.12.11


## 数组操作方法学习记录二

[demo 预览链接](http://hehe1111.github.io/js_demo/js30/07%20-%20Array%20Cardio%20Day%202/)

[参考链接](https://github.com/soyaine/JavaScript30/tree/master/07%20-%20Array%20Cardio%20Day%202)

[数组操作方法学习记录一](https://github.com/hehe1111/js_demo/tree/master/js30/04%20-%20Array%20Cardio%20Day%201#数组操作方法学习记录一)

- <kbd>F12</kbd>打开开发者工具，查看具体输出结果。

- [Array.prototype.some()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some)：`arr.some(callback[, thisArg])`

    > some 为数组中的每一个元素执行一次 callback 函数，直到找到一个使得 callback 返回一个“真值”（即可转换为布尔值 true 的值）。如果找到了这样一个值，some 将会立即返回 true。否则，some 返回 false。callback 只会在那些”有值“的索引上被调用，不会在那些被删除或从来未被赋值的索引上调用。
    >
    > some 被调用时**不会**改变数组。

- [Array.prototype.every()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every)：`arr.every(callback[, thisArg])`

    > every 方法为数组中的每个元素执行一次 callback 函数，直到它找到一个使 callback 返回 false（表示可转换为布尔值 false 的值）的元素。如果发现了一个这样的元素，every 方法将会立即返回 false。否则，callback 为每一个元素返回 true，every 就会返回 true。callback 只会为那些已经被赋值的索引调用。不会为那些被删除或从来没被赋值的索引调用。
    >
    > every 被调用时**不会**改变原数组。

- [Array.prototype.find()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find)：`arr.find(callback[, thisArg])`

    > find 方法对数组中的每一项元素执行一次 callback 函数，直至有一个 callback 返回 true。当找到了这样一个元素后，该方法会立即返回这个**元素的值**，否则返回 undefined。注意 callback 函数会为数组中的每个索引调用即从 0 到 lengh - 1，而不仅仅是那些被赋值的索引，这意味着对于稀疏数组来说，该方法的效率要低于那些只遍历有值的索引的方法。
    >
    > find 方法**不会**改变数组。

- [Array.prototype.findIndex()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)：`arr.findIndex(callback[, thisArg])`

    > findIndex方法对数组中的每个数组索引0..length-1（包括）执行一次callback函数，直到找到一个callback函数返回真实值（强制为true）的值。如果找到这样的元素，findIndex会立即返回该**元素的索引**。如果回调从不返回真值，或者数组的length为0，则findIndex返回-1。 与某些其他数组方法（如Array#some）不同，在稀疏数组中，即使对于数组中不存在的条目的索引也会调用回调函数。
    >
    > findIndex 方法**不会**修改所调用的数组。

- [Array.prototype.slice()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
    - 可选参数：begin, end

    > slice() 方法返回一个从开始到结束（不包括结束）选择的数组的一部分**浅拷贝**到一个新数组对象。原始数组**不会**被修改。

- [Array.prototype.splice()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
```javascript
array.splice(start) // 删除[start，end]的元素。

array.splice(start, deleteCount) // 只删除 deleteCount 个元素

array.splice(start, deleteCount, item1, item2, ...) // 删除后添加
```
> 由被删除的元素组成的一个数组。如果只删除了一个元素，则返回只包含一个元素的数组。如果没有删除元素，则返回空数组。
>
> splice() 方法会**直接对数组进行修改**。
