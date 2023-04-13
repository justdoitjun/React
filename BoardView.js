import 'bootstrap/dist/css/bootstrap.min.css'; //부트스트랩 라이브러리
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { serverIP } from '../../CommonUtil';
import { Link } from 'react-router-dom';

function BoardList(props){
  const [boardList, setBoardList] = useState([]);
  const [loading, setLoading] = useState(false);
  //let data = [];

  useEffect( ()=>{
    async function loadData(){
      const url = serverIP + "/hero/list";
      await axios.get(url)
      .then((res)=>{
        setBoardList(res.data);
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
        <h1> Board List </h1>
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
                <th> Hero name </th>
                <th> Hero description </th>
              </tr>
            </thead>
            <tbody>
              {/* tbody는 아래는 삼항연산자입니다. loading이 True일 때 붙이고, False일 때 ""하세요 */}
                {
                  loading === true?
                  boardList.map((item, index)=>{
                    return(
                      <tr key= {index}>
                        <td> {item.id} </td>
                        <td> <Link to={"/board/view/"+item.id}>{item.hero_name}</Link></td>  
                        <td> {item.hero_desc}</td>
                      </tr>  
                    )
                  })
                  :""
                }
            </tbody>
          </table>
            <div>
                <Link className = "btn btn-danger" to="/board/write">글쓰기</Link>
            </div>
      </div>

    )
}

export default BoardList
