// DAY 5 - March / 31 / 2023
//******************************************(0)******포트 닫는 방법******************************************* */
////////////////////////// 포트 닫는 방법
// Last login: Fri Mar 31 16:45:37 on ttys001
// junhyeokchoi@JunhyeokChois-MacBook-Air ~ % cd Desktop/Java/React/NODEJS          // NODE 기점이 되는 파일로 접속해주세요.
// junhyeokchoi@JunhyeokChois-MacBook-Air NODEJS % lsof -i :3000                  // lsof -i:포트번호
// COMMAND  PID         USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME
// node    9559 junhyeokchoi   21u  IPv6 0x35442d77dcdb6071      0t0  TCP *:hbci (LISTEN)   //ProcessID가 9559임
// junhyeokchoi@JunhyeokChois-MacBook-Air NODEJS % kill 9559            // kill해주기.
// junhyeokchoi@JunhyeokChois-MacBook-Air NODEJS % 
////////////////////////// 내 아이피를 찾는 방법. 
/////ipconfig getifaddr en0   ===> 매킨토시에서 자신의 IP를 알 수 있는 방법. 

//******************************************(1)******HTML ******************************************* */
//////html _
/////////////////////     <결론>
        //(1) 원칙적으로 form 태그는 값을 서버로 전달하는 역할을 하는데, form태그는 한 페이지 당 하나만 사용가능합니다. 
        // 물론, 요즘은 그렇지 않고 여러개의 form 태그를 사용하는 경우가 있습니다. 
        // 아래의 실수<사례1>는 매우 자주 일어나는 실수입니다. 
        // (2) 2개의 정보 전달 방식이 있다. 
        // 이를 좀 더 정확하게 말하면, get  방식이라고 함. 
        // 정보를 감추고 url 에 안보내는 걸 post 방식이라고 함. 
////////////////////      <사례>///////////////////////  ////////////////////  ////////////////////  
    // <사례1> - 이건 가능한 사례 --> // 바람직하진 않지만, 최근엔 자주 사용되고 서버로 전달하게 됩니다. 
// <form>
// </form>
// <form>
// </form>
//file:///Users/junhyeokchoi/Desktop/Java/React/JS/day5.html?userid=test
// 특별하게 말을 안해주면, 

/////// <사례2> - 이건 불가능한 사례 --> // 이 경우에는 정보를 서버로 전달하지 못하게 됩니다. 중첩되어서는 안된다. 
// <form>
//     <form>
//     </form>
// </form>

/////// <사례3> - 서버에 전송될 때는 저렇게 url이 바뀝니다. ////////////////////  ////////////////////  
    // 3-1. form 태그 밖에 있는 것과 안에 있는 것을 확인해보세요.
// 원래 url : file:///Users/junhyeokchoi/Desktop/Java/React/JS/day5.html
// <!-- <form>
// <input type="text" name="userid"><br/>
// <input type="submit" value="send"><br/>
// </form>
// <input type="text" name="username"><br/> -->
//          실행 후 
////// ?userid=test가 붙음. (get방식)
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

////////////// Further Study////////////////////  ////////////////////  ////////////////////  ////////////////////  
//****************************** */
///////// 웹 브라우저에서 서버로 데이터를 전송하는 방식에는 크게 2개의 정보 전달 방식이 있다. 
// 정보를 감추고 url 에 안보내는 걸 post 방식이라고 함. 
/// ////////////////////  이를 좀 더 구체적으로 이해하기 위한 원리 설명
/// 클라이언트(웹) -----------> 서버
/// header(선발대) : 기초적인 정보를 보낸다. 
/// 예를 들어, 브라우저 정보 중 1000바이트 이내의 가벼운 정보
/// body(후발대 - 본 스쿼드) : 중요한 정보, 파일전송, 이미지, 동영상 전송 등 많은 양의 데이터
//******* */////////////////////  
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

//////////   <참고자료>   HTML 프로토콜 vs FTP 프로토콜////////////////////  ////////////////////  
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

/////////////////////     <사례1>////////////////////  ////////////////////  
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

////////////////////      <사례2>////////////////////  ////////////////////  
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

/////////////////////     <사례3>////////////////////  ////////////////////  
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

// DAY 5 - March / 31 / 2023
//******************************************(1)******NODE JS 개론******************************************* */
//NODE JS BASIC
console.log("hello nodejs");
////////////////// <결론>
///// 1.  비동기식 전송방식을 사용한다. 
// Node js는 자바스크립트이다. 이건 결국 비동기식/(= 단일 스레드) 모델을 사용한다.가 핵심임. 
// 비동기식 모델은 동시에 많은 작업을 할 수 있습니다. 의외죠? 어감상으로는 동기식 모델이 동시진행이 될 거 같은데 이건 단어가 비슷해 보여서 그런 거지.
// 동기식의 동기식이라는 건 synchronous (transmission)을 해석한 건데, 딱딱 일정 문자열을 맞춰서 한번에 보낸다.
// Ex) 동기식이라는 건 컨테이너(클록이 정확한 표현)만큼 채워야 차가 출발할 수 있습니다. 장점은 효율적이겠죠?
// 단점은 앞에서 교통체증이 있으면 앞차가 못 가는 거 때문에 뒷차는 아예 못갈 수가 있습니다. 
//  non-blocking i.o.
//////  Why????왜 노드는 단일 스레드를 쓸까? 콜백함수를 쓰기 위해서이다.  (아직 이해가 잘 되지는 않음. 노드를 공부하고 나서 봐야할 듯.)
// Yarn은 리액트 때 node .js에서 쓰는 라이브러리 툴이 yarn이다. 
// cf. 하나는 글로벌한 공간이고, 하나는 내 로컬에. 글로벌 권한은 누구나 쓸 수 있는 거고, 로컬은 프로젝트마다 쓸 수 있는 것임. 
///////////// 반대로. 멀티 스레드(동기식 다중 스레드)
// 톰캣 등에서 사용 중임. 스레드라 함은 서버에다 컴퓨터를 불러옴. 여러군데에서 리퀘스트(요청)이 들어가면 하나를 처리하느라 못하면 안되잖아...
///// 즉, 각 고객들을 접대할 수 있는 다양한 노예(스레드) 등을 만들어 놓고... 이 다양한 스레드에서 각각 처리하게 하면 동시 작업이 가능하지.
// blocking i.o.
//.//////참고사항//////// 왜 프론트엔드 서버와 백엔드 서버를 분리할까요?
// 눈에 보이는 것에 민감한 요즘은... 기본적으로 지금은 디자인을 분리시키자고 모듈화하자는 것이 스프링 프레임워크
// 프론트엔드는 오로지 html과 javascript   , 백엔드는 java, php 등등....
// 화면에 보여주는 것은 모두 프론트로 독립시키고, 백엔드는 전적으로 데이터 처리만을 담당하는 스프링 부트 방식으로 변화하고
// 점차 JSP 가 사라져가고....개발자를 백엔드 / 프론트엔드로 구분하고 // 디자인을 빨리 교체하기 위함입니다. 
// 리액트냐 뷰도 자바스크립트임. html과 javascript 
// java를 완전히 빼서 독립시킴. 
// *************************직관적으로 이해할 수 있는 사례 ***********************************************************
////// 2. 비동기시기에 대해 한마디로 말하자면, 동시진행된다. ///반면에///동기식에 대해서 한마디로 말하자면, 앞의 것이 실행되어야 내 것이 실행된다. 
///////// (1) 동기식   (simul.js 참조 실행해볼 것.)
// 동기모드 함수는 반환값에 파일의 내용이 온다. 
var data = fs.readFileSync("./test.js", "utf-8");      //data라는 변수에 해당 파일의 내용이 담김. 파일을 읽어서 담아주는 것임. 
console.log(data);   ///(1)...오래 걸림....그래도 이거먼저 실행하고..
console.log("프로그램 종료"); // (2)
/////결과 : undefined 먼저 실행되고
/////결과 : 그 이후에 프로그램 종료(String)이 가장 나중에 나오고. 

///////// (2) 비동기식의 경우에는 파일을 읽기 전에 함수가 반환되어서 반환값을 사용할 수 없다. (nonsimul.js 실행해볼 것. )
let fs = require("fs");
/// 콜백함수를 2번째 매개변수로 전달한다. 
fs.readFile("/test.js", "utf-8", (err, data)=>{     /// 이렇게 콜백함수를 쓸 수 있다는 것이 비동기식의 장점이다. 
    //// 이 함수는 파일을 모두 읽은 후 시스템에 의해 호출된다. 
    console.log(data);          /// (2)....오래걸림.....그래서 제일 늦게 결과값이 나오고(동시진행되기 떄문에 빠른 게 우선임)
})
console.log("프로그램 종료");       //  (1)....가장 빠름. 
/////결과 : 프로그램종료 로그 (String)가 먼저 나오고. 
/////결과 : undefined 추후에..

// 동기식 파일 처리
// 파일을 모두 읽고나서 리턴한다.
// var fs = require("fs");
// // require - 외부 모듈을 프로그램 안으로 불러온다. 
//*****************************************참고 자료 내용 자바****************************************** */

// // 주의사항 - java의 import와 비슷해보이지만 아니다. 
// // java의 import는 라이브러리를 메모리로 불러오는 게 아니고 라이브러리 이름을 짧게 썼을 때 본래 긴 이름을 제시해주는 역할.
// 예를 들어서, import java.util.List 가 있다고 하자. 
// List<String> list; 라고 쓰면 List의 풀네임을 써야한다. 하지만, java.util.List<String> list 라고 쓰면 너무 길기 때문에... 

// 이를 줄이기 위해 앞에 import를 해주면 앞에서처럼 짧게 쓰고 전체 풀네임은 위의 import 구문으로 확인하라는 의미이고 라이브러리 자체는 이미 불러와진 상태이다. 
//// cf. 참고로 컴퓨터 공학에서 수치해석
// /// 무한대라는 것을 컴퓨터에 넣을 수는 없잖아요. 해를 못 찾았을 때...그걸 어떻게 프로그래밍에 넣느냐는 것임.
//*****************************위의 내용은 진짜 몰랐음. ********************************* */

//******************************************(2)******AJAX ******************************************* */
//AJAX   (Asynchronous JavaScript and XML)
/////////////////////////////////     <결론>//////////////////// 
//// 1. AJAX는 Asynchronous라는 비동기 라는 말에서 알 수 있듯, 비동기 기법(=Node.JS)를 빼고는 이해할 수가 없다. 
//// 2. 모듈은 외부로 노출시키고 외부에서 자유롭게 사용할 수 있다. 
//////// <사례1>.....참고 : mymodule1.js
function sigma(limit){ //1부터 limit까지 합계
    s=0;
    for(i=1; i<=limit ; i++) {
        s+=i;
    }
    return s;
}
// 모듈을 외부로 노출시켜야 외부에서 사용이 가능하다. ///
exports.sigma = sigma;
/// <사례1을 실행하는 창>.....참고 : usemodule.js
mm = require("./mymodule1");
console.log(mm.sigma(10));     //// 결과값 : 55 가 나옴. 

//******************************************(2)******NODE JS 개론******************************************* */
//(동기식이냐 비동기식이냐)
/////////////////    <결론> /////////
/// HTTP라는 것은 프로토콜(약속). 
// 브라우저로부터 오는 정보를 받아들이는 response 
// 정보를 다시 요청하는 것이 requestAnimationFrame
// <사례1 참조> 클라이언트로부터 통신을 하려면 ip, mac address, port가 필요하다. 
// mac Address : 랜카드 주소, 이더넷 주소를 말한다. 각자의 랜카드에는 16진수 쌍으로 이루어진 전세계에서 유일한 값이 저장되어있다.
// ip : 컴퓨터를 식별하기 위해 논리적으로 부여되는 코드이며, 4byte가 부여되고 1byte.1byte.1byte.1byte 형태인데
// 외우기 어려워서 대신에 도메인이름을 사용한다. 
// wwww.googl.com(도메인 이름) ----------> DNS 서버 (도메인 네임 서버)
// <----------------------------------- DNS 서버에서 ip를 알아온다. 
//ip는 통신을 하고자 하는 상대방의 단말장치(컴퓨터 등)에 들어가고 상대방의 단말장치에 가서 만나야할 프로세스가 누구냐(포트번호)를 알아온다. 


//////cf. 참고로 바이트라 함은 8비트이다. 따라서, 2의 8승. (2진수로 8자리수가 들어감.) ==> 256비트가 들어갈 수 있고
// 1바이트는 1~256까지 들어갈 수 있다는 것. 그러나 CS 공학 상 0~265가 들어갈 수 있다. 
// 위의 내용과 결부지어볼 때....127.235.255.224 이런식으로 나오는 이유임. 256을 넘어가는 수가 없잖아. 



//물리적 주소
/// 1. 포트번호는 엄밀히 말하면 소켓 식별값임. 
///// 내 컴퓨터에는 오라클 서버도 돌아가고 있지만, 웹서버도 돌리고 다 돌아감. 
/// 누구랑 만날 거냐? 가 포트번호임. 내가 오라클이랑 만날 건지 http랑 만날 건지를 결정함
/// 이런 것이 프로토콜 식별값이 아님. 엄밀히 말하면, 프로세스 식별값이 아니고 소켓 식별값임. 
///////// 소켓 : 통신을 할 때 LAN카드(내부구조)를 묶어서 소켓이라고 함. 
//소켓을 간단히 이해하기 위한 설명을 덧붙이면, 친구에게 택배를 보낸다고 했을 때, 상자에 보낼 물건을 넣고 나의 이름, 주소 등의 인적사항과 친구의 집 주소를 적어야 한다.
// 이렇게 뭉뚱그려서
// 하드웨어를 다 알아야하고, super vG 카드의 내부구조를 알면 좋지만...그렇게 알기 쉽지는 않고
//// 이런 내부구조를 다 알기 어렵기 때문에 이런 하드웨어를 다 감싸서 소켓 라이브러리(네트워크 라이브러리)라는 것이 있음
// 최초로 만든 곳이 버클리대학임. 이를 버클리 소켓이라고 함. 
// 소켓이 실제로 어떻게 데이터 들어가고 나오는지가 중요한 것이 아니고... 그럼 혹시 소켓을 꽂으면서 
// 밥솥만든 사람도 소켓의 내부구조를 왜 알겠냐. 소켓부터 알고 시작함. 그냥 우리가 알아야할 도그마임. 
/// 컴퓨터 소켓은 멀티탭처럼 많이 만들 수 있다. 변수와 함수로 구성된 라이브러리이기 때문에 실제 물리적 장비로 만드는 건 소켓이 알아서 한다. 
/// 소켓통신이라고 함. TCP- IP 프로토콜이라고 함. 우리 http는 소켓보다 한참 위에 있음. 
/// 소켓이라 함은
//비버는 클라이언트고 SQL plus 화면 같은 건 다 클라이언트임.  오라클DB는 저 끝에 있음. 
// 오라클 소켓번호가 1521번이라고 오라클에서 그렇게 지정함. 고유값을 만들어놓은 것임. 우리 코드에 전선 꽂으려면 1521 누르고 찾아서 와.

//// 하지만 은행 같은 경우는 보안이 중요하기 때문에 방화벽 다 차단해놓고 로컬에서만 오는 접속만 막아놓는 것도 있고, 
/// 권한은 DBA가 주고 DBA 혼자 1521 씀.
///HTTP www. daum.net : 포트번호
//// 원래는 포트번호를 써야하지만...포트번호(80번)이 생략 되어있는 것임. http는 80번 포트번호가 내재되어있음. 

/// 윈도우 OS가 80번 쓰고 잇음. 윈도우 OS 안에 80을 쓰고 잇음. 내가 서버로 3000번을 쓰겠다고 지정하고 
/// 특수목적 IP는 127로 시작하는 IP는 내컴퓨터는 127.0.0.1 이를 루프백 주소라고 함. : 로컬 호스트
/// 본인 컴퓨터로 돌아감
// 웹서버이면서 웹 클라이언트가 되는 것임. 서버라는 것은 장비가 아니라 장비 또는 프로그램에 붙이는 이름임. 
// 노트북도 서버가 될 수 있음. 다만, 많이 붙을 수 없기 때문에 상용서버가 될 수 없는 거에요. 
//// 만약에 방화벽이 있으면 
// 방화벽은 가능한 해제를 하지 않는다. Inbound / outbound 규칙을 둬서 규칙을 변경해줄 뿐. 방화벽은 그대로 유지해준다. OS 운영체제

//// 소켓번호 포트번호 IP 맥어드레스 
// IP는 영구불변은 아니고  dHCP는 유동 아이피라는 것이고 계속 바뀐다. LAN 선 바뀌고...
/// DHCP는 동적으로 되어있기 때문에 
// write head (200)  202 404 500 Error코드나 성공코드
// 200대는 성공한 케이스라서 웹 페이지를 보여준다. 
// 400대(404 등등) 
// 서버를 만든 다음 고객으로부터 요청이 올 때까지 기다리고 있음. 

/////////////////        <사례1>////////////////////////////////////////////////////////////
let http = require("http");
http.createServer((request,response)=>{
    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.end("<h1> Hello my first Webserver</h1>");
}).listen(3000, ()=>{
    console.log("server start http://127.0.0.1:3000");
}) 
// 3000이 포트번호이고, 3000과 맞아 떨어져야 접속이 되는 거고 127.0.으로 시작하는 건 내 컴퓨터임. 
/////////////////////     <사례2>////////////////////////////////////////////////////////////
let http = require("http");
let server = http.createServer((request,response)=>{
    response.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'} );
    response.end("<h1> 두번째 서버입니다.</h1>");
})

server.listen(3000, ()=>{
    console.log("server start   ");
})
///////npm install nodemon ==> nodemon이라는 것도 잇음. 
/////////////////////////// <사례3>////////////////////////////////////////////////////////////
let http = require("http");
http.createServer((request,response)=>{
    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.end("<h1> Hello my first Webserver</h1>");
}).listen(3000, ()=>{
    console.log("server start http://127.0.0.1:3000");
})
/////////////////////////   <사례4>////////////////////////////////////////////////////////////
let http = require("http");
let fs = require("fs");     //파일을 읽기
let url = require("url");   //url 분석을 위한 라이브러리
//http://127.0.0.1:3000/add?x=4&y=5   (파라미터 x=4 y=5가 들어감..... 내 의사와는 아무 상관이 없지)
/// Parser가 제공되어서... 이 url이 request url을 가져와서 문자열을 json 객체로 가져옴. 
/// 무한대라는 것을 컴퓨터에 넣을 수는 없잖아요. 해를 못 찾았을 때...그걸 어떻게 프로그래밍에 넣느냐는 것임.
let server = http.createServer((request,response)=>{
    //console.log(request);
    //console.log(url);             
    //console.log(request.url);       //전송 url
    console.log(request.method);      // 결과 : GET 이 출력됨....!
    let rurl = request.url;
    let pathname = url.parse(rurl, true).pathname; ///// add 가 옴
    let query = url.parse(rurl, true).query;    /// {x:4, y:5} 가 전달됨.  ---> 이게 배열로 받는 거임. 
    // url String을 URL 객체로 바꿔서 오는 것임. 
    // .query : JSON 으로 만들어서 오는 것임. 
    // string 분석 --> Json 객체로 전환
    //파싱한다. 
    console.log(query);               // 
    console.log(pathname);                  // add(server3와 달리 추가된 내용)
    console.log(typeof(query));         // JSON Object라고 나옴....
    if(pathname != "/add"){
        response.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'} );
        let x = parseInt(query.x);
        let y = parseInt(query.y);
        let z = x + y;
        response.end(`${x} + ${y} = ${z}`);
    }else{
        response.writeHead(404, {'Content-Type' : 'text/html;charset=utf-8'});
        response.end("<h1> Doesn't exist anymore. </h1>")
    }
})
server.listen(3000, ()=>{
    console.log("server start http://127.0.0.1:3000");
})  
///////////////////////////    <사례5>//////////...Server4.js참조//////////////////////////////////////////////////
let http = require("http");
let fs = require("fs");     //파일을 읽기
let url = require("url");   //url 분석을 위한 라이브러리
//  http://127.0.0.1:3000/add?x=4&y=5   (파라미터 x=4 y=5가 들어감..... 내 의사와는 아무 상관이 없지)
//  http://127.0.0.1:3000/sub?x=4&y=5
//  http://127.0.0.1:3000/userinfo?userid=test&username=Tom
/// Parser가 제공되어서... 이 url이 request url을 가져와서 문자열을 json 객체로 가져옴. 
/// 무한대라는 것을 컴퓨터에 넣을 수는 없잖아요. 해를 못 찾았을 때...그걸 어떻게 프로그래밍에 넣느냐는 것임.
let server = http.createServer((request,response)=>{
    //console.log(request);
    //console.log(url);             
    //console.log(request.url);       //전송 url
    console.log(request.method);      // 결과 : GET 이 출력됨....!
    let rurl = request.url;
    let pathname = url.parse(rurl, true).pathname; ///// add 가 옴
    let query = url.parse(rurl, true).query;    /// {x:4, y:5} 가 전달됨.  ---> 이게 배열로 받는 거임. 
    // url String을 URL 객체로 바꿔서 오는 것임. 
    // .query : JSON 으로 만들어서 오는 것임. 
    // string 분석 --> Json 객체로 전환
    //파싱한다. 
    console.log(query);               // 
    console.log(pathname);                  // add(server3와 달리 추가된 내용)
    console.log(typeof(query));         // JSON Object라고 나옴....
    if(pathname != "/add"){
        response.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'} );
        let x = parseInt(query.x);
        let y = parseInt(query.y);
        let z = x + y;
        response.end(`${x} + ${y} = ${z}`);
    }else{
        response.writeHead(404, {'Content-Type' : 'text/html;charset=utf-8'});
        response.end("<h1> Doesn't exist anymore. </h1>")
    }
})
server.listen(3000, ()=>{
    console.log("server start http://127.0.0.1:3000");
})  

////favicon.ico는 웹사이트의 파비콘(favicon)을 나타내는 URL 경로입니다. 파비콘은 웹사이트나 웹페이지를 대표하는 작은 아이콘으로, 브라우저의 탭, 북마크, 주소창 등에 나타납니다. 브라우저는 보통 웹사이트에 접속할 때 /favicon.ico 경로로 요청을 보내어 파비콘을 받아오려고 합니다. 만약 해당 경로에 파비콘이 없을 경우에는 브라우저에서 기본적으로 제공하는 파비콘을 사용하게 됩니다.
///////////////////       <사례6>////////////////////Server3.js 참조  ////////////////////  ////////////////////  
let http = require("http");
let fs = require("fs");     //파일을 읽기
let url = require("url");   //url 분석을 위한 라이브러리
//http://127.0.0.1:3000?name=Tom&age=17
/// Parser가 제공되어서... 이 url이 request url을 가져와서 문자열을 json 객체로 가져옴. 
/// 무한대라는 것을 컴퓨터에 넣을 수는 없잖아요. 해를 못 찾았을 때...그걸 어떻게 프로그래밍에 넣느냐는 것임.
let server = http.createServer((request,response)=>{
    //console.log(request);
    //console.log(url);             
    //console.log(request.url);       //전송 url
    console.log(request.method);      // GET 이 출력됨....! 즉, 이 Request방식이 GET method라는 의미임. 
    let rurl = request.url; 
    let query = url.parse(rurl, true).query;       // 이 Query는 배열객체(즉, JSON임) --> 확인은 아래 콘솔창
    // rurl은 String이고, 이 string 분석 --> Json 객체로 전환(query화)
    //파싱한다. 
    console.log(query);             // 이 콘솔창에서 Query가 JSON으로 온다는 것이 입증됨. 
    if(query.name != ""){
        //아무것도 받지 않은 게 아니라면. ...   if(query.name != "")
        response.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'} );
        // response.end(`이름 : ${query.name} 나이 : ${query.age}`);
        // Web에 한번 찍어볼려고 하는 것. --> 이걸 아예 안해놓으면 웹이 안올라옴. 콘솔만 찍힌다. 
        //하다못해 이런거라도 찍어야 웹에 표시가 되지.
        response.end('Third Web server');
    }
})
server.listen(3000, ()=>{
    console.log("server start http://127.0.0.1:3000");
})  


///<Chat Gpt>
// In computer networking, IP (Internet Protocol) is used to communicate between devices on a network. When two devices want to communicate with each other, they need to know each other's IP addresses. An IP address is a unique identifier assigned to each device on a network, and it consists of a series of numbers separated by dots.

// In addition to the IP address, devices also need to know which process or application they want to communicate with on the other device. This is where ports come in. A port is a numbered endpoint on a device that is used to distinguish between different processes or applications that are communicating over the network.

// When a device wants to communicate with another device, it sends a message to the other device's IP address and specifies the port number of the process or application it wants to communicate with. The receiving device then routes the message to the correct process or application based on the port number.

// For example, a web server might listen for incoming requests on port 80, while an email server might listen on port 25. When a client sends a request to the web server, it specifies the web server's IP address and port number 80, and the web server then responds to the request accordingly.

// A socket is a combination of an IP address and a port number, and it represents the endpoint of a two-way communication link between two devices. Sockets are created by network programming libraries and are used by applications to establish and maintain network connections. When an application wants to communicate over the network, it creates a socket and specifies the IP address and port number it wants to use.

// In summary, IP addresses and ports are fundamental concepts in computer networking. They allow devices to communicate with each other over a network by identifying the destination device and the specific process or application they want to communicate with. Sockets are a higher-level abstraction that encapsulates the combination of an IP address and a port number, and they are used by applications to establish network connections.



// Junhyeok Choi
// Okay. Can you explain more about '127.0.~' part?
// The IP address 127.0.0.1 is a special-purpose loopback address that is used to refer to the device that sent the request. It is also known as the loopback address or localhost. When a device sends a request to its own IP address 127.0.0.1, the request is routed to the device's own network interface and is processed locally without going through the network.

// This address is often used for testing and troubleshooting purposes, as it allows a device to communicate with itself without needing to be connected to a network. For example, when developing a web application, a developer can run a local web server on their own device and use the loopback address to access the web server without needing to deploy the application to a remote server.

// The loopback address is also useful for testing network connectivity and troubleshooting network issues. By sending requests to the loopback address, a device can test whether its own network interface is working correctly, without needing to connect to another device on the network.

// In summary, the loopback address 127.0.0.1 is a special-purpose IP address that is used to refer to the device that sent the request. It allows a device to communicate with itself without needing to be connected to a network, and is useful for testing and troubleshooting network connectivity issues.



// Junhyeok Choi
// Okay, but isn't it possible to access my device if other computer run this link?
// No, other computers cannot access your device using the loopback address 127.0.0.1. This address is used for internal communication within a device, and traffic sent to this address is always routed back to the same device without leaving the network interface.

// When a device sends a request to the loopback address, the request does not go out onto the network, and it is not visible to other devices on the same network or on the internet. Therefore, it is not possible for another computer to access your device using the loopback address.

// However, if your device is connected to a network or the internet, it may be vulnerable to attacks from other devices on the network or from the internet. It is important to take appropriate security measures, such as configuring firewalls and using strong passwords, to protect your device and your data from unauthorized access.


// Chat GPT 의 답변

// Ajax (Asynchronous JavaScript and XML) is a technique used in web development to create interactive and dynamic user interfaces. Ajax allows web pages to request and receive data from a server without requiring the page to reload, which makes web applications feel more responsive and faster.

// Ajax is based on a combination of web technologies including JavaScript, XML, and HTTP. It allows web applications to send and receive data in the background, without interrupting the user's interaction with the web page. This is achieved by using the XMLHttpRequest object in JavaScript to make asynchronous requests to the server.

// The server can then send back data in various formats, such as XML, JSON, or HTML, which can be used to update the page dynamically without requiring a full page reload. This allows web developers to create web applications that feel more like desktop applications, with fast and responsive user interfaces.

// Ajax has become a standard technique in web development, and is used in many popular web applications such as Gmail, Google Maps, and Facebook. It has also led to the development of many popular JavaScript libraries and frameworks, such as jQuery and AngularJS, that make it easier to use Ajax and other web technologies in web development.



