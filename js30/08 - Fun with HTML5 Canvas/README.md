# 08 Fun with HTML5 Canvas

> JavaScript30仿写：
>
> [JavaScript30](https://javascript30.com) 教程原作者：[Wes Bos](https://github.com/wesbos)    
> 完整指南在 [GitHub](https://github.com/wesbos/JavaScript30)  
> 中文参考指南：[GitHub](https://github.com/soyaine/JavaScript30)  
> 作者：[缉熙Soyaine](https://github.com/soyaine)

第八篇开坑于：2017.12.12

[参考链接](https://github.com/soyaine/JavaScript30/tree/master/08%20-%20Fun%20with%20HTML5%20Canvas)

[demo 预览链接](https://hehe1111.github.io/js_demo/js30/08%20-%20Fun%20with%20HTML5%20Canvas/)

## 记录：
- [`<color>`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value#%E7%AA%9C%E6%94%B9)
- [Canvas](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API)
- [CanvasRenderingContext2D](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D)
- [HTMLCanvasElement.getContext()](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCanvasElement/getContext#%E8%AF%AD%E6%B3%95)：返回canvas 的上下文或者返回 null 如果上下文没有定义。[参考例子](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCanvasElement/getContext#%E4%BE%8B%E5%AD%90)
    - [CanvasRenderingContext2D.lineWidth](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineWidth)：线的宽度
    - [CanvasRenderingContext2D.lineCap](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineCap)：线的末尾
    - [CanvasRenderingContext2D.lineJoin](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin)：线的拐点
    - [CanvasRenderingContext2D.strokeStyle](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/strokeStyle)：边框的颜色
    - [CanvasRenderingContext2D.fillStyle](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/fillStyle)：图形填充颜色
    - [CanvasRenderingContext2D.beginPath()](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/beginPath)：通过清空子路径列表开始一个新路径的方法。
    - [CanvasRenderingContext2D.moveTo()](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/moveTo)：将一个新的子路径的起始点移动到`(x，y)`坐标的方法。
    - [CanvasRenderingContext2D.lineTo()](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineTo)：使用直线连接子路径的终点到`(x，y)`坐标的方法（并不会真正地绘制）。
    - [CanvasRenderingContext2D.stroke()](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/stroke)：根据当前的画线样式，绘制当前或已经存在的路径的方法。

---

- [Window.innerWidth](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/innerWidth)：浏览器**视口（viewport）**宽度（单位：像素），如果存在垂直滚动条则**包括**它。是**只读**属性，无默认值。
    - [备注](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/innerWidth#Notes)
- [Window.innerHeight](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/innerHeight)：浏览器窗口的**视口（viewport）**高度（以像素为单位），如果存在水平滚动条，则**包括**它。

- [event.type](https://developer.mozilla.org/zh-CN/docs/Web/API/Event/type)：**只读**属性，返回一个字符串, 表示该事件对象的事件类型。
- [MouseEvent.offsetX](https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent/offsetX)：**只读**属性，规定了事件对象与**目标节点的内填充边**（padding edge）在 X 轴方向上的偏移量。
- [MouseEvent.offsetY](https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent/offsetY)：**只读**属性，规定了事件对象与**目标节点的内填充边**（padding edge）在 Y 轴方向上的偏移量。
- [TouchEvent.changedTouches](https://developer.mozilla.org/zh-CN/docs/Web/API/TouchEvent/changedTouches)
- [Touch.clientX](https://developer.mozilla.org/zh-CN/docs/Web/API/Touch/clientX)：返回触点相对于**可见视区(visual viewport)**左边沿的的X坐标。 **不包括**任何滚动偏移。这个值会根据用户对可见视区的缩放行为而发生变化。
- [Touch.clientY](https://developer.mozilla.org/zh-CN/docs/Web/API/Touch/clientY)：返回触点相对于**可见视区(visual viewport)**上边沿的的Y坐标. **不包括**任何滚动偏移.这个值会根据用户对可见视区的缩放行为而发生变化.
- [触摸事件的类型](https://developer.mozilla.org/zh-CN/docs/Web/API/TouchEvent#%E8%A7%A6%E6%91%B8%E4%BA%8B%E4%BB%B6%E7%9A%84%E7%B1%BB%E5%9E%8B)
