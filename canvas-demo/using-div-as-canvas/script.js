var div = document.getElementById('canvas');
var painting = false;

function generateSpot(e) {
    var x = e.clientX;
    var y = e.clientY;
    var spot = document.createElement('div');
    div.appendChild(spot);
    spot.style = 'width: 6px; height: 6px; background-color: black; border-radius: 50%; position: absolute; top: ' + (y - 3) + 'px; left: ' + (x - 3) + 'px;';
}

// 按下鼠标
div.onmousedown = function (e) {
    painting = true;
    generateSpot(e);
}

// 移动鼠标
div.onmousemove = function (e) {
    if (painting) {
        generateSpot(e);    
    }
}

// 松开鼠标
div.onmouseup = function (e) {
    painting = false;
}
