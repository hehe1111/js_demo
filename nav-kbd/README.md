[demo 预览链接](https://hehe1111.github.io/js_demo/nav-kbd/index.html)

[参考链接：http://www.36start.com/](http://www.36start.com/)

[键盘样式参考](http://mcdlr.com/key-sheet/)

## 记录：
- [对象 - 键名](http://javascript.ruanyifeng.com/grammar/object.html#toc2)
> 对象的所有键名都是字符串...加不加引号都可以...如果键名是数值，会被自动转为字符串。

- location.href
    - [window.location](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/location)
    - [Location](https://developer.mozilla.org/zh-CN/docs/Web/API/Location)

- [window.open](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/open)
- [参考链接：JS30 - 12 - Key Sequence Detection](https://github.com/hehe1111/js_demo/blob/master/js30/12%20-%20Key%20Sequence%20Detection/README.md)
- [Event.target](https://developer.mozilla.org/zh-CN/docs/Web/API/Event/target)
```javascript
    button.onclick = function (e) {
        // e.target 代指 button
        console.log(e.target); // id 值会变
        // ...
    }
```

- [window.prompt](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/prompt)

---

- [参考链接：JS30 -15 - LocalStorage](https://github.com/hehe1111/js_demo/blob/master/js30/15%20-%20LocalStorage/README.md)

- [Window.localStorage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage)
> localStorage 类似于sessionStorage，区别在于，数据存储在 localStorage 是**无期限**的，而数据存储在sessionStorage 会被清除， 当页面会话结束时——也就是说当页面被关闭。

- [使用 Web Storage API](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
    - localStorage.setItem()
    - localStorage.getItem()
    - localStorage.removeItem()
    - localStorage.clear()

- JSON.stringify()：JSON 转字符串
- JSON.parse()：字符串转 JSON

---

- [for...in...](http://javascript.ruanyifeng.com/grammar/array.html#toc4)

---

```css
    /* 使文字居中 */
    kbd.key > .text {
        font-size: 24px;
        line-height: 1.2;

        position: absolute;
        top: 50%; /* 以父元素的高为基准 */
        left: 50%; /* 以父元素的宽为基准 */
        transform: translateX(-50%) translateY(-50%); /* 以元素自身的宽高为基准 */
    }
```

---

监听搜索输入框时，使用 [oninput](https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XUL/Attribute/oninput) 事件比 [onchange](https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XUL/Attribute/onchange) 更合适于监听用户输入的关键词，前者会实时获取用户输入，不会有延迟，后者会记录用户上一次的输入，而非当前输入。

---

## 更新
2018-02-21：
- 处理用户按下的键不是字母键的情况。

2018-02-27：
- 兼容大小写输入。
```javascript
var key = e['key'].toLocaleLowerCase();
```

---

2018-04-10
- 自动聚焦到搜索输入框
- 不需要等到页面加载完成后再自动聚焦

```
inputElement.focus()
```

---

2018-05-03
- 兼容移动端

```css
/* CSS */
@media (max-width: 960px) {
    main > .search-wrapper {
        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }

    main > .search-wrapper > #search-input {
        width: 100%;
        margin: 10px;
    }

    main > .search-wrapper > .search-button {
        width: 100px;
        margin: 0 10px; 
    }

    main > .wrapper {
        width: 96%;
    }

    main > .wrapper > div.row {
        margin: 10px 6px;
    }

    main > .wrapper > div.row kbd.key {
        width: 7%;
        height: 50px;
        margin: 0 1%;
    }

    main > .wrapper > div.row kbd.key:hover > button,
    main > .wrapper > div.row kbd.key > img {
        display: none;
    }

    main > .wrapper > div.row kbd.key > .text {
        font-size: 20px;
    }
}
```

```javascript
// JS
// 移动端监听按键
document.querySelectorAll('.key').forEach(key => key.onclick = function (e) {
    var key = e['target']['textContent'].toLowerCase(); // e['target']['textContent'] 按键的键名
    window.open('http://' + hash[key], '_blank');
});
```

---

2018-05-26
- 修改点击**编辑**按钮后会跳转到 undefined/ 新页面的 bug

```javascript
button.onclick = function (e) {
    e.stopPropagation() // 阻止事件传播到 .key
    // 其它代码
}

// bug 原因
function listenToUser(hash) {
    // 其它代码
    // 移动端监听按键
    document.querySelectorAll('.key').forEach(key => key.onclick = function (e) {
        var key = e['target']['textContent'].toLowerCase(); // e['target']['textContent'] 按键的键名
        window.open('http://' + hash[key], '_blank');
    });
}
```

- 修复移动端点击按键右下角时，会跳转到 undefined/ 新页面的 bug

```javascript
function listenToUser(hash) {
    // ...
    // 移动端监听按键
    // ...
        var key = e['target']['innerText'].toLowerCase()
    // 其它代码
}

// bug 原因
function listenToUser(hash) {
    // ...
        var key = e['target']['textContent'].toLowerCase()
        console.log(key) // q编辑
    // 其它代码
}
```

1. 原因解释：`textContent` 属性会将所有子节点的 `textContent` 合并后返回，除了注释、ProcessingInstruction节点。如果该节点没有子节点的话，返回一个空字符串。 `textContent` 会获取所有元素的内容，包括 `<script>` 和 `<style>` 元素，然而 `innerText` 不会。
`innerText` 受 CSS 样式的影响，并且**不会返回隐藏元素**的文本，而 `textContent` 会。
由于 `innerText` 受 CSS 样式的影响，它会触发重排（reflow），但 `textContent` 不会。- [参考 Node.textContent - MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/textContent#Notes)
2. 在移动端，编辑按钮被隐藏
3. 代码结构

```
<kbd class="key" title="xxx">
    <span class="text">q</span>
    <img src="yyy">
    <button id="q">编辑</button>
</kbd>
```

4. 因此 `textContent` 属性会返回 **q编辑**，而 `innerText` 属性只会返回 **q**

---

2018-06-18 更新
1. 续 2018-05-26 出现的 bug，这一次是在 PC 端用鼠标点击（不是用键盘按键触发）页面中按钮的黑色部分，在 PC 端和移动端表现的行为不一样：PC 端跳转到 undefined/ 新页面，移动端则正常跳转。原因是，在 PC 端点击触发，打印出来的 key 其实是字母加‘编辑’，如：'q编辑'，所以才会跳转到 undefined/ 新页面。但是在移动端点击相同的地方，打印出来的 key 却只有字母，如：'q'。bug 原因暂时想不明白，因为用的是同一个属性 `innertText`。
2. 解决：如果出现了‘编辑’字样，就用空字符串替换掉，记得替换掉 key，因为 `.replace()` 返回的是新值，不会改变原值。

```javascript
key = key.replace(/编辑/g, '')
```

---

2018-08-30 更新

更改背景图片

- [点击查看背景图片来源](https://alpha.wallhaven.cc/wallpaper/444107)

---