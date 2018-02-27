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

- 解决由于连击 start 按钮导致的多个游戏同时进行的 bug，改进后的代码如下：：
    - 要先声明一个 `timeoutID` 变量：用于保存 `setTimeout` 函数返回的 `ID` 值
        - 如果 `ID` 值不存在，就开始新游戏
        - 如果存在，就在控制台输出 `正在游戏中！`
    - 游戏结束时，记得**重置** `timeoutID` 变量（即令 `timeoutID = undefined;` ），否则 `timeoutID` 变量会一直保存上一次游戏中 `setTimeout` 函数返回的`ID`值，导致 `if (!timeoutID)` 判断一直为 `false` ，从而一直跳转去执行 `else` 分支，导致无法进行下一次游戏。
    - 新增的第四行代码 `console.log(timeoutID);` 可以去掉，只是为了辅助判断。
    - **疑点**：`clearTimeout(timeoutID)` 不起作用，原因暂不明。
```javascript
    let timeoutID; // (1)
    // 其他代码
    function startGame() {
        if (!timeoutID) { // (2)
            scoreBoard.textContent = 0;
            timeUp = false;
            score = 0;
            peep();
            count = 1;
            timeoutID = setTimeout(() => { // (3)
                timeUp = true;
                console.log('共执行了 ' + count + ' 次！');
                count = 0; // 重置为零，避免累加
                alert('Game Over!');
                console.log(timeoutID); // clearTimeout(timeoutID) 不起作用 (4)
                timeoutID = undefined; // 清除 timeoutID，为进行下一次游戏做准备 (5)
            }, 10000); // 10 秒之后停止游戏
            console.clear(); // 清空控制台，便于输出本次执行的相关信息
        } else { // (6)
            console.log('正在游戏中！'); //(7)
        }
    }
```

---
- 2018.02.27 更新：
    - 利用 `localStorage` 记录最高分数
    - 修改 start 按钮的样式