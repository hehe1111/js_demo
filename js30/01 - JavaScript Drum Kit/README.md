- &lt;audio&gt;标签不会在网页上显示出来


## 要点：

- `Array.from()`

- `forEach()`方法：遍历数组

- 箭头函数

- `transitionend`事件：transitionend 事件会在 CSS transition 结束后触发

- `window.addEventListener(keydown, playSound)`：键盘监听，调用 playSound 函数

- `audio[data-key=${event.keycode}]`详解：

    - `event.keyCode`属性：获得按键的键码

    - `${}`：模板字符串，前后要用反引号包起来

    - `audio[data-key=xxx]`：属性选择器

- `document.querySelector()`方法

- `audio.currentTime = 0;`：每次播放之后都使音频播放进度归零

- `audio.play()`：播放相应音效

- `event.propertyName`属性

- `event.target.classList.remove()`详解：

    - `event.target`:

    - `.classList`

    - `.classList.remove()`：用于去除动态添加的样式

    - `.classList.add()`：用于动态添加样式

[代码注释及要点参考来源](https://github.com/soyaine/JavaScript30/tree/master/01%20-%20JavaScript%20Drum%20Kit)
