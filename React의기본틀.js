////Myhome1/src/component/Gugudan.js 
//강사님이 만든 코드
import React, { useState } from "react";
function Gugudan(props) {
////// <Summary>
//클라이언트에서 입력받아야하는 변수는 오로지 하나 : 단 1개. 그러므로 set은 dan만 있어도 된다. 
/////그러나 추가적으로 구현하고자 했던 기능은 버튼을 눌렀을 때 이를 지워주는 기능. 이 것은 true값을 변경해줘야한다.(없어도 된다. 그래서 set이 2개 있는 것.)

/////////<변수>
    const[dan,setDan] = useState(4);    //단 초기화
    const[iList] = useState([1,2,3,4,5,6,7,8,9]);
    const[show, setShow] = useState(false); //show가 true일 때만 화면에 구구단을 출력함.
/////////<함수>
    const danChange=(e)=>{
        setShow(false); //show를 false로 해서 화면에 출력을 막음.
        setDan(e.target.value); //단값을 넣고
    }
    const goConfirm=()=>{
        setShow(true);
    }
/////////<결과값을 html로 보내줘야하는 파트>
    return(
        <div>
            단 : <input type="text" onChange={danChange}></input><br/>
            <button type="button" onClick={goConfirm}> Confirm </button>
            <br/><br/>
            <ul>
                {
                    show?
                    iList.map((item, index)=>{
                        return(
                            <li key={index}>
                                {dan} X {item} = {dan*item}
                            </li>
                        )
                    })
                    :""
                }
            </ul>

        </div>
    )
}
export default Gugudan;
