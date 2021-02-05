const http = require('http').createServer()
const fs = require('fs')
http.on('request',(req,res)=>{
    switch(req.url){
        case '/products':
            res.writeHead(200,{'content-Type':'application/json'});
            res.end(JSON.stringify({id:1,'name':'Iphone'}));
            break
        case '/google':
        case '/about':
            res.writeHead(200,{'content-Type':'text/html'});
            res.end(fs.readFileSync(`./mods/${req.url}.html`))
            break;
        case '/':
                res.writeHead(301,{'Location':'http://www.google.com'});
                res.end()
                 break;
        default:
            res.writeHead(404,{'content-Type':'text/html'});
            res.end('<h3>page not found</h3>')
            break; 
       
        }
})
http.listen(8086,'localhost',()=>console.log('server started'));