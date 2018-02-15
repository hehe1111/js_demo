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
    'q': 'mail.qq.com', 'w': 'music.163.com', 'e': 'ele.me', 'r': 'zimuzu.tv', 't': 'taobao.com', 'y': 'yxdm.tv', 'u': 'cn.udacity.com' , 'i': 'ife.baidu.com', 'o': 'outlook.live.com', 'p': 'panduoduo.top', 'a': 'acfun.cn', 's': 'bbs.saraba1st.com', 'd': 'dilidili.wang', 'f': 'facebook.com', 'g': 'github.com', 'h': 'alpha.wallhaven.cc', 'j': 'javascript.ruanyifeng.com', 'k': 'khanacademy.org', 'l': 'cn.linkedin.com', 'z': 'zhihu.com', 'x': 'ctrip.com', 'c': 'coursera.org', 'v': 'v2ex.com', 'b': 'bilibili.com', 'n': 'nba.com', 'm': 'developer.mozilla.org'
}

// 取出 localStorage 里备份过的 hash
var hashInLocalStorage = JSON.parse(localStorage.getItem('hashInLocalStorage')
                                    || 'null'); // 不能是空字符串，空字符串会在第一次覆盖时出错
if (hashInLocalStorage) { // 避免 hashInLocalStorage 有可能为空的情况
    hash = hashInLocalStorage;
}

// 生成按键，按键里有编辑按钮
var index = 0;
while (index < keys.length) {
    var div = document.createElement('div');
    div.className = 'row';
    main.appendChild(div); // ID 名可以直接用
    var row = keys[index];
    var index2 = 0;
    while (index2 < row.length) {
        var kbd = document.createElement('kbd');
        kbd.className = 'key';
        var span = document.createElement('span');
        span.className = 'text';
        span.textContent = row[index2];
        var button = document.createElement('button');
        button.textContent = '编辑';
        button.id = row[index2]; // 用于区别下面代码中输出的 button
        var img = document.createElement('img');
        if (hash[row[index2]]) {
            img.src = 'http://' + hash[row[index2]] + '/favicon.ico';
        } else {
            img.src = './imgs/placeholder.png';
        }

        // 图片加载出错时：
        img.onerror = function (e) {
            e.target.src = './imgs/placeholder.png';
        }

        kbd.appendChild(span);
        kbd.appendChild(img);
        kbd.appendChild(button);
        div.appendChild(kbd);
        index2 = index2 + 1;

        // 点击按键的编辑功能
        button.onclick = function (e) {
            // console.log(button); // 输出 <button id="m">编辑</button>，id 值不变
            console.log(e['target']); // id 值会变
            var button2 = e['target'];
            var img2 = button2.previousSibling;
            var key = button2['id'];
            var x = prompt('请输入一个网址：');
            hash[key] = x;
            img2.src = 'http://' + x + '/favicon.ico';
            img2.onerror = function (e) {
                e.target.src = './imgs/placeholder.png';
            }

            // 将变更后的 hash 备份到 localStorage 里面
            localStorage.setItem('hashInLocalStorage', JSON.stringify(hash));
            console.log(hash);
        }
    }
    index = index + 1;
}

// 监听按键
document.onkeypress = function (e) {
    console.log(e);
    var key = e['key']; // 或 e.key，是按键的键名
    var website = hash[key];
    // location.href = 'http://' + website; // 在当前窗口打开 website 对应的网址
    window.open('http://' + website, '_blank');
}
