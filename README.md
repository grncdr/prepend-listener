# prepend-listener

Add a listener to an EventEmitter *before* existing listeners.

## Synopsis

```javascript
// being required from node_modules/markdown-code-blocks
var prepend = require('./')
var test = require('tape')

var EventEmitter = require('events').EventEmitter

test('prependListener', function (t) {
  t.plan(3)

  var ee = new EventEmitter
    , originalFired = false
    , prependedFired = false

  ee.on('event', function second () {
    t.ok(prependedFired, "prepended listener has fired")
    originalFired = true
  })

  prepend(ee, 'event', function first () {
    t.ok(!originalFired, "original listener has not fired")
    prependedFired = true
  })

  ee.emit('event')
  t.ok(prependedFired && originalFired, "both listeners fired")
})
```

## License

MIT
