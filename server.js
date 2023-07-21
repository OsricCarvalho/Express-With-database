let Express = require("express")
let server = Express()
let MySql = require("mysql")

let db = MySql.createConnection({

    host:"localhost",
    user: "root",
    password: "root",
    database: "nbs2"
}
)


db.connect()
server.get("/show", function(req,res){

    db.query("select * from employees", function(err,result){

        console.log(result)
    
    })
    res.write("Hello")
    res.end()
})

server.listen(3000)
        
