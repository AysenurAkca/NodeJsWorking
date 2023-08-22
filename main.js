// const {a,b} = require("./people");
// // console.log(a);
// // console.log(b);

// const os = require('os')
// console.log(os.homedir());
const fs = require('fs');
const readStream = fs.createReadStream('./docs/long.txt', {encoding : "utf8"});
const writeStream = fs.createWriteStream('./docs/newLong.txt')
// readStream.on("data", (chunk)=>{
//     writeStream.write('\nNEW CHUNK\n')
//     writeStream.write(chunk)
// })

readStream.pipe(writeStream)