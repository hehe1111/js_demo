# 12 - Key Sequence Detection

> JavaScript30仿写：
>
> [JavaScript30](https://javascript30.com) 教程原作者：[Wes Bos](https://github.com/wesbos)    
> 完整指南在 [GitHub](https://github.com/soyaine/JavaScript30)  
> 中文参考指南：[GitHub](https://github.com/soyaine/JavaScript30)  
> 作者：[缉熙Soyaine](https://github.com/soyaine)

第十二篇开坑于：2017.12.26

[参考链接](https://github.com/soyaine/JavaScript30/tree/master/12%20-%20Key%20Sequence%20Detection)

[demo 预览链接](https://hehe1111.github.io/js_demo/js30/12%20-%20Key%20Sequence%20Detection/)

## 记录：
- 预先新建一个空数组，用于存放用户输入的字符。
- 预先设定好“暗号”（一个字符串），用于后续验证用户的输入。

```javascript
window.addEventListener('keyup', (e) => {
    // 代码
})
```
`keyup`事件是绑定在`window`对象上的，故输入时焦点应该是在页面上才会触发事件。

`e.key`：按键的键名。

```javascript
pressed.splice((- secretCode.length) - 1, pressed.length - secretCode.length);
```
- 一开始输入时，第二个参数（即`pressed.length - secretCode.length`）小于零，故`splice()`不会删除 pressed 数组中的元素；
- 当第二个参数的值**等于**1时，第一个参数（即`(- secretCode.length) - 1`）对应的字符就是 pressed 数组相比 secretCode 变量记录的字符串多出的那一个字符（这个字符是 pressed 数组的第一个元素）。这一个字符会被`splice()`删除。原数组会被改变。
- 此后，在后续的输入中，pressed 数组总是比 secretCode 变量记录的字符串多出一个字符，这一个字符总是会被`splice()`删除。
