const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

// geolocation 方法设置参数
const options = {
    enableHighAccuracy: false,
    timeout: 70000,
    maximumAge: 0
};

function success(position) {
    console.log(position);
    var currentPosition = position.coords;
    console.log('Your current position is:');
    console.log('Latitude : ' + currentPosition.latitude);
    console.log('Longitude: ' + currentPosition.longitude);
    console.log('More or less ' + currentPosition.accuracy + ' meters.');

    // 改变传感器速度值和罗盘的指向
    speed.textContent = currentPosition.speed;
    arrow.style.transform = `rotate(${currentPosition.heading}deg)`; // 要用反引号

    // 为演示而手动赋值，可去掉
    speed.textContent = 12; // 速度值
    arrow.style.transform = `rotate(30deg)`;
}

function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error, options);
} else {
    console.log('Your broswer does not support the Geolocation API');
}
