# 10 - Hold Shift and Check Checkboxes

> JavaScript30仿写：
>
> [JavaScript30](https://javascript30.com) 教程原作者：[Wes Bos](https://github.com/wesbos)    
> 完整指南在 [GitHub](https://github.com/wesbos/JavaScript30)  
> 中文参考指南：[GitHub](https://github.com/soyaine/JavaScript30)  
> 作者：[缉熙Soyaine](https://github.com/soyaine)

第十篇开坑于：2017.12.20

[参考链接](https://github.com/soyaine/JavaScript30/tree/master/10%20-%20Hold%20Shift%20and%20Check%20Checkboxes)

[demo 预览链接](https://hehe1111.github.io/js_demo/js30/10%20-%20Hold%20Shift%20and%20Check%20Checkboxes/)

## 记录：
- [Array.from()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from)：从一个类似数组或可迭代对象中创建一个**新的数组**实例。
- [Array.prototype.slice()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)：返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象。原数组**不会**被修改。
- [MouseEvent.shiftKey](https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent/shiftKey)：是**只读**属性，指出触发鼠标事件时**是否按住**了 `shift` 键。

- 重点是这两句：
```javascript
    let start = checkboxArr.indexOf(this);
    let end = checkboxArr.indexOf(lastChecked);
```
