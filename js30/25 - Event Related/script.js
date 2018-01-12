let divs = document.querySelectorAll('div');
let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');

divs.forEach((div) => div.addEventListener('click', logText, {
    one: true,
    capture: false // 只允许冒泡
}));

function logText(e) {
    console.log(this.classList.value);
    // e.stopPropagation();
}

function logText1(e) {
    console.log(this.classList.value);
    // e.stopPropagation();
}

function logText2(e) {
    console.log(this.classList.value);
    // e.stopPropagation();
}

function logText3(e) {
    console.log(this.classList.value);
    // e.stopPropagation();
}

// 以下是允许在捕获阶段（capture）触发事件
// one.addEventListener('click', logText1, {
//     capture: true
// });
//
// two.addEventListener('click', logText2, {
//     capture: true
// });
//
// three.addEventListener('click', logText3, {
//     capture: true
// });
