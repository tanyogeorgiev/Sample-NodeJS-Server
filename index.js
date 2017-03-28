let http = require('http')
let handlers = require('./handlers/index')

let port = 1338
http
  .createServer((req, res) => {
    for (let handler of handlers) {
      let next = handler(req, res)
      if (!next) {
        break
      }
    }
  })
  .listen(port)
console.log(`Server listening on ${port}`)
