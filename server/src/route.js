const UserAuthenController = require("./controllers/UserAuthenController");
const UserController = require("./controllers/UserController");
const isAuthenController = require("./authen/isAuthenController");
const PhoneController = require("./controllers/PhoneController");

module.exports = (app) => {
  // get user by id
  app.get("/users", UserController.index, UserController.index);

  // create user
  app.post("/user", UserController.create);

  // edit user, suspend, active
  app.put("/user/:userId", UserController.put);

  // delete user
  app.delete("/user/:userId", UserController.delete);

  // get all user
  app.get("/user/:userId", UserController.show);

  // login
  app.post("/login", UserAuthenController.login);

  app.post("/phone", PhoneController.create);
  app.put("/phone/:phoneId", PhoneController.put);
  app.delete("/phone/:phoneId", PhoneController.remove);
  app.get("/phone/:phoneId", PhoneController.show);
  app.get("/phones", PhoneController.index);
};
