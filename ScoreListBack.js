var express = require('express');
var router = express.Router();
let commonDB = require("./commonDB");

/* GET home page. */
//전체 List 호출
router.get('/list', async function(req, res, next) {

  let sql=`
  select A.id, A.user_name, A.kor, A.eng, A.mat
  from tb_score A;
  `;
  let results = await commonDB.mysqlRead(sql, []);
  res.json(results);
});

// 특정 id 상세보기
router.get('/list/:id', async function(req,res,next){

  try{
    let id = req.params.id;
    let sql=`
    select A.id, A.user_name, A.kor, A.eng, A.mat
    from tb_score A where A.id=?;
    `;
    let results = await commonDB.mysqlRead(sql,[id]);
    res.json({"result":"success", "user" : results[0]});
    console.log(results[0]);
  }
  catch(e){
    console.log(e);
    res.json({"result": "fail"});
  }
});

module.exports = router;
