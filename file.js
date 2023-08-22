const fs = require('fs');
// fs.readFile("./dogs/blog1.txt", (err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// })

// fs.writeFile("./dogs/blog1.txt","hello world", ()=> {
//     console.log("file was written");
// })

// fs.mkdir("./docs", (err) => {
//     if(err){
//         console.log("there is an error");
//     }
// })

// fs.writeFile("./docs/new.txt", "offff",err=>{
//     console.log(err);
// })
fs.rmdir("./dogs",err=>{
    console.log(err);
})