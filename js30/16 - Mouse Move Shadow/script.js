var hero = document.querySelector('.hero');
var text = hero.querySelector('h1');
var factor = 0.4; //当鼠标移动至显示区域边界时，阴影距离占hero元素宽和高的比例

hero.addEventListener('mousemove', shadowMove);

function shadowMove(e) {
    // 元素的宽高
    var range = {
        x: hero.offsetWidth,
        y: hero.offsetHeight
    }

    // 鼠标的位置
    var position = {
        x: e.target.offsetLeft + e.offsetX,
        y: e.target.offsetTop + e.offsetY
    }

    // 计算阴影移动的距离
    var distanceX = parseInt((position.x - (range.x / 2)) * factor);
    var distanceY = parseInt((position.y - (range.y / 2)) * factor);

    // 修改阴影样式
    text.style.textShadow = distanceX + 'px ' + distanceY + 'px 0 red, ' + (-distanceX) + 'px ' + distanceY + 'px 0 yellow, ' + distanceY + 'px ' + (-distanceX) + 'px 0 blue, ' + (-distanceY) + 'px ' + (-distanceX) + 'px 0 purple';
}
