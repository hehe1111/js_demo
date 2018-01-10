# 23 - Speech Synthesis

> JavaScript30仿写：
>
> [JavaScript30](https://javascript30.com) 教程原作者：[Wes Bos](https://github.com/wesbos)    
> 完整指南在 [GitHub](https://github.com/soyaine/JavaScript30)  
> 中文参考指南：[GitHub](https://github.com/soyaine/JavaScript30)  
> 作者：[缉熙Soyaine](https://github.com/soyaine)

第二十三篇开坑于：2018.01.09

[参考链接](https://github.com/soyaine/JavaScript30/tree/master/23%20-%20Speech%20Synthesis)

[demo 预览链接](https://hehe1111.github.io/js_demo/js30/23%20-%20Speech%20Synthesis/)

## 记录：
- [radial-gradient()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/radial-gradient)：`CSS radial-gradient()` 函数创建一个`<image>`，用来展示由原点（渐变中心）辐射开的颜色渐变。这个方法得到的是一个`CSS<gradient>`数据类型的对象。
    - 简单点理解：可以生成图片？？？

---

- [Web Speech API](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Speech_API)
- [SpeechSynthesis](https://developer.mozilla.org/zh-CN/docs/Web/API/SpeechSynthesis)
    - [SpeechSynthesisUtterance.SpeechSynthesisUtterance()](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/SpeechSynthesisUtterance)  
    语法：`var utterThis = new SpeechSynthesisUtterance(text);`  
    > The SpeechSynthesisUtterance interface of the Web Speech API represents a speech request. It contains the **content** the speech service should read and information about how to read it (e.g. **language**, **pitch** and **volume**.)

    - [SpeechSynthesis.getVoices()](https://developer.mozilla.org/zh-CN/docs/Web/API/SpeechSynthesis#%E6%96%B9%E6%B3%95)：返回当前设备所有可用声音的 `SpeechSynthesisVoice` 列表。
        - [示例](https://developer.mozilla.org/zh-CN/docs/Web/API/SpeechSynthesis/getVoices#Example)
        - [属性](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisVoice#Properties)
            - [SpeechSynthesisVoice.name](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisVoice/name)：returns a human-readable name that represents the voice.即：返回读取到的自然语言的名字
            - [SpeechSynthesisVoice.lang](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisVoice/lang)：returns a BCP 47 language tag indicating the language of the voice.
            - [SpeechSynthesisVoice.default](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisVoice/default)：returns a Boolean indicating whether the voice is the default voice for the current app (true), or not (false.)
    - [SpeechSynthesis.speak()](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak)：adds an utterance to the utterance queue; it will be spoken when any other utterances queued before it have been spoken.
    - [SpeechSynthesis.cancel()](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/cancel)：removes all utterances from the utterance queue.
    - [voiceschanged 事件](https://developer.mozilla.org/en-US/docs/Web/Events/voiceschanged)

### 步骤简述：
- 点击语言选择的下拉列表时，实时生成各个语言的备选项；
- 语速、语调滑动条的值，以及文本输入框的文本发生变动时，实时更新 `msg` 实例的值；
- 监听`speak`，`stop`按钮；将 `msg` 传给 `speak` 函数，浏览器才能调用机器的相关设备进行文本的朗读。
