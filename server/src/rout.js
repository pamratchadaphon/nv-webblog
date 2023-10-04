const UserController = require('./controller/UserController')
const UserAuthenController = require('./controller/UserAuthenController')
const isAuthenController = require('./authen/isAuthenController')

module.exports = (app) => {
    // get all user
    app.get('/users',isAuthenController,UserController.index)

    // create user
    app.post('/user',UserController.create)

    // edit user, suspend, active
    app.put('/user/:userId',UserController.put )

    // delete user
    app.delete('/user/:userId', UserController.remove)

    // get user by id
    app.get('/user/:userId', UserController.show)

    //login
    app.post('/login',UserAuthenController.login)


}