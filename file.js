var http = require('http')
var fs = require('fs')

http.createServer((requesition, response)=>{
    fs.readFile('index.html', (err, data)=> {
        response.writeHead(200, {'Content-type': 'text/html'})
        response.write(data)
        return response.end()
    })
}).listen(8000)