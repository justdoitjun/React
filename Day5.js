// DAY 5 - March / 31 / 2023
//******************************************(1)******HTML ******************************************* */
////////////////////////// 포트 닫는 방법
// Last login: Fri Mar 31 16:45:37 on ttys001
// junhyeokchoi@JunhyeokChois-MacBook-Air ~ % cd Desktop/Java/React/NODEJS          // NODE 기점이 되는 파일로 접속해주세요.
// junhyeokchoi@JunhyeokChois-MacBook-Air NODEJS % lsof -i :3000                  // lsof -i:포트번호
// COMMAND  PID         USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME
// node    9559 junhyeokchoi   21u  IPv6 0x35442d77dcdb6071      0t0  TCP *:hbci (LISTEN)   //ProcessID가 9559임
// junhyeokchoi@JunhyeokChois-MacBook-Air NODEJS % kill 9559            // kill해주기.
// junhyeokchoi@JunhyeokChois-MacBook-Air NODEJS % 


//html _
/////////////////////     <결론>
        //원칙적으로 form 태그는 값을 서버로 전달하는 역할을 하는데, form태그는 한 페이지 당 하나만 사용가능합니다. 
        // 물론, 요즘은 그렇지 않고 여러개의 form 태그를 사용하는 경우가 있습니다. 
        // 이러한 실수는 매우 자주 일어나는 실수입니다. 

// 2개의 정보 전달 방식이 있다. 
//   이를 좀 더 정확하게 말하면, get  방식이라고 함. 
// 정보를 감추고 url 에 안보내는 걸 post 방식이라고 함. 
////////////////////      <사례>
    // <사례1> - 이건 가능한 사례 --> // 바람직하진 않지만, 최근엔 자주 사용되고 서버로 전달하게 됩니다. 
// <form>
// </form>
// <form>
// </form>
//file:///Users/junhyeokchoi/Desktop/Java/React/JS/day5.html?userid=test
// 특별하게 말을 안해주면, 

    // <사례2> - 이건 불가능한 사례 --> // 이 경우에는 정보를 서버로 전달하지 못하게 됩니다. 중첩되어서는 안된다. 
// <form>
//     <form>
//     </form>
// </form>


    // <사례3> - 서버에 전송될 때는 저렇게 url이 바뀝니다. 
    // 3-1. form 태그 밖에 있는 것과 안에 있는 것을 확인해보세요.
// 원래 url : file:///Users/junhyeokchoi/Desktop/Java/React/JS/day5.html
// <!-- <form>
// <input type="text" name="userid"><br/>
// <input type="submit" value="send"><br/>
// </form>
// <input type="text" name="username"><br/> -->
//          실행 후 
// <!-- //file:///Users/junhyeokchoi/Desktop/Java/React/JS/day5.html?userid=test -->

// <form>
// <input type="text" name="userid"><br/>
// <input type="submit" value="send"><br/>
// <input type="text" name="username"><br/>
// </form>
// <!-- file:///Users/junhyeokchoi/Desktop/Java/React/JS/day5.html?userid=test&username=1234 -->
//   이를 좀 더 정확하게 말하면, get  방식이라고 함. 
    // <사례4> - 서버에 정보를 숨겨서 보내야할 때는 hidden type으로 보냅니다. 브라우저에서는 아무것도 보이지 않지만, 전송을 하면 url에 붙어있습니다. 
{/* <form>
암호 : <input type="hidden" name="password"/><br/>     // 대표적인 것이 바로 이 hidden type입니다.
아이디 : <input type="text" name="userid"/><br/>
이름 : <input type="text" name="username"/><br/>
<input type="submit" value="SEND!!!"/><br/>
</form> */}

////////////// Further Study
//****************************** */
///////// 웹 브라우저에서 서버로 데이터를 전송하는 방식에는 크게 2개의 정보 전달 방식이 있다. 
// 정보를 감추고 url 에 안보내는 걸 post 방식이라고 함. 
/// 원리 설명
/// 클라이언트(웹) -----------> 서버
/// header(선발대) : 기초적인 정보를 보낸다. 
/// 예를 들어, 브라우저 정보난 1000바이트 이내의 가벼운 정보
/// body(후발대 - 본 스쿼드) : 중요한 정보, 파일전송, 이미지, 동영상 전송 등 많은 양의 데이터
//******* */
//////////(1)    GET 방식은 header만 보낸다. 화면 url에 모든 정보가 드러난다. 보안이 필요없는 1000바이트 이내의 가벼운 정보만 보내고자 할 때 사용한다. 
/// ?키1 = 값1 & 키2=값2 & 키3 = 값3 형태인데 한글의 경우에는 다른 문자로 가공되어서 전달된다. 그래서 한글을 get 방식으로 보내려면
/// encoding 작업을 먼저해서 선처리 하고 받는 쪽에서는 decoding 작업을 해서 받는다. 
/// 그런데 요즘은 브라우저가 이 작업을 대신 해주기도 하는데 브라우저 버전 따라 다르게 동작하므로 안정적이려면 
/// 한글은 이 방식으로 전송하지 않거나 별도의 작업을 하는 것이 좋다. ---> 그래서 get방식으로 보내지말고, 브라우저 버전 따라 다르니깐 
/// 코드 자체에 인코딩 작업을 해줘야함. 한글은 가급적 안보내주는 게 좋다. 
//////////(2)   POST 방식은 header와 body를 모두 보낸다. 하지만, header를 먼저 보내고, 다른 정보는 body에 보낸다. 
/// 사실상 html에서 post 방식은 무제한 용량을 보낼 수 있으나(이론상) 실제로는 그렇게 하지 않는다. (안정성 문제 - 참고자료 참조)
/// 보통은 30MB 혹은 20MB 이내로 제한을 한다. 
/// 파일 전송, 이미지 전송 , 대용량 데이터 등 중요한 정보를 보낸다. 
/// POST 방식은 문제점이 있다. --> 이러한 방식은 다 암호화해서 보내야한다. 
/// 와이어훅이라는 해킹프로그램을 공유기에 달거나, 휴대폰에 보안키같은 거 넣지 말아라. 

//////////   <참고자료>   HTML 프로토콜 vs FTP 프로토콜
/// 보내야할 데이터가 많을 때 사실상 무제한. 브라우저는 httml 프로토콜을 쓰는데 이건 100mb 이상을 보내는 목적이 아니다. 문서를 올리는 목적이다. 
/// 이 http 방식으로 안되는 건 아닌데 그럼 브라우저 창 리프레시할 수도 없고 계속 기달려야함. (옛날 브라우저가 이런 경우가 많았음)
/// http 방식은 20mb 이상 등은 못 올리게 막아놓고, 이렇게 용량이 크면 FTP 대용량 파일을 올려야함. 
/// 
// *********************************

/////////          (1) GET 방식의 사례
//////https://www.ssg.com/plan/planShop.ssg?dispCmptId=6000125592
// 옛날 방식에는 ?(물음표) 가 나온다. 
/////////          (2)POST 방식
/////

//******************************************(2)******제이쿼리 2탄 ******************************************* */
//제이쿼리
/////////////////////     <결론>
//// 1. 제이쿼리에서는 val()을 통해서 읽고 쓸 수가 있는데, 읽을 때는 앞에 읽고 싶은 객체.val() 이렇게 일고
////    쓰고 싶을 때는 쓰고 싶은 객체(보통 input).val("쓰고자하는 value")를 넣어 이렇게 쓴다.
//// 2. 이 내용은 html 내용이지만, id는 하나만 단일하게 쓸 수 있지만... name은 배열이라서 여러개 쓸 수 있다. 
////    배열이 아니면 안되는 경우...--> 체크박스.... 전체 선택 / 전체 해제 등이 필요하기 때문임. 
//// 3. 전체 선택과 전체해제는 예전에는 for Loop를 활용하여 해결했지만, 최근에는 propoety 객체.prop()을 사용하기 시작했다. 

/////////////////////     <사례1>
{/* <body>
    <form action="">
        <input type="hidden" name="seq"/> <br/>
        이름 : <input type="text" id="username" name="username"/> <br/>
        <button type="button" id="btnRead"> Read Data!!!! </button>
    </form>
</body>
</html>
<script>
    $(document).ready(()=>{
        $("input[type=hidden][name=seq]").val("777");          ..       // 데이터를 쓰고
        $("input[type=text][name=username]").val("hong");
        /////// 물론 ID로 쓰는 것도 가능합니다. 
        // $("#seq").val(999);
        // $("#username").val("임꺽정");
        $("#btnRead").click(()=>{
            console.log($("input[type=hidden][name=seq]").val()); ..    // 데이터를 읽고
            console.log($("input[type=text][name=username]").val());
        })
    });
</script> */}

////////////////////      <사례2>
{/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
<title>Document</title>
</head>
<body>
<form action="">
    <input type="hidden" name="seq"/> <br/>
    이름 : <input type="text" id="username" name="username"/> <br/>
    <button type="button" id="btnRead"> Read Data!!!! </button>
    <!-- //두번째 내용... -->
    좋아하는 프로그래밍 언어 <br/>
    <input type="checkbox" name="interests" value = "1"/> JAVA <br/>
    <input type="checkbox" name="interests" value = "2"/> PYTHON <br/>
    <input type="checkbox" name="interests" value = "3"/> C++ <br/>
    <input type="checkbox" name="interests" value = "4"/> C# <br/>
    <input type="checkbox" name="interests" value = "5"/> R <br/>
    <input type="checkbox" name="interests" value = "6"/> GO <br/>
    <input type="checkbox" name="interests" value = "7"/> KOTLIN <br/>
    <input type="checkbox" name="interests" value = "8"/> JAVASCRIPT <br/>
    <input type="checkbox" name="interests" value = "9"/> SWIFT <br/>

    <button type="button" id="btnSelectAll"> SELECT ALL!!!! </button>
    <button type="button" id="btnReleaseAll"> DISMISS ALL!!!! </button>
</form>
</body>
</html>
<script>
$(document).ready(()=>{
    // $("input[type=hidden][name=seq]").val("777");
    // $("input[type=text][name=username]").val("hong");
    // 물론 ID로 쓰는 것도 가능합니다. 
    $("#seq").val(999);
    $("#username").val("임꺽정");

    // CHECKBOX 를 통해서....name이 왜 쓰이는지를 설명하고자하는 코드. 
    $("input[type=chekcbox][name=interests]").eq(1).prop("checked", true);
    // eq(1)은 인덱스입니다. 
    $("input[type=chekcbox][name=interests]").eq(3).prop("checked", true);
    // eq(3)은 인덱스입니다. 
    $("#btnRead").click(()=>{
        console.log($("input[type=hidden][name=seq]").val());
        console.log($("input[type=text][name=username]").val());
    // CHECKBOX에서 선택한 내용을 갖고 올 때는
        let result = "";
        // this를 써야겠다고 생각하면 가능한 화살표함수는 쓰지 마세요. 팁입니다. 
        // 선택된 항목만 가져온다. 
        $("input[type=checkbox][name=interests]:checked").each(function(){
            // : checked는 왜 붙이나요? 선택된 것만 가져오기 위해서 이렇게 합니다. 
            // 각자 객체가 전달된다. 
            result += $(this).val() + ",";  
            // 선택이 안된 체크박스는 값이 비어있음. 
        });
        alert(result);
        console.log(result);
    })
//전체 선택을 하는 코드 예전에는 for Loop로 이를 다 해결했지만, 이제는 property 객체.prop()으로 해결한다. 
    $("#btnSelectAll").click(()=>{
        $("input[type=checkbox][name=interests]").prop("checked", true);
    })
// 전체 해제를 하는 코드 예전에는 for Loop로 이를 다 해결했지만, 이제는 property 객체.prop()으로 해결한다. 
    $("#btnReleaseAll").click(()=>{
        $("input[type=checkbox][name=interests]").prop("checked", false);
    })
    });
</script> */}

/////////////////////     <사례3>
{/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
<title>Document</title>
</head>
<body>
<button type="button" id="btnAdd">추가</button>&nbsp; &nbsp;
<button type="button" id="btnDel">최근 입력행 삭제</button>&nbsp; &nbsp;
<button type="button" id="btnDelAll">전부삭제</button><br/>
<table id="mytable" style="width:80%;margin:auto; border:blue 1px solid">
    <!-- 열별로 스타일을 지정하기 위한 목적으로는 colgroup을 사용합니다.  -->
    <colgroup>
        <col style="width:33%">
        <col style="width:33%">
        <col style="width:33% ">
    </colgroup>
    <!-- 웹접근성 : thead는 나중에 시각장애인용 보이스오버 만들 때 thead는 읽는 대상임.  -->
    <thead>
        <th> 품목 </th>
        <th> 개수 </th>
        <th> 단가 </th>
    </thead>
    <tbody id="body">
        <tr>
            <td> 흑임자 비비빅 </td>
            <td>100개</td>
            <td>800원</td>
        </tr>
        <tr>
            <td>망고젤리</td>
            <td>90개</td>
            <td>1000원</td>
        </tr>
        <tr>
            <td><input type="text" name="product_name"></td>
            <td><input type="text" name="product_count"></td>
            <td><input type="text" name="product_price"></td>
        </tr>
    </tbody>
</table>
</body>
</html>
<script>
$(document).ready(()=>{
    $("#btnAdd").click(()=>{
        //(1)번방식
        let temp = "<tr>";
        temp += "<td> <input type = 'text' name = 'product_name' ></td>";
        temp += "<td> <input type = 'text' name = 'product_count' ></td>";
        temp += "<td> <input type = 'text' name = 'product_price' ></td>";
        temp += "</tr>";
                //mytable 밑에 tbody 자식을 찾아라. tbody태그의 마지막 자식을 찾고, 그 뒤에 붙여라(append)
                // (1)처럼 더해줘도 되고
                // (2)처럼 백틱을 사용해줘도 됩니다. 
        // (2)번 방식
        temp = `<tr>;
        <td> <input type = 'text' name = 'product_name' ></td>
        <td> <input type = 'text' name = 'product_count' ></td>
        <td> <input type = 'text' name = 'product_price' ></td>
        </tr>`;
        // (1) + (2)
        $("#mytable > tbody:last").append(temp);
    })
    
    // 삭제하는 방법
    $("#btnDel").click(()=> { // 이렇게 한줄 남기고 다지울 수도 있고...
        if($("#mytable > tbody > tr").length >1){
            $("#mytable > tbody> tr:last").remove();
        }
    });
    // 전부 삭제하는 방법
    $("#btnDelAll").click(()=>{
        $("#mytable > tbody").remove();
    })
});
</script> */}


//******************************************(3)******AJAX ******************************************* */
//AJAX
/////////////////////////////////     <결론>
// 스프링이랑 톰캣은 빼고...node.js를 사용하는 방법..
/////////////////////       <사례1>
// let http = require("http");
// let fs = require("fs");     //파일을 읽기
// let url = require("url");   //url 분석을 위한 라이브러리
// //http://127.0.0.1:3000?name=Tom&age=17
// /// Parser가 제공되어서... 이 url이 request url을 가져와서 문자열을 json 객체로 가져옴. 
// /// 무한대라는 것을 컴퓨터에 넣을 수는 없잖아요. 해를 못 찾았을 때...그걸 어떻게 프로그래밍에 넣느냐는 것임.
// let server = http.createServer((request,response)=>{
//     //console.log(request);
//     //console.log(url);             
//     //console.log(request.url);       //전송 url
//     console.log(request.method);      // GET 이 출력됨....!
//     let rurl = request.url;
//     let query = url.parse(rurl, true).query;
//     // string 분석 --> Json 객체로 전환
//     //파싱한다. 
//     console.log(query);
//     if(query.name != ""){
//         response.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'} );
//         response.end(`이름 : ${query.name} 나이 : ${query.age}`);
//     }
// })
// server.listen(3000, ()=>{
//     console.log("server start http://127.0.0.1:3000");
// })  
////////////////////////////            <사례2>
// let http = require("http");
// let server = http.createServer((request,response)=>{
//     response.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'} );
//     response.end("<h1> 두번째 서버입니다.</h1>");
// })

// server.listen(3000, ()=>{
//     console.log("server start   ");
// })
/////////////////////////////             <사례3>
// let http = require("http");
// http.createServer((request,response)=>{
//     response.writeHead(200, {'Content-Type' : 'text/html'});
//     response.end("<h1> Hello my first Webserver</h1>");
// }).listen(3000, ()=>{
//     console.log("server start http://127.0.0.1:3000");
// })
///////////////////////////             <사례4>
// let http = require("http");
// let fs = require("fs");     //파일을 읽기
// let url = require("url");   //url 분석을 위한 라이브러리
// //http://127.0.0.1:3000/add?x=4&y=5   (파라미터 x=4 y=5가 들어감..... 내 의사와는 아무 상관이 없지)
// /// Parser가 제공되어서... 이 url이 request url을 가져와서 문자열을 json 객체로 가져옴. 
// /// 무한대라는 것을 컴퓨터에 넣을 수는 없잖아요. 해를 못 찾았을 때...그걸 어떻게 프로그래밍에 넣느냐는 것임.
// let server = http.createServer((request,response)=>{
//     //console.log(request);
//     //console.log(url);             
//     //console.log(request.url);       //전송 url
//     console.log(request.method);      // 결과 : GET 이 출력됨....!
//     let rurl = request.url;
//     let pathname = url.parse(rurl, true).pathname; ///// add 가 옴
//     let query = url.parse(rurl, true).query;    /// {x:4, y:5} 가 전달됨.  ---> 이게 배열로 받는 거임. 
//     // url String을 URL 객체로 바꿔서 오는 것임. 
//     // .query : JSON 으로 만들어서 오는 것임. 
//     // string 분석 --> Json 객체로 전환
//     //파싱한다. 
//     console.log(query);               // 
//     console.log(pathname);                  // add(server3와 달리 추가된 내용)
//     console.log(typeof(query));         // JSON Object라고 나옴....
//     if(pathname != "/add"){
//         response.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'} );
//         let x = parseInt(query.x);
//         let y = parseInt(query.y);
//         let z = x + y;
//         response.end(`${x} + ${y} = ${z}`);
//     }else{
//         response.writeHead(404, {'Content-Type' : 'text/html;charset=utf-8'});
//         response.end("<h1> Doesn't exist anymore. </h1>")
//     }
// })
// server.listen(3000, ()=>{
//     console.log("server start http://127.0.0.1:3000");
// })  

/////////////////////////////             <사례5>
// let http = require("http");
// let fs = require("fs");     //파일을 읽기
// let url = require("url");   //url 분석을 위한 라이브러리
// //  http://127.0.0.1:3000/add?x=4&y=5   (파라미터 x=4 y=5가 들어감..... 내 의사와는 아무 상관이 없지)
// //  http://127.0.0.1:3000/sub?x=4&y=5
// //  http://127.0.0.1:3000/userinfo?userid=test&username=Tom
// /// Parser가 제공되어서... 이 url이 request url을 가져와서 문자열을 json 객체로 가져옴. 
// /// 무한대라는 것을 컴퓨터에 넣을 수는 없잖아요. 해를 못 찾았을 때...그걸 어떻게 프로그래밍에 넣느냐는 것임.
// let server = http.createServer((request,response)=>{
//     //console.log(request);
//     //console.log(url);             
//     //console.log(request.url);       //전송 url
//     console.log(request.method);      // 결과 : GET 이 출력됨....!
//     let rurl = request.url;
//     let pathname = url.parse(rurl, true).pathname; ///// add 가 옴
//     let query = url.parse(rurl, true).query;    /// {x:4, y:5} 가 전달됨.  ---> 이게 배열로 받는 거임. 
//     // url String을 URL 객체로 바꿔서 오는 것임. 
//     // .query : JSON 으로 만들어서 오는 것임. 
//     // string 분석 --> Json 객체로 전환
//     //파싱한다. 
//     console.log(query);               // 
//     console.log(pathname);                  // add(server3와 달리 추가된 내용)
//     console.log(typeof(query));         // JSON Object라고 나옴....
//     if(pathname != "/add"){
//         response.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'} );
//         let x = parseInt(query.x);
//         let y = parseInt(query.y);
//         let z = x + y;
//         response.end(`${x} + ${y} = ${z}`);
//     }else{
//         response.writeHead(404, {'Content-Type' : 'text/html;charset=utf-8'});
//         response.end("<h1> Doesn't exist anymore. </h1>")
//     }
// })
// server.listen(3000, ()=>{
//     console.log("server start http://127.0.0.1:3000");
// })  


