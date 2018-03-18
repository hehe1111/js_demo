# js30

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
    .js-30>.inner-wrapper>ol>li {
        width: 100%;
    }
}
```

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