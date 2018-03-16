let $buttons = $('.button-wrapper>button')
let $slides = $('.images')
let $images = $('.images > img')
let current = 0
let timer

makeFakeSlides()
$slides.css({'transform':'translateX(-400px)'})
timer = setInterval(function () {
    goToSlide(current + 1)
}, 2000)
bindEvents()

function makeFakeSlides() {
    let $firstCopy = $images.eq(0).clone(true)
    let $lastCopy = $images.eq($images.length - 1).clone(true)
    $slides.append($firstCopy)
    $slides.prepend($lastCopy)
}   

function goToSlide(index) {
    if (index > $buttons.length - 1) {
        index = 0
    } else if (index < 0) {
        index = $buttons.length - 1
    }

    if (current === $buttons.length - 1 && index === 0) {
        // 最后到第一
        $slides.css({'transform':`translateX(${- ($buttons.length + 1) * 400}px)`})
           .one('transitionend', function () {
                $slides.hide().offset()
                $slides.css({'transform':`translateX(${- (index + 1) * 400}px)`})
                    .show()
            })
    } else if (current === 0 && index === $buttons.length - 1) {
        // 第一到最后
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

function resetTimer() {
    clearInterval(timer)
    return setInterval(function () {
        goToSlide(current + 1)
    }, 2000)
}

// 监听用户的点击
function bindEvents() {
    $('.button-wrapper').on('click', 'button', function (e) {
        let $button = $(e.currentTarget)
        let index = $button.index() // index 从零开始
        clearInterval(timer) // clearInterval(undefined) 不会报错
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
}