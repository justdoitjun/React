import 'bootstrap/dist/css/bootstrap.min.css'; //부트스트랩 라이브러리
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { serverIP } from '../../CommonUtil';
import { Link } from 'react-router-dom';

function ScoreList(props){
  const [ScoreList, setScoreList] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect( ()=>{
    async function loadData(){
      const url = serverIP + "/score/list";
      await axios.get(url)
      .then((res)=>{
        setScoreList(res.data);
        setLoading(true);
        console.log(res.data);
        //data = res.data;
        //console.log(data);
      })
      .catch((error)=>{
        console.log(error);
      })
    }
    loadData();
  }, [])

    return(
      <div>
        <h1> Score List </h1>
        <div className="container">
            <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                선택하세요
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">제목</a></li>
              <li><a className="dropdown-item" href="#">내용</a></li>
              <li><a className="dropdown-item" href="#">제목+내용</a></li>
            </ul>
            <input type="text" className="form-control" placeholder="Search"/>
            <button className="btn btn-secondary" type="submit">Go</button>
        </div>  

        <table className="table table-hover ">
            <thead className="table-secondary">
              <tr>
                <th> Sequence </th>
                <th> Your Name </th>
                <th> Korean </th>
                <th> English </th>
                <th> Math </th>
              </tr>
            </thead>
            <tbody>
              {/* tbody는 아래는 삼항연산자입니다. loading이 True일 때 붙이고, False일 때 ""하세요 */}
                {
                  loading === true?
                  ScoreList.map((item, index)=>{
                    return(
                      <tr key= {index}>
                        <td> <Link to={"/score/list/"+item.id}>{item.id}</Link></td>
                        <td> {item.user_name}</td>  
                        <td> {item.kor}</td>
                        <td> {item.eng}</td>
                        <td> {item.mat}</td>
                      </tr>  
                    )
                  })
                  :""
                }
            </tbody>
          </table>
            {/* <div>
                <Link className = "btn btn-danger" to="/score/write">글쓰기</Link>
            </div> */}
      </div>

    )
}

export default ScoreList
