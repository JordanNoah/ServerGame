const express = require("express");
const app = express();
const router = express.Router();
var cryptojs = require("crypto-js");
const db = require('../models');

app.model = (model) => db[model];

router.post("/create_user", async (req,res) => {
    var body = req.body;

    try {
        const [user, created] = await db.user.findOrCreate({
            where : { email: body.email },
            defaults:{
                names:body.name,
                bornDate:body.dateBorn,
                email:body.email,
                password:cryptojs.SHA256(body.password).toString(),
                gender:body.gender,
                country:body.country
            }
        });
        if(created){
            res.status(200).send({status:"created",idUser:user.user_id});
        }else{
            res.status(200).send({status:"existed",idUser:user.user_id});
        }
    } catch (error) {
        res.status(500).send({status:"server error",message:error.message});
    }
});

router.get('/get_user/:email/:password', async (req,res) => {
    try {
        const email = await db.user.findOne({where: { email:req.params.email}});
        if(email != null){
            const password = await db.user.findOne({where: { email:req.params.email, password:cryptojs.SHA256(req.params.password).toString()}});
            if (password != null){
                res.status(200).send({status:"existed",idUser:password.user_id});
            }else{
                res.status(200).send({status:"error-password"});
            }
        }else{
            res.status(200).send({status:"no-existed"});
        }
    } catch (error) {
        res.status(500).send({status:"server error",message:error.message});
    }
});

router.post('/create_game', async (req,res) => {
    try {
        const [game,created] = await db.game.findOrCreate({
            where:{name:req.body.name},
            defaults:{
                name:req.body.name,
                description:req.body.description
            }
        });
        if(created){
            res.status(200).send({status:"created",idGame:game.game_id});
        }else{
            res.status(200).send({status:"existed",idGame:game.game_id});
        }
    } catch (error) {
        res.status(500).send({status:"server error",message:error.message});
    }
});

router.post('/save_score', async (req,res) => {
    try {
        const created = await db.score.create({
            quantity:req.body.quantity,
            kind:req.body.kind,
            userId:req.body.userId,
            gameId:req.body.gameId
        });
        if(created){
            res.status(200).send({status:"created",idScore:created.score_id});
        }
    } catch (error) {
        res.status(500).send({status:"server error",message:error.message});
    }
});

module.exports = router;