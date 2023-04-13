import 'bootstrap/dist/css/bootstrap.min.css'; //부트스트랩 라이브러리
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { serverIP } from '../../CommonUtil';
import { useParams } from 'react-router-dom';

function BoardWrite(props){
    let {id} = useParams(); // 보내는 쪽에서 json 객체로 받아옴. 

    const[userName, setUserName] = useState("");
    const[kor, setKor] = useState(0);
    const[eng, setEng] = useState(0);
    const[mat, setMat] = useState(0);

    useEffect(()=>{
        console.log("id", id);      //useEffect는 변화가 있을 때마다 뭔가를 실행함.     window.onload랑 비슷함. 
        /*
        // BoardWrite component가 /board/write 일 때는 undefined로 오고 
        //**     /board/view/1로 나오면 id에는 parameter 값이 저장된다. 
        */
        async function loadData(id){
            let results = await axios.get(serverIP + "/score/list/" + id);
            console.log(results.data.user.user_name);
            console.log(results.data.user.kor);
            console.log(results.data.user.eng);
            console.log(results.data.user.mat);

            setUserName(results.data.user.user_name);
            setKor(results.data.user.kor);
            setEng(results.data.user.eng);
            setMat(results.data.user.mat);
        }
        if(id != undefined){        //write가 아니라 view에서 호출할 때
            loadData(id);
        }

    }, []);

    return(
        <div >
            <h1> 상세보기 </h1>
            <h1>이름 : {userName}</h1>
            <h1>국어 : {kor}</h1>
            <h1>영어 : {eng}</h1>
            <h1>수학 : {mat}</h1>
        </div>
    )

};


export default BoardWrite;
