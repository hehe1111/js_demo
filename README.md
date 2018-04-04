## js30

- [记录及预览](https://github.com/hehe1111/js_demo/tree/master/js30#javascript30%E4%BB%BF%E5%86%99)

开坑于：2017.11.22

是 JavaScript30 的仿写项目：
> [JavaScript30](https://javascript30.com) 教程原作者：[Wes Bos](https://github.com/wesbos)    
> 完整指南在 [GitHub](https://github.com/soyaine/JavaScript30)  
> 中文参考指南：[GitHub](https://github.com/soyaine/JavaScript30)  
> 作者：[缉熙Soyaine](https://github.com/soyaine)


```css
.js-30>.inner-wrapper>ol>li>a {
    padding: 1.25rem; /* 将 padding 加在 a 标签上，而不是 li 标签上，这样在点击空白处的时候就等同于点击链接文字，也能达到打开链接的效果；同时，用 a 撑开 li，等同于将 padding 直接加在 li 上。 */
    display: block; /* 加上这一句，text-overflow: ellipsis; 才能起作用 */
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    color: black;
}
```

- `rem`的使用
- `line-height`以`font-size`为基准计算
- `text-shadow`、`box-shadow`
- `flex`布局
- `text-overflow: ellipsis;`
- 媒体查询
```css
@media screen and (max-width: 980px) {
    section>.inner-wrapper>ol>li {
        width: 100% !important; 
        /* 不加 !important, 则在移动端时，canvas-demo、visual-dom-event-model 下的两个预览链接仍是并排，原因暂不明，猜测是优先级？哪个更具体用哪个？ */
    }
}
```

---

## canvas-demo 
- 用 `canvas` 写画板 - [预览链接](https://hehe1111.github.io/js_demo/canvas-demo/using-canvas-as-canvas/index.html)

---

## carousel-demos
- 无限轮播 - [预览链接](https://hehe1111.github.io/js_demo/carousel-demos/loop-carousel/)
- 无缝轮播 - [预览链接](https://hehe1111.github.io/js_demo/carousel-demos/loop-carousel-2/)
- 苹果风格的轮播 - [预览链接](https://hehe1111.github.io/js_demo/carousel-demos/apple-like-carousel/)

---

## nav-kbd
- 键盘导航 - [预览链接](https://hehe1111.github.io/js_demo/nav-kbd/index.html)

---

## popover-demo
- 点击别处关闭浮层 - [预览链接](https://hehe1111.github.io/js_demo/popover-demo/index.html)

---

## visual-dom-event-model
- 冒泡模型可视化 - [预览链接](https://hehe1111.github.io/js_demo/visual-dom-event-model/bubble.html)
- 捕获与冒泡模型可视化 - [预览链接](https://hehe1111.github.io/js_demo/visual-dom-event-model/capture-bubble.html)

---

### 提交记录
- 代码
    - 【新增】
    - 【添加】
    - 【修改】
    - 【删除】
- `README.md` 记录 
    - 【新增记录】 `README.md` 文件
    - 【添加记录】
    - 【修改记录】
    - 【删除记录】
- 图片
    - 【新增图片】
    - 【修改图片】
    - 【删除图片】

---