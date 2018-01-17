# 27 - Click and Drag

> JavaScript30仿写：
>
> [JavaScript30](https://javascript30.com) 教程原作者：[Wes Bos](https://github.com/wesbos)    
> 完整指南在 [GitHub](https://github.com/soyaine/JavaScript30)  
> 中文参考指南：[GitHub](https://github.com/soyaine/JavaScript30)  
> 作者：[缉熙Soyaine](https://github.com/soyaine)

第二十七篇开坑于：2018.01.14

[参考链接](https://github.com/soyaine/JavaScript30/tree/master/27%20-%20Click%20and%20Drag)

[demo 预览链接](https://hehe1111.github.io/js_demo/js30/27%20-%20Click%20and%20Drag/)

## 记录：
```CSS
body {
    margin: 0; /* 去掉不必要的 margin 之后，就能去掉滚动条了 */

    display: flex;
    min-height: 100vh;
    /*其他代码*/
}
```

- 盒模型内设置滚动条：[overflow-x](https://developer.mozilla.org/zh-CN/docs/Web/CSS/overflow-x)、[overflow-y](https://developer.mozilla.org/zh-CN/docs/Web/CSS/overflow-y)属性
```CSS
.items {
    /*其他代码*/
    overflow-x: scroll;
    overflow-y: hidden;
    /*其他代码*/

    /* 默认阴影在外，这也是白底方框外与视口之间存在缝隙的原因 */
    box-shadow: 0 0 10px 7px rgba(0, 0, 0, 0.09);
    /*其他代码*/

    /* 页面的缩小，也使缝隙变大了 */
    transform: scale(0.98);
}
```

- [white-space](https://developer.mozilla.org/zh-CN/docs/Web/CSS/white-space#Summary)：设置如何处理元素中的空白。
    - [CSS Text](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Text#%E5%8F%82%E8%80%83)
        - [word-break]()：指定了怎样在单词内断行。[语法](https://developer.mozilla.org/zh-CN/docs/Web/CSS/word-break#%E8%AF%AD%E6%B3%95)或[直接看示例中的效果示意图](https://developer.mozilla.org/zh-CN/docs/Web/CSS/word-break#%E7%A4%BA%E4%BE%8B)
        - [word-spacing](https://developer.mozilla.org/zh-CN/docs/Web/CSS/word-spacing#Examples)
- [user-select](https://developer.mozilla.org/zh-CN/docs/Web/CSS/user-select)：非标准属性。
- [cursor - 直接看测试效果](https://developer.mozilla.org/zh-CN/docs/Web/CSS/cursor#Syntax)：定义鼠标指针悬浮在元素上方显示的鼠标光标。
- [display](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display)：使用关键属性值指定。 关键属性值被分为六类。
- [box-shadow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow#%E6%91%98%E8%A6%81)：`inset | offset-x | offset-y | blur-radius | spread-radius | color`
> **默认阴影在边框外**。使用inset后，阴影在边框内（即使是透明边框），**背景之上内容之下**。

    - [Box-shadow generator](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Background_and_Borders/Box-shadow_generator)

- [perspective](https://developer.mozilla.org/zh-CN/docs/Web/CSS/perspective)：与`transform`属性的`rotate()`有关。
> 指定了观察者与z=0平面的距离，使具有三维位置变换的元素产生透视效果。z>0的三维元素比正常大，而z<0时则比正常小，大小程度由该属性的值决定。
---

- [UIEvent.pageX](https://developer.mozilla.org/zh-CN/docs/Web/API/UIEvent/pageX#Syntax)：**鼠标事件触发**时，鼠标指针相对于整个文档 X 坐标上像素点的整数值。这一属性同时也参照了**页面的水平滚动距离**。
- [Element.offsetLeft，Element.offsetTop](http://javascript.ruanyifeng.com/dom/element.html#toc12)
- [Element.offsetParent](http://javascript.ruanyifeng.com/dom/element.html#toc19)
> 如果某个元素的所有上层节点的`position`属性都是`static`，则`Element.offsetParent`属性指向`<body>`元素。

- [Element.scrollLeft](http://javascript.ruanyifeng.com/dom/element.html#toc10)
> 水平滚动条向右侧滚动的像素数量  
> 没有滚动条的网页元素，这两个属性总是等于0。

- [过程指南](https://github.com/soyaine/JavaScript30/tree/master/27%20-%20Click%20and%20Drag#%E8%BF%87%E7%A8%8B%E6%8C%87%E5%8D%97)
```javascript
slider.addEventListener('mousedown', (e) => {
    // 其他代码
    startX = e.pageX - slider.offsetLeft; // 或者 startX = e.pageX; 也可以
    // 其他代码
});
// 其他代码
slider.addEventListener('mousemove',(e) =>{
    // 其他代码
    const x = e.pageX - slider.offsetLeft; // 或者 const x = e.pageX; 也可以
    const walk = (x - startX) * 3; // 计算鼠标移动距离，并翻倍，作为滚动条移动距离
    slider.scrollLeft = scrollLeft - walk;
});
```

```javascript
slider.scrollLeft = scrollLeft - walk;
```
- `scrollLeft`**减去**`walk`的原因：
    - 按住鼠标后，触发`mousedown`事件，同时`mousedown`事件的`e.pageX`的值就固定下来了。
    - 之后，鼠标移动时，触发`mousemove`事件，只要移动鼠标，就会不断触发`mousemove`事件，因此`mousemove`事件的`e.pageX`的值会一直变动。
        - 往左移动，`mousemove`事件的`e.pageX`的值会变小，`walk`的值就会是负值。
        - 往右，则变大，`walk`的值就会是正值。
    - 如果是`scrollLeft`**加上**`walk`，则在一开始时：
        - 鼠标往左移动时，由于`walk`是负值，导致`slider.scrollLeft`属性也是负值，故滚动条不会随之移动。
        - 但是，如果鼠标往右移动，则滚动条也随之往右移动。但是这样**不符合**人类的浏览习惯。
    - 符合人类的浏览习惯的应该是：
        - 鼠标往左移动时，水平滚动条往右移动；
        - 鼠标往右移动时，水平滚动条往左移动。
    - 故应该是`scrollLeft`**减去**`walk`。
