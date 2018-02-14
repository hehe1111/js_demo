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
    'q': 'qq.com', 'w': '163.com', 'e': 'ele.me', 'r': 'renren.com', 't': 'taobao.com', 'y': 'youku.com', 'u': 'cn.ubuntu.com' , 'i': 'iqiyi.com', 'o': 'opera.com', 'p': 'pptv.com', 'a': 'acfun.tv', 's': 'sohu.com', 'z': 'zhihu.com', 'm': 'www.mcdonalds.com.cn'
}

// 生成按键
var index = 0;
while (index < keys.length) {
    var div = document.createElement('div');
    main.appendChild(div); // ID 名可以直接用
    var row = keys[index];
    var index2 = 0;
    while (index2 < row.length) {
        var kbd = document.createElement('kbd');
        kbd.textContent = row[index2];
        var button = document.createElement('button');
        button.textContent = '编辑';
        button.id = row[index2]; // 用于区别下面代码中输出的 button
        kbd.appendChild(button);
        div.appendChild(kbd);
        index2 = index2 + 1;

        // 点击按键的编辑功能
        button.onclick = function (e) {
            // console.log(button); // 输出 <button id="m">编辑</button>，id 值不变
            console.log(e['target']); // id 值会变
            var key = e['target']['id'];
            var x = prompt('请输入一个网址：');
            hash[key] = x;
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
