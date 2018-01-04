# 19 - Webcam Fun

> JavaScript30仿写：
>
> [JavaScript30](https://javascript30.com) 教程原作者：[Wes Bos](https://github.com/wesbos)    
> 完整指南在 [GitHub](https://github.com/soyaine/JavaScript30)  
> 中文参考指南：[GitHub](https://github.com/soyaine/JavaScript30)  
> 作者：[缉熙Soyaine](https://github.com/soyaine)

第十九篇开坑于：2018.01.03

[参考链接](https://github.com/soyaine/JavaScript30/tree/master/19%20-%20Webcam%20Fun)

[demo 预览链接](https://hehe1111.github.io/js_demo/js30/19%20-%20Webcam%20Fun/)

- 本篇以[参考链接](https://github.com/soyaine/JavaScript30/tree/master/19%20-%20Webcam%20Fun)为仿写对象。

## 记录：
用于申请网络摄像头操作权限`askWebcam()`函数效果相关：
- [document.querySelector()](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelector)：参数除了是`CSS`选择器，也可以是**标签名**。
- [选择器](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Getting_Started/Selectors)
- [document.querySelector()，document.querySelectorAll()](http://javascript.ruanyifeng.com/dom/document.html#toc22)
- [navigator.getUserMedia()](https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator/getUserMedia)：已废弃。用`MediaDevices.getUserMedia()`代替。
- [MediaDevices.getUserMedia()](https://developer.mozilla.org/zh-CN/docs/Web/API/MediaDevices/getUserMedia)：语法如下：
```javascript
navigator.mediaDevices.getUserMedia(constraints)
.then(function(mediaStream) { ... })
.catch(function(error) { ... })
```
- [loadedmetadata](https://developer.mozilla.org/en-US/docs/Web/Events/loadedmetadata)
- [play](https://developer.mozilla.org/en-US/docs/Web/Events/play)

---

- [Canvas](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API)
- [canvas.getContext()](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Basic_usage#%E6%B8%B2%E6%9F%93%E4%B8%8A%E4%B8%8B%E6%96%87%EF%BC%88The_rendering_context%EF%BC%89)：获得渲染上下文和它的绘画功能。getContext()只有一个参数，上下文的格式。- 引自 MDN
- [CanvasRenderingContext2D.putImageData()](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/putImageData)
    - [在场景中写入像素数据](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas#%E5%9C%A8%E5%9C%BA%E6%99%AF%E4%B8%AD%E5%86%99%E5%85%A5%E5%83%8F%E7%B4%A0%E6%95%B0%E6%8D%AE)
- [Pixel manipulation with canvas](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas)
- [CanvasRenderingContext2D.getImageData()](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/getImageData)
    - [得到场景像素数据](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas#%E5%BE%97%E5%88%B0%E5%9C%BA%E6%99%AF%E5%83%8F%E7%B4%A0%E6%95%B0%E6%8D%AE)
- [HTMLCanvasElement.toDataURL()](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCanvasElement/toDataURL)
    - [Data URLs](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/data_URIs)
- [CanvasRenderingContext2D.drawImage()](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/drawImage)

---
- [Element.setAttribute()](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/setAttribute)
    - [Element.setAttribute()](http://javascript.ruanyifeng.com/dom/attribute.html#toc5)
- [EventTarget.addEventListener()](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener)

---
`getUserMedia()`出错了，但在 file 协议下可以运行。以下是出错原因及截图：
> getUserMedia() no longer works on insecure origins. To use this feature, you should consider switching your application to a secure origin, such as HTTPS.

![出错截图](https://github.com/hehe1111/js_demo/blob/master/js30/19%20-%20Webcam%20Fun/error.png)
