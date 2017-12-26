# 11 - Custom Video Player

> JavaScript30仿写：
>
> [JavaScript30](https://javascript30.com) 教程原作者：[Wes Bos](https://github.com/wesbos)    
> 完整指南在 [GitHub](https://github.com/soyaine/JavaScript30)  
> 中文参考指南：[GitHub](https://github.com/soyaine/JavaScript30)  
> 作者：[缉熙Soyaine](https://github.com/soyaine)

第十一篇开坑于：2017.12.24

[demo 预览链接](https://hehe1111.github.io/js_demo/js30/11%20-%20Custom%20Video%20Player/)

[参考链接](https://github.com/soyaine/JavaScript30/tree/master/11%20-%20Custom%20Video%20Player)

## 实现的功能：
- 暂停、播放
- 快进、快退按钮
- 滑动条：
    - 调节音量
    - 调节播放速度
- 实时更新视频播放进度条、可手动拖动播放进度

## 步骤简介：
1. `querySelector()`获取页面元素；
2. 创建事件处理函数；
3. 用`addEventListener()`在元素上绑定事件与处理函数，从而监听事件，触发函数。

## 重点:
- 在网页中嵌入视频元素：
    - `<video>`元素：
        - `src`属性：视频链接
        - `volume`属性：视频音量
        - `currentTime`属性：视频现在播放到哪了
        - `duration`属性：返回视频长度。[HTMLMediaElement.duration](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/duration)
        - `playbackRate`属性：[HTMLMediaElement.playbackRate](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLMediaElement/playbackRate)
        > 设置媒体文件播放时的速率。正常播放速率**乘以**该值表示当前的播放速率，所以1.0表示正常的播放速率。
        - `paused`属性：值是一个布尔值，用于判断视频是否处于暂停状态
        - `play()`方法：播放视频
        - `pause()`方法：暂停视频
    - [Using HTML5 audio and video](http://mdn.beonex.com/en/Using_audio_and_video_in_Firefox.html)
    - [`<video>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/video)
    - [Video and audio content](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
    - [Media events](https://developer.mozilla.org/zh-CN/docs/Web/Guide/Events/Media_events)

- 更新播放/暂停按钮图标：
```javascript
function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    // console.log(icon);
    toggle.textContent = icon;
}
```
    图标是文本，所以可以用`Element.textContent`属性来更新
    - [Node.textContent](http://javascript.ruanyifeng.com/dom/node.html#toc7)
    - [Element.innerHTML](http://javascript.ruanyifeng.com/dom/element.html#toc3)
    > 为了安全考虑，如果插入的是文本，最好用textContent属性代替innerHTML。
    - [Element.insertAdjacentHTML()](http://javascript.ruanyifeng.com/dom/element.html#toc33)

- 实现快进快退：
```javascript
function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}
```

- 调节音量、播放速度：
```javascript
function handleRangeUpdate() {
    video[this.name] = this.value;
}
```

- 实时更新播放进度条：
```javascript
function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}
```
    [flexBasis 属性](https://github.com/hehe1111/doc/blob/master/flex_tutorial.md#%E8%AF%AD%E6%B3%95%E7%AF%87%E9%87%8D%E7%82%B9%E8%AF%A6%E7%BB%86%E8%AF%B7%E7%82%B9%E5%87%BB%E4%BB%A5%E4%B8%8A%E8%AF%AD%E6%B3%95%E7%AF%87%E7%9A%84%E9%93%BE%E6%8E%A5)

- 手动拖动进度条：
```javascript
function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}
```
    > Element.offsetWidth属性返回元素的水平宽度。  
    > screenX属性返回鼠标位置相对于屏幕左上角的水平坐标，单位为像素。
    - [Element.offsetHeight，Element.offsetWidth](http://javascript.ruanyifeng.com/dom/element.html#toc11)
    - [clientX，clientY，movementX，movementY，screenX，screenY](http://javascript.ruanyifeng.com/dom/event-type.html#toc10)

- 同时在视频和播放/暂停按钮上添加单击事件，使点击视频画面或按钮都能使视频播放或是暂停：
```javascript
video.addEventListener('click', togglePlay);
// 其他代码
toggle.addEventListener('click', togglePlay);
```

- 全屏功能：
[Fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API)

    全屏之后，自定义的控件被`Fullscreen API`自身的控件取代。
