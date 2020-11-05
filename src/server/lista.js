module.exports = { adicionarLembrete, GetLembretes };
const moment = require("moment");
function adicionarLembrete(conn, router) {
  router.post("/api/lembretes-lembrete-create", (req, res) => {
    console.log(req.body);
    var lmbrt_nome = req.body.lmbrt_nome;
    var data_criar = moment();
    data_criar = data_criar.format("YYYY-MM-DD HH:mm:ss");
    console.log(data_criar);
    var data_final = req.body.data_final;
    var lmbrt_body = req.body.lmbrt_body;
    var user_ID = req.body.user_ID;
    var query = `insert into lembretesLista(lmbrt_nome,data_criar,data_final,lmbrt_body,user_ID) values ('${lmbrt_nome}','${data_criar}','${data_final}','${lmbrt_body}','${user_ID}')`;
    conn.query(query, function (error, results, fields) {
      if (error) return console.log(error);
      return res.send(results);
    });
  });
}

function GetLembretes(conn, router){
    router.post("/api/lembretes-lembrete-get", (req, res) =>{
        var user_ID = req.body.user_ID
        query = `SELECT lmbrt_nome,data_criar,data_final,lmbrt_body FROM lembretesLista where user_ID = '${user_ID}'`;
        conn.query(query, function (error, results, fields){
            if(error) return console.log(error);
            console.log('get lembretes')
            return res.send(results);
        });
    });    
}
