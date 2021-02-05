const fs=require('fs')
const path =require('path')
fs.readdir('../nodejsdemo',(error,files)=>{
    if(error){
      throw error;
    }
    files.forEach(file=>{
        const filepath=path.basename(file);
        if(filepath === 'shape.js'){
        fs.readFile('../nodejsdemo/${filepath}','UTF-8',(error,data)=>{
          if(error){throw error}
            console.log(data)
    })
}
})
   // console.log(files)
 })