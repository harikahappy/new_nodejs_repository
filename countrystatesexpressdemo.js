const express = require('express')
const cors=require('cors')

const fs = require('fs')
const app=express();
app.use(cors())
app.get('/countrystates',(req,res)=>{

    res.writeHead(200,{'Content-Type':'application/json'})
    const jsonData = JSON.parse(fs.readFileSync('../countrydata/countrystates.json','UTF-8'))
    res.end(jsonData)    
})

http.listen(8888,'localhost',()=>console.log('server started'));
    //added changes