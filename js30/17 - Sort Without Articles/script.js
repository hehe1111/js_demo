const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil',
    'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State',
    'We Came as Romans', 'Counterparts', 'Oh, Sleeper','A Skylit Drive',
    'Anywhere But Here', 'An Old Dog'];

// 去前缀函数
function delPrefix(item) {
    return item.replace(/^(The|An|A)\s{1}/, '');
}

// 展示至HTML页面
function displayArray(arr) {
    document.getElementById('bands').innerHTML = (
        '<li>' + arr.join('</li><li>') + 'li'); // 加括号是为了换行
}

/*
 * displayArray2() 函数用 document.createDocumentFragment()、
 * document.createElement() 及 appendChild() 可达到与
 * displayArray() 函数相同的效果；
 * 使用 document.createDocumentFragment() 减少了更改DOM现场的次数，
 * 可以提高性能。
 */
function displayArray2(arr) {
    var docFrag = document.createDocumentFragment();
    for (var i = 0; i < arr.length; i++) {
        var liElement = document.createElement('li');
        liElement.textContent = arr[i];
        docFrag.appendChild(liElement);
    }
    document.getElementById('bands').appendChild(docFrag);
}

// 按要求排序，先大后小
bands.sort(function(a, b) {
    return delPrefix(a) > delPrefix(b) ? 1 : -1; // 去除前缀后再进行比较，但最终并不会改变数组元素
});

displayArray2(bands);

// 用 ES6 语法改写：
// const delPrefix = item => item.replace(/^(The|An|A)\s{1}/, '');

// const displayArray = arr => {
//     document.getElementById('bands').innerHTML = (
//         '<li>' + arr.join('</li><li>') + 'li'); // 加括号是为了换行
// };

// bands.sort((a, b) => delPrefix(a) > delPrefix(b) ? 1 : -1);
