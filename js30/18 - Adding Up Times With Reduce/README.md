# 18 - Adding Up Times With Reduce

> JavaScript30仿写：
>
> [JavaScript30](https://javascript30.com) 教程原作者：[Wes Bos](https://github.com/wesbos)    
> 完整指南在 [GitHub](https://github.com/soyaine/JavaScript30)  
> 中文参考指南：[GitHub](https://github.com/soyaine/JavaScript30)  
> 作者：[缉熙Soyaine](https://github.com/soyaine)

第十八篇开坑于：2018.01.02

[参考链接](https://github.com/soyaine/JavaScript30/tree/master/18%20-%20AddingUpTimesWithReduce)

[demo 预览链接](https://hehe1111.github.io/js_demo/js30/18%20-%20Adding%20Up%20Times%20With%20Reduce/)

[demo-es6 预览链接](https://hehe1111.github.io/js_demo/js30/18%20-%20Adding%20Up%20Times%20With%20Reduce/index_es6.html)

## 记录：

- 数据拷贝：
    1. 使用 emmet 语法：[参考链接](https://docs.emmet.io/cheat-sheet/)
    2. 使用 <kbd>ctrl</kbd> + <kbd>alt</kbd> + 向下箭头 的组合键；复制时，前后复制的数量与能够存放复制内容的位置个数要一致。
- [document.getElementsByTagName()](http://javascript.ruanyifeng.com/dom/document.html#toc23)
> 返回值是一个类似数组的 HTMLCollection 对象，可以实时反映 HTML 文档的变化。如果没有任何匹配的元素，就返回一个空集。

- [parseInt()](http://javascript.ruanyifeng.com/grammar/number.html#toc11)
- [reduce()，reduceRight()](http://javascript.ruanyifeng.com/stdlib/array.html#toc18)

es6 版：
- [Array.from()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
- [Array.prototype.map()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

### 总结：
1. 通过`document.querySelectorAll()`或者是`document.getElementsByTagName()`来获取目标元素集合；
2. 通过 for 循环或是`Array.prototype.map()`来遍历上一步中获得的目标元素集合；
3. 通过`dataset`接口来获取自定义的 HTML 属性，通过`String.prototype.split()`来分离分钟数和秒数；
4. 将所有时间先统一转换为秒数，最后在格式化显示时间之前，转为时分秒，再显示。
5. 除法运算符`/`返回的商有可能是小数，所以要用`Math.floor()`来获取整数部分。
