[预览链接](https://hehe1111.github.io/js_demo/carousel-demos/loop-carousel/)

## 2018.03.15 - 记录

- bug：用户切换页面后，过一段时间再切回到当前页面时，轮播图片会乱播放
- 解决：如果用户切换页面，不再停留在当前页面，就停止轮播；用户再切回到当前页面后，再继续轮播
```javascript
let timer = setTimer()
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        clearInterval(timer)
    } else {
        timer = setTimer()
    }
})

// setTimer 函数
function setTimer() {
    return setInterval(() => {
        makeLeave(getImage(n))
            .one('transitionend', (e) => {
                makeEnter($(e.currentTarget))
            })
    
        if (n === imageNumber) {n = 0}
    
        makeCurrent(getImage(n + 1))
    
        n += 1
    }, 3000)
}
```

## 参考链接

- [Page Visibility API](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API)