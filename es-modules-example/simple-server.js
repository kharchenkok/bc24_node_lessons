
import http from "http";

const server = http.createServer((req,res)=>{
    res.setHeader("Test", "Test header")
    res.end("Hello world")
    
})
// server.listen(3000)
server.listen(80)















// import http from "http";

// const server = http.createServer((req, res) => {
//   // req - Request
//   // res - Response

//   res.setHeader("Test", "Test");
//   res.end("hello world");
// });

// server.listen(80);