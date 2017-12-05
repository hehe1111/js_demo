JavaScript30仿写：
> [JavaScript30](https://javascript30.com) 教程原作者：[Wes Bos](https://github.com/wesbos)    
> 完整指南在 [GitHub](https://github.com/soyaine/JavaScript30)  
> 中文参考指南：[GitHub](https://github.com/soyaine/JavaScript30)  
> 作者：[缉熙Soyaine](https://github.com/soyaine)


第三篇开坑于：2017.11.30

[demo预览链接](https://hehe1111.github.io/js_demo/js30/03%20-%20CSS%20Variables/)

[参考链接](https://github.com/soyaine/JavaScript30/tree/master/03%20-%20CSS%20Variables)

## JS 重点：

- 获取页面中所有的`<input>`元素，`document.querySelectorAll()`获取一组符合的元素快照，类型为`NodeList`（此对象是对于文档的实时运行的**动态**查询）。用`forEach`方法遍历该数组。

    - 类名前**要**加点 `.`

    - 要符合 CSS 的语法

- `this`的运用：`this`返回属性“当前”所在的对象

    - [this 关键字](http://javascript.ruanyifeng.com/oop/this.html)


- `dataset`属性：[查看 MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/dataset)

    - 获取自定义属性`data-*`


- `document.documentElement.style.setProperty(属性, 属性值)`：设置页面 CSS 变量的值

    - `document.documentElement`：获取根元素。[查看 MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/documentElement)

    - `document.documentElement.style`：`:root{  // 这里是 CSS 变量样式 }`

- `document.getElementById(ID 名)`：ID 名前不用加 `#`

- `element.innerText`属性：修改标签内容

- `change`事件：监听滑动条按钮位置的变化

- `mousemove`事件：监听鼠标拖动


## HTML & CSS 重点：

- `<input>`标签：[查看 MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input)

    - `name`属性

    - `value`属性：页面初始状态的默认值

- `<input>`标签`type="range"`类型：滑动条

    - `min`属性：设定最小值

    - `max`属性：设定最大值

- `<input>`标签`type="color"`类型：用于指定颜色的控件。

- `<code>`标签：[查看 MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/code)

- `<label>`标签：[查看 MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/label)：用于显示页面参数。是`element.innerText`中的`element`。

- `CSS`变量：[CSS 变量教程](http://www.ruanyifeng.com/blog/2017/05/css-variables.html)
    - `:root`：根元素。全局的`CSS`变量通常放在根元素`:root`里面


- `<img>`标签的`filter`样式：[CSS滤镜（filter）](https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter)
