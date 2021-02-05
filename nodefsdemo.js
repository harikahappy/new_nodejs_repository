 const fs= require('fs');
 //const myFiles = fs.readdirSync('../nodejsdemo')
 //console.log(myFiles)

 fs.readdir('../nodejsdemo',(error,files)=>{
    if(error){
      throw error;
    }
    console.log(files)
 })
 console.log('im executed')