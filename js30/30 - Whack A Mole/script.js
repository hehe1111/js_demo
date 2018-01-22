const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const startButton = document.querySelector('.start-button');
let lastHole;
let timeUp = false;
let score = 0;
let count = 0; // 用于记录函数 peep 的执行次数
let timeoutID; // 用于避免同时多次点击 start 按钮导致的多次游戏同时进行

function getRandomTime(min, max) {
    return Math.round((Math.random() * Math.abs(max - min)) + min);
}

function getRandomHole(holes) {
    const index = Math.floor(Math.random() * holes.length);
    const hole = holes[index];
    if (hole === lastHole) {
        console.log('Ah nah thats the same one bud');
        return getRandomHole(holes);
    }
    lastHole = hole;
    return hole;
}

function peep() {
    const time = getRandomTime(200, 1000);
    const hole = getRandomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp) {
            peep();
            count += 1;
        }
    }, time);
}

function startGame() {
    if (!timeoutID) {
        scoreBoard.textContent = 0;
        timeUp = false;
        score = 0;
        peep();
        count = 1;
        timeoutID = setTimeout(() => {
            timeUp = true;
            console.log('共执行了 ' + count + ' 次！');
            count = 0; // 重置为零，避免累加
            alert('Game Over!');
            console.log(timeoutID); // clearTimeout(timeoutID) 不起作用
            timeoutID = undefined; // 清除 timeoutID，为进行下一次游戏做准备
        }, 10000); // 10 秒之后停止游戏
        console.clear(); // 清空控制台，便于输出本次执行的相关信息
    } else {
        console.log('正在游戏中！');
    }
}

function bonk(e) {
    if (!e.isTrusted) return; // cheater!
    score += 1;
    this.parentNode.classList.remove('up');
    scoreBoard.textContent = score;
}

moles.forEach((mole) => {
    mole.addEventListener('click', bonk);
})
startButton.addEventListener('click', startGame);
