let express = require('express');
let router = express.Router();
let commonDB = require("./commonDB");
/* GET home page. */
router.get('/', async function(req, res, next) {
    sql = `select id, title, writer,
           contents, date_format(wdate, '%Y-%m-%d') wdate
           from tb_board
           `;
    let results = await commonDB.mysqlRead(sql, []); //db에서 sql을 실행하면, 이를 배열로 가져오고..
    res.render('board/board_list', { boardList : results }); //
});
router.get('/view/:id', async function(req, res, next) { //url ~~~~/view/1 ~~~/view/2가 실행되면...
    let id = req.params.id; //id를 가져오자. 
    sql = `
            select id, title, writer,
            contents, date_format(wdate, '%Y-%m-%d') wdate, hit, contents
            from tb_board where id=${id}
           `;
    let boardItem = await commonDB.mysqlRead(sql, []); //db에서 sql을 실행하면, 이를 배열로 가져오고..
    //boardItem이 배열의 배열임....
    console.log(boardItem);
    res.render('board/board_view', { board : boardItem[0] });   //배열이 배열을 감싸서...
});

// await 쓰려면 async를 꼭 써줘야함. 
// DB 파일이 바뀌어도 commonDB파일만 바꾸면 모든 것이 되도록 함. 
module.exports = router;
