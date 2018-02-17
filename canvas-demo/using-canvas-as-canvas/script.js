var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var eraserEnabled = false;
var actions = document.getElementById('actions');
var eraserButton = document.getElementById('eraser');
var brushButton = document.getElementById('brush');
eraserButton.onclick = function () {
    eraserEnabled = true;
    actions.className = 'actions eraser-enabled'
}
brushButton.onclick = function () {
    eraserEnabled = false;
    actions.className = 'actions'
}

autoFullScreenCanvas(canvas);

listenToMouse(canvas);

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

function listenToMouse(canvas) {
    var using = false; // using 由于判断是否按下鼠标
    var lastPoint = { 'x': undefined, 'y': undefined }
    var newPoint = { 'x': undefined, 'y': undefined }

    canvas.onmousedown = function (e) {
        using = true; // 按下鼠标，所以为 true
        var x = e.clientX;
        var y = e.clientY;
        if (eraserEnabled) {
            context.clearRect(x-5, y-5, 10, 10);
        } else {
            lastPoint = { 'x': x, 'y': y }
        
            drawCircle(x, y);
        }
    }
    
    canvas.onmousemove = function (e) {
        var x = e.clientX;
        var y = e.clientY;

        if (!using) { return }

        if (eraserEnabled) {
            context.clearRect(x-5, y-5, 10, 10);
        } else {
            newPoint = { 'x': x, 'y': y }
    
            drawCircle(x, y); // 加上这一句能够减少画线时线的细微断层
            drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y);
    
            lastPoint = newPoint; // 最重要的是这一句
        }
    }
    
    canvas.onmouseup = function (e) {
        using = false;
    }
}