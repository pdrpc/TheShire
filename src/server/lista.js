module.exports = { adicionarLembrete };
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
    var query = `insert into lembretesLista(lmbrt_nome,data_criar,data_final,lmbrt_body) values ('${lmbrt_nome}','${data_criar}','${data_final}','${lmbrt_body}')`;
    conn.query(query, function (error, results, fields) {
      if (error) return console.log(error);
      return res.send(results);
    });
  });

function getLembrete(conn){
    router.get("/api/lembretes-lembrete-create", (req, res) =>{
        query = 'SELECT * FROM lembretesLista';
        conn.query(query, function (error, results, fields){
            if(error) return console.log(error);
            //Pego o nome das rows do sql
            return res.send(results);
        });
    })
    }
}
