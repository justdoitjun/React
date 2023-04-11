import React, {useState} from "react";

function Calculator(props){
    //변수 수신 - 초기화
    const[name, setName] = useState("");
    let [kor, setKor] = useState("");
    let [eng, setEng] = useState("");
    let [mat,setMat] = useState("");
    let [sum, setSum] = useState("");
    let [avg, setAvg] = useState("");
    //Set 메소드
    const nameChange =(e)=>{
        setName(e.target.value);
    };
    const korChange =(e)=>{
        setKor(e.target.value);
    };
    const engChange =(e)=>{
        setEng(e.target.value);
    };
    const matChange =(e)=>{
        setMat(e.target.value);
    };
    const results =(e)=>{
        sum = parseInt(kor)+ parseInt(eng)+ parseInt(mat);
        avg = sum / 3;
        setSum(sum);
        setAvg(avg);
    }
    //결과값을 앞단(클라이언트)에 출력 송부
    return (
        <div>
          <h3> 이름 : <input type="text" onChange={nameChange}/> </h3>
          <h3> 국어 : <input type="text" onChange={korChange}/> </h3>
          <h3> 영어 : <input type="text" onChange={engChange}/> </h3>
          <h3> 수학 : <input type="text" onChange={matChange}/> </h3>
          <button type="button" onClick={()=>{results()}}> 결과확인 </button>
          <div>
            <h3> {name}의 합계는 {sum}이고 </h3>
            <h3> 평균은{avg}입니다. </h3>
          </div>
        </div>
      )
}

export default Calculator;
