let http = require("http");
const url = require("url");
const fs = require("fs");

let server = http.createServer((request , response)=>{
    const da = new Date();
    console.log(da);
    // const date = Date.now();
    // console.log(date);
    response.write("<h1>Welcome to our Website.</h1>");
    console.log(request.url);
    response.end()
    fs.appendFile("serverlog.txt",`${da} ${request.url} new request received\n`, (err)=>{
    if(err) throw err;
});
});
server.listen(8000,'localhost',(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Server started at http://localhost:8000")
    }
    
});

//const myUrl = "http://localhost.com:3000/home/page?name=Anamika&age=20#about";

//const parsed = url.parse(myUrl, true);

// console.log(parsed);

// // Individual parts
// console.log("Host:", parsed.host);
// console.log("Hostname:", parsed.hostname);
// console.log("Path:", parsed.pathname);
// console.log("Query:", parsed.query);
// console.log("Hash:", parsed.hash);
