const { createServer } = require('http')
var formidable = require('formidable')
var fs = require('fs')

let server = createServer((requesition, response) =>{

    if(requesition.url === '/fileupload'){
        var form = new formidable.IncomingForm()
        form.parse(requesition, (err, fields, files) => {
            var oldPath = files.filetoupload.filepath
            var newPath = "C:/Users/alien/Desktop/nodeJs/uploadedFile" + files.filetoupload.originalFfilename
            fs.rename(oldPath, newPath, (err) =>{
                if(err) throw err
                console.log('File Uploaded!')
            })
        })

    }else{
        response.writeHead(200, { 'content-type' : 'text/html'})
        response.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        response.write('<input type="file" name="filetoupload"><br>');
        response.write('<input type="submit">');
        response.write('</form>');
        return response.end()
    }
})

server.listen(8000)