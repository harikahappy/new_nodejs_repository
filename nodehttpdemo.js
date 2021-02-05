const http = require('http')
const server = http.createServer((req,res)=>{
res.writeHead(201,{'content-Type':'text/html'})//http status code(100 to110)&(200-210)success&(300-320)redirect(400-428)err on client side(500-532)err on server side
res.write('<h2>welcome to nodejs</h2>')
res.end
})
server.listen(8880,"localhost",()=>{
    console.log('server ready')
})