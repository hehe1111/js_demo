{
    window.eventHub.subscribe('xxx', data => console.log(data))
    window.eventHub.unsubscribe('xxx', data => console.log(data))
}
