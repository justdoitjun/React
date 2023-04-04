// DAY 7 - April / 4th / 2023
//******************************************(0)******미들웨어******************************************* */
////////////////////////// 미들웨어에 대한 이해
///////
//// ////////////<사례1> ////////// 실제로 잘 쓰지는 않음. 
var express = require("express");
var app = express();
///////////////use 와 get의 차이....
///////
// The main difference between app.use() and app.get() is that app.use() is used to define 
// middleware functions that can be executed for any type of HTTP request, 
// whereas app.get() is specifically used to define a route handler function for a GET request.
//첫번째 미들웨어
app.use((request, response, next)=>{
    //request 브라우저 -> 서버
    //response 서버 -> 브라우저
    //next 다음 함수를 호출한다.
    console.log("A");
    request.name="hong";
    response.name = "jake";
    next();   // 바로 밑 함수 호출한다.   ===> 이게 미들웨어...
});
//두번째 미들웨어
app.use((request, response, next)=>{
    console.log("B");
    request.phone = "010-1234-5678";
    response.address = "New York";
    next();
});
app.use((request, response)=>{
    response.writeHead(200, {"Content-type":"text/html"})
    console.log(request.name);
    console.log(response.name);
    console.log(request.phone);
    console.log(response.address);
    response.end("<h1>Success! Express!</h1>")
});
app.listen(4000, ()=>{
    console.log("server started... http://127.0.0.1:4000"); //사실 이 콘솔창은 의미없고
    // app.listen 뒤 포트번호가 중요한 거임..
});

