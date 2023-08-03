const http= require('http')

const server=http.createServer((request,response)=>{
    response.end("hello world");
})
server.listen(8000,"127.0.0.1",()=>{
    console.log("Server is listening the port no 8000");
})