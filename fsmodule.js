//FS MODULE

const fs = require("fs");
const fh = fs.openSync("secfb", "w+");   //file handler/descriptor/file pointer

console.log(fs.writeFileSync(fh , "We are here to study."));   //write data
console.log(fs.readFileSync("secfb" , "utf-8"));               //read data and print it
fs.renameSync("secfb","Sec-FB");
fs.appendFileSync("Sec-FB", " hi");                    //appends data
console.log(fs.readFileSync("Sec-FB" , "utf-8"));
fs.cpSync("Sec-FB","file1");                         //copies file data to anotherfile
console.log(fs.readFileSync("file1" , "utf-8"));
fs.unlinkSync("file1");                           //deletes file
fs.renameSync("Sec-FB","secfb.txt");

fs.writeFile("secfb.txt","kemchho",(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("done");
    }
})
fs.readFile("secfb.txt","utf-8",(err , data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})





// const fs = require("fs");
// const fh = fs.openSync("file1", "r");
// console.log(fh);
//fs.close(fh);
//const resetPOINTER =Buffer.alloc(50);
// console.log(fs.readFileSync("file1" , "utf-8"));