// 1. 初始化
var initHash = init();
var keys = initHash['keys'];
var hash = initHash['hash'];

// 2. 生成按键
// 按键里有编辑按钮、网站图标
generateKeyboard(keys, hash);

// 3. 监听按键
listenToUser(hash);

function init() {
    var keys = {
        '0': {
            '0': 'q', '1': 'w', '2': 'e', '3': 'r', '4': 't', '5': 'y', '6': 'u', '7': 'i', '8': 'o', '9': 'p', 'length': 10
        },
        '1': {
            '0': 'a', '1': 's', '2': 'd', '3': 'f', '4': 'g', '5': 'h', '6': 'j', '7': 'k', '8': 'l', 'length': 9
        },
        '2': {
            '0': 'z', '1': 'x', '2': 'c', '3': 'v', '4': 'b', '5': 'n', '6': 'm', 'length': 7
        },
        'length': 3
    }
    var hash = {
        'q': 'mail.qq.com', 'w': 'music.163.com', 'e': 'ele.me', 'r': 'zimuzu.tv', 't': 'taobao.com', 'y': 'yxdm.tv', 'u': 'cn.udacity.com' , 'i': 'ife.baidu.com', 'o': 'outlook.live.com', 'p': 'panduoduo.top', 'a': 'acfun.cn', 's': 'bbs.saraba1st.com', 'd': 'dilidili.wang', 'f': 'facebook.com', 'g': 'github.com', 'h': 'alpha.wallhaven.cc', 'j': 'javascript.ruanyifeng.com', 'k': 'kuwo.cn', 'l': 'cn.linkedin.com', 'z': 'zhihu.com', 'x': 'ctrip.com', 'c': 'coursera.org', 'v': 'v2ex.com', 'b': 'bilibili.com', 'n': 'nba.com', 'm': 'developer.mozilla.org'
    }

    // 取出 localStorage 里备份过的 hash
    var hashInLocalStorage = getFromLocalStorage('hashInLocalStorage');
    if (hashInLocalStorage) { // 避免 hashInLocalStorage 有可能为空的情况
        hash = hashInLocalStorage;
    }
    return {
        'keys': keys,
        'hash': hash
    }
}

function getFromLocalStorage(name) {
    return JSON.parse(localStorage.getItem(name)
                                        || 'null'); // 不能是空字符串，空字符串会在第一次覆盖时出错
}

function tag(tagName, attributes) {
    var element = document.createElement(tagName);
    for (var key in attributes) {
        element[key] = attributes[key];
    }
    return element;
}

function createSpan(textContent) {
    var span = tag('span', {'className': 'text'});
    span.textContent = textContent;
    return span;
}

function createButton(id) {
    var button = tag('button', {'textContent': '编辑'});
    button.id = id; // 用于区别下面代码中输出的 button
    // 点击按键的编辑功能
    button.onclick = function (e) {
        // console.log(button); // 输出 <button id="m">编辑</button>，id 值不变
        // console.log(e['target']); // id 值会变
        var button2 = e['target'];
        var key = button2['id'];
        var x = prompt('请输入一个网址：').trim();
        if (x.length === 0) { return }
        hash[key] = x;
        var img2 = button2.previousSibling;
        img2.src = 'http://' + x + '/favicon.ico';
        img2.onerror = function (e) {
            e.target.src = './imgs/placeholder.png';
        }

        // 将变更后的 hash 备份到 localStorage 里面
        localStorage.setItem('hashInLocalStorage', JSON.stringify(hash));
    }
    return button;
}

function createImage(domain) {
    var img = tag('img', {});
    if (domain) {
        img.src = 'http://' + domain + '/favicon.ico';
    } else {
        img.src = './imgs/placeholder.png';
    }
    // 图片加载出错时：
    img.onerror = function (e) {
        e.target.src = './imgs/placeholder.png';
    }
    return img;
}

function generateKeyboard(keys, hash) {
    for (var index = 0; index < keys.length; index++) {
        var div = tag('div', {'className': 'row'});

        var row = keys[index];
        for (var index2 = 0; index2 < row.length; index2++) {
            var span = createSpan(row[index2]);

            var button = createButton(row[index2]);

            var img = createImage(hash[row[index2]]);

            var kbd = tag('kbd', {'className': 'key', 'title': `${hash[row[index2]]}`});
            kbd.appendChild(span);
            kbd.appendChild(img);
            kbd.appendChild(button);
            div.appendChild(kbd);
            main.appendChild(div); // main 是 CSS 中的 ID 名。ID 名可以在 JS 中直接用
        }
    }
}

function listenToUser(hash) {
    var bingSearchButton = document.getElementById('bing');
    var googleSearchButton = document.getElementById('google');
    var inputElement = document.getElementById('search-input');
    inputElement.focus() // 自动聚焦到搜索输入框

    var keyWord = '';
    inputElement.oninput = function () {
        keyWord = inputElement.value;
    };

    bingSearchButton.onclick = function () {
        window.open('https://cn.bing.com/search?q=' + keyWord, '_blank');
    };

    googleSearchButton.onclick = function () {
        window.open('https://www.google.com/search?q=' + keyWord, '_blank');
    };

    document.onkeypress = function (e) {
        if (document.activeElement === inputElement) {
            if (e.key === 'Enter') {
                window.open('https://www.google.com/search?q=' + keyWord, '_blank');
            } else {
                return
            }
        } else {
            // console.log(e);
            var key = e['key'].toLocaleLowerCase(); // 或 e.key，是按键的键名

            if (!(key in hash)) {
                // 如果用户按下的不是字母键，就提示用户，并阻止网页默认的跳转行为
                alert('亲，请按字母键。\n\n回车返回页面。');
                e.preventDefault();
            } else {
                // 用户按的是字母键
                var website = hash[key];
                // location.href = 'http://' + website; // 在当前窗口打开 website 对应的网址
                window.open('http://' + website, '_blank');
            }
        }
    };
}