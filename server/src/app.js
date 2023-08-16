let express = require('express')
let bodyParser = require('body-parser')
const {sequelize} = require('./models')

const config = require('./config/config')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extends:true}))

require('./rout')(app)

app.get('/status', function (req, res ){
    res.send('Hello nodejs server 12345678')
})

app.get('/hello/:person', function (req,res){
    console.log('hello - '+ req.params.person);
    res.send('sey hello with '+req.params.person)
})

let port = process.env.PORT || config.port

sequelize.sync({force: false}).then(() => { 
    app.listen(port, function () {
        console.log('Server running on ' + port) 
    })
})