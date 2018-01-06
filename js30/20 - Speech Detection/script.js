window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var words = document.getElementById('words');

// 新建一个语音识别对象
var speech = new SpeechRecognition();
speech.interimResults = true;
speech.lang = 'zh-CN';
speech.start();

// 有结果返回时
speech.addEventListener('result', (e) => {
    const results = Array.from(e.results)
    // e.results 中保存的是识别的结果，本来并不是数组，需要将其转换为数组，方便使用其 map、join 等方法。
        .map(result => result[0])
        .map(result => result.transcript) // 获取到每一段话，是一个数组类型，转成字符串。
        .join(''); // 将每一段话连接成字符串
        words.textContent = results; //将结果输出在页面上
    });


// 开始捕获到音频时
speech.onaudiostart = function(e) {
    console.log('开始捕获语音');
}

// 出现错误时
speech.onerror = function(e) {
    console.log('出错了：' + e.error);
}

// 语音识别结束时重新开始捕获语音
speech.onend = function(){
   speech.start();
}
