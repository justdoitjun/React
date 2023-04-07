/// 중복되는 공통부분을 따로 뗄 수 있다..
//      경로지정 안하면...node_modules 폴더에 있다고 생각하고 하는 거고...
//         ./ 라고 하면 현재 폴더에서 찾는 거고
//        ../ 라고 하면 상위 폴더에서 찾는 것임. 

//JVM이 알아듣는 언어로 번역되고, JVM에서 실제 OS로....
// JVM은 인터프리터 언어이고....Java는 컴파일언어임...
// 역컴파일이 가능함..


// CREATE TABLE tb_board(
// 	id BIGINT NOT NULL PRIMARY KEY AUTO_INCREMENT,
// 	-- AUTO_INCREMENT : 자동증가, NOT NULL PRIMARY KEY가 지정되어야 한다.
// 	title VARCHAR(1000),
// 	writer VARCHAR(100),
// 	contents LONGTEXT, -- 2G, oracle 은 clob
// 	hit BIGINT DEFAULT 0, -- 기본값 0
// 	WDATE DATETIME -- 시간까지 저장한다.
// 	);

// INSERT INTO tb_board(title, writer, contents, wdate)
// 	VALUES('title1', 'hong', 'contents1', NOW());

// select * from tb_board;

// SELECT id, title, writer, DATE_FORMAT(wdate, '%Y-%m-%d') wdate FROM tb_board;

// CREATE TABLE tb_board(
// 	member_id BIGINT NOT NULL PRIMARY KEY AUTO_INCREMENT,
// 	-- AUTO_INCREMENT : 자동증가, NOT NULL PRIMARY KEY가 지정되어야 한다.
// 	userid VARCHAR(100) UNIQUE,
// 	-- email로 하는 경우가 많아서...unique 제약조건은...값이 중복되어선 안된다.
// 	-- 단, null은 허용한다.
// 	password VARCHAR(1000),
// 	-- password는 당연히 길어야함...DB에 비밀번호는 안 넣는다....
// 	-- 가장 높은 수준의 비밀번호이어야 한다. 
//  -- 서울시 운영하는 관광사업...명동에 중국인들이 몰려오는 시점에... 
//  -- 동영상을 압축해서 서버로 밀어넣어주는 일을 했었음... 회원가입했던 사람들이... 
//  -- 서울시 홈페이지에 개인정보..
//  -- 비밀번호는 아예 복원이 안되도록 해야함. 
// 	writer VARCHAR(100),
// 	contents LONGTEXT, -- 2G, oracle 은 clob
// 	hit BIGINT DEFAULT 0, -- 기본값 0
// 	WDATE DATETIME -- 시간까지 저장한다.
// 	);

// Script 안에 넣는 ajax 통신...비동기 기법
$(document).ready(()=>{
    $("#btnIDCheck").click(()=>{
      let userid = $("#userid").val();
      $.ajax({
        url:"/member/idcheck",
        data:{userid:userid},
        method:"post",
        dataType:"json"
      }).then((result)=>{
        console.log("success");
      }).catch((res, status, error)=>{
        console.log(status);
      })
    })
  })

  // cnt 처럼 어딘가에 계산하고 저장해주는 히든태그 
//   <form action="myform" name="myform">
//   <input type="hidden" id="idCheckyn" name="idCheckyn" value="N">
//   <%-include('../layout/header.ejs')%> 

// 이런 히든태그가 있으면...중복체크를 이미 했는지 이런 것을 체크해준다. 


function save(){
    // 직렬화라는 것을 왜 하냐? JSON 길이가 너무 커지면...이걸 어떻게 key마다 하나씩 val을 하냐...
    //data = {userid:$("#userid").val(), username:$("#username").val()..}
    // 폼직렬화 직렬화 : 객체를 파일이나 네트워크로 전송하는 기법..
    // 웹에서는 직렬화를 할 필요가 없다. 직렬화라는 관점은 객체지향에는 무조건 있다. 
    let data = $("#myform").serialize();
    console.log(data);
  }


//   1. 프로젝트를 만들 폴더로 먼저 이동한다. 
//   cd 경로
  
//   npm install -g express-generator 프로그램을 먼저 설치해야 express 프로그램(라이브러리) 사용이 가능하다.
//   이 때는 전역변수로 해줘야한다. 
  
//   2. epress project 명    --view=ejs
//   cd project명 -- package.json 파일이 있는 폴더로 이동해야한다. 
//   처음에 생성하면 node_modules 폴더가 없다.
//   npm install -- package.json파일을 읽어서 node_modules 폴더를 만들고 이 폴더에 필요한 라이브러리 설치
  
//   시작 : npm start 또는 nodemon start( nodemon 프로그램이 설치되어있을 떄 )
  
//   3. 게시판 만들기
//   board_list.html, board_write.html, board_view.html
//   확장자 ejs로 바꿔서 views폴더에 넣는다. 
  
//   4. 라우터 만들기(board.js, member.js) - 업무별로 폴더/파일이 저장되어있다. 
//   5. app.js에서 라우터 import, require url과 등록..
//      쿠키 : 내 컴퓨터에 저장되는 정보 (보안에 취약하다. )
//      세션 : 서버에 저장된다.(로그온이나 장바구니 등의 정보를 저장하기 위해서 사용하는 객체. )
//      nodejs에서 세션을 1. 파일 2. 디비 => 2번 mysql 디비에 세션정보를 저장하려고 한다. 

//      설치해야할 것.... 
//      npm install express-session
//      npm install express-mysql-session
