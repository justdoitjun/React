var express = require('express'); //express 웹 프레임워크 (라우팅/ 미들웨어 /요청처리를 담당하겠음. ) 즉, node.js 쓸 거임
var app = express(); // app이라는 변수를 설정하여, express가 코드 전체를 지배하도록 함. 
var fs = require('fs'); // html 파일을 렌더링하겠음. 
var ejs = require('ejs'); //ejs 탬플릿 엔진 (Express와 결합되었을 때 코드가 간단해짐. html을 동적으로 처리 )

app.use("/scoreform", (req, res) => {
    fs.readFile("../html/third_assignment.html", "utf-8", (err, data) => {
        res.writeHead(200, {"Content-type":"text/html"});
        res.end(ejs.render(data));  //데이터를 읽어와서 웹에 렌더링할 것임. 
    })
}); //fs.readFile은 상대경로를 통해 html을 결부지을 것임. 이 때 태그하는 방법은 127.0.0.1:4000/scoreform 임. 

app.use("/score", (req, res) => {
    let name = req.query.name;  //이름
    let kor = parseInt(req.query.kor);  //국어성적을 웹에서 가져와서 int로 wrapper clas
    let engl = parseInt(req.query.engl);  //영어성적 
    let mat = parseInt(req.query.mat);  //수학성적
    let total = kor + engl + mat;
    let avg = total / 3;
    res.send({total : total, avg : avg}); // send할 때 JSON 형식으로 송부할 것이고(네트워크), hashmap처럼 Key값은 total,avg
    //res.send(`${name}님 총점 : ${total}, 평균 : ${avg}`);
});

app.use((request, response) => {
    response.writeHead(200, {"Content-type" : "text/html"});
    response.end("<H1>error</H1>")
});

app.listen(4000,() => {
    console.log("server start http://127.0.0.1:4000");
})
