const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors());
const bodyParser = require('body-parser');
const port = 3000;
const mysql = require('mysql');
const  multipart  =  require('connect-multiparty');
const multer = require('multer');
var fileExtension = require('file-extension')

app.listen(8081, () => {
    console.log('CORS-enabled web server listening on port 8081')
})
  
var https = require('https');
const { query } = require('express');
https.createServer(app).listen(443);
const user = require('./usuarios');
const { off } = require('process');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'works' }));
app.use('/', router);
app.listen(port);

const connection = mysql.createConnection({
  host     : '127.0.0.1',
  port     : 3306,
  user     : 'root',
  password : '',
  database : 'lembretes'
});

connection.connect(function(err){
    if(err) return console.log(err);
    create_user(connection)
    user.login_user(connection,router)
    // user.create_user(connection,router)
    
  })

  function create_user(conn){
    router.post('/api/lembretes-user-create', (req, res) =>{
        console.log(req.body)
        var email = req.body.email
        var pass = req.body.senha
        var name = req.body.nome
        var nick = req.body.nick
        var  query = `insert into users(user_name,user_mail,user_pass,user_nick) values ('${name}','${email}','${pass}','${nick}')`;
        conn.query(query, function (error, results, fields){
            if(error) return console.log(error);
            return res.send(results);
        });
    })
  }
  
 