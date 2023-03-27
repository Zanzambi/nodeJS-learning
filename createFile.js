const {writeFile} = require('fs')
let createFile = writeFile('README.bz', 'Hello Content 2', (err) =>{
    if(err) throw err;
    console.log('File saved!')
} )