
// const path=require('path')

import path from 'path'


console.log('*'.repeat(70));


const myPath='/local/user/hamim.pdf'

const dirName=path.dirname(myPath)
console.log(dirName);
console.log('base name:  ',path.basename(myPath));
console.log('extension name:  ',path.extname(myPath));

console.log('file name:  ',path.basename(myPath,path.extname(myPath)));

console.log('*'.repeat(70));

const parsed=path.parse(myPath)
console.log('parsed obj:  ',parsed)

console.log('parsed to formatted path',path.format(parsed));


