const express = require("express");
const app = express();
const router = express.Router();
const db = require('../models');

app.model = (model) => db[model];

router.post("/create_user",(req,res)=>{

});

module.exports = router;