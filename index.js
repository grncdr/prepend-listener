module.exports = function (emitter, event, listener) {
  var old = emitter.listeners(event) || []
  emitter.removeAllListeners(event)
  var rv = emitter.on(event, listener)
  for (var i = 0, len = old.length; i < len; i++) {
    emitter.on(event, old[i])
  }
  return rv
}
