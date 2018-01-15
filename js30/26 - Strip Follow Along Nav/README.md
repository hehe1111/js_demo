# 26 - Strip Follow Along Nav

> JavaScript30仿写：
>
> [JavaScript30](https://javascript30.com) 教程原作者：[Wes Bos](https://github.com/wesbos)    
> 完整指南在 [GitHub](https://github.com/soyaine/JavaScript30)  
> 中文参考指南：[GitHub](https://github.com/soyaine/JavaScript30)  
> 作者：[缉熙Soyaine](https://github.com/soyaine)

第二十六篇开坑于：2018.01.12

[参考链接](https://github.com/soyaine/JavaScript30/tree/master/26%20-%20Strip%20Follow%20Along%20Nav)

[demo 预览链接](https://hehe1111.github.io/js_demo/js30/26%20-%20Strip%20Follow%20Along%20Nav/)

## 记录：
- 同[挑战 22](https://github.com/hehe1111/js_demo/blob/master/js30/22%20-%20Follow%20Along%20Link%20Highlighter/style.css)；属性名是 `background`，不是 `background-color`
- [CSS Gradient Generator](http://www.colorzilla.com/gradient-editor/)
```CSS
body {
    min-height: 100vh;
    background:
        linear-gradient(45deg, hsla(340, 100%, 55%, 1) 0%, hsla(340, 100%, 55%, 0) 70%),
        linear-gradient(135deg, hsla(225, 95%, 50%, 1) 10%, hsla(225, 95%, 50%, 0) 80%),
        linear-gradient(225deg, hsla(140, 90%, 50%, 1) 10%, hsla(140, 90%, 50%, 0) 80%),
        linear-gradient(315deg, hsla(35, 95%, 55%, 1) 100%, hsla(35, 95%, 55%, 0) 70%);
}
```
- [perspective](https://developer.mozilla.org/zh-CN/docs/Web/CSS/perspective)
- [Flex 布局](https://github.com/hehe1111/js_demo/tree/master/js30/05%20-%20Flex%20Panel%20Gallery#flex-%E5%B8%83%E5%B1%80)
- [will-change](https://developer.mozilla.org/zh-CN/docs/Web/CSS/will-change)
> 告知浏览器该元素会有哪些变化的方法，这样浏览器可以在元素属性真正发生变化之前提前做好对应的优化准备工作。 这种优化可以将一部分复杂的计算工作提前准备好，使页面的反应更为快速灵敏。

- 两个属性比较：元素位置是否仍存在于原网页中：
```CSS
.dropdown {
    /* 其他样式 */
    opacity: 0; /* 将元素隐藏，元素位置仍存在网页中，可以用开发者工具选中 */

    display: none; /* 元素位置消失，即使使用开发者工具也无法选中 */
    /* 其他样式 */
}
```

- `transition`属性可以有多个值：
```CSS
.dropdown-background {
    /* 其他样式 */
    transition: all 0.3s, opacity 0.1s, translate 0.2s;
    /* 其他样式 */
}
```

- [transform-origin](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-origin)：更改一个元素变形的原点。

- 模拟箭头：正方形上移 50% 高度，旋转 45 度。
```CSS
.arrow {
    width: 20px;
    height: 20px;

    position: absolute;

    display: block;
    background-color: #fff;

    transform: translateY(-50%) rotate(45deg);
}
```

---
- [Element.getBoundingClientRect()](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect)：返回元素的大小及其相对于视口的位置。
