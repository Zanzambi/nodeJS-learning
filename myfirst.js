const { createServer } = require('http')
let server = createServer((request, response )=> {
    response.writeHead(200, {'content-type': 'text/html' })
    response.write('<h1>Hello World</h1> <p>You asked for <code>'+request.url+ '</code></p>')
    response.end()
})
server.listen(8000)
console.log('Listening! (Port 8000)')