# 14 - JavaScript References VS Copying

> JavaScript30仿写：
>
> [JavaScript30](https://javascript30.com) 教程原作者：[Wes Bos](https://github.com/wesbos)    
> 完整指南在 [GitHub](https://github.com/soyaine/JavaScript30)  
> 中文参考指南：[GitHub](https://github.com/soyaine/JavaScript30)  
> 作者：[缉熙Soyaine](https://github.com/soyaine)

第十四篇开坑于：2017.12.28

[参考链接](https://github.com/soyaine/JavaScript30/tree/master/14%20-%20JavaScript%20References%20VS%20Copying)

[demo 预览链接](https://hehe1111.github.io/js_demo/js30/14%20-%20JavaScript%20References%20VS%20Copying/)

## 记录：
### 复制一个数组：
1. [Array.prototype.slice()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
2. [Array.prototype.concat()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
    - `[].concat(players)`：在一个空数组上调用`concat()`方法。
3. 使用 ES6 的扩展运算符语法：`const team4 = [...players];`
4. [Array.from()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from)

### 复制一个对象：
1. [Object.assign()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
2. [JSON](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON)
    - JSON.stringify()：解析对象，转成字符串
    - JSON.parse()：解析字符串，转成对象
