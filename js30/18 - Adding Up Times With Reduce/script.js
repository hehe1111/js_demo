function timeTransAndReduce() {
    var times = [];
    var liElement = document.getElementsByTagName('li');
    var timeItem;
    for (var i = 0, len = liElement.length; i < len; i++) {
        timeItem = liElement[i].dataset['time'].split(':');
        // 将时间都转化为秒
        times.push(parseInt(timeItem[0], 10) * 60 + parseInt(timeItem[1], 10));
    }
    // 累计时间并返回
    return times.reduce(function (a, b) {
        return a + b;
    }, 0);
}

// 格式化显示时间
function timeFormatter(seconds) {
    var sec = seconds % 60;
    var min = Math.floor((seconds / 60)) % 60;
    var hour = Math.floor(seconds / 3600);
    document.getElementById('totaltime').textContent = (hour + ' 小时 '
    + min + ' 分 ' + sec + ' 秒。');
}

timeFormatter(timeTransAndReduce());
