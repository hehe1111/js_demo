关于路由

实现一

```html
<!-- 问题 -->
<!-- 刷新页面，会导致页面重置，无法保存状态 -->
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>路由</title>
  <style>
    h3 { color: red; }
    x-tab { display: block }
    .nav > li.active { background-color: red; }
    .content > li { display: none; }
    .content > li.active { display: block; }
  </style>
</head>

<body>
  <x-tab>
    <ol class="nav">
      <li class="active">Nav 1</li>
      <li>Nav 2</li>
    </ol>
    <ol class="content">
      <li class="active">Content 1</li>
      <li>Content 2</li>
    </ol>
  </x-tab>

  <script src="http://code.jquery.com/jquery-3.3.1.min.js"></script>
  <script>
    $('x-tab').on('click', '.nav > li', (e) => {
      let $li = $(e.currentTarget)
      $li.addClass('active')
        .siblings()
        .removeClass('active')
      let index = $li.index()
      $li.closest('x-tab')
        .find('.content > li')
        .eq(index)
        .addClass('active')
        .siblings()
        .removeClass('active')
    })
  </script>
</body>

</html>
```

实现二：用片段标识符（锚点）保存状态

```html
<script>
    let index = window.location.hash.substring(1) || 0 // 1
    $('x-tab > .nav > li').eq(index).addClass('active') // 2
      .siblings().removeClass('active') // 3
    $('x-tab > .content > li').eq(index).addClass('active') // 4
      .siblings().removeClass('active') // 5

    $('x-tab').on('click', '.nav > li', (e) => {
      let $li = $(e.currentTarget)
      $li.addClass('active')
        .siblings()
        .removeClass('active')
      let index = $li.index()
      window.location.hash = index // 6
      $li.closest('x-tab')
        .find('.content > li')
        .eq(index)
        .addClass('active')
        .siblings()
        .removeClass('active')
    })
  </script>
  ```

实现三：结合 `</a>` 标签实现路由

问题：状态容易因为其他锚点而被更改，无法长久保存

```html
<body>
  <x-tab>
    <ol class="nav">
      <li class="active">
        <a href="#0">Nav 1</a> // 1
      </li>
      <li>
        <a href="#1">Nav 2</a> // 2
      </li>
    </ol>
    <ol class="content">
      <li class="active">Content 1</li>
      <li>Content 2</li>
    </ol>
  </x-tab>
  <a href="#top">回到顶部</a> <!-- 12 其他锚点，会更改页面的片段标识符 -->

  <script src="http://code.jquery.com/jquery-3.3.1.min.js"></script>
  <script>
    // 页面初始加载时
    selectTab() // 3
    
    // 用户点击链接时
    window.onhashchange = () => selectTab() // 4

    // 工具函数
    function selectTab() { // 5
      let index = window.location.hash.substring(1) // 6
      $('x-tab > .nav > li').eq(index).addClass('active') // 7
        .siblings().removeClass('active') // 8
      $('x-tab > .content > li').eq(index).addClass('active') // 9
        .siblings().removeClass('active') // 10
    } // 11
  </script>
</body>
```

实现四：利用 HTML5 API 无刷新更改地址栏

直接改路径，而不再只是改片段标识符（锚点）。这样可以避免其他锚点的影响。

缺点：改路径，则服务器需要定义对应的路由，才能处理。用户在页面点击一个路径，会先发请求到服务器，服务器处理后，返回到浏览器。

- [History.pushState()](https://developer.mozilla.org/zh-CN/docs/Web/API/History/pushState)
- [HTML5 简介（三）：利用 History API 无刷新更改地址栏，包含具体应用](https://juejin.im/entry/595de01a6fb9a06bb21aaa7f)

```javascript
// 注释版
$('x-tab').on('click', '.nav > li > a', (event) => {
    event.preventDefault() // 阻止 a 标签的默认跳转行为
    console.log(event.currentTarget) // <a href="./tab1">Nav 1</a>
    // let hash = event.currentTarget.href // 返回绝对路径 http://127.0.0.1:8080/tab1
    let url = event.currentTarget.getAttribute('href') // 只返回值 .tab1
    console.log(url)
    window.history.pushState(null, null, url) // 更改地址栏 history.pushState(stateObject, title, url)
})

// 无注释
$('x-tab').on('click', '.nav > li > a', (event) => {
    event.preventDefault()
    let url = event.currentTarget.getAttribute('href')
    window.history.pushState(null, null, url)
})

// ---
// 完整实现如下
// ---

// 页面初始加载时
selectTab()

// 用户点击链接时
$('x-tab').on('click', '.nav > li > a', (event) => {
    event.preventDefault()
    let url = event.currentTarget.getAttribute('href')
    window.history.pushState(null, null, url)
    selectTab()
})

// 工具函数
function selectTab() {
    // console.log(window.location.pathname.substring(4)) // tab1；从 1 开始
    let index = window.location.pathname.substring(4) - 1 || '0'
    $('x-tab > .nav > li').eq(index).addClass('active')
    .siblings().removeClass('active')
    $('x-tab > .content > li').eq(index).addClass('active')
    .siblings().removeClass('active')
}
```

1. 在当前目录下，启动 http-server：`http-server -c-1`
2. **或者是**，启动 node 本地服务器：`node server.js 8080`
    - 只有在刷新页面的情况下（发请求），后台才会执行 server.js（接收到请求）。
    - 只是点击页面中的 Nav1 或 Nav2 链接并不会在后台打出当前路径（因为 Nav1 或 Nav2 是“假路由”，只是更改了路径，并用 JS 对应的更改了页面，实际上并未向服务器发起请求）。

```javascript
// server.js 充当服务器
var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if (!port) {
  console.log('请指定端口号，例如\nnode server.js 8080')
  process.exit(1)
}

var server = http.createServer(function (request, response) {
  var parsedUrl = url.parse(request.url, true)
  var path = request.url 
  var query = ''
  if(path.indexOf('?') >= 0){ query = path.substring(path.indexOf('?')) }
  var pathNoQuery = parsedUrl.pathname
  var queryObject = parsedUrl.query
  var method = request.method

  console.log('当前 HTTP 相对路径为\n' + path)
  if(path === '/' || path === '/tab1' || path === '/tab2'){
    var string = fs.readFileSync('./router-demo.html', 'utf8')
    response.setHeader('Content-Type', 'text/html; charset=utf-8')
    response.statusCode = 200
    response.write(string)
    response.end()
  } else {
    response.statusCode = 404
    response.write(`
    {
      "error": 'Not Found'
    }
    `)
    response.end()
  }
})

server.listen(port)
console.log('\n监听 ' + port + ' 成功\n请在浏览器打开 http://localhost:' + port + '\n')
```