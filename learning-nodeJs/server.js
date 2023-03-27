var http = require('http')
const hostname = '127.0.0.1'
const port = 3000


// req -> traz consigo os dados da requesicao do usuario
// resp -> usado para retomar os dados para o requesitante

const server = http.createServer((req, resp) =>{
    resp.statusCode = 200
    resp.setHeader('content-Type', 'text/plain')
    resp.end('Hello World\n')
})

server.listen(port, hostname, ()=>{
    console.log('Server running at http://${hostname}')
})