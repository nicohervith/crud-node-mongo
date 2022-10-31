// Solo requiero el metodo config de dotenv
require('dotenv').config();

const app = require("./server/server");
require('./database/database');

app.listen(app.get("port"), () => {
  console.log("Server on port ", app.get("port"));
});
