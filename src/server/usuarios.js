
module.exports = {login_user,create_user}

function login_user(conn,router){

    router.post('/api/lembretes-user-login', (req, res) =>{
    console.log(req.body)
    var email = req.body.id_usuario
    console.log("id_user" + email)
    var senha = req.body.senha
    var  query = `select * from users where user_mail = '${email}'`;
    conn.query(query, function (error, results, fields){
        if(error) return console.log(error);
        return res.send(results);
    });
    })
}

function create_user(conn,router){
    router.post('/create-user', (req, res) =>{
        console.log(req.body)
        var email = req.body.id_usuario
        var pass = req.body.password
        var name = req.body.name
        var  query = `insert into users(user_name,user_mail,user_pass) values ('${name}','${email}','${pass}')`;
        conn.query(query, function (error, results, fields){
            if(error) return console.log(error);
            return res.send(results);
        });
    })

}