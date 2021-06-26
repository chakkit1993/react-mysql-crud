const express = require('express');

const cors = require('cors');
const mysql = require('mysql');
const app = express();
var bodyparser = require('body-parser');


app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({     // to support URL-encoded bodies
    extended: true
  }));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'exam_test02'
  });

    db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('connect database succesfuly');
    }); 

    
 app.use("/api/v2/", require("./api_users"));


app.listen('3001' ,() =>{
    console.log('Server is running on port 3001');
});


