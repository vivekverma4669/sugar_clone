const express= require('express');
const EyeRouter = express.Router();
const EyeModel = require('../Models/Eye.Module');

EyeRouter.get("/",async (req,res)=>{
    try {
        const data = await EyeModel.find();
        res.send(data);

    } catch (error) {
      res.json({error :" error while fetching data"})
    }

});

module.exports= EyeRouter;
