const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil',
    'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State',
    'We Came as Romans', 'Counterparts', 'Oh, Sleeper','A Skylit Drive',
    'Anywhere But Here', 'An Old Dog'];

//去前缀函数
function delPrefix(item) {
    return item.replace(/^(The|An|A)\s{1}/, '');
}

//展示至HTML页面
function displayArray(arr) {
    document.getElementById('bands').innerHTML = (
        '<li>' + arr.join('</li><li>') + 'li'); // 加括号是为了换行
}

//按要求排序，先大后小
bands.sort(function(a, b) {
    return delPrefix(a) > delPrefix(b) ? 1 : -1; // 去除前缀后再进行比较，但最终并不会改变数组元素
});

displayArray(bands);
