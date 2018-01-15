// 获取三个主要的链接元素，并将获得的 NodeList 对象转为数组，方便后续使用数组方法
var anchors = document.querySelectorAll('.cool > li > a');
var anchorsArr = Array.from(anchors);
var bg = document.querySelector('.dropdown-background');

anchorsArr.map(function (item, index) {
    item.onmouseenter = function () {
        item.style.transform = 'scale(1.2)';

        // 在父元素即 li 元素上添加类
        item.parentNode.classList.add('trigger-enter');
        // item.parentNode.classList.add('trigger-enter-active');
        toggleBackground(index + 1);
    }
    item.onmouseout = function () {
        item.style.transform = 'scale(1)';

        // 移除类
        item.parentNode.classList.remove('trigger-enter');
        // item.parentNode.classList.remove('trigger-enter-active');
        toggleBackground(); // 不需要传参
    }
})

function toggleBackground(item) {
    var itemPosition;

    // 计算位置
    if (item === 1 || item === 2 || item === 3) {
        itemPosition = document.querySelector('.dropdown' + item).getBoundingClientRect(); // 获取被隐藏的三个框的宽高和位置
        bg.style.left = `${itemPosition.left}px`;
        bg.style.top = `${itemPosition.top - 60}px`; // .dropdown { transform: translateY(100px); }
        bg.style.width = `${itemPosition.width}px`;
        bg.style.height = `${itemPosition.height}px`;
        bg.classList.add('open');
    } else {
        bg.style.height = 0;
        bg.style.width = 0;
        bg.classList.remove('open');
    }
}
