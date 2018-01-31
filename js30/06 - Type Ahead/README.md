# 06 Type Ahead 👀

> JavaScript30仿写：
>
> [JavaScript30](https://javascript30.com) 教程原作者：[Wes Bos](https://github.com/wesbos)    
> 完整指南在 [GitHub](https://github.com/wesbos/JavaScript30)  
> 中文参考指南：[GitHub](https://github.com/soyaine/JavaScript30)  
> 作者：[缉熙Soyaine](https://github.com/soyaine)

第六篇开坑于：2017.12.09

[参考链接](https://github.com/soyaine/JavaScript30/tree/master/06%20-%20Type%20Ahead)

[demo 预览链接](https://hehe1111.github.io/js_demo/js30/06%20-%20Type%20Ahead/)

## JS 重点：

- `document.querySelector()`：获取页面元素。

- 添加监听事件，当用户进行输入时，调用相应函数，做出响应：

    - `change`事件

    - `keyup`事件

- JSON 数据的获取与解析：

    - [Promise](https://developer.mozilla.org/zh-CN/docs/Mozilla/JavaScript_code_modules/Promise.jsm/Promise)

    - [fetch](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API)：获取 JSON 资源

    >  fetch() 必须接受一个参数——资源的路径。无论请求成功与否，它都返回一个 promise 对象，resolve 对应请求的 Response。

    - 这只是一个 HTTP 响应，而不是真的资源。

    - [使用 Fetch](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)

    > 全局 fetch()方法，该方法提供了一种简单，合乎逻辑的方式来跨网络异步获取资源。 - MDN

    > 在这个挑战中，我们主要是利用 .json()，以使用 JSON 对象来读取 Response 流中的数据，读取之后，Body 的 body.Uesd 属性值会变为已读。另外较为常用的方法还有：blob()、text()、arrayBuffer()、formData()。 - [来源](https://github.com/soyaine/JavaScript30/tree/master/06%20-%20Type%20Ahead#相关知识)

    - [then()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)

    > then() 方法返回一个  Promise 。它最多需要有两个参数：Promise 的成功和失败情况的回调函数。

    - [json()](https://developer.mozilla.org/zh-CN/docs/Web/API/Body/json)

    > 使用一个 Response 流，并将其读取完成。它返回一个 promise ，解析结果是将文本体解析为 JSON。即返回一个被解析为JSON格式的promise对象。

    - [Fetch mixin - Body](https://developer.mozilla.org/zh-CN/docs/Web/API/Body)

    - [JSON](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON)：本挑战中不会用到。

    - [Array.prototype.push()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

    - [ES6 中的数组扩展语法](https://github.com/soyaine/JavaScript30/tree/master/06%20-%20Type%20Ahead#es6-中的数组扩展语法)：arr1.push(...arr2)

        - [扩展语句](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_operator#%E6%9B%B4%E5%A5%BD%E7%9A%84_push_%E6%96%B9%E6%B3%95)

- 根据用户输入的字符串进行筛选：

    - [Array.prototype.filter()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

    - 构造正则表达式：`const regex = new RegExp()`

    - 用正则表达式匹配：`match(regex)`

- 呈现筛选结果，动态生成 HTML 标签：

    - 将对筛选函数的调用放在了呈现函数中，最后只需调用一个呈现函数即可。

    - `this.value`：获取输入框的值，即用户输入的字符串。

    - [Array.prototype.map()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

    - [replace()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

        - 语法：`str.replace(regexp|substr, newSubStr|function)`

    - [element.innerHTML](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/innerHTML)：获取或删除目标元素的所有后代 HTML 元素。

## HTML&CSS 重点：

- width: 120%;

- [z-index](https://developer.mozilla.org/zh-CN/docs/Web/CSS/z-index)

- [outline](https://developer.mozilla.org/zh-CN/docs/Web/CSS/outline)

    - 值与`border`一样。如：`1px solid red`

    - 但轮廓`outline`不占据空间，它们被描绘于内容之上

    - 轮廓可以是非矩形的。

- [transform](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform)

    - [Using CSS transforms](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms)

    - [perspective](https://developer.mozilla.org/zh-CN/docs/Web/CSS/perspective)：透视值

- [linear-gradient](https://developer.mozilla.org/zh-CN/docs/Web/CSS/linear-gradient)

    - [Using CSS gradients](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Using_CSS_gradients)

- `font-family`,`text-align`,`font-size`等属性也可用于`placeholder`属性的值。

#### 所用到的 JSON 数据的拷贝来源：
https://gist.githubusercontent.com/soyaine/81399bb2b24ca1bb5313e1985533c640/raw/bdf7df2cbcf70706c4a5e51a7dfb8c933ed78878/TangPoetry.json

拷贝的目的：
除留作备份外，也会偶尔添加新的诗词到拷贝得到的 JSON 文件中。新添加的诗词数据会简化，不会有译文注释等内容。

#### 创建新的 gists：
拷贝得到的 JSON 文件，可以放在 GitHubGist 上。
步骤：
1. 登录 GitHub 后，点击右上角的头像，在弹出的框中，选择 Your Gists 选项。
2. 页面跳转后会直接进入编辑模式。一次输入描述、文件名、内容后，点击右下角的其中一个 Create xxx 按钮即可。
3. 创建后，进入新生成的文件，点击 Raw 按钮。
4. 跳转之后，复制页面的 URL。
5. 将 URL 赋值给变量`endpoint`。
6. 每次更新 JSON 文件后，URL 也会变化，所以也要更新变量`endpoint`。
