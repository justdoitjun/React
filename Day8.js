// 세개의 디자인 : ejs
//             list.ejs - 데이터 목록           /score/list/:pg
//             view.ejs - 데이터 하나만 상세      /score/view/:선택항목id
//             write.ejs -                   /score/write - write 페이지로 이동.
//                                           /score/save - 실제 저장 후  list로 복귀.

// EJS 왜 쓰냐?
///// 기존 html의 문제점 : 





///////// NODE JS
/// NODEMON이란 무엇인가? nodemon은 굳이 실행 안해도 코드 바뀌면 바뀐대로 출력해주고 동시다발적으로 처리해줌. 
/// ajax 라는 게 신기한 게 웹을 새로고침 안해도 그 자리에서 값을 변경해주고 하는 건데 네이버에 검색하려고 타자를 치면
/// 검색창 추천어가 실시간으로 바뀌고 저장되는 그 기술. 그게 ajax이다. 
var express = require("express");
var app = express(); 
var ejs = require("ejs");
app.set("view engine", ejs);
app.use(express.urlencoded({extended:false}));
let scoreData = [
    {id:1, name:"홍길동", kor:90, eng:80, mat:100}
]
//////// express를 쓰면 fs.readFile을 안 써도...어디에 있든 간에 이를 돌려줌...
// 서버 통틀어서 url은 유일해야한다....url들은 서로 다 달라야함. 
app.get("/score/list", (req, res)=>{
    //views/score/score_list.ejs
    //express framework가 view파일들을 views폴더에 넣기로 약속되어있음. 그래서 폴더 어디에 있든 상관없음..
    //물론 완전 이상한 곳이 아니고...views폴더가 있는 곳에서 js파일이 실행되면 가능함. 
    //res.render()라는 함수는 render라는 함수를 express가 추가함. 
    // 첫번째 매개변수 : html파일이고
    // 두번째 매개변수 : 데이터임. 데이터를 JSON형태로 전달함. 
    // render는 이 두 매개변수를 합쳐서 클라이언트로 보내줌. (프론트 서버가 웹에 뿌려줌. )
    res.render("score/score_list.ejs", {scoreList:scoreData})
});
app.get("/score/view/:id", (req, res)=>{
    let id = req.params.id;
    //filter는 해당 조건을 만족하는 모든 데이터를 갖고 와서 출력값이 배열이지만, find함수는 첫번째 것만 가지고 온다. 
    let scoreItem = scoreData.find(score => score.id == id);
    res.render("score/score_view.ejs", {score:scoreItem}); // JSON 배열 형식으로 반환
});
app.get("/score/write", (req, res)=>{
    res.render("score/score_write.ejs"); 
});
app.post("/score/save", (req, res)=>{
    let name = req.body.name;
    let kor = parseInt(req.body.kor);
    let eng = parseInt(req.body.eng);
    let mat = parseInt(req.body.mat);
    let id = 0;     //id를 일단 초기화 해주자. 
    id = scoreData[scoreData.length -1].id+1;   //가장 마지막에 있는 데이터의 id+1을 해야한다. 
    let data = {id:id, name:name, kor:kor, eng:eng, mat:mat};   //JSON형식으로 데이터를 만들어서 배열에 추가하자. 
    scoreData.push(data); //redirect함수는 어떤 곳이든 해줘야함. 이를 통해 함수 자체를 불러오는 것이 아니고..redirect로 score/list를 호출해야함. 
    res.redirect("/score/list");
});
app.use("/", (req, res)=>{
    res.render("index.ejs");   // 오류가 생긴 이유....index 앞에 슬래쉬 붙여서....views/가 자동으로 생기는데.. views//가 됨. 
});
app.use((req, res)=>{
    res.writeHead(200, {"Content-tye" : "text/html"});
    res.end("<h1> 404 Error</h1>");
});
app.listen(3000, ()=>{
    console.log("server start http://127.0.0.1:3000 ");
})

////////////////************* */
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">  
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
  </head>
<body>
    <nav class="navbar navbar-expand-sm bg-light navbar-light">
        <div class="container-fluid">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" href="#">Active</a>
            </li>
           <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
        </div>
      </nav>
    <div class="container" style ="margin-top : 20px;">
        <h3 style = "text-align: center;">게시판</h3>
        <form name = "myform" id="myform">
        <table class="table table-borderless">
            <!-- table table-striped -->
            <colgroup>
                <col style = "width : 10%">
                <col style = "width : 62%">
                <col style = "width : 14%">
                <col style = "width : 14%">
            </colgroup>
            <thead>
              <tr>
                <th>Number</th>
                <th>title</th>
                <th>writer</th>
                <th>date</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                    <td>제목</td>
                    <td><input type = "text" name = "id"></td>
                </tr>
                <tr>
                    <td>작성자</td>
                    <td><input type = "text" name = "name"></td>
                </tr>
                <tr>
                  <td>국어</td>
                  <td><input type = "text" name = "kor"></td>
                </tr>
                <tr>
                  <td>영어</td>
                  <td><input type = "text" name = "eng"></td>
                </tr>
                <tr>
                  <td>수학</td>
                <td><input type = "text" name = "mat"></td>
                </tr>
                <tr>
                  <td colspan = "2">
                    <button type = "button" class="btn btn-success" id="btnSave">등록</button>
                  </td>
                </tr>
            </tbody>
          </table>
          </form>
    </div>
</body>
</html>
<script>
  //제이쿼리 형식으로 해봄. 
  $(document).ready(()=>{
    $("#btnSave").click(()=>{
      $("#myform").prop("method", "post");
      $("#myform").prop("action", "/score/save");
      $("#myform").submit();
    })
  })
  // window.onload = () => {
  //   let btnSave = document.getElementById("btnSave");
  //   btnSave.addEventListener("click", () => {
  //     document.myform.method="post";
  //     document.myform.action="/board/save"
  //     document.myform.submit();
  //   })
  // }
</script>
///////</form>
// *******************
// 제이쿼리...엑시오스...ajax로 웹에 보내는 게 어려워서...Jquery를 더 많이 쓴다. 
// 제이쿼리....</div>
// ajax는 form 태그를 많이 쓰지만... 이건 필요 없다. 하지만 그래도 통일성 위해서 form 태그를 넣어봄.</body>
// 제이쿼리를 이용한 서버 통신 방법. </meta></meta>
<body>
    <form>
        x   :   <input type="text" name="x" id="x"/><br/>
        y   :   <input type="text" name="y" id="y"/><br/>
    result  :   <input type="text" name="result" id="result"/><br/>
                <button type="button" id="btnAdd"> 더하기 </button>

    </form>
</body>
<script>
    $(document).ready(()=>{
        $("#btnAdd").click(()=>{
            $.ajax({
                url : "/ajax/add",
                data : {"x":$("x").val(), "y":$("y").val()}
                dataType : "json" //결과는 JSON 형태로 반환받겠습니다. 
            })  //url과 data는 이미 정햊니...JSON 형태임..
            .done((res,status,error)=>{
                console.log(res); //사실 이건 필요없지만 그래도 그냥 공부상 해보자. 성공했으면 뭔가 조치 취할 건 없지.
            })// ajax 가 성공했을 때 (서버와 통신이 성공하여 데이터를 가져왔을 때)
            .fail((res,status,error)=>{
                console.log(status); // 왜 에러가 났는지를 확인해봄. 
            })// ajax 가 실패했을 때 (서버와 통신이 실패하여 데이터를 가지고 오지 못했을 때 )
        })  
    })
</script>



///////////프론트 / 백</meta>
// 프론트엔드는 가져오는 것만 남는 거고 백엔드는 VIEWS 폴더가 아예 백 서버 뒷단으로 넘어감. 
var express = require('express');
var router = express.Router();


/////***************렌더링하는 부분이 프론트 서버가 하고.....</head>
router.get('/ajaxtest1', function(req, res, next) {
  //res.render('guestbook/list');
  res.render("ajax/ajaxtest1"); //웹에 ajaxtest라는 문자열을 보냅니다. 
});
router.get('/ajaxtest2', function(req, res, next) {
  //res.render('guestbook/list');
  res.render("ajax/ajaxtest2"); //웹에 ajaxtest라는 문자열을 보냅니다. (백엔드 서버단으로 넘어감. )
});    
router.get('/result1', function(req, res, next) {
  res.send("data만 보낸다. ");
});
// 적당히 send함수로 보낸다. http://127.0.0.1:3000/ajax/add?x=5&y=8
/////**************프론트 부분....****

// *************백엔드 부분</html>
router.get('/', function(req, res, next) {
  //res.render('guestbook/list');
  res.send("ajaxtest"); //웹에 ajaxtest라는 문자열을 보냅니다. 
});

router.use('/add', function(req,res, next){
    x = parseInt(req.query.x);
    y = parseInt(req.query.y);
    z = x + y;
    res.json({result:z}); //respond를 JSON 형태로 보냄. 
})

// *************백엔드 부분

module.exports = router;

/////********************************************** */
// 위 코드는 백엔드 서버에서 라우터를 정의하는 코드입니다.
//  프론트엔드 서버와 백엔드 서버를 분리하려면, 이 코드를 백엔드 서버의 app.js 파일이나 
//  다른 라우터 파일에서 app.use()를 사용하여 라우터로 등록해야 합니다.

// 먼저, app.js 파일에서 express 모듈을 사용하여 애플리케이션을 생성하고, 백엔드 서버의 라우터를 등록할 수 있습니다.
// app.js (백엔드 서버)
{/* <백엔드 서버 파트> */}
const express = require('express');
const app = express();
const router = require('./routes'); // 라우터 파일을 가져옴

app.use(express.json()); // JSON 데이터 파싱을 위한 미들웨어 등록
app.use('/api', router); // 라우터를 등록하고 경로를 '/api'로 지정

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
// 백엔드 서버 파트 끝

//      프로느엔드 서버파트
// 위 코드에서 /api 경로에 대한 요청은 router 객체에서 처리됩니다. 
// express.json()은 JSON 데이터를 파싱하기 위한 미들웨어로 등록되어 있습니다.

// 이제 프론트엔드 서버에서는 이 경로를 통해 백엔드 서버와 통신할 수 있습니다.

// frontend.js (프론트엔드 서버)

const url = 'http://localhost:3000/api';

// GET /api/ajaxtest1
$.get(`${url}/ajaxtest1`, function(data) {
  $('#content').html(data);
});

// GET /api/ajaxtest2
$.get(`${url}/ajaxtest2`, function(data) {
  $('#content').html(data);
});

// GET /api/add?x=1&y=2
$.get(`${url}/add`, { x: 1, y: 2 }, function(data) {
  console.log(data.result); // 3
});

// GET /api/result1
$.get(`${url}/result1`, function(data) {
  console.log(data); // "data만 보낸다."
});

//프론트 파트 끝
