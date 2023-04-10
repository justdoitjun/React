let express = require('express');
let router = express.Router();
let commonDB = require("./commonDB");
let commonUtil = require("./commonUtil");
/* GET home page. */
router.get('/list/:pg', async function(req, res, next) {
  let pg = parseInt(req.params.pg);
  //전체 데이터 개수 확인
  let sql=`
    select count(*) cnt from
    (
      SELECT A.id, A.title, A.writer, A.wdate
      , @rownum:=@rownum+1 num
      from tb_board A, (SELECT @rownum:=0) B
    ) A
    LEFT OUTER JOIN tb_member C on A.writer=C.userid
  `;
  let results = await commonDB.mysqlRead(sql, []);
  let totalCnt = results[0]["cnt"];
  sql = `
  SELECT A.id, A.title, A.writer, A.num, A.username
  , date_format(A.wdate, '%Y-%m-%d') wdate
  FROM
  (
    SELECT A.*, C.username from
    (
      SELECT A.id, A.title, A.writer, A.wdate
      ,@rownum:=@rownum+1 num
      FROM tb_board A, (SELECT @rownum:=0) B
    ) A
    LEFT OUTER JOIN tb_member C ON A.writer=C.userid
    ORDER BY id desc
  )A
  LIMIT 0, 10
  `;
  results = await commonDB.mysqlRead(sql, []);//이처럼 db접속(공통부분)을 빼놔야 코드가 간결해짐.
  console.log(results);
  res.render('board/board_list', {
    session: req.session,
    boardList: results,
    totalCnt: totalCnt,
    pg:pg,
    paging:commonUtil.getPaging(pg, totalCnt)
  });
});

router.get('/view/:id', async function(req, res, next) {
  let id = req.params.id;
  let sql = `select * from tb_board where id=${id}`;
  let results = await commonDB.mysqlRead(sql, []);
  let boardItem = results[0];
  res.render("board/board_view", { board:boardItem });
});

module.exports = router;