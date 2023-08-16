let express = require('express')
let bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extends:true}))

app.get('/status', function (req, res ){
    res.send('Hello nodejs server 12345678')
})

app.get('/hello/:person', function (req,res){
    console.log('hello - '+ req.params.person);
    res.send('sey hello with '+req.params.person)
})

// get user by id
app.get('/user/:userId', function(req,res){
    res.send('ดูข้อมูลผู้ใช้งาน'+req.params.userId)
})

// get all user
app.get('/users', function(req,res){
    res.send('ดูข้อมูลผู้ใช้งาน')
})

// create user
app.post('/user/', function (req, res) { 
    res.send('สร้างผู้ใช้' + JSON.stringify(req.body))
})

// edit user
app.put('/user/:userId', function (req, res) { 
    res.send('แก้ไขข้อมูลผู้ใช้ ' + req.params.userId + ' : ' + JSON.stringify(req.body.name)) 
})

// delete user
app.delete('/user/:userId', function (req, res) { 
    res.send('ลบข้อมูลผู้ใช้:' + req.params.userId + ' : ' + JSON.stringify(req.body))
})

let port = 8081
app.listen(port,function(){
    console.log('server running on '+port);
})