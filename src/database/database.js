const mongoose = require("mongoose");

//  Para hacer más seguro el sitio y la base de datos utilizo el .env
const { NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DATABASE } = process.env;

const MONGODB_URI =
  `mongodb://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DATABASE}`;

mongoose
  .connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((db) => console.log("Database is connected"))
  .catch((err) => console.log(err));
