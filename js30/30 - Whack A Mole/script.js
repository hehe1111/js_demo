const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const startButton = document.querySelector('.start-button');
let lastHole;
let timeUp = false;
let score = 0;
let count = 0; // 用于记录函数 peep 的执行次数

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
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    count = 1;
    setTimeout(() => {
        timeUp = true;
        console.log('共执行了 ' + count + ' 次！');
        count = 0; // 重置为零，避免累加
    }, 10000); // 10 秒之后停止游戏
    console.clear(); // 清空控制台，便于输出本次执行的相关信息
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
