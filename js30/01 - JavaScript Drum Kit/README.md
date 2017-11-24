## JS脚本思路：

1. 监听键盘事件。当 ASDFGHJKL 按键被按下时，执行`window.addEventListener("keydown", playSound); `这一行代码。按下按键时，会触发`keydown`事件，调用`playSound`函数。

2. `playSound`函数执行过程如下：
    1. 通过`data-key`自定义属性和获取对应的音频文件和网页中对应的按钮元素；

    2. 动态改变按钮元素的样式；

    3. 播放音频。

3. 获取页面中所有的按钮元素，`document.querySelectorAll()`获取一组符合的元素快照，类型为`NodeList`（此对象是对于文档的实时运行的**动态**查询）。用`forEach`方法遍历该数组，添加 `transitionend` 事件监听。`transitionend` 事件会在 `CSS transition` 结束后触发，从而调用 `removeTransition` 函数，使页面恢复原状。

4. `removeTransition` 函数执行过程：
    1. 用`event.propertyName`属性判断是否需要移除样式。通过`transform`等发生变化的样式属性来判断；

    2. 在需要的情况下，用`event.target.classList.remove()`方法移除样式。


## JS脚本要点：
- `window.addEventListener(keydown, playSound)`：键盘监听，调用 playSound 函数。

    - [查看 MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener)


- `document.querySelectorAll(selectors)`方法：

    - [查看 MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelectorAll)

    - 返回与指定的选择器组匹配的文档中的**元素列表** (使用**深度优先**的顺序遍历文档的节点)。返回的对象是`NodeList`（此对象是对于文档的实时运行的**动态**查询）。

    - `selectors`必须**遵循CSS语法**。

- `document.querySelector(selectors)`方法：
    - [查看 MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelector)

    - 返回文档中匹配指定的选择器组的**第一个**元素

    - 深度优先顺序遍历文档的节点

    - `selectors` 是一个字符串，包含一个或是多个 CSS 选择器 ，多个则以**逗号**分隔。遵循CSS语法。

- `data-key`自定义属性：在 `.key`元素和`audio`元素中均有定义，借此绑定按钮元素与音频。
    - [查看 MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/data-*)

    - [使用数据属性](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/Using_data_attributes)

- `audio[data-key=${event.keycode}]`详解：

    - `event.keyCode`属性：获得按键的键码

        - [查看 MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/KeyboardEvent)

        - 根据 MDN，`KeyboardEvent.keyCode`属性已被弃用;可用 `KeyboardEvent.key`属性代替。但目前前者仍可用，后者不可用。（写于2017.11.24）

    - `${}`：模板字符串，前后要用**反引号**包起来

    - `audio[data-key=xxx]`：属性选择器

- `audio.currentTime = 0;`：每次播放之前都使音频播放进度归零。
    - [AudioContext.currentTime](https://developer.mozilla.org/zh-CN/docs/Web/API/AudioContext/currentTime)


- `audio.play()`：播放相应音效。

    - [查看 MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLMediaElement/play)


- `Array.from()`方法从一个**类似数组**或**可迭代对象**中创建一个**新的**数组实例。

    - [查看 MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from)


- `forEach()`方法：遍历数组，对数组的每个元素**执行一次**提供的函数。
    - [查看 MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

    - **Note**: 不会返回新的数组！

    - `callback`函数会被依次传入三个参数：

        1. 数组当前项的**值**

        2. 数组当前项的**索引**

        3. **数组对象本身**

    - 应用场景：为一些相同的元素，绑定事件处理器！

- [箭头函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

    - 箭头函数表达式的语法比函数表达式更短，并且不绑定自己的`this`，`arguments`，`super`或 `new.target`。这些函数表达式最适合用于**非方法函数**，并且它们**不能**用作构造函数。


- `transitionend`事件：
    - [查看 MDN](https://developer.mozilla.org/zh-CN/docs/Web/Events/transitionend)

    - `transitionend` 事件会在 `CSS transition` 结束后触发。

- `event.propertyName`属性

- `event.target.classList.remove()`详解：

    - [event.target](https://developer.mozilla.org/zh-CN/docs/Web/API/Event/target)

        - 一个触发事件的对象的引用。

    - [Element.classList](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/classList)

        - 只读属性，返回一个元素的类属性的实时`DOMTokenList`集合。

        - `element.classList`本身是只读的，虽然你可以使用 `add()` 和 `remove()` 方法修改它。

    - `.classList.remove()`：用于去除动态添加的样式

    - `.classList.add()`：用于动态添加样式

[代码注释&思路&要点参考来源](https://github.com/soyaine/JavaScript30/tree/master/01%20-%20JavaScript%20Drum%20Kit)

## HTML&CSS 要点：

1. [flex](https://github.com/hehe1111/doc/blob/master/flex_tutorial.md)

2. [transition](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition)

    - transition 是一个简写属性，用于 `transition-property`, `transition-duration`, `transition-timing-function`, 和 `transition-delay`。

    - **只对 block 级元素生效**

3. [text-shadow - MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-shadow):

    - 为文字添加阴影。每个阴影指定相对文字的偏移量（offset-x | offset-y ）， 可选的颜色（color）及模糊半径（blur-radius）。如果有 blur-radius，则一定位于偏移量后；color 位置则前后均可。

    - 可以为文字与 text-decorations 添加多个阴影，阴影值之间用逗号隔开。

    - 多个阴影从前往后叠加，第一个阴影在最前面。

4. [box-shadow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow)

5. [text-transform](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-transform)

    - 可以用于使文本显示为全大写或全小写，也可单独对每一个单词进行操作。

6. [letter-spacing](https://developer.mozilla.org/zh-CN/docs/Web/CSS/letter-spacing)

    - 字间距

7. [&lt;audio&gt;](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/audio)标签不会在网页上显示出来
