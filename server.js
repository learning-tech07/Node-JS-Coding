let http = require("http");
let server = http.createServer((request,response)=>{
    response.end("Server started successfully!")

});
server.listen(8000,'localhost',(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Server started at http://localhost:8000")
    }
});
