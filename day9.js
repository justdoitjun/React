var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit : 10,
    host : "127.0.0.1",
    user : "user01",
    password : "password",
    database : "test",
    port : 3306
});

//DB와 연결을 한다
pool.getConnection((err, connection) => {
    //DB와 연결을 성공하면 매개변수로 전달된 함수가 호출된다.
    //err - DB와 연결실패시 처리
    if(err){
        console.log(err);
        return;
    }
    //연결 성공시 연결객체 connection을 전달한다.
    //연결 객체
    console.log("connection success"); //(1)
    sql = `SELECT id, title, writer, DATE_FORMAT(wdate, '%Y-%m-%d') wdate FROM tb_board;`;

    connection.query(sql, (err, rows) => {
        console.log(rows);
    })
    console.log("connection success"); //(2)
    sql = `insert into tb_board(title, writer, contents, wdate) values(?, ?, ?, now())`;
    let params = ['title2', 'lim', 'contents2'];
    connection.query(sql, (err, rows) => {
        if(err){
            console.log("err");
        }else {
            console.log("insert success");
        }
        sql = "select * from tb_board";
        connection.query(sql, params, (err, rows)=>{
            if(err){
                console.log("error");
            }
            console.log(rows);
        })
        connection.release(); // 연결해제
    })
});
console.log("end");

// let promise = new Promise(function(resolve, reject){
//     wetTimeout(()=> reject("fail"), 1000)
// })


// 프로미스의 기본구조
let promise = new Promise((resolve,reject)=>{
    //여기서 시간이 많이 걸리는 코드를 둔다. 
    // 성공하면 resolve(전달할 데이터) => 성공하면, then 구문으로 가서 callback 함수의 매개변수로 전달된다. 
    resolve("success");
    // 실패하면 reject(전달할 데이터) => 실패하면, catch 구문으로 가서 callback 함수의 매개변수로 전달된다. 
    reject("error");
})
.then((result)=>{
    console.log("then", result);
})
.catch((error)=>{
    console.log("catch", error);
})

//////////// (1) 의존성 프라퍼티
/// 내부의 데이터 저장공간을 98% 날려버림. 의존성 프라퍼티
// 공통의 저장공간....자바는 객체가 만들어지는데, ms는 공통공간을 계속 보고 추가된 것만 보게 만듬..
// C 샵은 코드 저장공의 98%를 날려버림. 더 작게 돌아감. 
// 우리는 구축할 게 없음. 자기들은 그런 관점으로 객체 저장방식을 그렇게 함. 
// 프로그램 객체를 계속 만드는 것이 아니라 객체를 공통으로 사용하도록해서 가볍게 만듬. 


////// AXIOS (프라미스 기법의 라이브러리) --> 통신의 마법사.
// 우리가 이렇게 하기가 너무 어려운 것들을 axios 방식으로 
//// then에 써도 되지만...기다렸다가, 결과가 오면 하도록 할 수가 있다. 
//  Async와 
// fuction 앞에 async를 붙이면 해당 함수는 반드시 프라미스를 반환합니다. 
// 프라미스가 아닌 값을 반호나하더라도 이행 상태의 프라미스로 값을 감싸 이행된 프라미스가 반환되도록 합니다. 
// 자바스크립트는 await 키워드를 써서 프라미스가 처리될 때까지 기다립니다. 

// // await 쓰려면 async를 꼭 써줘야함. 
/////////// 오늘 배운 것!!! JSON은 무조건!!!! 배열로 나옴...
router.get('/view/:id', async function(req, res, next) { //url ~~~~/view/1 ~~~/view/2가 실행되면...
    let id = req.params.id; //id를 가져오자. 
    sql = `
            select id, title, writer,
            contents, date_format(wdate, '%Y-%m-%d') wdate, hit, contents
            from tb_board where id=${id}
           `;// 이 SQL 자체가 배열로 나옴...왜냐면....
    let boardItem = await commonDB.mysqlRead(sql, []); //db에서 sql을 실행하면, 이를 배열로 가져오고..
    //boardItem이 배열의 배열임....
    console.log(boardItem);
    res.render('board/board_view', { board : boardItem[0] });   //배열이 배열을 감싸서... boardItem[0]으로 해야함...
});

