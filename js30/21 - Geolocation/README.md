# 21 - Geolocation

> JavaScript30仿写：
>
> [JavaScript30](https://javascript30.com) 教程原作者：[Wes Bos](https://github.com/wesbos)    
> 完整指南在 [GitHub](https://github.com/soyaine/JavaScript30)  
> 中文参考指南：[GitHub](https://github.com/soyaine/JavaScript30)  
> 作者：[缉熙Soyaine](https://github.com/soyaine)

第二十一篇开坑于：2018.01.07

[参考链接](https://github.com/soyaine/JavaScript30/tree/master/21%20-%20Geolocation)

[demo 预览链接](https://hehe1111.github.io/js_demo/js30/21%20-%20Geolocation/)

## 记录：
- `svg`图片中的文字是**镂空**的，会显示出底下的背景图片或颜色等。
- [radial-gradient()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/radial-gradient)
    > 与其他渐变相同，CSS径向渐变不属于CSS <color>数据类型，而是一个不固定尺寸的图片，譬如，它没有默认尺寸、比例。具体尺寸由它所定义的元素尺寸决定。

- [background-size](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-size)
- [background-attachment](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-attachment#%E6%A6%82%E8%BF%B0)

---
- [Geolocation](https://developer.mozilla.org/zh-CN/docs/Web/API/Geolocation)
> Geolocation 就是用来获取到当前设备的经纬度（位置）

- [Using geolocation](https://developer.mozilla.org/zh-CN/docs/Web/API/Geolocation/Using_geolocation)
    - [判断是否存在 geolocation 对象](https://developer.mozilla.org/zh-CN/docs/Web/API/Geolocation/Using_geolocation#geolocation_%E5%AF%B9%E8%B1%A1)
    - [Geolocation.getCurrentPosition()](https://developer.mozilla.org/zh-CN/docs/Web/API/Geolocation/getCurrentPosition)：获取设备当前位置。
        - [实例](https://developer.mozilla.org/zh-CN/docs/Web/API/Geolocation/getCurrentPosition#%E5%AE%9E%E4%BE%8B)
    - [描述位置](https://developer.mozilla.org/zh-CN/docs/Web/API/Geolocation/Using_geolocation#%E6%8F%8F%E8%BF%B0%E4%BD%8D%E7%BD%AE)：用户的位置由一个包含 Coordinates 对象的 Position 对象描述。
    - `position.coords` 的属性：
        - `latitude`：纬度
        - `longitude`：经度
        - `accuracy`：精度
        - `speed`：速度。速度与旋转角度之间不存在关系。
        - `heading`：指针旋转角度
- [Node.textContent](http://javascript.ruanyifeng.com/dom/node.html#toc7)
> 该属性是可读写的，设置该属性的值，会用一个新的文本节点，替换所有原来的子节点。它还有一个好处，就是自动对HTML标签转义。

- 本任务可参考 MDN 上该 API 给出的示例代码。
