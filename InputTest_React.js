import React, {useState} from "react";

//props를 쓰든 안 쓰든 기본매개변수는 props를 고정시키고 써보자. 
// 원래는             <input type="text"></input>써야하는데, 요즘 트렌드가
// <input type="text"/>로 자체 닫아버림. 
function Test(props){
    const [name, setName]=useState("");
    const [age, setAge]=useState("");
    const [email, setEmail] = useState("");
    // input 칸에서 주어진 내용이 useState로 반영이 되고...  (2)
//람다식을 줘야함. 일반 함수의 경우에는 리액트에선 굉장히 어렵다. 바인딩이라고 또 묶는 작업을 해줘야하기 때문입니다.
// 일반함수는 생성자에서 하는 바인딩을 써야함. 그냥 람다만 쓴다고 생각하자. 그냥 리액트는 람다라고 생각하면 된다.
    const nameChange= (e)=>{
        //e라는 매개변수 인자는 무엇이냐, 발생한 모든 이벤트에대한 정보를 구현하고 싶다. 
        console.log(e.target);      //이 코드로 확인을 해보자. 
        setName(e.target.value);    //name변수의 값이 바뀐다. 
        //input 에서 가지고 온 내용을 nameChange로 반영되어서... <p>단에 name으로 넣어주자.
    };
    const ageChange= (e)=>{
        setAge(e.target.value);    //name변수의 값이 바뀐다. 
        //input 에서 가지고 온 내용을 nameChange로 반영되어서... <p>단에 name으로 넣어주자.
    };
    const emailChange= (e)=>{
        setEmail(e.target.value);    //name변수의 값이 바뀐다. 
        //input 에서 가지고 온 내용을 nameChange로 반영되어서... <p>단에 name으로 넣어주자.
    };
    let mystyle= {
        color:"white",
        backgroundColor:"black",
        fontSize:"11pt",
        padding:"10px 5px 10px 5px"
    };

    return(
        //CSS를 주는 방법을 JSX방법이라고 하는데 camel표기법으로 하고 JSON 형태로 배열에 넣어서 준다.
        <div>
            이름 : <input type="text" onChange={nameChange} 
                    style={{color:"white" ,backgroundColor:"violet"}}/>   
            나이 : <input type="text" onChange={ageChange} style={mystyle}/>   
            이메일 : <input type="text" onChange={emailChange} />   
            {/* //onChange input 칸에 입력이 되면....(1) */}
            <p>{name}    {age}    {email}</p>
        </div>
    )
}

export default Test;
