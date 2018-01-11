var nav = document.getElementById('main');
var changePoint = nav.offsetTop;
var logo = document.getElementById('logo');

function adjustNav() {
    if (window.scrollY >= changePoint) {
        nav.className = 'fixed-nav';
        logo.style['max-width'] = '200px';
    } else {
        nav.className = '';
        logo.style['max-width'] = '0';
    }
}

window.addEventListener('scroll', adjustNav);
