/*

// 原作者 Wes Bos 提供的 JS 代码，注释来源于 soyaine

// 获取三个指针对应的 HTML 元素，留待后续操作
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date(); // 创建 Date 对象

  const seconds = now.getSeconds(); // 获取当前时间的秒，下同
  const secondsDegrees = ((seconds / 60) * 360) + 90; //页面初始状态中秒针为水平的，所以零点时（时间起始位置）应用到元素上的 rotate 旋转角度值应该为 90°。秒针转一圈为 60s，所以每一秒对应表盘上的角度值即为 (...s / 60s) * 360°。下同
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`; // 将角度值赋值给 HTML 元素的 style 中的 transform 属性，下同

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setDate();

setInterval(setDate, 1000);
*/


//
// 以下代码来源于 soyaine
//

// 由于不能每次都重新读取，所以放到外面
// 另一种获取页面元素的方法
// const secondHand = document.getElementsByClassName("second-hand")[0];
const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
    const date = new Date();

    const seconds = date.getSeconds();
    const secondDegrees = (seconds / 60) * 360 + 90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;

    // 加入秒钟所占的时间，使分针可以缓慢地移动
    const minutes = date.getMinutes();
    const minuteDegrees = (minutes / 60) * 360 + ((seconds / 60) / 60) * 360 + 90; //
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

    // 加入分钟所占的时间，使时针可以缓慢地移动；
    // 由于数值太小，故不计每秒对时针的影响
    const hours = date.getHours();
    const hourDegrees = (hours / 12) * 360 + ((minutes / 60) / 12) * 360 + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    // 解决秒针在第 59 秒到第 0 秒时
    // 由 444 deg 到 90 deg 产生的逆时针回转问题
    // 【第一种方法】
    // 在发生跳顿的角度值处，将 CSS 的 `transition` 属性去掉
    if (secondDegrees === 90) {
        secondHand.style.transition = "all 0s";
    }

    // 分针也同理，59 分到 0 分的时候也存在角度由大到小
    // 导致的逆时针回转问题
    if (minuteDegrees === 90) {
        minuteHand.style.transition = "all 0s";
    }

    // 时针
    if (hourDegrees === 90) {
        hourHand.style.transition = "all 0s";
    }

    // console.log(`${hours}:${minutes}:${seconds} - ${hourDegrees}:${minuteDegrees}:${secondDegrees}`);
}

setInterval(setDate, 1000);

/*
//
// 【第二种方法】
// 只在第一次加载时新建一个 Date 对象，
// 此后每秒更新角度值，值会不断增长
//
const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");

let secondDegrees = 0;
    minuteDegrees = 0;
    hourDegrees = 0;

function initDate() {
    const date = new Date();

    const seconds = date.getSeconds();
    secondDegrees = (seconds / 60) * 360 + 90;

    const minutes = date.getMinutes();
    minuteDegrees = (minutes / 60) * 360 + ((seconds / 60) / 60) * 360 + 90;

    const hours = date.getHours();
    hourDegrees = (hours /12) * 360 + ((minutes / 60) / 12) * 360 + (((seconds /60) / 60) / 12) * 360 + 90;
}

function updateDate() {
    secondDegrees += (1 / 60) * 360;
    minuteDegrees += ((1 / 60) / 60) * 360;
    hourDegrees += (((1 /60) / 60) / 12) * 360;

    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    // console.log(`${hourDegrees}:${minuteDegrees}:${secondDegrees}`);
}

// initDate();
// setInterval(updateDate, 1000);
*/
