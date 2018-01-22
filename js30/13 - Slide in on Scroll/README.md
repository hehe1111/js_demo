# 13 - Slide in on Scroll

> JavaScript30仿写：
>
> [JavaScript30](https://javascript30.com) 教程原作者：[Wes Bos](https://github.com/wesbos)    
> 完整指南在 [GitHub](https://github.com/wesbos/JavaScript30)  
> 中文参考指南：[GitHub](https://github.com/soyaine/JavaScript30)  
> 作者：[缉熙Soyaine](https://github.com/soyaine)

第十三篇开坑于：2017.12.27

[参考链接](https://github.com/soyaine/JavaScript30/tree/master/13%20-%20Slide%20in%20on%20Scroll)

[demo 预览链接](https://hehe1111.github.io/js_demo/js30/13%20-%20Slide%20in%20on%20Scroll/)

## 记录：
- 用`float`属性形成文字环绕图片的效果。
- 用`opacity`属性控制图片的显隐，隐去时会形成空位。
- `transform`属性：左右移、放大缩小。
- [Window.scrollY](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/scrollY)：返回文档在垂直方向**已滚动**的像素值。
- [Element.offsetParent](http://javascript.ruanyifeng.com/dom/element.html#toc19)：返回当前`HTML`元素的最靠近的、并且`CSS`的`position`属性不等于`static`的上层元素。
- [Element.offsetLeft，Element.offsetTop](http://javascript.ruanyifeng.com/dom/element.html#toc12)
- `debounce`函数用于**降低**事件监听频率。
```javascript
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
```
