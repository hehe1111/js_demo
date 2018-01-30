## 记录：
```css
    #grey {
        width: 400px;
        height: 200px;
        margin: auto;
        background-color: #ccc;

        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: hidden;  /* 这一行必须写，否则两个圆会全部显示，而不是只有 1/4 */
        /* top, right, bottom, left 四个属性必须写齐，并且值必须均为 0，然后才能依靠 margin: auto; 居中 */
    }
```

- 另一种居中方法：利用负外边距
```css
    #grey {
        width: 400px;
        height: 200px;
        background-color: #ccc;

        position: absolute;
        top: 50%;
        left: 50%;
        margin: -100px 0 0 -200px;
    }
```
