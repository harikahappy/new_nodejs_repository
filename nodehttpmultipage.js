const http = require('http')
const fs = require('fs');
const url = require('url')
const server = http.createServer((req,res)=>{
const fileName =`./mods/${req.url}`
fs.readFile(fileName,'UTF-8',(err,html)=>{
    if(err){
        res.writeHead(404,{'content-Type':'text/html'});
        res.end('<h2>Page not found</h2>')
    }
    else{
    res.writeHead(200,{'content-Type':'text/html'});
    res.writeHead(html);
    res.end();
    }
})

})
server.listen(8085,'localhost',()=>{
    console.log('server started')
})