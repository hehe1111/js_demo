- [预览链接](http://hehe1111.github.io/js_demo/canvas-demo/using-canvas-as-canvas/index.html)

- [Canvas-参考链接](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)
> 画布栅格（canvas grid）以及坐标空间  
> `canvas`元素**默认被网格所覆盖**。通常来说网格中的一个单元相当于`canvas`元素中的一像素。栅格的起点为左上角（坐标为（0,0））。所有元素的位置都相对于原点定位。
>
> 调用`fill()`函数时，所有没有闭合的形状都会自动闭合，所以你不需要调用`closePath()`函数。但是调用`stroke()`时不会自动闭合。

- [CanvasRenderingContext2D](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D)

- [参考 demo](https://github.com/hehe1111/js_demo/blob/master/js30/08%20-%20Fun%20with%20HTML5%20Canvas/README.md)

- `fill()`、`stroke()`：以最近的填充颜色为基准

- [MouseEvent.clientX](https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent/clientX)：以视口为基准。
> 是**只读**属性， 它提供事件发生时的**应用客户端区域的水平坐标** (与页面坐标不同)。例如，**不论页面是否有水平滚动**，当你点击客户端区域的左上角时，鼠标事件的 `clientX` 值都将为 0 。
- [MouseEvent.clientY](https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent/clientY)
> 是只读属性， 它提供事件发生时的应用客户端区域的垂直坐标 (与页面坐标不同)。例如，当你点击客户端区域的左上角时，鼠标事件的 `clientY` 值为 0 ，这一值与页面是否有垂直滚动无关。

---

```javascript
// 获取页面宽高的方法之一
var pageWidth = document.documentElement.clientWidth;
var pageHeight = document.documentElement.clientHeight;
```

---

### PC 端鼠标事件
只要按下鼠标，则 `clicked = true`；否则，`clicked = false`。
```javascript
canvas.onmousedown = function (e) {
    clicked = true; // 用于 onmousemove 事件中的 clicked
    // x y
    if (eraserEnabled) {
        // 擦除
    } else {
        // 画
    }
}

canvas.onmousemove = function (e) {
    // x y
    if (!clicked) { return } // 如果没有按下鼠标，即使 onmousemove 事件发生也不执行擦除功能
    //
}

canvas.onmouseup = function (e) {
    clicked = false;
}
```

---

- [CanvasRenderingContext2D.clearRect()](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/clearRect)
```javascript
// ctx.clearRect(x, y, width, height)
// 减 5 是为了将清除区域的中心与鼠标顶点对齐
context.clearRect(x-5, y-5, 10, 10);
```

---

### 添加 `viewport`
在移动端加载时，网页默认会缩放，以适应手机屏。

```html
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
```
不加，则`document.documentElement.clientWidth`等于 980；加上，`document.documentElement.clientWidth`才真正等于`device-width`

---

### 移动端手指触摸事件
```javascript
    canvas.ontouchstart = function () {
        //
    }

    // ontouchmove 事件以 ontouchstart 事件为前提
    canvas.ontouchmove = function () {
        // ontouchmove 事件一定是以 ontouchstart 事件为前提的
        // 但是 onmousemove 事件则不需要以 onmousedown 事件为前提也能触发
        // 因此，在鼠标事件中，需要额外的 clicked 变量来辅助判断 onmousedown 事件是否发生
        // 触摸事件中，则不需要额外的 clicked 变量来辅助判断
        // ontouchmove 事件发生，则意味着 ontouchstart 事件已经被触发过了
    }

    canvas.ontouchend = function () {
        //
    }
```

如果设备支持触屏功能，则元素的`ontouchstart`属性值等于 `null`；不支持，则为 `undefined`。

判断方法一：`document.documentElement.ontouchstart === undefined`

方法二：可以借助[`in`运算符](http://javascript.ruanyifeng.com/grammar/object.html#toc10)来判断设备是否支持触屏功能。
```javascript
'ontouchstart' in document.documentElement
// 设备支持触屏，返回 true
// 不支持，返回 false
```

- 触摸事件属性：
    - [TouchEvent.changedTouches](https://developer.mozilla.org/zh-CN/docs/Web/API/TouchEvent/changedTouches)
    - [TouchEvent.targetTouches](https://developer.mozilla.org/zh-CN/docs/Web/API/TouchEvent/targetTouches)
    - [TouchEvent.touches](https://developer.mozilla.org/zh-CN/docs/Web/API/TouchEvent/touches)
    - 以上三个属性均有`clientX`、`clientY`、`pageX`、`pageY`、`radiusX`、`radiusY`、`screenX`、`screenY`属性
