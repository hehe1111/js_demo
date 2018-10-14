{
    window.eventHub.publish('xxx', '这是 eventHub 测试，这段话应该输出两次，分别由 subscribe1.js 和 subscribe3.js 输出')
    window.eventHub.publish('yyy', '\n这是另一个事件。输出 yyy')
}
