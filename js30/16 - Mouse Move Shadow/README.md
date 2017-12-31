# 16 - Mouse Move Shadow

> JavaScript30仿写：
>
> [JavaScript30](https://javascript30.com) 教程原作者：[Wes Bos](https://github.com/wesbos)    
> 完整指南在 [GitHub](https://github.com/soyaine/JavaScript30)  
> 中文参考指南：[GitHub](https://github.com/soyaine/JavaScript30)  
> 作者：[缉熙Soyaine](https://github.com/soyaine)

第十六篇开坑于：2017.12.30

[参考链接](https://github.com/soyaine/JavaScript30/tree/master/16%20-%20Mouse%20Move%20Shadow)

[demo 预览链接 - ES5 版](https://hehe1111.github.io/js_demo/js30/16%20-%20Mouse%20Move%20Shadow/)

[demo 预览链接 - ES6 版](http://chendongming.info/js_demo/js30/16%20-%20Mouse%20Move%20Shadow/index_es6.html)

## 记录：
- [HTMLElement.contentEditable](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/contentEditable)
- [`text-shadow`属性](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow)
    - 字体本身变大，阴影（text-shadow）也会跟着变大。
- [Element.offsetHeight，Element.offsetWidth](http://javascript.ruanyifeng.com/dom/element.html#toc11)：元素的垂直高度和水平宽度
- [Element.offsetLeft，Element.offsetTop](http://javascript.ruanyifeng.com/dom/element.html#toc12)
- [Element.offsetParent](http://javascript.ruanyifeng.com/dom/element.html#toc19)
- [mousemove 事件](http://javascript.ruanyifeng.com/dom/event-type.html#toc2)
- [MouseEvent.offsetX](https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent/offsetX)：事件对象与目标节点的内填充边（padding edge）在 X 轴方向上的偏移量。
- [MouseEvent.offsetY](https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent/offsetY)：事件对象与目标节点的内填充边（padding edge）在 Y 轴方向上的偏移量。

- `div`的高度覆盖了视口，所以可以在其上面直接监听`mousemove`事件；另外就是`Element.offsetLeft`，`Element.offsetTop`两个属性则都为零：
```
.hero {
    //
    min-height: 100vh;
    //
}
```
