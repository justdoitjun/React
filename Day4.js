// DAY 4 - March / 30 / 2023
//******************************************1******This ******************************************* */
//This.
////////// <정리>
// - this는 자기 자신을 지칭하는 파라미터. 자기 자신이라 함은 자기가 현재 속한 객체(주로 클래스나 html에선 div나 span같은 거겠지)
////////// <사례1>
//const person = {
//     name: 'John',
//     greet() {
//       console.log(`Hello, my name is ${this.name}`);
//     }
//   };  
//   person.greet(); // logs "Hello, my name is John"
// - this 의 기본 default 값은 웹 상의 Window이다. 
// 아래의 상황에서 this를 쓰면 지칭할 클래스가 없기 때문에 Window로 나오게 된다. 
// <사례2>
// function sayHello() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
//   sayHello(); // logs "Hello, my name is undefined" (in a web browser)
// 
//*******************************************2*****Key-Event******************************************* */
//Key-Event. 
/////////  <정리>
// (1) (event.key)가 파라미터로 들어올 수 있다. 
// getElementsbyId로 들어오면 출력값은 배열임. getElementsByTagName도 마찬가지임. 그래서 body[0]으로 써야함. 원소가 하나뿐인 배열.
// (event.target.Id)라는 파라미터도 사용할 수 있음. 하지만 이 때는 주의해야할 것이 보통 콘솔창에 id 기록할려고 사용함. 

// (2) 이러한 전반적인 모든 과정을 통틀어서 DOM이라고 함. 
// 기억해야할 것은 getElementById를 통해 가져온 것은 Html에 있는 일부 객체를 가져온 것임.
// (3) 따라서, 기억해야할 것은 그 객체의 Input Value값은 분명히 다를 수 있음. 
// x.value를 쓰게 되는 이유임. 
// (4) event라는 내장객체에는 여러가지 프로퍼티(properties)가 있고, 주로 쓰이는 것은 target 
//      target의 경우에는 이벤트가 실행된 곳의 id라든지 class를 로그값 찍으려는 용도에서 쓰인다. 
// (5)자주 쓰이는 내용 중에서 Html과 JavaScript에서 좀 다를 수 있는데, html에서는 _ 언더바가 쓰이지만, javascript에서는 쓰이지가 않음. 

///////// <사례1>///////////// 키를 눌렀을 때
{/* <body>
    name : <input type = "text" id="fname" onkeydown="goKeyDown()"     // 
    onkeypress="goKeyPress()"
    onkeyup ="goKeyUp()"
    > <br/>
</body>
</html>
<script>
    function goKeyDown(){
        console.log("Key Down");
    }
    function goKeyPress(){
        console.log(event.key); // 우리가 누른 키에 대한 정보가 있다.  그냥 그대로 나옴
        console.log(event.keyCode); // 우리가 누른 키에 대한 정보가 있다. 그러나 그냥 그대로가 아니고 아스키코드 숫자로 나옴.
        console.log("Key Press");
    }
    function goKeyUp(){
        console.log("Key Up");
        x = document.getElementById("fname"); // 객체 가져오기 -> 위의 input 그대로 가져오고  (이 개념이 바로 DOM임)
        x.value = x.value.toUpperCase(); // 대문자로 치환 후 객체에 넣기. 
    }
In the given code, x is a reference to the text input field,
which is a DOM (Document Object Model) element in the web page.
The value property of the text input field represents the current value of the field as a string. 
When you want to get or set the value of the text input field, you need to access its value property.
So, x.value is used instead of just x because we want to get or set the value of the text input field,
 not the entire DOM element itself. 
 Accessing the value property of the text input field allows us to manipulate the value of the text input field as a string.
</script> */}

////////////////<사례2>////////////배경색을 바꿔주는////////
{/* <body>
    <button type = "button" id="btn1" style="background-color : moccasin;" onclick = "changeBackground(this)"> 모카신 </button>
    <button type = "button" id="btn2" style="background-color : greenyellow;" onclick = "changeBackground(this)"> 라임 </button>
    <button type = "button" id="btn3" style="background-color : violet;" onclick = "changeBackground(this)"> 바이올렛 </button>
</body>
</html>
<script>
    function changeBackground(me){
        console.log(event.target.id); // 로그 값에 아이디가 들어온다. 이벤트라는 내장객체가 있고 그 안에서 id를 남길 수 있음. 
       body =  document.getElementsByTagName("body");
       body[0].style.backgroundColor = me.style.backgroundColor; //style 뒤에는 background-color이지만...변수는 하이픈 인식을 못하니...
       //backgroundColor로 스네이크 표기를 한다. 
    }
Here are some commonly used properties of the event object:

type: A string that represents the type of the event, such as "click", "keyup", "submit", etc.
target: A reference to the DOM element that triggered the event.
keyCode/key: The code or name of the key that was pressed during a keyboard event.
clientX/clientY: The x and y coordinates of the mouse pointer during a mouse event.
preventDefault(): A method that can be called to prevent the default behavior of the event, such as following a link or submitting a form.
</script> */}

// 정규식은 document.getElementbyId 이런 거가 중요하지 정규식은 별로 안중요해
// 리눅스 등 여러 곳에서 쓰이는 정규식인데 재직자 수업 중에는 정규식을 하지는 않습니다. 
// 기본적인 것을 
//html은 태그 가능하면 닫는 태그를 해줘야한다. 신기하네.(리액트)
//<body>
// <input type="text" onkeypress="inNumber()"/> <br/>
// <input type="text" oninput = "goInput()"/><br/>
// </body>


//*******************************************3*****REPLACE******************************************* */
// REPLACE 자주 쓰이는 REPLACE
//   ====> 언제 쓰일까요? 들어오는 input값을 제어할 때. 내가 원하지 않은 것은 들어오지 않게 하고 싶을 때. 

{/* <body>
<input type="text" onkeypress="inNumber()"/> <br/>
<input type="text" oninput = "goInput(this)"/><br/>
</body>
</html>
<script>
function inNumber(){
    //event - 발생했던 모든 사건들(이벤트)에 대한 정보를 가지고 있는 내장객체
    // '0' -48, '9' - '57', 'A'- 65, 'a' - 97, 
    if(event.keyCode < 48 || event.keyCode >57){
        event.returnValue =false; //해당문자가 input태그에 나타는 것을 차단함. 
    }
}
function goInput(me){
    // replace(/패턴/)  패턴은 / - / 사이에 넣는다. 
    // 0 ~ 9까지 [0-9]로 표현한다. 
    //0부터 9를 제외한 문자를 없앨 것이라고 한다면, 
    //제외하는이라는 내용이 나와야할텐데....
    //[^0-9] 이렇게 ^를 앞에 붙이면 0~9를 제외한이라는 의미가 된다. 
    //근데 또 웃긴 게
    //^[0-9] 이렇게 쓰면 0~9로 시작하는 문자를 
    // /g 라는 옵션이 전부다 라는 의미임. (global) global의 의미는 전부 다 찾아서 선택하라는 의미임. 
    me.value = me.value.replace(/[^0-9]/g, "");
    // /g는 위와 같이 0~9를 제외한 것들을 global(all) 전부 다 찾아서 ""(공백) 제거해버려라는 의미임. 
}
</script> */}

//******************************4********EVENT HANDLER(내가 원하는 것만 들어왔으면 좋겠어)************************************* */
// Event Handler
//   ====> 언제 쓰일까요? 들어오는 input값을 제어할 때. 내가 원하지 않은 것은 들어오지 않게 하고 싶을 때. 
// 계속 유지되면서 영향을 미치는 경우에는 함수를 선언해야하지만
// 잠깐 쓰이는 것은 람다식을 이용해서 메모리를 활용하고자 하는 것이고 이 때 eventListner라는 메소드를 사용함. 
// 스프링에선 싱글톤이라는 기능으로 객체는 한번만 쓰게 해줄 수도 있다. 
// 즉 이 지랄하는 이유가 메모리를 아끼려고 하는 것임.  자바는 이것이 가비지 컬렉터가 해주지만, 가비지 컬레거가 실시간이 아니라서...// 웹사이트는 PC만 있는 것이 아니기 때문에
{/* <body>
    <h1> Event Handler - NEW way </h1>
    <button type="button" id="btnPress"> Push this button </button>
</body>
</html>
<script>
    window.onload = () => {
        button = document.getElementById("btnPress");
        button.addEventListener("click", ()=>{
            alert("first function");
        })
    }
</script> */}


//************************************5***********HTML******************************************* */
// HTML에서 무조건 공부해야하는 것은 총 3가지임. 
// Table 태그 / 
// Table 태그
// CSS에서는 픽셀은 가능한 쓰지 않는다. 왜냐면 해상도에 따라 다르기 때문에...
{/* <body>
    <button type="button" id="btnAdd">추가</button>&nbsp; &nbsp;
    <button type="button" id="btnDel">삭제</button><br/>
    <table style="width:80%;margin:auto; border:blue 1px solid">
        <!-- 열별로 스타일을 지정하기 위한 목적으로는 colgroup을 사용합니다.  -->
        <colgroup>
            <col style="width:10%">
            <col style="width:80%">
            <col style="width:10%ㄴ">
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
    let data = [
        { name: "새우깡", count: 10, price: 2000 },
        { name: "맛동산", count: 20, price: 2000 },
        { name: "에이스", count: 30, price: 2000 },
        { name: "자갈치", count: 40, price: 2000 }
    ]

    window.onload = () => {
        load();
    }
    function goAdd() {
        const tbody = document.getElementById("body");

        for (let i = 0; i < data.length; i++) {
            const row = document.createElement("tr");
            const nameCell = document.createElement("td");
            const countCell = document.createElement("td");
            const priceCell = document.createElement("td");

            nameCell.innerText = data[i].name;
            countCell.innerText = data[i].count + "개";
            priceCell.innerText = data[i].price + "원";

            row.appendChild(nameCell);
            row.appendChild(countCell);
            row.appendChild(priceCell);

            tbody.appendChild(row);
        }
    }
    function goDel(){
        tbody = document.getElementById("tbody");
        if(tbody.rows.length>1){
            tbody.deleteRow(tbodyrows.length-1);// indx
        }else{
            alert("삭제불가");
        }

    }
    window.onload=()=>{
        document.getElementById("btnAdd").addEventListener("click",goAdd);
        document.getElementById("btnDel").addEventListener("click",goDel);
    }


</script> */}


// <body>
//     <input type="text" id="product"><br/>
//     <button type="button" id="btnAdd"> 추가 </button>
//     <button type="button" id="btnDel"> 삭제 </button><br/>
//     <ul id="coffee">
//         <li>Americano</li>
//     </ul>
// </body>
// </html>
// <script>
//     window.onload = ()=>{
//         document.getElementById("btnAdd").addEventListener("click", ()=>{
//             //ul tag에 관한 객체를 먼저 가져온다. 
//             let coffee = document.getElementById("coffee");
//             //li tag 객체를 생성한다. 
//             let child = document.createElement("li");
//             child.innerHTML = document.getElementById("product").value;
//             //ul Tag에 덧붙인다. 
//             coffee.appendChild(child);
//             document.getElementById("product").value ="";
//         });
//         document.getElementById("btnDel").addEvenetListener("click", ()=>{
//             let coffee = document.getElementById("coffee");
//             if( coffee.childeren.length >1){
//                 coffee.removeChild(coffee.lastChild);
//             }
//         });
//     }

//************************************************HTML******************************************* */
// Table 태그

//브라우저 간의 호환성을 위해서 제이쿼리라는 것이 나옴. (브라우저별로 다른 것..)
// 다 죽고 남은 것이 제이쿼리 --> 리액트 --> 
// ajax 애플리케이션을 쉽게 개발. 
// 자바 스크립트 경로. cdn 방식. 사용자에게 손쉽게 컨텐츠 제공. 
//************************************************제이쿼리******************************************* */
//*************<결론>
//0. HTML은   Form, Span, ul, table 태그 이 4가지가 가장 중요합니다. 
//1. 제이쿼리는  $(document).ready(함수)를 많이 사용한다. 제이쿼리는 getElementById와 같은 것을 대체하기 위해 만들어진 라이브러리이다. 

//2. 제이쿼리에서 가장 빈출되는 문법 결론은 2가지 갈래다. 
//3. 첫째, 아래 selector는 외워야한다. 
//3-1. $("#아이디명") 
//3-2. $("태그명")
//3-3. $(".클래스명")

//4. 둘째, 읽고 쓰는 것은 2가지를 꼭 외워야한다. 
//4-1. val      (*주의) input 태그가 없는 애들은 val() 을 사용할 수 없다. 
//4-2. html

//5. 셋째, 아주 많이 쓰이는 문법으로는...
//5-1. click
//    $(document).ready(()=>{
//        $("#아이디명").click(()=>{
//            함수 내용.
//        })
//    })
//6. 그 외의 문법은 자바스크립트와 동일하다. 
//6-1. 하지만, this를 쓰다가 오류가 날 경우가 있는데....여러개의 버튼이 하나의 함수를 공유할 때는 매개변수를 붙이면
//     이벤트가 발생한 객체를 전달한다. ===> 사례3을 확인해보자. 

//5. 제이쿼리는 가능한 id를 쓴다. name은 가능한 쓰지 마세요. 
//6.(기타사항) 비동기식과 ajax에 특화되어있는 것이 제이쿼리이다.  
// 인풋 태그가 없는 애들은 val을 쓸 수가 없다. 
// text는 tag를 제거하고 들어옵니다. text는 태그를 빼고 오고, html은 태그로 보이게 하는...근데 이해 안되면 알지 말고, text보단 html 쓰세요.
// 실제로는 html과 val을 가장 많이 사용한다. 
//6-2.  READ ONLY라는 태그도 많이 사용한다. 보통 input 태그 안에 사용한다.   
//6-3. CDN 방식을 사용하면 외부 망에서 자동으로 import되게 할 수 있다. 
//  /* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>


//   <사례1>
// 제이쿼리를 CDN 방식으로 외부 망에서 자동으로 import되게 하는 방법. 
{/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
</head>
<body>
    <h1> Hello, World! </h1>
    <p id="test1">  So be it! AND DON'T GIVE A DAMN. </p>
</body>
<script>
    <!-- window.onload 대신, $를 쓰는 것 자체가 제이쿼리라는 의미다.  -->
    $(document).ready(()=>{
        $("h1").click(()=>{
            alert("Pushed");
            $("#test1").html("<h1>AS IF YOU WERE HONEY BADGER.</h1>");
        })
    })
</script>
</html> */}
// <사례2>
{/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
</head>
<body>
    x : <input type="text" id="x"/> <br/>
    y : <input type="text" id="y"/> <br/>
    result : <input type="text" id="result" readonly/>
    <button type="button" id="btnAdd"> + </button>
    <button type="button" id="btnSub"> - </button>
    <button type="button" id="btnMul"> X </button>
    <button type="button" id="btnDiv"> / </button>
    
</body>
<script>
    $(document).ready(()=>{
        $("#btnAdd").click(()=>{
            x = parseInt($("#x").val());
            y = parseInt($("#y").val());
            result = x + y;
            $("#result").val(result);
        })
    })
</script>
</html> */}

//<사례3>
// 여러개의 버튼이 하나의 함수를 공유할 때 매개변수를 붙이면 이벤트가 발생한 객체를 전달한다. 
// $("button").click((btn)=>{
//     console.log(btn);
//     //자바스크립트 코드를 섞었을 때는  //  $("body").css("background-color", btn.target.style.backgroundColor); 
//     //제이쿼리로만 코드를 만들 때는   //   $("body").css("background-color"), $("#" + btn.target.id).css("background-color");
// });


