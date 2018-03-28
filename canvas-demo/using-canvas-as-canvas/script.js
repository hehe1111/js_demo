var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

autoFullScreenCanvas(canvas, context);

listenToUser(canvas, context);

function autoFullScreenCanvas(canvas, context) {
    function fullScreenCanvas(canvas) {
        var pageWidth = document.documentElement.clientWidth;
        var pageHeight = document.documentElement.clientHeight;
        canvas.width = pageWidth;
        canvas.height = pageHeight;
    }

    function generateWhiteCanvas(context) {
        context.fillStyle = 'white';
        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(canvas.width, 0);
        context.lineTo(canvas.width, canvas.height);
        context.lineTo(0, canvas.height);
        context.fill();
    }

    fullScreenCanvas(canvas);
    generateWhiteCanvas(context);
    window.onresize = function () {
        fullScreenCanvas(canvas);
        generateWhiteCanvas(context);
    }
}

function drawLine(startX, startY, endX, endY, lineWidth = 4, color = 'pink') {
    context.lineWidth = lineWidth;
    context.strokeStyle = color;
    context.lineCap = 'round';

    context.beginPath();
    context.moveTo(startX, startY);
    context.lineTo(endX, endY);
    context.stroke();
}

function erase(x, y) {
    context.beginPath();
    context.arc(x, y, 6, 0, Math.PI * 2);

    // 点
    context.fillStyle = 'white';
    context.fill();
}

function listenToUser(canvas, context) {
    var lastPoint = { 'x': undefined, 'y': undefined }
    var newPoint = { 'x': undefined, 'y': undefined }

    // 切换画笔、橡皮擦
    var eraserEnabled = false;
    var eraserIcon = document.getElementById('eraser');
    var penIcon = document.getElementById('pen');
    eraserIcon.onclick = function () {
        eraserEnabled = true;
        eraserIcon.classList.add('active');
        penIcon.classList.remove('active');
    }
    penIcon.onclick = function () {
        eraserEnabled = false;
        penIcon.classList.add('active');
        eraserIcon.classList.remove('active');
    }

    // 切换画笔颜色
    var black = document.getElementById('black');
    var red = document.getElementById('red');
    var green = document.getElementById('green');
    var blue = document.getElementById('blue');
    black.onclick = function () {
        context.fillStyle = 'black';
        context.strokeStyle = 'black';
        black.classList.add('active');
        red.classList.remove('active');
        green.classList.remove('active');
        blue.classList.remove('active');
    }
    red.onclick = function () {
        context.fillStyle = 'red';
        context.strokeStyle = 'red';
        black.classList.remove('active');
        red.classList.add('active');
        green.classList.remove('active');
        blue.classList.remove('active');
    }
    green.onclick = function () {
        context.fillStyle = 'green';
        context.strokeStyle = 'green';
        black.classList.remove('active');
        red.classList.remove('active');
        green.classList.add('active');
        blue.classList.remove('active');
    }
    blue.onclick = function () {
        context.fillStyle = 'blue';
        context.strokeStyle = 'blue';
        black.classList.remove('active');
        red.classList.remove('active');
        green.classList.remove('active');
        blue.classList.add('active');
    }

    // 切换画笔粗细
    var thin = document.getElementById('thin');
    var thick = document.getElementById('thick');
    thin.onclick = function () {
        context.lineWidth = 5;
    }
    thick.onclick = function () {
        context.lineWidth = 10;
    }

    // 清屏
    var clearIcon = document.getElementById('clear');
    clearIcon.onclick = function () {
        context.clearRect(0, 0, canvas.width, canvas.height);

        autoFullScreenCanvas(canvas, context);
    }

    // 保存下载
    var downloadIcon = document.getElementById('download');
    downloadIcon.onclick = function () {
        var url = canvas.toDataURL('image/png');
        // console.log(url);
        var a = document.createElement('a');
        document.body.appendChild(a);
        a.href = url;
        a.download = '我的画儿'; // 保存时图片的名称
        // a.target = '_blank';
        a.click();
    }
    
    // 特性检测
    if (document.documentElement.ontouchstart !== undefined) {
        // 触屏设备
        canvas.ontouchstart = function (e) {
            var x = e.touches[0].clientX;
            var y = e.touches[0].clientY;
            if (eraserEnabled) {
                // context.clearRect(x - 5, y - 5, 10, 10);
                erase(x, y)
            } else {
                lastPoint = { 'x': x, 'y': y }
            }
        }

        canvas.ontouchmove = function (e) {
            var x = e.touches[0].clientX;
            var y = e.touches[0].clientY;
            
            if (eraserEnabled) {
                // context.clearRect(x - 5, y - 5, 10, 10);
                erase(x, y)
            } else {
                newPoint = { 'x': x, 'y': y }
                
                drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y, context.lineWidth, context.strokeStyle);
                
                lastPoint = newPoint; // 最重要的是这一句
            }

        }

        canvas.ontouchend = function (e) {
            console.log('touch end');
            // console.log(e);
        }
    } else {
        // 非触屏设备
        var clicked = false; // clicked 用于判断是否按下鼠标
        canvas.onmousedown = function (e) {
            clicked = true; // 按下鼠标，所以为 true
            var x = e.clientX;
            var y = e.clientY;
            if (eraserEnabled) {
                // context.clearRect(x - 5, y - 5, 10, 10);
                erase(x, y)
            } else {
                lastPoint = { 'x': x, 'y': y }
            }
        }

        canvas.onmousemove = function (e) {
            var x = e.clientX;
            var y = e.clientY;

            if (!clicked) { return }

            if (eraserEnabled) {
                // context.clearRect(x - 5, y - 5, 10, 10);
                erase(x, y)
            } else {
                newPoint = { 'x': x, 'y': y }

                drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y, context.lineWidth, context.strokeStyle);

                lastPoint = newPoint; // 最重要的是这一句
            }
        }

        canvas.onmouseup = function (e) {
            clicked = false;
        }
    }
}