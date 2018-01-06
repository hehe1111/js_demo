# 20 - Speech Detection

> JavaScript30仿写：
>
> [JavaScript30](https://javascript30.com) 教程原作者：[Wes Bos](https://github.com/wesbos)    
> 完整指南在 [GitHub](https://github.com/soyaine/JavaScript30)  
> 中文参考指南：[GitHub](https://github.com/soyaine/JavaScript30)  
> 作者：[缉熙Soyaine](https://github.com/soyaine)

第二十篇开坑于：2018.01.05

**本篇未经过测试**。

[参考链接](https://github.com/soyaine/JavaScript30/tree/master/20%20-%20Speech%20Detection)

[demo 预览链接](https://hehe1111.github.io/js_demo/js30/20%20-%20Speech%20Detection/)

## 记录：
- [HTMLElement.contentEditable](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/contentEditable)
    - 不要只写属性，也要加上值[`true` | `false` | `inherit`]

---
- [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
- [SpeechRecognition](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition)
    - [SpeechRecognition.interimResults](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/interimResults)：默认值为 `false`。是否返回 interim results（Interim（临时的） results are results that are not yet final）。 与[SpeechRecognitionResult.isFinal](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionResult/isFinal)有关
    > 返回即时语音，即时语音是指SpeechRecognitionResult.isFinal 为false时捕获到的信息。

    - [SpeechRecognition.lang](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/lang)：设置自然语言。如果未设定，则默认采用 `HTML` 文档的 `lang` 属性；如果文档也没有设置 `lang` 属性，就默认采用用户代理（浏览器）的语言设置。
    - [SpeechRecognition.start()](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/start)：开始语音识别。
        - 区别：[SpeechRecognition.onstart](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/onstart)
        - 区别：start 事件：`https://developer.mozilla.org/en-US/docs/Web/Events/start_(SpeechRecognition)`
    - [result 事件](https://developer.mozilla.org/en-US/docs/Web/Events/result)：经服务器识别后并返回一个词或一个词组时，该事件会被触发。
        - [SpeechRecognition.onresult](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/onresult)：`result`事件被触发后会调用该事件处理器。
    - [SpeechRecognitionAlternative.transcript](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionAlternative/transcript)：返回被识别的语音对应的文本字符串。
    - [SpeechRecognition.onaudiostart](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/onaudiostart)：用户代理（浏览器）开始捕获音频时触发。
    - [SpeechRecognition.onerror](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/onerror)：语音识别出错时触发。
    - [SpeechRecognition.onend](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/onend)：`end`事件被触发后调用。
