[预览链接](https://hehe1111.github.io/js_demo/carousel-demos/loop-carousel-2/)

## 2018.03.16 - 记录

- 序号按钮的个数与图片张数一致
- ```clearInterval(undefined)``` 不会报错
- 每次点击图片下的按钮，都必须要重置计时器
```javascript
function resetTimer() {
    clearInterval(timer)
    return setInterval(function () {
        goToSlide(current + 1)
    }, 2000)
}

// 监听用户的点击
function lisentToUser() {
    $('.button-wrapper').on('click', 'button', function (e) {
        let $button = $(e.currentTarget)
        let index = $button.index() // index 从零开始
        clearInterval(timer)
        goToSlide(index)
        timer = resetTimer()
    })

    $('.previous').on('click', function () {
        goToSlide(current - 1)
        timer = resetTimer()
    })

    $('.next').on('click', function () {
        goToSlide(current + 1)
        timer = resetTimer()
    })
    
    $('.window').on('mouseenter', function () {
        clearInterval(timer)
    }).on('mouseleave', function () {
        timer = resetTimer()
    })

    // 当用户切换去其他页面时，停止轮播；用户回来再继续轮播
    document.addEventListener('visibilitychange', function () {
        if (document.hidden) {
            clearInterval(timer)
        } else {
            timer = resetTimer()
        }
    })
}
```

- 部分代码
```javascript
function goToSlide(index) {
    // 限制 index 的值
    if (index > $buttons.length - 1) {
        index = 0
    } else if (index < 0) {
        index = $buttons.length - 1
    }

    if (current === $buttons.length - 1 && index === 0) {
        // 最后到第一
        // 先展示位于真最后一张后的假第一张，再偷偷用真第一张替换假第一张
        $slides.css({'transform':`translateX(${- ($buttons.length + 1) * 400}px)`})
           .one('transitionend', function () {
                $slides.hide().offset() 
                // 加上 .offset() 避免浏览器省去 hide() 步骤
                // .offset() 返回 {top: 0, left: 0}
                // 故后面不可以继续链式调用
                $slides.css({'transform':`translateX(${- (index + 1) * 400}px)`})
                    .show()
            })
    } else if (current === 0 && index === $buttons.length - 1) {
        // 第一到最后
        // 先展示位于真第一张前的假最后一张，再偷偷用真最后一张替换假最后一张
        $slides.css({'transform':`translateX(0px)`})
            .one('transitionend', function () {
                $slides.hide().offset()
                $slides.css({'transform':`translateX(${- (index + 1) * 400}px)`})
                    .show()
            })
    } else {
        $slides.css({'transform':`translateX(${- (index + 1) * 400}px)`})
    }

    current = index
}
```

## 参考链接

- [Page Visibility API](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API)