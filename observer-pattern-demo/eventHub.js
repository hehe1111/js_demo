window.eventHub = {
    events: {
        // 'xxx': [fn1, fn2]
    },
    publish(eventName, data) {
        if (this.events[eventName] && this.events[eventName].length !== 0) {
            this.events[eventName].map(fn => fn.call(undefined, data))
        }
    },
    subscribe(eventName, fn) {
        if (!this.events[eventName]) this.events[eventName] = []
        this.events[eventName].push(fn)
    },
    unsubscribe(eventName, fn) {
        if (this.events[eventName] && this.events[eventName].length !== 0) {
            this.events[eventName].splice(this.events[eventName].indexOf(fn), 1)
        }
    },
}
