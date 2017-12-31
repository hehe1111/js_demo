function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
    var context = this, args = arguments;
    var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
    };
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
    sliderImages.forEach(img => {
        //
        const slideInAt = (window.scrollY + window.innerHeight) - (img.height / 2);
        // 页面顶部到图片底部的高度
        const imgBottom = img.offsetTop + img.height;
        // 图片显示已超过一半
        const isHalfShown = slideInAt > img.offsetTop;
        // 图片未完全从视口中消失
        const isNotScrolledPast = window.scrollY < imgBottom;

        if (isHalfShown && isNotScrolledPast) {
            img.classList.add('active');
        } else {
            img.classList.remove('active');
        }
    })
}

window.addEventListener('scroll', debounce(checkSlide));
