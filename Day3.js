
//<><><><><><><><>DAY 3 ***************************************************

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//이벤트 핸들러

//<html>
//Input type = submit .. 무조건 서버로 어보를 전송한다. 
//Input type = button .. 이벤트만 발생시킨다. 
// <button> </button> 도 생긴 건 button인데, 실제로는 submi이다. 퍼블리셔들이 이걸 안써준다.....그러면 이거는 무조건 서버를 전송시켜버린다. 막을 수가 없음. 
// <button type = "button" onclick="goDisplay()"> 함수선언식 사례 </button>      ---   Old way
// 그래서 type = button은 이벤트 발생이지만, button태그는 서버전송의 기능을 가진다. 주의하자. 
// 그래픽 방식은 전부 다 이벤트 방식이다. 이벤트들은 모두 정해져있다. On click , mouseover 등등 모든 방법에 대해서 정의가 되어있다. 
// OS가 해당 이벤트가 일어났음을 인지하고(입력받고) 이를 크롬에 출력해주면, 크롬에서 코드를 따라 짜여있는 것을 따라가는 식임. 


//그런데 위의 방식은 메모리를 계속 잡고 있다.(함수가 있으니깐)
// 해결책 : <button type = "button" id="btnPress"> Press button </button> 
// 이를 해결하기 위해서 표현식을 사용했는데, 2가지 방식으로 오래된 방식과 최신 방식이 있다. 

// <button type = "button" onclick="goDisplay()"> 함수표현식 사례 </button>      ---   Old way
// function goDisplay(){
//     alert ("button 눌림");
// }
//혹은...이러한 오래된 방식도 가능하다. (함수표현식)
// 초창기에는 script를 헤더에 놓았기 때문에 버튼 객체 뒤에 함수를 직접 붙이는 경우가 많았음 
    // window.onload = function(){
        // document.getElementById("btnPress").addEventListener('click',  //표현식
        //     function(){
        //     alert("second button");
        // })
    // } // end of window.onload
// // 왜 window oload를 쓰냐??
//  onload 문서가 다 불러와지면 함수가 실행됨. 그래야 btnPress가 만들어지기 전에 함수가 실행되는 것을 막음. 

// 혹은...이러한 새로운 방식도 가능하다. (화살표함수)
// 위와 똑같다. 그냥 함수 형태만 바뀌었을 뿐. 
    // window.onload = function(){
        // document.getElementById("btnPress2").addEventListener('click',  //표현식
        //     () => {
        //     alert("third button");
        //      });
    // } // end of window.onload





//&&&&&&&&&&&&&&&&&&&&&&&&&&콜백함수와 람다식(화살표함수) + 정렬까지!!!!!  &&&&&&&&&&&&
// 

// 콜백함수
// 함수의 주소를 매개변수로 전달한다. 
// 동기식은 A가 실행되어야 B가 실행되는 식
// 비동기식은  A와 B와 C가 각자 따로 움직이는..멀티태스킹

// 콜백함수는 지정된 함수를 받는 것임. 
// 호출자가 시스템이니깐 반환값이 있는지 없는지는 우리가 결정하는 것이 아니고 시스템이 결정함. 
// 콜백이 들어가는 건 내 의사와 상관없이 만든 사람의 의사대로. 

// 람다식(화살표함수)
// 람다식은 C#에서 나왔으나(아주 오래 전에), 파이썬 자바 등 여러 곳에서 지원읋 ㅏㄴ다. 
// 표현이 간결하고 사용이 편하다. 
// return을 생략해도 된다. let add = (a, b) => a + b; 
// let message = () => {alert("hey!")};
// *** 심지어 매개변수가 하나라면 괄호도 생략이 가능하다. 

// 화살표함수

let add = (x, y) => x+y; // 화살표함수, return{} 생략가능
console.log(add(4,5));

let sigma = limit => {
    sum =1; 
    for(let i=1 ; i<=limit ; i++){
        sum += i;
    }
    return sum;
};

// 원본을 안건드리고 처리를 하고 싶다면 이런식으로 복사해서 사용하는 방법이 있을 수 있습니다. 

let rect = [
    {w : 5, h:4},
    {w : 15, h:14},
    {w : 25, h:24},
    {w : 35, h:34},
    {w : 45, h:44}
];

// let r = rect.map((r)=>{
//     r.len = (r.w + r.h)*2 ;
//     r.surface = r.w*r.h;
//     return r;
// });
// console.log(r);

// 2:44 PM
// rect에 정의된 JSON을 let r로 다시 가져오면서 수정을 하는데
// 2:45 PM
// 그럼 rect에 정의돼있던 JSON값이 바뀌어버리는것

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&배열을 다루는 방법 //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

let arr= [1,2,3,4,7,9,12,24,35,27];
//분해해서 각자 짝수와 홀수를 다른배열에 저장하고 싶다. 
let odd = []; // 홀수 배열
let even = []; // 짝수 배열
for(let i = 0; i<arr.length ;i++){
    if(arr[i]%2 == 0){
        even.push(arr[i]);  //짝수가 있을 때는 짝수배열에 push(LIFO)
    }else if(arr[i]%2 == 1 ){
        odd.push(arr[i]);   //홀수가 있을 때는 짝수배열에 push(LIFO)
    }else {
        continue;   //실수나 다른 수가 있을 때는 넘기고
    }
}

// 배열에 filter 함수 - 조건을 주면 조건에 맞는 데이터만 배열로 만들어 반환한다. 
//      filter - 매개변수가 하나 반환값이 true 또는 false
//      결과값이 true인 것만 묶어준다. 

//사례 : 값을 받아서 짝수면 true 홀수면 false를 반환하는 함수.
function isEven(e){
    if(e%2 == 0){
        return true;
    }
    else {
        return false;
    }
}
// 혹은 javascript 내 기본값이 false이니깐
function isEven1(e){
    return e%2 ==0;
}
// 아무튼 위를 이야기하고자하는 것이 아니고, 바로 아래처럼 filter를 쓸 수도 있습니다. 
even = arr.filter(isEven);
console.log(even);

odd = arr.filter(e => e%2 == 1);
console.log(odd);

//10보다 큰 것만
let reuslt = arr.filter(x => x > 10);
console.log(result);

//단어배열
words = ["school", "survey", "asset", "assembly", "desk", "linus",
 "apple", "amazon", "meta", "oracle", "intel"];
// 단어 길이 5개 이상인 경우만 추려내라. 
let wordResult = words.filter( w => w.length >=5 );
console.log(wordResult);

// 단어도 5글자 이상을 찾아서 대문자로 만들어서 출력하세요. 
let wordResult2 = 
        words.filter( w => w.length >= 5)
        .map( w=> w.toUpperCase())
        .forEach(w => console.log(w));



//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& MAP //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// Map의 장점은 원본을 그대로 두고, 복사본을 따로 뿌리는 것임. 

// Array forEach Map sort 4인방
// 람다를 만들어줌. 

arr2 = arr.map(x => x + 10); // 원본은 그대로임. 
console.log(arr2);

// 짝수에 대해서만 10씩 더하고 싶다면?
arr3 = arr.filter(x=> x%2 ==0)    // 짝수만 따로 뽑아서 Array 객체로 만들고
        .map(x => x+10);          // Array를 
console.log(arr3);

// 배열객체를 반환하면 중간연산자 forEach는 더이상 반환을 하지 않기 때문에 

// 홀수에 10을 더해서 출력
arr4 = arr.filter(x => x%2==1)
        .map(x => x+ 10)
        .forEach(x => console.log(x)); 

//하둡이라고 하는데 하둡은 분산처리인데, 안드로이드도 자바에서 코틀린. 
// 코틀린은 자바보다 쉬움. 언어불문하고...


let nums = [10,20,30,40,50,60,70,80,90,100];
// 배열의 요소, 인덱스 
// 자바스크립트가 제공하는 람다들이 다 이 구조임.  (1차원)
// 따라서, 여기의 x는 요소이고 y는 인덱스임
nums.map( (x, i) => { c
    console.log(i, x); 
    return x;
} );

// 2차원 Map함수의 경우에는...
nums = [[10,20,30], [40,50,60], [70,80,90], [100,110,120]];
nums.map((x, i)=>{
    console.log(i,x);
    return x;
});

nums.map( (x, i)=> {
    x.map((y,j)=>{
        console.log(i, j, y);
        return y;       
    })
    return x;           //return을 하는 이유는 뭔가? 에러가 안난다. 무엇이든 map은 return해야한다. 
});
// Map은 무조건 return을 하도록 약속이 되어있는데, 

///////                 <<<정리>>>>
// 배열을 출력해야하면 결국은 forEach(x => console.log(x))          //forEach
// 주어진 배열을 받아서 조작해서 다시 배열로 빼야한다면 .map(x => x+10)   // map
// 주어진 배열을 받아서 일부 원소들을 골라내야한다면 .filter(x => x%2==1) // filter

//리눅스 도커 윈도우도 공부해야한다



//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& 종합문제 //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// Map의 장점은 원본을 그대로 두고, 복사본을 따로 뿌리는 것임. 


// 자바의 람다식 = 자바스크립트 화살표함수
let person = [
    {name : "김1", age : 1, "phone" : 1},
    {name : "윤2", age : 2, "phone" : 2},
    {name : "김3", age : 3, "phone" : 3},
    {name : "윤4", age : 4, "phone" : 4},
    {name : "박5", age : 5, "phone" : 5},
    {name : "박6", age : 6, "phone" : 6},
    {name : "최7", age : 7, "phone" : 7},
    {name : "최8", age : 8, "phone" : 8},
    {name : "장9", age : 9, "phone" : 9},
    {name : "장10", age : 10, "phone" : 10}
]
person.push({name : "11", age : 11, "phone" : 11});

person.forEach((p)=> {
    console.log(`${p.name} ${p.age} ${p.phone}`);
});

//문제1. 성이 윤씨인 사람을 찾아내고 싶다. 
result = person.filter(p => {(p.name).substring(0,1)=="윤"}).forEach(x => console.log(x));
//혹은
result = person.filter(p=> p.name.startsWith("윤"));
console.log(result);
//묹2. 나이가 7살 이상인 경우를 찾아내고 싶다. 
let under7 = person.filter(p => p.age <=7 ).forEach(p => console.log(p));
console.log(under7);
let over7 = person.filter(p => p.age >7).forEach(p => console.log(p));
console.log(over7);
//문3. 정렬
let sorted = person.sort((p1, p2) => p1.age - p2.age);

// p1이 p2 보다 크면, 양수값이 나옵니다. 그렇다면...양수는 맨 끝으로 보냅니다. 
// p1이 p2 보다 작으면, 음수값이 나옵니다. 그렇다면...음수는 가장 앞으로 보냅니다.

let sortedK = person.sort((p1, p2) => p2.age - p1.age);

// p1이 


//정렬 알고리즘
//select 정렬 알고리즘
// case by case대로 쭉 인덱스 0을 찾았으면 고정하고 쭉 가고... 
// 끝까지 다 해본다. 그 다음에는 인덱스 1을 고정하고 쭉 가고...

// 두 객체를 비교햇을 때 앞의 것이 작으면 음수가 리턴될 것이고
// 같으면 0
// 뒤의 것이 크면 양수가 나올 것이다. 
// 즉 위에서는 판단 기준이 age라는 것임. 
// 음수 0 양수 순으로 정렬할 것이다. 
// 따라서 위의 경우에는 작은 것부터 쭉 정렬이 되는 것이다. 

// 문제는 이름을 어떻게 정렬할까? ---> 자바는 compareto 함수가 있지만... 자바스크립트는 문자에 대한 따로 함수는 없음. 
// 자바스크립트는 사전값 상 큰 것과 작은 것을 출력할 수 있다. 

let sorted2 = person.sort((p1,p2)=> { //오름차순
    if(p1.name > p2.name){ // p1이 클 때는 양수를 주고 
        return 1;          
    }else if(p1.name < p2.name){ // p1이 작을 때는 음수를 주고
        return -1;          
    }else { // p1과 p2가 같을 때는 0을 주고
        return 0;
    }
});

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& 질문1 //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// Map의 장점은 원본을 그대로 두고, 복사본을 따로 뿌리는 것임. 

let a = function(){         // 출력값이 void, int, long 을 정할 수가 없기 때문에
    console.log("hello");   // 해당 함수가  void이기 때문에...
}  
let result = a(); // undefined로 출력함... 해당 값은 void로 받음.. 모르겠으면 undefined로 내보냄.
//자바에서는 이해가 안되는 것이지만 이렇게 모든 인터프리터 언어는 얼렁뚱땅 컴파일러가 대충 출력값 내버린다. 

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& MAP함수 //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// Map의 장점은 원본을 그대로 두고, 복사본을 따로 뿌리는 것임. 
/// 프로그래밍을 실행시키면, 
// int a ; // 값변수 
// Person pl = new P{XPathExpression(}


// OS가 메모리를 쪼개서 스택과 힙으로 나눈다. 스택은 시스템이 담당합니다. 스택(값변수가 들어갑니다) 

// 객체를 선언하면 힙에 들어가고 주소값(이름태그)를 스택에 넣습니다. 

// 객체와 배열음 힙에 만들어지고, 힙공간에 주소만 스택에 들어감. 
// new로 만들어진다는 거 자체가 힙에 만들어진다는 거고 new로 만들어진다는 거 자체가 이름태그(주소값)을 스택에 저장한다는 것임. 

// 자바가 왜 그럼 잡아먹었냐? 
// 원래 힙공간에 대한 모든 권한은 프로그래머에게 있기 때문에 본인이 스스로 정리해야합니다. 대신 스택은 시스템이 알아서 정리합니다. 
// C 개발자가 힙공간을 힙공간을 썻으면 쓴대로 정리를 하고 반환을 해야하는데, 그렇지 않은 경우가 있어. 
// 힙공간을 자주 정리해주지 않으면 중간에 다 차서 죽어버리는 경우가 있습니다. 이를 바로 메모리 누수라고 합니다. 

// 그래서 자바 개발자는 청소도 자바가 스스로 합니다. 가비지들을 알아서 정리합니다. (Gabbage collector)
// 이러한 과정은 당연히 자바
// --> 바로 자바는 느리지만, 자바는 그래서 시스템이 죽지 않습니다. 안정적이죠. 그래서 자바가 느리고 무겁지만 
// 아직 자바가 못들어가는 곳은 자바가 못 올라갈만한 경우. 컴퓨터가 안좋은 경우. OS(리눅스)에서 C언어를 올려버리면 엄청 빠르지. 
// 거의 수동이냐 자동이냐 수준임. 
//    a = 7; //스택



// 자바스크립트는 전부다 참조변수입니다. 타입또 없고, 타입이 필요한 이유가 뭐냐면 스택에 얼마나 공간을 차지할지를 정해야하기 때문임. 
//근데 자바스크립트는 전부 다 참조변수이기 때문에 값변수가 아니라는 것임. 전부 다 힙에 들어감. 

// 그런데 자바는 값변수를 스택에 넣어야하고
// 값변수도 살다보면 참조변수로 바꿔줘야하는 경우가 생김. 
// Int를 참조로 바꿔줘야하는 경우가 있음. 왜냐면, String을 Integer 클래스에 넣어서 Integer클래스의 참조변수로 바꾸고 그 Integer클래스에서 값변수로 출력해야하는 것이지. 

// 객체와 배열(앞에 new로 생성자를 써야하는 경우)는 힙이라는 별도의 공간에 만들어야한다. 어느 시점에 돌아가는지를 모르겠지만, 가비지콜렉터는 자기가 필요하다고 생각이 될 때
// 정리하는 경우임. 그래서 기계가 갑자기 느려질 수 있지만, 

// 값타입 변수 - 값을 저장한다. 
// 참조타입 변수 - 값이 있는 곳의 주소(참조)를 저장한다. 
// 프로그램을 가동하면 할당되는 메모리가 3부분이다. 
// static, stack, heap 공간임(논리적 단위이지 실제 물리적 단위는 당연히 아니다.)
// static - stactic 메서드나 함수, 상수 등이 저장된다. 시스템이 관리한다. 
// stack - 함수 호출시 호출된 함수가 차지하는 메모리, 들어간 순서와 반대로 나오는 구조이다. 
//       - 일반 변수들은 이 공간에 확보된다. 
//       - int a ; // 값변수 스택 공간에 자리잡고 데이터도 스택공간이다. 
//       - a = 9; 9라는 상수값이 a 메모리에 저장된다. 
//       - stack에 대한 모든 관리는 시스템이 담당한다. 
// heap  - 힙(free store이라고도 한다. )은 객체나 배열만이 저장된다. 
//       - 이 공간에 메모리를 확보하고 데이터를 저장하면 이 공간에 대한 주소를 반환한다. 

// Person p1; // 변수 자체는 스택에 저장된다. 이 변수에는 객체의 주소가 저장되기 때문에 참조변수라고 부른다. 
//            // 아직 데이터를 저장할 공간은 없다. 
// p1 = new Person(); 힙공간에 Person 객체를 생성하고 생성한 객체의 첫번째 주소값을 p1에 할당한다. 
//            // 만일 메모리가 부족해서 객체 생성을 못할 경우에는 null로 채워진다. 
//              앞의 객체는 참조하는 변수가 없으면 garbage collector(gc)가 메모리가 부족할 때 수거를 해간다. 

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// 

// 래퍼클래스(Wrapper Class) : 값 타입을 객체로 전환해야할 때가 있는데, int --> Integer . 값타입을 객체로 전환시키는 클래스임. 
// ex. Integer, Long, 등등
// List<Integer> list = new ArrayList <Integer> (); 
// list 에 들어가는 요소들도 다 int값이 아니고, Integer라는 객체임. 

// 이를 전문 용어로 박싱이라고 합니다. 값 타입을 Integer로 래핑해주는 경우 값타입을 참조변수타입으로 바꿔줘야할 때를 박싱이라고 하고
// 다시 참조타입변수를 값 타입으로 바꿔줄 때를 언박싱이라고 합니다. 
// 이것이 자바다. 뒤의 것은 안봐도 앞에 1권만 보세요.. 설명을 제 취향대로 해놓았다. 1권만 보세요. 
// 램이 부족해도 SSD의 가상메모리를 불러올 수가 있습니다. 즉, 램이 부족해도 SSD의 일부를 가져온다. 

//static이라고 붙어있는 것들은 다 static으로 들어감. static도 잘 쓰면 프로그램도 대우 간단해지고 명확해짐. 
// 프로그램의 언어는 각자 적절한 단어가 있다. 이 개념이 여기에 들어가는 게 맞는 건지를 계속 고민해야한다. 
// 괜히 뭔가를 배웠다고 그게 필요가 없는 경우에는 쓰면 안된다. 배웠다고 뭔가를 쓰면 안된다. 
// 자바 프로그래머들이 편하게 만들려고 코드를 만든 것임. 

// 람다(꽃) => 스파크, 안드로이드(코틀린)


let r = rect.map((r)=> {
    r.len = (r.w + r.h) *2;
    r.surface = r.w*r.h;
    return r;
});

//아직 자바는 배열을 한번에 내보내지 못함. console.log는 한번에 내보낼 수 있음. 



//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&과제 함께 풀이&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// 


// 과제는 JavaScript과제로 올립니다. HTML로 검증완료...
let employeeData = [
    {name : "홍길동", hour : 40, hourlyWage : 100000},
    {name : "임꺽정", hour : 15, hourlyWage : 200000},
    {name : "장길산", hour : 20, hourlyWage : 200000},
    {name : "강감찬", hour : 30, hourlyWage : 150000},
    {name : "이순신", hour : 40, hourlyWage : 300000},
];

let cnt = 0;
let sum = 0;

employeeData.forEach( (e)=> {
    cnt++;
    sum += (e.hourlyWage) * (e.hour);
    console.log(`이름 : ${e.name}, 근무시간 : ${e.hour}, 시간당급여액 : ${e.hourlyWage}, 
    총액 : ${e.totalSalary = e.hourlyWage * e.hour}`);
});

let average = sum/cnt;
console.log(`위 ${cnt}분의 평균은 다음과 같습니다. : ${average}`);//검증오나료 : 수기계산시 다음과 똑같음. 

//강사님 풀이방법은...

let s = [
    {name : "hong", kor : 90, eng : 80, mat : 70},
    {name : "kang", kor : 90, eng : 80, mat : 70},
    {name : "jang", kor : 90, eng : 80, mat : 70},
    {name : "lim", kor : 90, eng : 80, mat : 70},
    {name : "choi", kor : 90, eng : 80, mat : 70}
];

s.map((item) =>{
    item.total = item.kor = item.mat + item.eng;
    item.avg = item.total / 3;
    return item;
}).forEach((item)=>{
    console.log(`${item.name} ${item.total} ${item.avg}`);
})

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&<DOM>&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// 
/// w3schools.com 에 CSS와 JavaScript를 많이 씁니다. 

// 색을 다룰 때 자주 쓰이는 RGB는 8비트 왜냐면
// R 1바이트 G 1바이트 B 1바이트  여기에 추가해서 투명도를 0과 1로 나타내는 경우도 있다. 
// 2의 3승 ==> 8비트인데...a

// 111111
// 000000 인데...a
// FF1111 이면, 빨강을 다 채우라는 것이기 때문에 빨강 원색이다. 




//모든 태그는 id 속성이나 class속성을 가질 수 있지만, 하나의 페이지 html페이지에 하나의 id만 가져와야한다. 
// 자바스크립트할 때 못 쓸 뿐이지 출력은 된다. (html 렌더링은 된다. 자바스크립트로 객체 제어가 안된다. )
// input 태그류는 name 속성을 갖고, 서버로 값을 전달할 때 name 속성을 사용합니다. 
// 이벤트란 브라우저에서 일어나는 모든 동작들을 말하는데, 다시 말하지만 이건 이미 다 정의가 되어있다. 
// 예를 들어서, 버튼을 누르거나 키보드를 누르거나 마우스를 클릭하거나 드래그 하는 것과 같은 동작들을 이벤트라고 하고
// 각 이벤트마다 기본처리동작이 이미 정의되어있기 때문에 이를 가로채서 다른 동작 제어를 하는 것이다. 이 것이 바로 이벤트 핸들러라고 합니다. 
// 관련내용은 위로 올라가서 다시 확인을 해보자. 



{/* <body>
    <input type="text" name = "number" value = "10"><br/>
    <input type="text" name = "number" value = "20"><br/>
    <input type="text" name = "number" value = "30"><br/>
    <input type="text" name = "number" value = "40"><br/>
    <input type="text" name = "number" value = "50"><br/>
    <input type="text" name = "number" value = "0"><br/>
</body>
</html>
<script>
    let numbers = document.getElementsByName("number");
    let result = document.getElementsByName("result");
    // 실제로 같은 이름의 태그가 있는지는 중요하지 않다. name속성은 무조건 배열로 읽어온다. 
    let sum = 0;
    numbers.forEach((n)=>{
        sum += parseInt(n.value);
    })
    result[0].value = sum;
</script> */}

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&Input / &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// 

{/* <body>
    x : <input type = "text" name = "xvalue" id = "xvalue"> <br/>  
    y : <input type = "text" name = "yvalue" id = "yvalue"> <br/>&nbsp;&nbsp;
    <button type="text" onclick="add()">+</button><br/>&nbsp;&nbsp;
    <button type="text" onclick="minus()">-</button><br/>&nbsp; &nbsp;
    <button type="text" onclick="multiply()">*</button><br/>&nbsp; &nbsp;
    <button type="text" onclick="divide()">/</button><br/>&nbsp; &nbsp;
    result : <span id="result"></span>
</body>
</html>
<script>
    function add(){
        //1. 일단, 데이터를 태그로부터 읽어온다. 
            x = document.getElementById("xvalue").value;
            y = document.getElementById("yvalue").value;
        //2. 연산한다. 
        let result = 0;
        result = parseInt(x) + parseInt(y);
        //3. 출력한다. result로 받은 것을 innerHTML(left side) toss
        document.getElementById("result").innerHTML = result;
    }
    function minus(){
        //1. 일단, 데이터를 태그로부터 읽어온다. 
            x = document.getElementById("xvalue").value;
            y = document.getElementById("yvalue").value;
        //2. 연산한다. 
        let result = 0;
        result = parseInt(x) - parseInt(y);
        //3. 출력한다. result로 받은 것을 innerHTML(left side) toss
        document.getElementById("result").innerHTML = result;
    } 
    function multiply(){
        //1. 일단, 데이터를 태그로부터 읽어온다. 
            x = document.getElementById("xvalue").value;
            y = document.getElementById("yvalue").value;
        //2. 연산한다. 
        let result = 0;
        result = parseInt(x) * parseInt(y);
        //3. 출력한다. result로 받은 것을 innerHTML(left side) toss
        document.getElementById("result").innerHTML = result;
    }
    function divide(){
        //1. 일단, 데이터를 태그로부터 읽어온다. 
            x = document.getElementById("xvalue").value;
            y = document.getElementById("yvalue").value;
        //2. 연산한다. 
        let result = 0;
        result = parseInt(x) / parseInt(y);
        //3. 출력한다. result로 받은 것을 innerHTML(left side) toss
        document.getElementById("result").innerHTML = result;
    }
</script>

 */}
// 위처럼 쓸 수도 있지만...이렇게 매개변수를 활용할 수도 있다. 

//add(oper)라는 함수에 매개변수를 넣어서 활용하면 한번에 이렇게 계산을 할 수도 있다. 그럼 함수를 다양하게 넣을 수도 있다. 
// 물론 꼭 이게 좋은 것만은 아니다. 유지보수가 어려워질 수도 있기 때문이다. 
// 다만, 이러한 방법이 있다는 것은 명확하게 알아야한다. 

// <body>
//     x : <input type = "text" name = "xvalue" id = "xvalue"> <br/>  
//     y : <input type = "text" name = "yvalue" id = "yvalue"> <br/>&nbsp;&nbsp;
//     <button type="text" onclick="add(1)">+</button><br/>&nbsp;&nbsp;  
//     <button type="text" onclick="add(2)">-</button><br/>&nbsp; &nbsp;
//     <button type="text" onclick="add(3)">*</button><br/>&nbsp; &nbsp;
//     <button type="text" onclick="add(4)">/</button><br/>&nbsp; &nbsp;
//     result : <span id="result"></span>
// </body>
// </html>
// <script>
//     function add(oper){
//         //1. 일단, 데이터를 태그로부터 읽어온다. 
//             x = document.getElementById("xvalue").value;
//             y = document.getElementById("yvalue").value;
//         //2. 연산한다.  
//         let result = 0;
//         if( oper == "1"){
//             result = parseInt(x) + parseInt(y);
//         }else if( oper == "2"){
//             result = parseInt(x) - parseInt(y);
//         }else if( oper == "3"){
//             result = parseInt(x) * parseInt(y);
//         }else if( oper == "4"){
//             result = parseInt(x) / parseInt(y);
//         };
//         //3. 출력한다. result로 받은 것을 innerHTML(left side) toss
//         document.getElementById("result").innerHTML = result;
//     }
// div Tag는 퍼블리셔만하고, 우리는 보통 이렇게 한다. 
