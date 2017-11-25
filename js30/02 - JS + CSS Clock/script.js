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
