module.exports = {adicionarLembrete}

function adicionarLembrete(conn,router){
    router.post('/create-lembrete', (req, res) =>{
        console.log(req.body)
        var titulo = req.body.titulo
        var dataCad = req.body.dataCad
        var dataAtv = req.body.dataAtv
        var body = req.body.body
        var  query = `insert into lembretesLista(titulo,dataCad,dataAtv,bodu) values ('${titulo}','${dataCad}','${dataAtv}','${body}')`;
        conn.query(query, function (error, results, fields){
            if(error) return console.log(error);
            return res.send(results);
        });
    })



}
