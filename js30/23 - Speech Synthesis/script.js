const synth = window.speechSynthesis;
let voices = [];

// 该实例包含将要读出的文本，及以何种语言、语速、语调读出文本。
const msg = new SpeechSynthesisUtterance();

const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
// msg.text = '';

// 获得浏览器支持的阅读语言并填充至下拉列表
function getSupportVoice() {
    voices = synth.getVoices();

    for (var i = 0; i < voices.length; i++) {
        var option = document.createElement('option');
        option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

        if (voices[i].default) {
            option.textContent += ' -- DEFAULT';
        }

        option.setAttribute('data-lang', voices[i].lang);
        option.setAttribute('data-name', voices[i].name);
        voicesDropdown.appendChild(option);
    }
}

// 语速、语调滑动条的值、文本输入框的文本发生变化时，更新 msg 实例
function paramChange() {
    msg[this.name] = this.value;
    console.log(this.name, this.value);
}

// 点击 speak 按钮时阅读文字
function speak() {
    synth.speak(msg); // msg 包含将要读出的文本，及以何种语言、语速、语调读出文本
    console.log(voicesDropdown.value); // 输出目前选择的语言种类
}

// 停止阅读
function stop() {
    synth.cancel();
}

// 监听滑动条、文本输入框的值的变动
options.forEach((option) => option.addEventListener('change', paramChange));

// 点击下拉列表时，生成各个语言备选项
synth.addEventListener('voiceschanged', getSupportVoice);

speakButton.addEventListener('click', speak);
stopButton.addEventListener('click', stop);
