- &lt;audio&gt;标签不会在网页上显示出来

## 思路：

1. 监听键盘事件。当 ASDFGHJKL 按键被按下时，执行`window.addEventListener("keydown", playSound); `这一行代码。按下按键时，会触发`keydown`事件，调用`playSound`函数。

2. `playSound`函数执行过程如下：
    1. 通过`data-key`自定义属性和获取对应的音频文件和网页中对应的按钮元素；

    2. 动态改变按钮元素的样式；

    3. 播放音频。

3. 获取页面中所有的按钮元素，`document.querySelector`获取一组符合的元素快照，类型为`NodeList`（此对象是对于文档的实时运行的动态查询）。用`forEach`方法遍历该数组，添加 `transitionend` 事件监听。`transitionend` 事件会在 `CSS transition` 结束后触发，从而调用 `removeTransition` 函数，使页面恢复原状。

4. `removeTransition` 函数执行过程：
    1. 用`event.propertyName`属性判断是否需要移除样式。通过`transform`等发生变化的样式属性来判断；

    2. 在需要的情况下，用`event.target.classList.remove()`方法移除样式。


## 要点：

- `document.querySelector()`方法：获取一组符合的元素快照，类型为NodeList（此对象是对于文档的实时运行的**动态**查询）。

- `data-key`自定义属性：在 `.key`元素和`audio`元素中均有定义，借此绑定按钮元素与音频。

- `Array.from()`

- `forEach()`方法：遍历数组

- 箭头函数

- `window.addEventListener(keydown, playSound)`：键盘监听，调用 playSound 函数

- `audio[data-key=${event.keycode}]`详解：

    - `event.keyCode`属性：获得按键的键码

    - `${}`：模板字符串，前后要用反引号包起来

    - `audio[data-key=xxx]`：属性选择器

- `audio.currentTime = 0;`：每次播放之后都使音频播放进度归零

- `audio.play()`：播放相应音效。


- `transitionend`事件：transitionend 事件会在 CSS transition 结束后触发。

- `event.propertyName`属性

- `event.target.classList.remove()`详解：

    - `event.target`:

    - `.classList`

    - `.classList.remove()`：用于去除动态添加的样式

    - `.classList.add()`：用于动态添加样式

[代码注释&思路&要点参考来源](https://github.com/soyaine/JavaScript30/tree/master/01%20-%20JavaScript%20Drum%20Kit)
