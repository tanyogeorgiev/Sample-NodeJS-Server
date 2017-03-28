let fs = require('fs')
let url = require('url')

function getContentType (url) {
  let contentType = 'text/plain'
  if (url.endsWith('.css')) {
    contentType = 'text/css'
  } else if (url.endsWith('.js')) {
    contentType = 'application/javascript'
  }
  return contentType
}

function check (url) {
  if (url.substring(0, 8) === '/content') {
    return true
  }
  return false
}

module.exports = (req, res) => {
  req.pathName = req.pathName || url.parse(req.url).pathname
  if (check(req.pathName)) {
    fs.readFile('.' + req.pathName, (err, data) => {
      if (err) {
        res.writeHead(404)
        res.write('404 Not Found')
        res.end()
        return true
      }
      let contentType = getContentType(req.pathName)
      res.writeHead(200, {
        'Content-Type': contentType
      })
      res.write(data)
      res.end()
    })
  } else {
    res.writeHead(404)
    res.write('404 Not Found')
    res.end()
  }
}
