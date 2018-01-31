# 05 - Flex Panel Gallery 💪

> JavaScript30仿写：
>
> [JavaScript30](https://javascript30.com) 教程原作者：[Wes Bos](https://github.com/wesbos)    
> 完整指南在 [GitHub](https://github.com/wesbos/JavaScript30)  
> 中文参考指南：[GitHub](https://github.com/soyaine/JavaScript30)  
> 作者：[缉熙Soyaine](https://github.com/soyaine)

第五篇开坑于：2017.12.05

[查看背景图片来源请点击此链接](https://dummyimage.com/)

[参考链接](https://github.com/soyaine/JavaScript30/tree/master/05%20-%20Flex%20Panel%20Gallery)

- [2.0 版改进参考](https://github.com/soyaine/JavaScript30/tree/master/05%20-%20Flex%20Panel%20Gallery#延伸思考)

[demo 预览链接](https://hehe1111.github.io/js_demo/js30/05%20-%20Flex%20Panel%20Gallery/)

[demo2.0 预览链接](https://hehe1111.github.io/js_demo/js30//05%20-%20Flex%20Panel%20Gallery/version2.0/)


## JS 重点：

- [Element.classList.toggle() - MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/classList)
> toggle ( String [, force] )
>
> 当只有一个参数时：切换 class value; 即如果类存在，则删除它并返回false，如果不存在，则添加它并返回true。
>
> 当存在第二个参数时：如果第二个参数的计算结果为true，则添加指定的类值，如果计算结果为false，则删除它


### bug 产生原因思考：
- [初始版本](https://hehe1111.github.io/js_demo/js30/05%20-%20Flex%20Panel%20Gallery/)中：

    1. 所有栏均处于未打开状态时，快速双击某一栏，在第一击时，会先添加`.open`类；
    之后紧接着的第二击会删除第一击添加的`.open`类，此时也会添加`.open-active`类。
    由于双击太快，类的添加与删除变化太快，导致`.open`类的样式来不及完整显示出来，
    最终导致的是，栏两边**往里**缩了一下后回弹（此时`.open`类已被删除），
    但不会再打开了，栏宽度维持不变。同时，由于`.open-active`类的添加，导致了文字飞入。
    此时再次快速双击，`.open`类先添加后删除，栏两边仍会往里缩了一下后回弹，
    仍不会打开，之后`.open-active`类会被删除，文字飞出。
    即**快速双击时，每次单击都会增或删`.open-active`类，但是快速增和删
    （注意不是或）会导致触发一次`transitionend`事件，
    因此导致每两次连续单击才会增或删`.open-active`类。**

    2. 当栏处于打开状态时，此时文字在`.open-active`类作用下已飞入，此时再快速双击，
    则栏维持打开状态，文字飞出。
    原理仍是`.open`类的删和增导致栏两边**往外**扩展了一下后回弹，`.open-active`类被删除，导致文字飞出。

## HTML&CSS 重点：

### Flex 布局

```javascript
.panels {
    ...
    display: flex;
}
```
容器各属性默认样式：

- `flex-direction: row;` 即水平方向，从左起。

- `flex-wrap: nowrap;` 不换行。

- `flex-flow: row nowrap;` 以上两者的简写样式。

- `justify-content: flex-start;` 左对齐。

- `align-items: stretch;` 如果项目未设置高度或设为auto，将占满整个容器的高度。

- `align-content: stretch;` 定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

项目各属性默认样式：

 - `order: 0;` 定义项目的排列顺序。数值越小，排列越靠前。

 - `flex-grow: 0;`定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。

 - `flex-shrink: 1;`定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。

 - `flex-basis: auto;`项目的本来大小。

 - `flex: 0 1 auto;`前面三者的简写形式。后两个属性可选。该属性有两个快捷值：`auto (1 1 auto)` 和 `none (0 0 auto)`。建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。

 - `align-self: auto;`表示继承父元素的`align-items`属性，如果没有父元素，则等同于`stretch`。该属性可能取6个值，除了auto，其他都与align-items属性完全一致。

以上内容均来源于[Flex 布局教程：语法篇 - 阮一峰](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
