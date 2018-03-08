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
    $('.images > img:nth-child(n)').addClass('current')
        .siblings.addClass('enter')
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

// setTimeout(() => {
//     $('.images > img:nth-child(1)').removeClass('current')
//         .addClass('leave')
//         .one('transitionend', (e) => {
//             $(e.currentTarget).removeClass('leave')
//                 .addClass('enter')
//         })
//     $('.images > img:nth-child(2)').removeClass('enter')
//         .addClass('current')
// }, 3000);

// setTimeout(() => {
//     $('.images > img:nth-child(2)').removeClass('current')
//         .addClass('leave')
//         .one('transitionend', (e) => {
//             $(e.currentTarget).removeClass('leave')
//                 .addClass('enter')
//         })
//     $('.images > img:nth-child(3)').removeClass('enter')
//         .addClass('current')
// }, 6000);

// setTimeout(() => {
//     $('.images > img:nth-child(3)').removeClass('current')
//         .addClass('leave')
//         .one('transitionend', (e) => {
//             $(e.currentTarget).removeClass('leave')
//                 .addClass('enter')
//         })
//     $('.images > img:nth-child(1)').removeClass('enter')
//         .addClass('current')
// }, 9000);

// setTimeout(() => {
//     $('.images > img:nth-child(1)').removeClass('current')
//         .addClass('leave')
//         .one('transitionend', (e) => {
//             $(e.currentTarget).removeClass('leave')
//                 .addClass('enter')
//         })
//     $('.images > img:nth-child(2)').removeClass('enter')
//         .addClass('current')
// }, 12000);