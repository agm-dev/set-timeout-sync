function setTimeoutSync(callback, ms) {

  if (typeof callback === "number" && !isNaN(parseInt(callback)) && typeof ms === 'undefined') {
      ms = callback
      callback = null
  }

  const start = Date.now()
  let now = start

  while (now - start < ms) {
    now = Date.now()
  }

  if (typeof callback === 'function') {
    callback()
  }
}

module.exports = setTimeoutSync
