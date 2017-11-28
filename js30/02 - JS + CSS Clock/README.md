JavaScript30仿写：
> [JavaScript30](https://javascript30.com) 教程原作者：[Wes Bos](https://github.com/wesbos)    
> 完整指南在 [GitHub](https://github.com/soyaine/JavaScript30)  
> 中文参考指南：[GitHub](https://github.com/soyaine/JavaScript30)  
> 作者：[缉熙Soyaine](https://github.com/soyaine)  

第二篇开坑于：2017.11.24

[demo 预览链接](https://hehe1111.github.io/js_demo/js30/02%20-%20JS%20+%20CSS%20Clock/)  

## JS 重点：

- `+ 90`:

    1. 页面初始状态下，指针均是水平方向；

    2. 加 90 deg, 使指针从**零时**开始旋转；

- `document.querySelector(".类名")`：

    - 类名前**要**加点 `.`

    - 要符合 CSS 的语法

- 另一种获取页面元素的方法：`getElementsByClassName("类名")[0]`

    - 类名前**不用**加点 `.`

    - 返回的是列表


- `element.style`: 获取元素的样式

    - `element.style.transform = 新的属性值`: 获取元素的`transform`样式属性并赋值。


- `${xxx}`: 模板字面量

- `setInterval(callback, 1000)`: 每隔 1000 **毫秒** 调用一次 callback 函数

- 第 59 秒变为 0 秒（即 60 秒）时，秒针的 `rotate` 值会从 444 deg 到 90 deg，这会导致秒针**逆时针**旋转。解决思路暂有 2 个：

    1. 在 90 deg 时，手动清除 `transition`属性，将其值设定为 `all 0s`;

    2. 分离 `new Date()`。一个函数用于初始化，获得时间并转为角度值；另一个函数用于改变元素的 `rotate` 值。

- 原教程中是每过一分钟更新一次分针的角度，不计秒的影响；每过一个小时更新一次时针的角度，不计分和秒的影响；中文参考指南中则是计入了秒和分的影响，更符合实际的情况。

    - 一秒对**秒针**角度的影响：`1 * (360/60)` deg;

    - 一秒对**分针**角度的影响：`1 * (360/(60*60))` deg;

    - 一秒对**时针**角度的影响过小，故**忽略不计**。具体为：`1 * (360(12*60*60))` deg;

    - 一分对**时针**角度的影响：`1 * (360/(12*60))` deg;


## HTML & CSS 重点：

- `transform: translate3Y(-3px);`: 向竖直方向上移位 3px

- `.hand { // 样式 }`: 对应页面中三个样式

- `transform-origin`属性：改变旋转的轴心

- [box-shadow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow)

    - 多个阴影的运用

    - 多个阴影的合成

正规语法：
```
 none | [inset? && [ <offset-x> <offset-y> <blur-radius>? <spread-radius>? <color>? ] ]#
```

> 默认阴影在边框外，使用inset后，阴影在边框内（即使是透明边框），背景之上内容之下。**除非 inset，否则不写。**

> &lt;blur-radius&gt; 值越大，模糊面积越大，阴影就越大越淡。 不能为负值。默认为0，此时阴影边缘锐利。

> &lt;spread-radius&gt; 取正值时，阴影扩大；取负值时，阴影收缩。默认为0，此时阴影与元素同样大。

> 多个阴影**从前往后**叠加，**第一个阴影在最上面**。
