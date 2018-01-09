var liArray = document.getElementsByTagName('li');
var length = liArray.length;

var activeBackground = document.createElement('span');
activeBackground.setAttribute('class', 'highlight');
document.body.appendChild(activeBackground);

// 避免第一次激活时白色背景会从视口左上角开始跳动到鼠标悬浮的 a 链接上
activeBackground.style.display = 'none';

// 监听鼠标移入、移出事件
for (var i = 0; i < length; i++) {
    liArray[i].onmouseenter = lightOn;
}

function lightOn(e) {
    var activeLink = e.target.getBoundingClientRect();
    var coords = {
        width: activeLink.width,
        height: activeLink.height,
        left: window.pageXOffset + activeLink.left,
        top: window.pageYOffset + activeLink.top
    };

    activeBackground.style.width = `${coords.width}px`;
    activeBackground.style.height = `${coords.height}px`;
    activeBackground.style.left = `${coords.left}px`;
    activeBackground.style.top = `${coords.top}px`;
    activeBackground.style.display = `inline`;
}
