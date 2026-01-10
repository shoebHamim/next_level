const fs=require('fs')



const fileExists=fs.existsSync('./delete.txt')
console.log(fileExists);

try {
  fs.unlink('./delete.txt',(err)=>{
    if(err){
      return console.error(err);
    }
    console.log('file deleted');
    const fileExists1=fs.existsSync('./delete.txt')
    console.log(fileExists1);
  })  
} catch (error) {
  console.log(error.message);
  
}


