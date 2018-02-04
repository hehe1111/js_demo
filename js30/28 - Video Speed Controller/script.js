const speed = document.querySelector(".speed");
const speedBar = speed.querySelector(".speed-bar");
const video = document.querySelector(".flex");

function changeSpeed(e) {
    const height = e.offsetY;
    const percentage = e.offsetY / speed.offsetHeight;
    const min = 0.5;
    const max = 5;
    const playbackRate = percentage * (max - min) + min;

    // 实时更新 speedBar 的显示高度、文本
    speedBar.style.height = Math.round(percentage * 100) + '%';
    speedBar.textContent = playbackRate.toFixed(2) + '×';

    // 实时更新播放速率
    video.playbackRate = playbackRate;
}

function togglePlay() {
    video.paused ? video.play() : video.pause();
}

speed.addEventListener('click', changeSpeed);
video.addEventListener('click', togglePlay);
