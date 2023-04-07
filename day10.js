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

//************************** */  스프링과 스프링부트의 차이.   /************************** */

// html은  
// nodeJS코드로 해석해서
// html 위치에 찍어주는 것 (이 것이 바로 ejs 엔진이야. )

// 자바는 여기에 jsp엔진이 들어가는 것임.. 오랫동안 이 jsp 엔진이 오랫동안 각광을 받았으나...
// 쫗겨나서 스프링프레임워크에는 jsp가 기본으로 깔려있음. 엔진이 쫗겨나게 됨. 
// 스프링부트는 애초에 탬플릿엔진을 넣을 생각이 없었는데, 굳이 스프링부트에 넣고 싶으면...mustache와 timpe-leaf
// 리액트에서도 머스태치 수염은 쓴다. 
// 타임리프는 잘 안 쓰임. 
// html 자체가 쫗겨나고... 스프링은 와라 스프링부트는 자라라는 방식으로 배포함. 
// 완전히 딴판임. 자바코딩은 비슷하지만, 배포할 때의 형태가 완전히 다르다.
// 그 이유는 서버를 사기엔 돈이 너무 많이 들어서...용량이 작은 서버들을 합치고 싶은 거야. 
// 합치려면 어렵기 때문에 물리적으로 다른 애들을 합치는 기술이 클라우드 기술임. 
// 도커나 쿠버내틱스도 분산된 시스템을 적극적으로 합쳐주는 기술. 
// 클라우드에 올릴 때는 스프링 프레임워크보다는 스프링부트나 노드제이에스가 잘 맞음. 
// 그래서 회사가 클라우드 기술을 받아들이기 어려운 부분...프레임워크가 다 스프링인데...
// 기존의 개발자들은 쉽게 바꾸지 않아. 

/// 하나는 교육과정인데 맨날 지각하고 그러는데, 너무 잘함. 밤새 프로그래밍을 짜서 와. 
// 일본 유학간 상태에서 한학기가 빵꾸 나서 프로그램과 딱 맞음. 
/// 토목공학과 : 그냥 의문을 제기하지 말고 그대로 흡수해서 풀어버림. 더이상 생각하지 않음. 

/// 컴퓨터가 생각하는 사고방식과 내가 생각하는 사고방식은 다름. 
// 빠르게 컴퓨터화 머리가 되는 경우.. 6개월 지나면 다 비슷해짐. 
