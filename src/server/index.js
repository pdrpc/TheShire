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
    user.create_user(connection,router)
    user.login_user(connection,router)
    // user.create_user(connection,router)
    
  })

  
 
