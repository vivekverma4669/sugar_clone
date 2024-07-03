const express= require('express');
const LipRouter = express.Router();
LipRouter.use(express.json());
const LipModel = require('../Models/Lip.Module');

LipRouter.get("/",async (req,res)=>{
    try {
        const data = await LipModel.find();
        res.send(data+"data" );
    } catch (error) {
      res.json({error :" error while fetching data"})
    }

});
module.exports= LipRouter;
