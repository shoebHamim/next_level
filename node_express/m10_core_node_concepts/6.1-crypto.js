const crypto = require('crypto')


console.log('\n MD5 Hash: ');

const md5Hashed1 = crypto
  .createHash('md5')
  .update('123456')
  .digest('hex')


  const md5Hashed2 = crypto
  .createHash('md5')
  .update(md5Hashed1)
  .digest('hex')




console.log(md5Hashed1);
console.log(md5Hashed2);