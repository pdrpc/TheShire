module.exports = { adicionarLembrete, GetLembretes, deleteLembrete, getLembrete, editLembrete };
const { error } = require("console");
const { query } = require("express");
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
        var query = `SELECT lmbrt_nome,data_criar,data_final,lmbrt_body, lmbrt_ID FROM lembretesLista where user_ID = '${user_ID}'`;
        conn.query(query, function (error, results, fields){
            if(error) return console.log(error);
            console.log('get lembretes')
            return res.send(results);
        });
    });    
}

function getLembrete(conn, router){
  router.get("/api/lembretes-lembrete-get/:id", (req,res) => {
    const lembreteId = req.params.id
    const query = `Select * from lembretesLista where lmbrt_ID = '${lembreteId}'`;
    conn.query(query, function (error, results, fields){
      if(error) return console.log(error);
      console.log( 'Editar lembretes')
      return res.send(results[0]);
    });
  });
}

function editLembrete(conn, router){
  router.put("/api/lembretes-lembrete-update/:id", (req,res) => {
    const lembreteId = req.params.id
    const {lmbrt_nome, data_final, lmbrt_body} = req.body
    const query = `Update lembretesLista set lmbrt_nome = '${lmbrt_nome}',data_final = '${data_final}',lmbrt_body = '${lmbrt_body}' where lmbrt_ID = '${lembreteId}'`;
    conn.query(query, function (error, results, fields){
      if(error) return console.log(error);
      console.log( 'Enviando edição lembretes')
      return res.send(results);
    });
  });
}

function deleteLembrete (conn, router){
  router.delete("/api/lembretes-lembrete-delete/:id", (req,res) =>{
      var DeletarId = req.params.id;
      var query = `DELETE from lembretesLista where lmbrt_ID = '${DeletarId}';`
      conn.query(query, function (error, results, fields){
        if(error) return console.log(error);
        console.log('delete lembretes')
        return res.send(results);
      });
  });
}