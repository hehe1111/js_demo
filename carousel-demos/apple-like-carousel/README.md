- [预览链接](https://hehe1111.github.io/js_demo/carousel-demos/apple-like-carousel/)

## 记录

- `transition`
    - 参数：`property name`、`duration`、`timing function`、`delay`，通常使用前两个参数
    - `duration`、`delay`：时间值
    - `timing function`
        - 可取值：`linear`、`ease`、`ease-in`、`ease-out`、`ease-in-out`、`cubic-bezier(<number>, <number>, <number>, <number>)`、`step-start`、 `step-end`、`steps(<integer>[, [ start | end ] ]?)`、`frames(<integer>)`
```css
/* property name | duration | timing function | delay */
transition: margin-right 4s ease-in-out 1s;

/* Apply to 2 properties */
transition: margin-right 4s, color 1s;

/* Apply to all changed properties */
transition: all 0.5s ease-out;
```

- `$anchors.eq(index).siblings()` 只有 `index` 本身，因为存在 `button > a` 包含关系，故要先全部 `removeClass('active')`，再重新单独 `addClass('active')`
```javascript
function goToSlide(index) {    
    $slide.css({
        'transform': `translateX(${- (index * 920)}px)`
    })
    $anchors.removeClass('active') //注意这一句
    $anchors.eq(index).addClass('active') // $anchors.eq(index).siblings() 只有 index 本身，因为存在 button > a 包含关系
}
```



## 参考链接

- [transition](https://developer.mozilla.org/en-US/docs/Web/CSS/transition#Syntax)
