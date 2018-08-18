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
    if (path.indexOf('?') >= 0) { query = path.substring(path.indexOf('?')) }
    var pathNoQuery = parsedUrl.pathname
    var queryObject = parsedUrl.query
    var method = request.method

    console.log('当前 HTTP 相对路径为\n' + path)
    if (path === '/' || path === '/tab1' || path === '/tab2') {
        var string = fs.readFileSync('./router-demo.html', 'utf8')
        response.setHeader('Content-Type', 'text/html; charset=utf-8')
        response.statusCode = 200
        response.write(string)
        response.end()
    } else {
        response.statusCode = 404
        response.write(`{
            "error": 'Not Found'
        }`)
        response.end()
    }
})

server.listen(port)
console.log('\n监听 ' + port + ' 成功\n请在浏览器打开 http://localhost:' + port + '\n')
