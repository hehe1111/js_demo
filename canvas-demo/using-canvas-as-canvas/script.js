var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var eraserEnabled = false;
var actions = document.getElementById('actions');
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

autoFullScreenCanvas(canvas);

listenToUser(canvas);

function autoFullScreenCanvas(canvas) {
    function fullScreenCanvas() {
        var pageWidth = document.documentElement.clientWidth;
        var pageHeight = document.documentElement.clientHeight;
        canvas.width = pageWidth;
        canvas.height = pageHeight;
    }

    fullScreenCanvas();
    window.onresize = function () {
        fullScreenCanvas();
    }
}

function drawCircle(x, y, radius = 2, color = 'pink') {
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);

    // 点
    context.fillStyle = color;
    context.fill();

    // 圈
    // radius 太小会使圈看起来像点
    // context.strokeStyle = color;
    // context.stroke();
}

// drawCircle() 的 radius 参数必须是
// drawLine() 的 lineWidth 参数的一半
// color 参数默认一致

function drawLine(startX, startY, endX, endY, lineWidth = 4, color = 'pink') {
    context.lineWidth = lineWidth;
    context.strokeStyle = color;

    context.beginPath();
    context.moveTo(startX, startY);
    context.lineTo(endX, endY);
    context.stroke();
}

function listenToUser(canvas) {
    var lastPoint = { 'x': undefined, 'y': undefined }
    var newPoint = { 'x': undefined, 'y': undefined }

    // 特性检测
    if (document.documentElement.ontouchstart !== undefined) {
        // 触屏设备
        canvas.ontouchstart = function (e) {
            var x = e.touches[0].clientX;
            var y = e.touches[0].clientY;
            if (eraserEnabled) {
                context.clearRect(x - 5, y - 5, 10, 10);
            } else {
                lastPoint = { 'x': x, 'y': y }

                drawCircle(x, y);
            }
        }

        canvas.ontouchmove = function (e) {
            var x = e.touches[0].clientX;
            var y = e.touches[0].clientY;

            // if (!clicked) { return }

            if (eraserEnabled) {
                context.clearRect(x - 5, y - 5, 10, 10);
            } else {
                newPoint = { 'x': x, 'y': y }

                drawCircle(x, y); // 加上这一句能够减少画线时线的细微断层
                drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y);

                lastPoint = newPoint; // 最重要的是这一句
            }

        }

        canvas.ontouchend = function (e) {
            console.log('touch end');
            // console.log(e);

        }
    } else {
        var clicked = false; // clicked 用于判断是否按下鼠标

        // 非触屏设备
        canvas.onmousedown = function (e) {
            clicked = true; // 按下鼠标，所以为 true
            var x = e.clientX;
            var y = e.clientY;
            if (eraserEnabled) {
                context.clearRect(x - 5, y - 5, 10, 10);
            } else {
                lastPoint = { 'x': x, 'y': y }

                drawCircle(x, y);
            }
        }

        canvas.onmousemove = function (e) {
            var x = e.clientX;
            var y = e.clientY;

            if (!clicked) { return }

            if (eraserEnabled) {
                context.clearRect(x - 5, y - 5, 10, 10);
            } else {
                newPoint = { 'x': x, 'y': y }

                drawCircle(x, y); // 加上这一句能够减少画线时线的细微断层
                drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y);

                lastPoint = newPoint; // 最重要的是这一句
            }
        }

        canvas.onmouseup = function (e) {
            clicked = false;
        }
    }
}