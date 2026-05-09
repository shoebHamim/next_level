const fs = require('fs')

// console.log(fs);

// const data=fs.readFile('./data.txt','utf-8',()=>())
const data = fs.readFile('./data.txt', (err, buffer) => {
  // Buffer = a fixed size chunk of memory where raw binary data lives
  // each memory address represents 1 byte so 1 buffer value is 1 byte(8 bit)
  // meaning the values will be 0-255 in decimal
  // in nodejs context it's  allocated outside of v8 memory heap
  console.log('length of the buffer',buffer.length);
  console.log(buffer);

  // great! we can see the buffers each byte chunk
  // when the entire buffer is printed it's showing hex value
  // when individual byte chunk is printed it's showing decimal value

  // now we have binary data, what to do with it?
  // we can encode the data in utf-8, to see the text because
  // text written in data.txt--> utf-8 --> binary --> stored in memory
  // stored in memory  --> binary --> utf-8 --> text written in data.txt
  console.log('this is the text written in data.txt👇');
  console.log(buffer.toString('utf-8'));

  // Unicode is NOT an encoding itself. It's a character set.
  // Unicode assigns each character a code point (just an abstract number),
  // but it doesn't specify how to represent that number in binary
  // UTF-8 (and other encodings) specifies the rules for converting those abstract numbers into actual bytes.
  // UTF-8 is an encoding technique: 1–4 bytes per character

  // Unicode VS UTF-8/16/32
  // Let's take the character '€' (Euro sign):
  // Unicode says:
  // Character: €
  // Code point: U+20AC
  // As a decimal number: 8364
  // That's where Unicode stops. It just says "this character is number 8364 in our big list." 

  // approach 1: naive
  // 00100000 10101100 (2 bytes)

  // approach 2: utf-8
  // 11100010 10000010 10101100 (3 bytes!)
  // UTF-8 doesn't just dump the code point number into bytes. 
  // It uses a clever variable-length encoding scheme with these rules:
  //? here utf-8 seems little inefficient than raw binary encoding but is it
  // ->in this case yes, but if we want to use raw binary encoding we would have to pick a fixed width
  // 1/2/3 bytes, let's say we pick 2 bytes-> we would loose a lot of space on ascii characters which 
  // utf-8 represents in 1 byte, 
  // the main point of utf-8 wining is it's variable length thing

  //? see how utf-8 encoding work!



})
// console.log('finished');


