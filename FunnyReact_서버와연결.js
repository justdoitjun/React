import React, {useState} from "react";
import axios from "axios";

function HeroWrite(props){
//변수
const[hero_name, setHero_Name] = useState("");  
//useState힘수가 문자열 변수를 내부적으로 만들고, 변수값 바꾸는 함수를 만들어서 배열형태로 전달함
//  웹(사용자)---데이터 ----> 문자화 ---값 입력 -----> 배열화 -----> 웹(사용자)
const[hero_desc, setHero_desc] = useState("");

//함수    -- input Tag 에 값이 바뀌면 이 함수들이 호출된다. (전문용어로 Event Handler라고 함)
const setHeroNameChange=(e)=>{
    setHero_Name(e.target.value);
};
const setHeroDescChange=(e)=>{
    setHero_desc(e.target.value);
};
// form Tag를 써서 서버로 전송할 때 <button> Tag에 type="button"속성이 없으면 "submit"이므로 서버로 보내짐. 
//submit함수가 호출되면 form Tag를 부르고 formTag에 있는 onSubmit EventHandler가 호출된다. 
// 이를 잡아채서 서버에 전송하는 작업이 onSubmit이다. 무조건 서버로 전송이 됨. 
//이를 막기 위해서 굳이 preventDefault를 사용한 것이다. 
const onSubmit=(e)=>{
    e.preventDefault(); //form Tag를 통해 서버에 정보를 전송하기 전에 호출을 먼저 해주고
// 왜 먼저 호출을 하냐고? 버튼의 기본 기능을 정지시킬 거야. submit 버튼의 subtmit기능을 막고 별도의 처리를 해줘야지.
// Spring은 데이터를 받을 때 문자로 받습니다. axios는 데이터를 json으로 주고 받도록 되어있음. 
// Spring은 데이터를 문자열로 와야 받지만, Axios는 JSON으로 데이터를 주고 받는다는 사실을 기억할것. 
    axios
    .post("http://localhost:9090/hero/write",  {hero_name:hero_name, hero_desc:hero_desc})
    .then((res)=>{
        console.log(res.data.result);
    })
    .catch((error)=>{
        console.log(error);
    })
};

//결과 출력
    return(
        <div>
            <form onSubmit={onSubmit}>
                <h3> Hero </h3>
                name : <input type="text" onChange={setHeroNameChange}/> <br/>
                desc : <input type="text" onChange={setHeroDescChange}/> <br/>
                <button type="button" onClick={onSubmit}> Add up! </button>
            </form>
        </div>
    )
}

export default HeroWrite;
