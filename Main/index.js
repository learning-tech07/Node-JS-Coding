
const fs = require("fs");
const http = require("http");
const url = require("url");
const path = require("path");


//creating server
let server = http.createServer((request,response)=>{
    switch(request.url){
        case '/':
            fs.readFile('./Component/home.html',(err,page)=>{
                if(err){
                    response.end();
                }
                else{
                    response.write(page);
                    response.end();
                }
            }); 
            break;
        case '/about':
            fs.readFile('./Component/about.html',(err,page)=>{
                if(err){
                    response.end();
                }
                else{
                    response.write(page);
                    response.end();
                }
            }); 
            break;
        case '/profile':
            fs.readFile('./Component/profile.html',(err,page)=>{
                if(err){
                    response.end();
                }
                else{
                    response.write(page);
                    response.end();
                }
            }); 
            break;    

    }
    
});
server.listen(2000,'localhost',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Server started successfully at http://localhost:2000");
    }
});