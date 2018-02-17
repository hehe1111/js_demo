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

只要按下鼠标，则 `using = true`；否则，`using = false`。
```javascript
canvas.onmousedown = function (e) {
    // x y
    if (eraserEnabled) {
        using = true; // 用于 onmousemove 事件中的 using
        // 擦除
    } else {
        using = true; // 用于 onmousemove 事件中的 using
        // 画
    }
}

canvas.onmousemove = function (e) {
    // x y
    if (eraserEnabled) {
        if (using) {
            // 擦除。只有当 eraserEnabled 和按下鼠标同时满足时。
        }
    } else {
        if (using) {
            // 画
        }
    }

}

canvas.onmouseup = function (e) {
    using = false;
}
```

---

- [CanvasRenderingContext2D.clearRect()](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/clearRect)
```javascript
// ctx.clearRect(x, y, width, height)
// 减 5 是为了将清除区域的中心与鼠标顶点对齐
context.clearRect(x-5, y-5, 10, 10);
```