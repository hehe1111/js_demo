var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

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

var using = false; // using 由于判断是否按下鼠标
var lastPoint = { 'x': undefined, 'y': undefined }
var newPoint = { 'x': undefined, 'y': undefined }

function drawCircle(x, y, radius=2, color='pink') {
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI*2);

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

function drawLine(startX, startY, endX, endY, lineWidth=4, color='pink') {
    context.lineWidth = lineWidth;
    context.strokeStyle = color;

    context.beginPath();
    context.moveTo(startX, startY);
    context.lineTo(endX,endY);
    context.stroke();
}

canvas.onmousedown = function (e) {
    var x = e.clientX;
    var y = e.clientY;
    if (usingEraser) {
        using = true;
        context.clearRect(x-5, y-5, 10, 10);
    } else {
        using = true;
        lastPoint = { 'x': x, 'y': y }
    
        drawCircle(x, y);
    }
}

canvas.onmousemove = function (e) {
    var x = e.clientX;
    var y = e.clientY;
    if (usingEraser) {
        if (using) {
            context.clearRect(x-5, y-5, 10, 10);
        }
    } else {
        if (using) {
            newPoint = { 'x': x, 'y': y }
    
            drawCircle(x, y); // 加上这一句能够减少画线时线的细微断层
            drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y);
    
            lastPoint = newPoint; // 最重要的是这一句
        }
    }

}

canvas.onmouseup = function (e) {
    using = false;
}

var usingEraser = false;
var eraserButton = document.getElementById('eraser');
eraserButton.onclick = function () {
    usingEraser = !usingEraser;
}