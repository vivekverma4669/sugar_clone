const express= require('express');
const FaceRouter = express.Router();
const FaceModel = require('../Models/Face.Module');

FaceRouter.get("/",async (req,res)=>{
    try {
        const data = await FaceModel.find();
        res.send(data);

    } catch (error) {
      res.json({error :" error while fetching data"})
    }

});

module.exports= FaceRouter;
