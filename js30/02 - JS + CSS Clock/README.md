JavaScript30仿写：
> [JavaScript30](https://javascript30.com) 教程原作者：[Wes Bos](https://github.com/wesbos)    
> 完整指南在 [GitHub](https://github.com/soyaine/JavaScript30)  
> 中文参考指南：[GitHub](https://github.com/soyaine/JavaScript30)  
> 作者：[缉熙Soyaine](https://github.com/soyaine)  

第二篇开坑于：2017.11.24

[demo 预览链接](https://hehe1111.github.io/js_demo/js30/02%20-%20JS%20+%20CSS%20Clock/)  

## HTML & CSS 重点：
1. [box-shadow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow)

    - 多个阴影的运用

    - 多个阴影的合成

正规语法：
```
 none | [inset? && [ <offset-x> <offset-y> <blur-radius>? <spread-radius>? <color>? ] ]#
```

> 默认阴影在边框外，使用inset后，阴影在边框内（即使是透明边框），背景之上内容之下。**除非 inset，否则不写。**

> &lt;blur-radius&gt; 值越大，模糊面积越大，阴影就越大越淡。 不能为负值。默认为0，此时阴影边缘锐利。

> &lt;spread-radius&gt; 取正值时，阴影扩大；取负值时，阴影收缩。默认为0，此时阴影与元素同样大。

> 多个阴影**从前往后**叠加，**第一个阴影在最上面**。
