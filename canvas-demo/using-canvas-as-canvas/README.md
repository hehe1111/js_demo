
画板 - [预览链接](https://hehe1111.github.io/js_demo/canvas-demo/using-canvas-as-canvas/index.html)

- 支持移动端操作
- 使用 Canvas API
- 包含橡皮、换颜色、保存等功能
- 使用原生 JS 开发
- HTML 5 & CSS 3

---

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

```javascript
// 画圈函数
// 参数:：圆心坐标（x，y）  半径  填充、描边颜色
function drawCircle(x, y, radius = 2, color = 'pink') {
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);

    // 点
    context.fillStyle = color;
    context.fill();

    // 圈
    // radius 太小会使圈看起来像点
    // context.strokeStyle = color;
    // context.stroke();
}

// drawCircle() 的 radius 参数必须是
// drawLine() 的 lineWidth 参数的一半
// color 参数默认一致
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

---

- `onclick`事件兼容触屏设备。


---

保存下载图片时，新创建的`a`元素可以不需要作为子元素添加到文档中。

---

### 为画板初始化一个白底
```javascript
function generateWhiteCanvas(context) {
    context.fillStyle = 'white';
    context.beginPath();
    context.moveTo(0, 0); // 画板左上角
    context.lineTo(canvas.width, 0); // 右上角
    context.lineTo(canvas.width, canvas.height); // 右下角
    context.lineTo(0, canvas.height); // 左下角
    context.fill(); // fill() 能够自动闭合，所以不需要 lineTo(0, 0)
    }
```

---

```javascript
// 清屏
var clearIcon = document.getElementById('clear');
clearIcon.onclick = function () {
    context.clearRect(0, 0, canvas.width, canvas.height);

    // 清屏之后，要重新生成白底
    autoFullScreenCanvas(canvas, context);
}
```

---

Bug：  
由于白底的存在，使用橡皮擦时，也会擦去白底。在线使用时看不出来，但是在下载的图片上能看到，使用橡皮擦擦除的地方都会变成透明的。

- 2018.03.28 解决 Bug

```javascript
// 用 erase 函数代替  context.clearRect(x - 5, y - 5, 10, 10)
function erase(x, y) {
    context.beginPath();
    context.arc(x, y, 6, 0, Math.PI * 2);

    // 点
    context.fillStyle = 'white';
    context.fill();
}

// 使用
// 把 context.clearRect(x - 5, y - 5, 10, 10) 替换为
// erase(x, y)
```

---

- 2018.03.28 更新

### 添加 `<input type="color">` 元素

- 引入 jQuery 

```javascript
// 不用 jQuery
pallet.onchange = function (e) {
    context.fillStyle = e.srcElement.value;
    context.strokeStyle = e.srcElement.value;
    //
}

// 用 jQuery
$pallet.on('change', function (e) {
    context.fillStyle = e.srcElement.value;
    context.strokeStyle = e.srcElement.value;
    //
})
```

- 参考链接
    - [.change(changeColor) vs .on("input change", changeColor)](https://teamtreehouse.com/community/changechangecolor-vs-oninput-change-changecolor)
    - [JQuery: detect change in input field [duplicate]
](https://stackoverflow.com/questions/12797700/jquery-detect-change-in-input-field)

---

### 添加 `select` 元素，用于改变线的宽度

---

### 禁止移动端页面下拉刷新

```javascript
canvas.ontouchmove = function (e) {
    e.preventDefault()
    //
```

- 参考链接
   - [移动web页面如何禁用客户端的自带的下拉刷新](https://segmentfault.com/q/1010000006859971/a-1020000006867152)
   - [javascript 禁止下拉页面 “橡皮筋“效果](https://blog.csdn.net/qq_33072593/article/details/77567133)

---

- 2018.06.14更新

### 用 `<input type="range">` 切换画笔线条的粗细

> jQuery 获取元素内容、值
>
> `.text()` 方法**不能**使用在 `input` 元素或 `scripts` 元素上。 `input` 或 `textarea` 需要使用 `.val()` 方法获取或设置文本值。得到 `scripts` 元素的值，使用 `.html()` 方法

```javascript
// jQuery 获取 span#slide-value 的内容
$('#slide-value').text()
// 设置 span#slide-value 的内容
$('#slide-value').text($('#slide').val() + 'px')


// jQuery 获取 input#slide 的值
$('#slide').val()
```

- 参考链接
    - [`<input type="range">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range)
    - [`<input>`：输入（表单输入）元素](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input)
    - [`.text()`](https://www.jquery123.com/text/)

### 更改鼠标显示

url 里不能写相对路径，不能用引号括起来，只能直接写图片文件的名称。

url 后面的位置很重要，尽量与鼠标尖端位置重合 
```css
body, #pen {
    cursor: url(brush.png) 0 32, pointer;
}

#eraser 
    cursor: url(eraser-min.png) 16 32, pointer;
}
```

- 参考链接
    - [The image file must be 32x32 or smaller. Internet explorer only supports .cur files](https://stackoverflow.com/questions/1144836/css-cursor-customization)
    - [Custom Cursor - Jquery Small Circle](https://codepen.io/patrickjane/pen/xYMGJw)

---

2018.06.15

### 下载完成后自动移除 a 标签
```javascript
a.remove()
```

- 参考链接
    - [ChildNode.remove()](https://developer.mozilla.org/zh-CN/docs/Web/API/ChildNode/remove)

### 彩虹画笔与按钮

```javascript
function rainbow() {
    if (hue >= 360) { hue = 0 }
    context.strokeStyle = `hsl(${ hue }, 100%, 50%)`
    hue += 1
}
```

[HSL](https://www.wikiwand.com/zh/HSL%E5%92%8CHSV%E8%89%B2%E5%BD%A9%E7%A9%BA%E9%97%B4) 配色
> HSL即色相、饱和度、亮度（英语：Hue, Saturation, Lightness）。HSV即色相、饱和度、明度（英语：Hue, Saturation, Value），又称HSB，其中B即英语：Brightness。
>
> 色相（H）是色彩的基本属性，就是平常所说的**颜色**名称，如红色、黄色等。  
> 饱和度（S）是指色彩的纯度，越高色彩越纯，低则逐渐变灰，取0-100%的数值。  
> 明度（V），亮度（L），取0-100%。0 为黑色，100% 为白色。

```css
.colors > #rainbow.active {
    background: linear-gradient(to right, #ff0000 0%, #ffff00 33%, #00ff00 66%, #ff00ff 100%);
}
```

红 - #ff0000  
黄 - #ffff00  
绿黄 - #00ff00  
紫红 - #ff00ff  

- 参考链接
    - [`<color>`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value)
    - [Ultimate CSS Gradient Generator](http://www.colorzilla.com/gradient-editor/)

---
