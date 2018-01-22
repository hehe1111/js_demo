# 15 - LocalStorage

> JavaScript30仿写：
>
> [JavaScript30](https://javascript30.com) 教程原作者：[Wes Bos](https://github.com/wesbos)    
> 完整指南在 [GitHub](https://github.com/wesbos/JavaScript30)  
> 中文参考指南：[GitHub](https://github.com/soyaine/JavaScript30)  
> 作者：[缉熙Soyaine](https://github.com/soyaine)

第十五篇开坑于：2017.12.30

[参考链接](https://github.com/soyaine/JavaScript30/tree/master/15%20-%20LocalStorage)

[demo 预览链接](https://hehe1111.github.io/js_demo/js30/15%20-%20LocalStorage/)

## 记录：
- `svg`图像可以有内边距(padding)
    - `fill`属性
    - `background-color`属性

- [LocalStorage](https://developer.mozilla.org/zh-CN/docs/Web/API/Storage/LocalStorage)
    - localStorage.setItem()
    - localStorage.getItem()

- [JSON](http://javascript.ruanyifeng.com/stdlib/json.html) | [查看MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON)
    - JSON.stringify()
    - JSON.parse()

- 页面`HTML`内容的实时更新：
    - 在全局环境下及各函数中调用`populateList`函数。
    - 在全局环境下调用，则会在一开始就替换掉原有的文本`Loading Tapas...`
