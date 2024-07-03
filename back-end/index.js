const express = require("express");
const app= express();
const {connection }= require('./config/db');
require('dotenv').config();
const EyeRouter = require("./Routes/Eye.route");
const LipRouter = require("./Routes/Lip.route");
const FaceRouter =require("./Routes/Face.route");
const PORT = process.env.PORT;
app.use(express.json());


(async()=>{
try {
     await connection;
     console.log('connected to data base');
}
catch (error) {
    console.log("error while trying to connect to db ");
}
})();


app.get('/', (req,res)=>{
    res.send("iam server for makeup api")
});


app.use('/lip',LipRouter);
app.use('/face',FaceRouter);
app.use('/eyes',EyeRouter);

app.listen(PORT || 8000,  async () => {
    console.log(`app running at port 3000`);
})