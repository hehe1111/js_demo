# 04 Array Cardio 💪

> JavaScript30仿写：
>
> [JavaScript30](https://javascript30.com) 教程原作者：[Wes Bos](https://github.com/wesbos)    
> 完整指南在 [GitHub](https://github.com/soyaine/JavaScript30)  
> 中文参考指南：[GitHub](https://github.com/soyaine/JavaScript30)  
> 作者：[缉熙Soyaine](https://github.com/soyaine)

第四篇开坑于：2017.12.03

[demo 预览链接](https://hehe1111.github.io/js_demo/js30/04%20-%20Array%20Cardio%20Day%201/)

## 学习过程记录

[参考链接](https://github.com/soyaine/JavaScript30/tree/master/04%20-%20Array%20Cardio%20Day%201)

- <kbd>F12</kbd>打开开发者工具，在 Console 面板中，输入`console.table(thing)`,`thing`参数指代`inventors`/`flavours`/`people`/`data`等列表，可以以**表格**形式打印出列表。

- [Array.prototype.filter()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

    - 接受一个函数作为参数。为数组每个元素调用一次该函数，保留所有返回 true 的数组元素。被保留的元素最终一起组成一个**新数组**返回，不会改变原数组。

    - 接受第二个可选的参数：`this`值


- [Array.prototype.map()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

    - 在 MDN 文档中的描述与`Array.prototype.filter()`类似。

    - `map()`返回的也是**新数组**，但是其元素则是原数组的每一元素调用`callback`参数后而得到的结果。

- [Array.prototype.sort()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

    - 会**修改**原数组。

    - 默认排序顺序是根据字符串Unicode码点

        - 数字在大写字母之前，大写字母在小写字母之前。

        - 比较时数字会先被转换为字符串，所以“10”比“2”要靠前。

    - 可接受一个比较函数`compareFunction()`作为参数。

        - compareFunction(a, b) 返回值小于 0 ，则 a 在 b 之前。

        - 等于 0，两者位置不变。

        - 大于 0，a 在 b 之后。

        - 同样的大小关系，设定返回值不同时，排序方式不同，升降序可互换。

- [Array.prototype.reduce()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

    > `reduce()`方法对累加器和数组中的每个元素（从左到右）应用一个函数，将其减少为**单个值**。
    >
    > `arr.reduce(callback[, initialValue])`：注意 callback 的四个参数
    >
    >  如果没有提供初始值，则将使用数组中的第一个元素。在没有初始值的**空数组**上调用 `reduce`将报错。
    >
    > 如果没有提供`initialValue`，`reduce`会从索引1的地方开始执行`callback`方法，跳过第一个索引。如果提供`initialValue`，从索引0开始。
