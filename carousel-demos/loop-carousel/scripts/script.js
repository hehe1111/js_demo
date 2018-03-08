let n
init()

setInterval(() => {
    makeLeave(getImage(n))
        .one('transitionend', (e) => {
            makeEnter($(e.currentTarget))
        })

    if (n === 3) {n = 0}

    makeCurrent(getImage(n + 1))

    n += 1
}, 3000);

function init() {
    n = 1
    getImage(n).addClass('current').siblings().addClass('enter')
}

function makeCurrent($node) {
    return $node.removeClass('leave enter').addClass('current')
}

function makeLeave($node) {
    return $node.removeClass('current enter').addClass('leave')
}

function makeEnter($node) {
    return $node.removeClass('current leave').addClass('enter')
}

function getImage(n) {
    return $(`.images > img:nth-child(${n})`)
}