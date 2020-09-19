const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./models");
const PORT = process.env.PORT || 3002

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const apiRoutes = require('./routes/index');

app.use('/api', apiRoutes);

db.sequelize.sync({
  // force: true
}).then(() => {
  app.listen(PORT, () => {
    console.log(`Escuchando el puerto *:${PORT}`);
  });
});