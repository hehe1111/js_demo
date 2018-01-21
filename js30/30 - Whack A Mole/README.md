# 30 - Whack A Mole

> JavaScript30仿写：
>
> [JavaScript30](https://javascript30.com) 教程原作者：[Wes Bos](https://github.com/wesbos)    
> 完整指南在 [GitHub](https://github.com/wesbos/JavaScript30)  
> 中文参考指南：[GitHub](https://github.com/soyaine/JavaScript30)  
> 作者：[缉熙Soyaine](https://github.com/soyaine)

第三十篇开坑于：2018.01.21

[参考链接](https://github.com/wesbos/JavaScript30/tree/master/30%20-%20Whack%20A%20Mole)

[demo 预览链接](https://hehe1111.github.io/js_demo/js30/30%20-%20Whack%20A%20Mole/)

## 记录：

- `rem` 的运用
- `background-size`属性：
```css
.hole::after {
    content:''; /* 必须写 */
    /*其他样式*/
    background-size: contain; /* 图片包含在目标容器（盒模型）内 */
    /*其他样式*/
}
```

```css
background-size: 60%; /* 图片本身大小的 60% */
```

- 地鼠从坑里出现的**过程**的持续时间：
```css
.mole {
    /*其他样式*/
    transition:all 0.3s;
}
```

---

- `time`为地鼠待在地面上持续的时间，时间**不固定**，是影响每次游戏中出现的**地鼠的个体数**及**游戏难易度**的因素：
```javascript
function peep() {
    const time = getRandomTime(200, 1000);
    const hole = getRandomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp) {
            peep();
            count += 1;
        }
    }, time);
}
```

- [Math - MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math)
    - [Math.abs()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/abs)
    - [Math.floor()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)
    - [Math.round()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/round)
    - [Math.random()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
- [Math对象](http://javascript.ruanyifeng.com/stdlib/math.html)
    - [Math.random()](http://javascript.ruanyifeng.com/stdlib/math.html#toc2)
- [window.setTimeout](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/setTimeout)
