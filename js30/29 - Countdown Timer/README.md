# 29 - Countdown Timer

> JavaScript30仿写：
>
> [JavaScript30](https://javascript30.com) 教程原作者：[Wes Bos](https://github.com/wesbos)    
> 完整指南在 [GitHub](https://github.com/wesbos/JavaScript30)  
> 中文参考指南：[GitHub](https://github.com/soyaine/JavaScript30)  
> 作者：[缉熙Soyaine](https://github.com/soyaine)

第二十九篇开坑于：2018.01.20

[参考链接](https://github.com/soyaine/JavaScript30/blob/master/29%20-%20Countdown%20Timer/README.md)

[demo 预览链接](https://hehe1111.github.io/js_demo/js30/29%20-%20Countdown%20Timer/)

## 记录：

- [linear-gradient](https://developer.mozilla.org/zh-CN/docs/Web/CSS/linear-gradient#%E7%BA%BF%E5%BD%A2%E6%B8%90%E5%8F%98%E7%9A%84%E6%9E%84%E6%88%90)
    - 重要的是理解线性渐变的**构成**。
        - **轴**：又称梯度线、渐变线
        - **着色线**：一系列垂直于渐变线的线。每一条着色线的颜色则取决于与之垂直相交的渐变线上的色点
        - **色点**：着色线与轴的交点
    - 渐变线上的颜色值是**由不同的点来定义**，包括起始点，终点，以及两者之间的可选的中间点（中间点可以有多个）。
    - 终点是起点关于容器的中心点的反射点（起点与终点是**对称**关系，对称中心是容器的中心点）。
    - **不可思议的顶点效应**：起点附近的点具有跟起点相同的颜色值，终点附近的点具有跟终点相同的颜色值。
    - 可以指定**额外的颜色中间点**，还可以提供**多种颜色值的渐变线**。
    - **语法**：
        - 关键词：left、 right、top、bottom。关键词的**先后顺序无影响**，且都是**可选**的。
        - `to top`, `to bottom`, `to left` 和 `to right`这些值会被转换成角度0度、180度、270度和90度。其余值会被转换为一个以向顶部中央方向为起点**顺时针**旋转的角度。
        - 如果用角度值指定渐变的方向（或角度）。角度也是**顺时针**增加。
        - **颜色渐变方向与角度增加方向相反，即颜色渐变方向为逆时针？？？**
        - 建议打开 MDN 在 CodePen 上提供的示例，并改变相关值，查看不同的值导致的不同的效果。
- [background](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background)：多个属性的简写属性。取值为`none`时，是指`background-image`属性。
- [outline](https://developer.mozilla.org/zh-CN/docs/Web/CSS/outline)： `outline-style`，`outline-width` 和 `outline-color`的简写属性。 多数情况下，简写属性更加可取和便捷。

- 鼠标悬浮或是获得焦点时，给背景加上一层灰色的遮罩，简单用`background-color`即可：
```css
    .timer-button:hover,
    .timer-button:focus {
        background-color: rgba(0, 0, 0, 0.2);
        /*其他样式*/
    }
```

---

- [Date.prototype.getTime()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime)：返回值一个数值，表示从1970年1月1日0时0分0秒（UTC，即协调世界时）距离该日期对象所代表时间的**毫秒数**。

- [Date.prototype.toLocaleDateString()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString)

- [window.setInterval()](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/setInterval)
- [WindowTimers.clearInterval()](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/clearInterval)

- 监听用户的自定义输入时，判断输入的值是否能转成数值。输入的值会转成两种结果：**数值**或是**NaN**，在这里可以用逻辑运算符**非（!）**来辅助判断。
```javascript
    let value = Number(this.minutes.value);
    if (!value) {
        alert('请输入数字。');
    } else {
        updateTime(value * 60);
        updateTimer();
    }
```
