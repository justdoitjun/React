// DAY 6 - April / 2nd / 2023
//******************************************(0)******포트 닫는 방법******************************************* */
////////////////////////// 포트 닫는 방법
// 콜백함수는 나중에 호출됨. - 파일을 다 읽었을 때 호출됨. 
////// 게시판을 여러번 만들어봐야한다... 모든 건 웹은 게시판의 아류임..
// 

/// POST 전송방식
/// request.on이라는 이벤트 리스너를 받고 조금씩 데이터를 받는다. --> 수신이 끝나면(end) 그 다음에 parse작업. 
//////////////  POSTMAN
let http = require("http");
let fs = require("fs");
let ejs = require("ejs"); // npm install ejs
// 파일을 만들어서 보낼 것이기에 fs라는 코드를 만들었다. (코드라인 2)
let server = http.createServer((request,response)=>{
    fs.readFile("./html/index.html", (error, data)=>{
        response.writeHead(500, {'Content-Type' : 'text/html; charset=UTF-8'});
        response.end("error"); // 에러상황임
        return;
    })
    response.writeHead(200, {'Content-Type' : 'text/html; charset=UTF-8'});
    response.end(data); // 파일 내용을 브라우저로 보낸다. 
})

server.listen(3000, ()=>{
    console.log("server start http://127.0.0.1:3000 ");
})


/////////점심 이후 EJS 엔진 실슴
///// scoreserver.js
let scoreData = [
    {name : "John Doe", kor : 90, eng : 90, math : 100},
    {name : "Jane Doe", kor : 90, eng : 90, math : 100},
    {name : "Jake Doe", kor : 90, eng : 90, math : 100},
    {name : "Julia Doe", kor : 90, eng : 90, math : 100},
    {name : "Jun Doe", kor : 90, eng : 90, math : 100},
];

///////////////////// 프레임워크 
//npm install ejs
//npm install jade
//      http://html2jade.org

////////////////////////////////// EJS 엔진 
// <!-- *************************************<결론/>***************** -->
// <!-- 이 코드는 EJS 문법을 사용하여 boardList 배열을 반복문으로 출력하는 코드입니다.

// (1)   <% %>는 EJS 문법에서 자바스크립트 코드를 실행할 때 사용합니다. 
// for(item of boardList){ %>은 boardList 배열의 요소를 하나씩 꺼내서 item 변수에 저장하고, 
// 그 안에서 해당 요소의 속성을 출력하는 코드를 실행합니다.

// (2)   <%= %>는 EJS 문법에서 값을 출력할 때 사용합니다. 
// <%=item.id%>는 item 객체의 id 속성을 출력하는 코드입니다.
// <br/>는 줄바꿈 태그입니다. -->
// <!-- *************************************</결론>***************** -->
////////////// <사례1> ////Server8.js
let http = require("http");
let fs = require("fs");
let ejs = require("ejs"); //npm install ejs
let boardList = [    // 일종의 JSON파일을 모방했습니다...
    {id :1, title : "제목1", writer:"작성자1", wdate : "2023-0403"},
    {id :2, title : "제목2", writer:"작성자2", wdate : "2023-0404"},
    {id :1, title : "제목3", writer:"작성자3", wdate : "2023-0405"},
    {id :1, title : "제목4", writer:"작성자4", wdate : "2023-0406"},
    {id :1, title : "제목5", writer:"작성자5", wdate : "2023-0407"}
]
let server = http.createServer( (request, response) => {
    response.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'});

    fs.readFile("./html/test2.html", "utf-8", (error, data) => {
        if (error){
            response.writeHead(500, {'Content-Type' : 'text/html;charset=utf-8'});
            response.end("error");//에러상황임.
            return;
        }
        response.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'});
        response.end(ejs.render(data, {//test에서  <%=name%>을 바꿔치기해서 넣어줄 것임.
            boardList:boardList
        }));//파일 내용을 브라우저로 보낸다.
        //ejs 템플릿 엔진을 통해서 html과 nodejs의 데이터를 결합한다.
    })
})
server.listen(4000, () => {
    console.log("server start http://127.0.0.1:4000")
});
//npm install nodemon
///////////////////test2.html
{/* <body>

    <!-- <%=boardList%> -->
    <%for(item of boardList){ %>
        <%=item.id%> &nbsp; &nbsp; 
        <%=item.title%>&nbsp; &nbsp; 
        <%=item.writer%> &nbsp; &nbsp; 
        <%=item.wdate%> <br/>
    <%}%>
    <br>
    <hr>
    <br>
    <table>
        <thead>
            <th> 번호 </th>&nbsp; &nbsp; 
            <th>  제목 </th>&nbsp; &nbsp; 
            <th> 작성자 </th>&nbsp; &nbsp; 
            <th> 작성일 </th>&nbsp; &nbsp; 
        </thead>
        <tbody>
            <%for(board of boardList){%>
                <tr>
                    <td><%=board.id%></td>
                    <td><%=board.title%></td>
                    <td><%=board.writer%></td>
                    <td><%=board.wdate%></td>
                </tr>
            <%}%>
        </tbody>
    </table>
</body>
</html> */}

////////////// <사례2> ////Server8.js



////////////////////// JADE (거의 안쓰지만 한번 연습해보자.)
////// <사례1> ////Server9.js
let http = require("http");
let jade = require("jade");
let fs = require("fs");
// jade Test
let server = http.createServer((request,response)=>{
    fs.readFile("html/test1.jade", "utf-8" , (error, data)=>{
        let fn = jade.compile(data);
        response.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'} );
        response.end(fn());
    });
});
server.listen(3000, ()=>{
    console.log("server start http://127.0.0.1:3000 ");
})
////////////// test1.jade   (JADE 파일)////-> 이건 너무 어려워서... http://html2jade.org 
//// html 문서를 jade로 바꿔서 해보겠다...
doctype html
html(lang='en')
  head
    meta(charset='UTF-8')
    meta(http-equiv='X-UA-Compatible' content='IE=edge')
    meta(name='viewport' content='width=device-width, initial-scale=1.0')
    title  Index-default file
  body
    h1  Welcome to Hollywood! 
///////////////////// 그 이상 할 필요는 없다. jade는.


//////////////// EXPRESS 모듈
////// 
// response.send : 매개변수의 자료형에 따라 적절한 형태로 응답한다. 
// response.json : json 형태로 응답한다. 
// response.jsonp : jsonp 형태로 응답한다. 
// node js에서 프론트엔드와 백엔드( 포트번호가 서로 다르기 때문에 거의 남이다) 
// 프론트에서 백엔드에 요청을 해도... 너랑 나랑은 crossOrigin이므로 오류가 계속 뜬다... 
// 초창기에는 이를 확장자로 jsonp를 보내서 특별하게 다뤄서 해결했다. 
// react 나 이런 부분에서 proxy를 써라 등등이 많았고...편법을 써서... 같은 origin이 아니라면
// 프론트엔드(클라이언트)에서 가짜서버(proxy)를 써서 우회하도록 함. (지금은 보안문제로 안 쓴다...)
// 프록시라는 건... 우회 (회피)수단으로 쓰는 거지만 이제는 안먹힌다. 
// 찾을 때 주의해야할 것은 react가 실시간 버전이 바뀐다. 신기한 건 버전이 바뀐다. jsonp는 그래서 안 쓴다. 
// https://expressjs.com/ko/starter/installing.html

/////// Express 모듈이 html 모듈보다 업그레이드된 버전....
//명령어 $ npm install express는 Node.js 애플리케이션을 구축할 때 사용되는Express.js 프레임워크를 설치하는 명령어입니다.
//   Express.js는 Node.js를 이용하여 웹 어플리케이션을 쉽게 만들 수 있게 도와주는 미들웨어(Middleware)와 라우팅(Routing) 등의 기능을 제공합니다. 
// 이를 이용하여 빠르고 안정적으로 서버를 구축할 수 있습니다.

//**************************** */ 라우팅(교재 200페이지)****************************
/////////////////////<결론>
//////  (1) Query
// query는 URL의 ? 뒤에 나오는 쿼리 스트링을 통해 전달되는 데이터를 의미합니다. 
// 따라서 query를 사용하는 경우, 라우트 경로에서 쿼리 스트링을 제외한 경로만을 작성해주면 됩니다. 
// 예를 들어 http://127.0.0.1:4000/add?x=45&y=7와 같은 요청이 들어왔을 때 app.get("/add")로 요청을 처리할 수 있습니다. 
// 요청에서 전달된 x와 y의 값은 request.query.x와 request.query.y를 통해 접근할 수 있습니다.

//////   <사례1>
// app.get("/add?x=:x&y=:y",)가 아니고....
app.get("/add", (request,response)=>{
    console.log(request.query);
    let test = {
        x:request.query.x,
        y:request.query.y
    };
    response.send(test);
});

