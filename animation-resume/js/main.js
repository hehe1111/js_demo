function writeCode(prefix, code, fn) {
  let domCode = document.querySelector('#code')
  let n = 0
  let id = setInterval(() => {
    n += 1

    // 在 head 和 body 中写相同的内容
    domCode.textContent = prefix + code.slice(0, n)
    styleTag.textContent = prefix + code.slice(0, n)

    // 高亮 body 中的代码
    domCode.innerHTML = Prism.highlight(domCode.textContent, Prism.languages.css, 'css')
    /* 以上必须用 innerHTML，不能用 textContent。因为此处文本要作为 HTML 执行 */
    
    // 滚动代码
    domCode.scrollTop = domCode.scrollHeight

    if (n >= code.length) {
      window.clearInterval(id)
      n = 0
      fn.call()
    }
  }, 10)
}

function createPaper(fn) {
  let paper = document.createElement('div')
  paper.id = 'paper'
  let content = document.createElement('pre')
  content.className = 'content'
  paper.appendChild(content)
  document.body.appendChild(paper)
  fn.call()
}

function writeMarkdown(md, fn) {
  let domPaper = document.querySelector('#paper>.content')
  let n = 0
  let id = setInterval(() => {
    n += 1
    domPaper.innerHTML = marked(md.slice(0, n)) // marked 函数来自引入的 marked.js
    domPaper.scrollTop = domPaper.scrollHeight
    if (n >= md.length) {
      window.clearInterval(id)
      n = 0
      fn.call()
    }
  }, 10)
}

let result = `/*
 * 面试官你好，我是xxx
 * 我将以动画的形式来介绍我自己
 * 只用文字太单调了
 * 我就用代码来介绍吧
 * 首先准备一些样式
 */

* { transition: all 1s; }

/* 给一个浅灰色背景 */
html {
  background-color: rgba(111, 111, 111, 0.3);
  font-size: 16px;
}

/* 划分出一个代码编辑区域 */
#code {
  width: 50vw;
  height: 90vh;
  padding: 16px;
  border: 1px solid red;
  position: fixed;
  left: 0;
  top: 16px;
}

/* 代码高亮 */
.token.selector { color: #690; }
.token.property { color: #905; }
.token.function { color: #DD4A68; }
.token.comment { color: slategray; }
.token.punctuation { color: #999; }

/* 加点 3D 效果 */
html {
  perspective: 1000px;
}
#code {
  transform: rotateY(10deg) translateZ(-100px);
}

/* 为个人简历准备一张白纸 */
#paper {
  width: 50vw;
  height: 100vh;
  padding: 16px;
  position: fixed;
  right: 0;
}
#paper > .content {
  width: 100%;
  height: 100%;
  padding: 16px;
  background-color: #fff;
  overflow: auto;
}

/* 右边是我的个人简历 */
`

let md = `## 陈xxxx

求职意向：**前端工程师**

### 项目
1. 画板
2. 键盘导航
3. 轮播

### 技能
- HTML5/CSS3、Bootstrap、JavaScript
- Ajax、同源政策、跨域、异步、同步、回调
- HTTP
- Vue

### 联系方式：
手机：1xxxxxxxxxxxx
邮箱：xxxx@xxxxxxxx
QQ: xxxxxxxxxx
`

let result2 = `
/* 调整简历排版 */
#paper > .content > ol, #paper > .content > ul {
  padding-left: 40px;
}
#paper > .content > h2 {
  display: inline-block;
  vertical-align: top;
  border-bottom: 2px solid black;
  padding-bottom: 4px;
  margin-bottom: 10px;
}
#paper > .content > p > strong {
  border-bottom: 2px solid black;
  padding-bottom: 4px;  
}
`

let result3 = `
/*
 * 以上就是我的简历
 * 谢谢观看
 */
`

writeCode('', result, () => {
  createPaper(() => {
    writeMarkdown(md, () => {
      writeCode(result, result2, () => {
          writeCode(result+result2, result3)
      })
    })
  })
})
