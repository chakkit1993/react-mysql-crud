const express = require("express");
const router = express.Router();
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'exam_test02'
  });


router.get("/users", (req, res) => {
    db.query("SELECT * FROM employee", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });


  router.post("/users", (req, res) => {
    const employee_id = req.body.employee_id;
    const name = req.body.name;
    const lastname = req.body.lastname;
    const age = req.body.age;

    //console.log(req.body);
   // res.send(req.body);
  
    db.query(
      "INSERT INTO employee (employee_id ,name , lastname , age) VALUES (?,?,?,?)",
      [employee_id ,name, lastname, age],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Values Inserted");
        }
      }
    );
  });


  router.get("/users", (req, res) => {
    db.query("SELECT * FROM employee", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  router.get("/users/:employee_id", (req, res) => {
    //res.send(req.params.employee_id);
    const employee_id = req.params.employee_id;
    db.query("SELECT * FROM employee  WHERE employee_id = ? ", [employee_id], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  router.put("/users/update/:employee_id", (req, res) => {
    const employee_id = req.body.employee_id;
    const name = req.body.name;
    const lastname = req.body.lastname;
    const age = req.body.age;
    //console.log(req.body);
    //res.send(req.body);

    db.query(
      "UPDATE employee SET name = ? ,lastname = ?, age = ? WHERE employee_id = ?",
      [name, lastname,age,employee_id],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });

  router.delete("/user/delete/:employee_id", (req, res) => {
    const id = req.params.employee_id;
    // console.log(req.params);
    db.query("DELETE FROM employee WHERE employee_id = ?", id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });



  
module.exports = router;
