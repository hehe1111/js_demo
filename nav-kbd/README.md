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
