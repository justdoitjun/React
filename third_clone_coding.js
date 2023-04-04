var express = require('express');
var app = express();
var path = require("path");

console.log( __dirname); 
// Users/junhyeokChoi/Desktop/Java/React/NODEJS

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

var ejs = require("ejs");
const {title} = require('process');
const {writer} = require('repl');
app.use(express.urlencoded({extended : false}));

var guestbookList = [
    {"id" : 1, "title" : "제목1", "writer" : "작성자1", "contents" : "내용1" , "wdate" :"2021-11-03"},
    {"id" : 2, "title" : "제목2", "writer" : "작성자2", "contents" : "내용2" , "wdate" :"2021-11-04"},
    {"id" : 3, "title" : "제목3", "writer" : "작성자3", "contents" : "내용3" , "wdate" :"2021-11-05"},
    {"id" : 4, "title" : "제목4", "writer" : "작성자4", "contents" : "내용4" , "wdate" :"2021-11-03"},
    {"id" : 5, "title" : "제목5", "writer" : "작성자5", "contents" : "내용5" , "wdate" :"2021-11-03"}
];

app.get("/list", (request, response)=>{
    response.render('guestbook/list', {
        "title" : "게시판목록", "guestbookList" : guestbookList
    });     // ejs 엔진과 결합하여..render 함수
});     //use 함수는 get, post 모두에 응답한다. 현재 있는 모든 url을 전부 스스로 처리한다. 

app.get("/view/:id", (request, response)=>{
    var id = parseInt(request, params.id) - 1;
    response.render('guestbook/view', {"title" : "게시판상세화면", 
                "guestbook" : guestbookList[id]});
});

app.get("/write",(request, response)=>{
    response.render('guestbook/write');
});

app.post("/write", (request, response)=>{
    var title = request.body.title;
    var writer = request.body.writer;
    var contents = request.body.contents;
    var wdate = request.body.wdate;
    var id = guestbookList.length + 1;
    guestbookList.push({title:title, contents:contents, writer:writer, wdate:wdate, id:id});
    response.redirect("/list"); // 글 작성을 다 끝냈다면 목록으로 이동합니다. 
});

app.listen(4000, function(){
    console.log('Example app listening on port 4000! Succeed!');
})
