# 05 - Flex Panel Gallery 💪

> JavaScript30仿写：
>
> [JavaScript30](https://javascript30.com) 教程原作者：[Wes Bos](https://github.com/wesbos)    
> 完整指南在 [GitHub](https://github.com/soyaine/JavaScript30)  
> 中文参考指南：[GitHub](https://github.com/soyaine/JavaScript30)  
> 作者：[缉熙Soyaine](https://github.com/soyaine)

第五篇开坑于：2017.12.05

[查看背景图片来源请点击此链接](https://dummyimage.com/)

[参考链接](https://github.com/soyaine/JavaScript30/tree/master/05%20-%20Flex%20Panel%20Gallery)

- [2.0 版改进参考](https://github.com/soyaine/JavaScript30/tree/master/05%20-%20Flex%20Panel%20Gallery#延伸思考)

[demo 预览链接](https://hehe1111.github.io/js_demo/js30/05%20-%20Flex%20Panel%20Gallery/)


## JS 重点：

- [Element.classList.toggle() - MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/classList)
> toggle ( String [, force] )
>
> 当只有一个参数时：切换 class value; 即如果类存在，则删除它并返回false，如果不存在，则添加它并返回true。
>
> 当存在第二个参数时：如果第二个参数的计算结果为true，则添加指定的类值，如果计算结果为false，则删除它

## HTML&CSS 重点：

### Flex 布局

```
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
