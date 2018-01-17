const slider = document.querySelector('.items');
let isMouseDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft; // 或者 startX = e.pageX; 也可以
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseup',(e) =>{
    isMouseDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove',(e) =>{
    if (!isMouseDown) {
        return;
    }
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft; // 或者 const x = e.pageX; 也可以
    const walk = (x - startX) * 3; // 计算鼠标移动距离，并翻倍，作为滚动条移动距离
    // console.log(walk);
    slider.scrollLeft = scrollLeft - walk;
});
