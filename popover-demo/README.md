[预览链接](https://hehe1111.github.io/js_demo/popover-demo/index.html)

## 记录

- CSS 特殊用法
```css
.wrapper {
    border: 1px solid red;
    position: relative;
    display: inline-block; /* 必须是 inline-*，否则无法显示 .popover 元素 */
}
.popover {
    padding: 10px 100px;
    margin-left: 10px;
    border: 1px solid red;
    position: absolute;
    left: 100%;
    top: 0;
    white-space: nowrap;
    display: none;
}
```

- `.clickMe` 和 `.popover` 是同级元素，冒泡只能是从子元素向父元素冒，故必须各自都添加 `e.stopPropagation()`
```javascript
$('.clickMe').on('click', function (e) {
    $('.popover').toggleClass('active')
    e.stopPropagation()
    setTimeout(function () {
        $(document).one('click', function () {
            $('.popover').removeClass('active')
        })
    }, 0)
})
$('.popover').on('click', function (e) {
    e.stopPropagation()
})
```

## 相关链接

- [Popovers](https://getbootstrap.com/docs/4.0/components/popovers/)