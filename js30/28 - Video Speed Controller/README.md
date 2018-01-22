# 28 - Video Speed Controller

> JavaScript30仿写：
>
> [JavaScript30](https://javascript30.com) 教程原作者：[Wes Bos](https://github.com/wesbos)    
> 完整指南在 [GitHub](https://github.com/wesbos/JavaScript30)  
> 中文参考指南：[GitHub](https://github.com/soyaine/JavaScript30)  
> 作者：[缉熙Soyaine](https://github.com/soyaine)

第二十八篇开坑于：2018.01.15

[参考链接](https://github.com/soyaine/JavaScript30/tree/master/28%20-%20Video%20Speed%20Controller)

[demo 预览链接](https://hehe1111.github.io/js_demo/js30/28%20-%20Video%20Speed%20Controller/)

## 记录：

- 参考[挑战 11](https://github.com/hehe1111/js_demo/tree/master/js30/11%20-%20Custom%20Video%20Player)

- [flex 布局默认样式](https://github.com/hehe1111/js_demo/tree/master/js30/05%20-%20Flex%20Panel%20Gallery#flex-%E5%B8%83%E5%B1%80)

- [box-shadow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow#Syntax)

- `background`
    - [CSS Gradient Generator](http://www.colorzilla.com/gradient-editor/)

- [text-shadow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-shadow#Syntax)

---

以下均是`MouseEvent`接口上的**只读**属性：
- [MouseEvent.offsetY](https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent/offsetY)：规定了**事件对象**与**目标节点的内填充边（padding edge）**在 Y 轴方向上的偏移量。

`MouseEvent.offsetY`相关：
- [MouseEvent.offsetX](https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent/offsetX)：在 X 轴方向上的偏移量。

---

- [MouseEvent.pageX](https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent/pageX)：相对于**整个文档**的x（水平）坐标以像素为单位的只读属性。这个属性考虑任何页面的水平方向上的**滚动**。
- [MouseEvent.pageY](https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent/pageY)：返回触发事件的位置相对于**整个`document`**的 Y 坐标值。由于其参考物是整个 dom，所以这个值受页面垂直方向的**滚动**影响。

---

- [MouseEvent.clientX](https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent/clientX)：提供事件发生时的应用客户端区域的水平坐标 (**与页面坐标不同**)。例如，不论页面是否有水平滚动，当你点击客户端区域的左上角时，鼠标事件的 clientX 值都将为 0 。
    - 该属性有一个**别名**：[MouseEvent.x](https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent/x)
- [MouseEvent.clientY](https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent/clientY)：提供事件发生时的应用客户端区域的垂直坐标 (**与页面坐标不同**)。例如，当你点击客户端区域的左上角时，鼠标事件的 clientY 值为 0 ，这一值与页面是否有垂直滚动无关。
    - **别名**：[MouseEvent.y](https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent/y)

---

- [MouseEvent.screenX](https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent/screenX)：鼠标相对于**屏幕**坐标系的水平偏移量。
- [MouseEvent.screenY](https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent/screenY)

---

- [MouseEvent.movementX](https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent/movementX)：提供了当前事件和上一个`mousemove`事件之间鼠标在水平方向上的移动值。换句话说，这个值是这样计算的 : `currentEvent.movementX = currentEvent.screenX - previousEvent.screenX`.
- [MouseEvent.movementY](https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent/movementY)

`MouseEvent`接口上的只读属性到此罗列**结束**。


---

- [HTMLElement.offsetHeight](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetHeight)：返回该**元素的像素高度**，高度包含该元素的垂直内边距和边框，且是一个整数。通常，元素的`offsetHeight`是一种元素`CSS`高度的衡量标准，包括元素的**边框、内边距和元素的水平滚动条**（如果存在且渲染的话），**不包含**`:before`或`:after`等伪类元素的高度。
    - [Element.offsetHeight，Element.offsetWidth](http://javascript.ruanyifeng.com/dom/element.html#toc11)

- [Number.prototype.toFixed() - MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)
    - [Number.prototype.toFixed()](http://javascript.ruanyifeng.com/stdlib/number.html#toc4)：参数为指定的**小数位数**。

- [HTMLMediaElement.playbackRate](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLMediaElement/playbackRate)：设置媒体文件**播放时的速率**。这用于实现让用户控制快放、慢放等。 正常播放速率乘以该值表示当前的播放速率，所以`1.0`表示一个正常的播放速率。将`playbackRate`设为负值可以实现倒播。
