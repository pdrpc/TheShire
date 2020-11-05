module.exports = {adicionarLembrete}
const moment = require('moment')
function adicionarLembrete(conn,router){
    router.post('/api/lembretes-lembrete-create', (req, res) =>{
        console.log(req.body)
        var titulo = req.body.titulo
        var dataCad = moment()
        console.log(dataCad)
        var dataAtv = req.body.dataAtv
        var body = req.body.body
        var  query = `insert into lembretesLista(titulo,dataCad,dataAtv,body) values ('${titulo}','${dataCad}','${dataAtv}','${body}')`;
        conn.query(query, function (error, results, fields){
            if(error) return console.log(error);
            return res.send(results);
        });
    })



}
