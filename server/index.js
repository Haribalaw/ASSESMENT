var my = require("mysql");
const bodyparser = require("body-parser");
const express = require("express");
const cors = require("cors");
const upload = require("express-fileupload");
const { response } = require("express");


const app = express();

app.use(cors());

app.use(express.json()); 

app.use(bodyparser.json()); 

app.use(upload());


app.use(bodyparser.urlencoded({ extended: true }));

app.use(express.static('public'));



const con = my.createConnection({

    host:"localhost",
    user:"root",
    port:"3306",
    password:"Kgisl@123",
    database:"today"
})

con.connect((err,res)=>res?(console.log("Database Connected")):console.log(err));


app.post("/register",(request,response)=>{

    let name=request.body.name;
    let email=request.body.email;
    let dob=request.body.dob;
    let phone=request.body.number;
    let password=request.body.password;


con.query("insert into login(username,email,dob,name,password,phone) values (?,?,?,?,?,?))",[email,email,dob,name,password,phone],(err,res)=>{
            if(err){
                let x = {"status":"SigninError"};
                response.send(x);
            }
            else{
                let x = {"status":"Created"};
                response.send(x);
            }
        })
    }
)



app.post('/login',(request,response)=>{

    let us = request.body.username;
    let ps = request.body.password;

    let sql = `select * from signin where username=${us}`;

    c.query(sql,(err,res)=>{
        if(err){
            let s = {"status":"usernameerror"};
            response.send(s);
        }
        else if(res.length > 0){

            let us1 = res[0].username;
            let ps1 = res[0].password;

            if(us1 == us && ps1 == ps){
                let x = {"status":"Success"};
                response.send(x);
            }
            else{
                let x = {"status":"Invalid"};
                response.send(x);
            }
        }
        else{
            let s = {"status":"Invalid_Login"};
            response.send(s);
        }
    })

})

app.listen(5000);