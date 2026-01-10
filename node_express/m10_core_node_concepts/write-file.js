const fs=require('fs')

const content='this is a text from write-file.js'

try {
  fs.writeFileSync('output.txt',content)
  console.log('file written!');
  fs.appendFileSync('./output.txt','\nthis is added after')

  
} catch (error) {
  console.error(error.message)
  
}

