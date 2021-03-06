const canvas = document.querySelector('#draw');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const context = canvas.getContext('2d');
context.lineWidth = 90;
context.lineCap = "round";
context.lineJoin = "round";
context.strokeStyle = "#f00";
context.fillStyle = "#f00";

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;
let x = 0;
let y = 0;

function draw(e) {
    if(!isDrawing) return;

	// console.log(e.type);
    if(e.type == "mousemove"){
        x = e.offsetX;
        y = e.offsetY;
    } else  {
		// 处理触摸屏操作
        x = e.changedTouches[0].clientX;
        y = e.changedTouches[0].clientY;
		// console.log(e);
    }

	// 彩虹效果
    context.strokeStyle = `hsl(${ hue }, 90%, 50%)`;
    if (hue >= 360) {
        hue = 0;
    }
    hue++;
    console.log('色相值为：' + hue);

	// 水墨效果
	// context.strokeStyle = `rgba(0, 0, 0, ${ hue })`;
	// if(hue >= 0.7) hue = 0;
	// hue += 0.01;
    // console.log('色相值为：' + hue);

	// 控制笔触大小
    // if(context.lineWidth > 120 || context.lineWidth < 10) {
    //     direction = !direction;
    // }
    // if (direction) {
    //     context.lineWidth++;
    // } else {
    //     context.lineWidth--;
    // }

	// 控制绘制路径
    context.beginPath();

    context.moveTo(lastX, lastY); // 起点
    context.lineTo(x, y); // 终点
    context.stroke(); // 绘制起点到终点的路径
	// lastX = x;
	// lastY = y;
    [lastX, lastY] = [x, y];
	// console.log(context.lineWidth);
	// console.log(x +"-" + e.offsetX);
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

// 监听触摸板的操作
canvas.addEventListener('touchstart', (e) => {
    isDrawing = true;
    lastX = e.changedTouches[0].clientX;
    lastY = e.changedTouches[0].clientY;
});
canvas.addEventListener('touchmove', draw);
canvas.addEventListener('touchend', () => isDrawing = false);
canvas.addEventListener('touchcancel', () => isDrawing = false);
